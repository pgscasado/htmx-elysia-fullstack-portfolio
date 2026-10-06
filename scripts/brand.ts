// Renders social/brand images with the landing page's binary watermark (see
// src/components/BinaryWatermark.tsx): LinkedIn banner, WhatsApp/profile picture and favicons,
// in the dark and light themes. Same jittered grid, same Source Code Pro digits, same palette.
// Output goes to brand/ (nothing here is served unless you copy it into public/).
//   bun run brand            # fresh random layout
//   bun run brand 42         # reproducible layout from a seed
import { Resvg } from '@resvg/resvg-js';
import subsetFont from 'subset-font';
import { mkdirSync, writeFileSync, rmSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';

const seed = Number(process.argv[2] ?? Math.floor(Math.random() * 2 ** 31));
const OUT = 'brand';

// resvg doesn't read woff2, so convert the self-hosted fonts to TTF in a temp dir
const fontDir = join(tmpdir(), `brand-fonts-${process.pid}`);
mkdirSync(fontDir, { recursive: true });
const fontFiles = await Promise.all(
  [['source-code-pro-300', '01 abcdefghijklmnopqrstuvwxyz-.,'], ['roboto-slab-300', 'Pedro Casado']].map(async ([name, text]) => {
    const ttf = await subsetFont(Buffer.from(await Bun.file(`public/fonts/${name}.woff2`).arrayBuffer()), text, { targetFormat: 'truetype' });
    const path = join(fontDir, `${name}.ttf`);
    writeFileSync(path, ttf);
    return path;
  }),
);

// colors from tailwind.config.js / input.css, flattened to what the page actually shows
const themes = {
  // body: dark:bg-base-dark, digits: dark:text-base-dark-400/[.20], highlight: dark:text-primary
  dark: { bg: '#1e1014', digit: '#bf787c', digitOpacity: 0.2, text: '#eed5c2', accent: '#c46bae' },
  // body: bg-base-light-500/10 over white, digits: text-base-light-800/[.20], highlight: text-secondary
  light: { bg: '#faf0ec', digit: '#7d3a2f', digitOpacity: 0.2, text: '#1e1014', accent: '#d36fad' },
};
type Theme = typeof themes.dark;

// mulberry32, so a seed reproduces a layout
const rng = (s: number) => () => {
  s |= 0; s = (s + 0x6d2b79f5) | 0;
  let t = Math.imul(s ^ (s >>> 15), 1 | s);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

// avoid: [x, y, w, h] areas kept clear for text or the mark
type Grid = { cols: number, rows: number, density: number, sizes: number[], avoid?: number[][] };

// the BinaryWatermark algorithm, in pixels instead of percentages
const digits = (w: number, h: number, { cols, rows, density, sizes, avoid = [] }: Grid, theme: Theme, random: () => number) => {
  let out = '';
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (random() > density) continue;
      const size = sizes[Math.floor(random() * sizes.length)];
      // the page clips with overflow-hidden; here each digit's box stays inside the image
      const [dw, dh] = [size * 0.6, size * 1.2];
      const x = ((c + 0.15 + random() * 0.7) / cols) * (w - dw);
      const y = ((r + 0.15 + random() * 0.7) / rows) * (h - dh);
      const bit = random() < 0.5 ? '0' : '1';
      if (avoid.some(([ax, ay, aw, ah]) => x + dw > ax && x < ax + aw && y + dh > ay && y < ay + ah)) continue;
      // CSS positions the span's top-left corner; SVG text sits on the baseline
      out += `<text x="${x.toFixed(1)}" y="${(y + size).toFixed(1)}" font-size="${size}">${bit}</text>`;
    }
  }
  return `<g font-family="Source Code Pro" font-weight="300" fill="${theme.digit}" fill-opacity="${theme.digitOpacity}">${out}</g>`;
};

const svg = (w: number, h: number, body: string, theme: Theme, radius = 0) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">` +
  `<rect width="${w}" height="${h}" rx="${radius}" fill="${theme.bg}"/>${body}</svg>`;

const png = (markup: string, width?: number) =>
  new Resvg(markup, {
    font: { fontFiles, loadSystemFonts: false, defaultFontFamily: 'Source Code Pro' },
    ...(width ? { fitTo: { mode: 'width' as const, value: width } } : {}),
  }).render().asPng();

// "01" mark for favicons/avatars: digits thickened with a same-color stroke, since only the
// 300 weight is self-hosted and it vanishes at 16px
const mark = (size: number, theme: Theme) => {
  const fs = size * 0.5;
  return `<text x="${size / 2}" y="${size / 2 + fs * 0.36}" text-anchor="middle" font-family="Source Code Pro" font-size="${fs}" ` +
    `fill="${theme.accent}" stroke="${theme.accent}" stroke-width="${(fs * 0.07).toFixed(2)}" stroke-linejoin="round" letter-spacing="${-fs * 0.04}">01</text>`;
};

// ICO with PNG payloads (supported everywhere since Vista)
const ico = (images: { size: number, data: Uint8Array }[]) => {
  const header = Buffer.alloc(6 + 16 * images.length);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, data }, i) => {
    const e = 6 + 16 * i;
    header.writeUInt8(size % 256, e);
    header.writeUInt8(size % 256, e + 1);
    header.writeUInt16LE(1, e + 4);
    header.writeUInt16LE(32, e + 6);
    header.writeUInt32LE(data.length, e + 8);
    header.writeUInt32LE(offset, e + 12);
    offset += data.length;
  });
  return Buffer.concat([header, ...images.map(({ data }) => Buffer.from(data))]);
};

mkdirSync(OUT, { recursive: true });
const write = (name: string, data: Uint8Array) => {
  writeFileSync(join(OUT, name), data);
  console.log(`${name} (${data.length} bytes)`);
};

for (const [name, theme] of Object.entries(themes)) {
  // every image restarts the seed, so plain and titled/mark variants share one layout

  // LinkedIn banner, 1584x396. The profile photo covers the bottom-left on desktop and the
  // center on mobile, so the titled variant keeps its text on the right
  const [bw, bh] = [1584, 396];
  // The @4x copies are the same vector art rendered at 6336x1584, for high-DPI screens
  const banner: Grid = { cols: 16, rows: 4, density: 0.65, sizes: [26, 32, 40] };
  const plainBanner = svg(bw, bh, digits(bw, bh, banner, theme, rng(seed)), theme);
  const titledBanner = svg(bw, bh, digits(bw, bh, { ...banner, avoid: [[920, 90, 620, 230]] }, theme, rng(seed)) +
    `<g text-anchor="end">` +
    `<text x="${bw - 96}" y="186" font-family="Roboto Slab" font-weight="300" font-size="84" fill="${theme.text}">Pedro Casado</text>` +
    `<text x="${bw - 96}" y="246" font-family="Source Code Pro" font-size="34" fill="${theme.text}"><tspan fill="${theme.accent}">full-stack</tspan> developer</text>` +
    `<text x="${bw - 96}" y="300" font-family="Source Code Pro" font-size="24" fill="${theme.text}" fill-opacity="0.6">pedrocasado.com</text>` +
    `</g>`, theme);
  for (const [file, markup] of [['linkedin-banner', plainBanner], ['linkedin-banner-titled', titledBanner]]) {
    write(`${file}-${name}.png`, png(markup));
    write(`${file}-${name}@4x.png`, png(markup, bw * 4));
  }

  // WhatsApp crops to a circle and recommends 640x640. Plain watermark, plus the "01" mark
  const p = 640;
  const avatar: Grid = { cols: 6, rows: 6, density: 0.65, sizes: [30, 38, 48] };
  write(`whatsapp-${name}.png`, png(svg(p, p, digits(p, p, avatar, theme, rng(seed)), theme)));
  write(`whatsapp-mark-${name}.png`, png(svg(p, p, digits(p, p, { ...avatar, avoid: [[120, 190, 400, 280]] }, theme, rng(seed)) + mark(p, theme), theme)));

  // favicons: plain mark at tab sizes (digits behind it would just be noise), watermark from 180 up
  const faviconSvg = svg(64, 64, mark(64, theme), theme, 12);
  write(`favicon-${name}.ico`, ico([16, 32, 48].map(size => ({ size, data: png(faviconSvg, size) }))));
  for (const size of [180, 512]) {
    const bg = digits(size, size, { cols: 4, rows: 4, density: 0.7, sizes: [size / 9, size / 7], avoid: [[size * 0.19, size * 0.3, size * 0.62, size * 0.44]] }, theme, rng(seed));
    write(`icon-${size}-${name}.png`, png(svg(size, size, bg + mark(size, theme), theme)));
  }
}

rmSync(fontDir, { recursive: true, force: true });
console.log(`seed ${seed}`);
