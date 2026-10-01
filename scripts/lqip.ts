// Generates the 6x6 low-quality placeholders (LQIP) shown, blurred, while an image or video
// loads (videos use their first frame).
// Needs ffmpeg on PATH. Output is committed, so the server never needs ffmpeg.
//   bun run lqip
import { Glob } from 'bun';

const SIZE = 6;

// drop ancillary chunks (ffmpeg adds pHYs); every byte here ends up inline in the HTML
const stripPng = (png: Buffer) => {
  const keep = [png.subarray(0, 8)];
  for (let i = 8; i < png.length;) {
    const end = i + 12 + png.readUInt32BE(i);
    if (['IHDR', 'PLTE', 'IDAT', 'IEND'].includes(png.toString('latin1', i + 4, i + 8))) keep.push(png.subarray(i, end));
    i = end;
  }
  return Buffer.concat(keep);
};

const out: Record<string, string> = {};

for await (const file of new Glob('projects/**/*.{png,jpg,jpeg,gif,webp,mp4,webm}').scan('public')) {
  const path = file.split(String.fromCharCode(92)).join('/');
  const proc = Bun.spawnSync([
    'ffmpeg', '-v', 'error', '-i', `public/${path}`, '-frames:v', '1',
    '-vf', `scale=${SIZE}:${SIZE}:flags=area,format=rgb24`,
    '-f', 'image2pipe', '-c:v', 'png', '-',
  ]);
  if (!proc.success) throw new Error(`ffmpeg failed on ${path}: ${proc.stderr.toString()}`);
  out[`/static/${path}`] = stripPng(proc.stdout).toString('base64');
}

const sorted = Object.fromEntries(Object.entries(out).sort(([a], [b]) => a.localeCompare(b)));
await Bun.write('src/components/util/lqip.json', JSON.stringify(sorted, null, 2) + '\n');
console.log(`wrote ${Object.keys(sorted).length} placeholders`);
