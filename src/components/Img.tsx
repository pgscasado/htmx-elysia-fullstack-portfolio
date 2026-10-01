import render from '@core/render';
import type { Component } from '@root/types/component';
import placeholders from '@components/util/lqip.json';
import { asset } from '@core/asset';

// placeholders are keyed by the plain /static path; the browser gets a content-hashed URL
const versioned = (src: string) => asset(src.replace(/^\/static\//, ''));

// 6x6 PNG (see scripts/lqip.ts) stretched and gaussian-blurred inside an SVG. The alpha
// table snaps the blur's own faded edges back to opaque, then a feathered rect mask fades
// the whole thing out towards the borders so it melts into the page instead of ending in
// a hard rectangle
export const lqip = (src: string) => {
  const png = (placeholders as Record<string, string>)[src];
  if (!png) return undefined;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6" preserveAspectRatio="none"><filter id="b" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation=".8"/><feComponentTransfer><feFuncA type="discrete" tableValues="1 1"/></feComponentTransfer></filter><filter id="f" x="-1" y="-1" width="3" height="3"><feGaussianBlur stdDeviation=".35"/></filter><mask id="m"><rect x=".7" y=".7" width="4.6" height="4.6" fill="#fff" filter="url(#f)"/></mask><g mask="url(#m)"><image width="6" height="6" filter="url(#b)" href="data:image/png;base64,${png}"/></g></svg>`;
  return `--lqip:url(data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')})`;
};

// Shows the blurred placeholder until the real image loads, then fades it in (see .lqip in
// input.css). `class` goes on the <img>, so borders/rounding only appear with the real image
export const Img: Component<{ src: string, alt: string, width: string, height: string, class?: string }> = ({ src, alt, width, height, class: classes }) => (
  <span class='lqip' style={lqip(src)}>
    <img src={versioned(src)} alt={alt} width={width} height={height} loading='lazy' decoding='async' {...(classes ? { class: classes } : {})} onload="this.parentNode.classList.add('loaded')"/>
  </span>
);

// Same for an autoplaying, looping clip. Revealed on canplaythrough rather than the first
// frame, so it doesn't start playing while still buffering; no poster, since the placeholder
// already covers that and a poster would just paint in top-to-bottom over it
export const Video: Component<{ src: string, label: string, width: string, height: string, class?: string }> = ({ src, label, width, height, class: classes }) => (
  <span class='lqip' style={lqip(src)}>
    <video src={versioned(src)} aria-label={label} width={width} height={height} style={`aspect-ratio:${width}/${height}`} autoplay loop muted playsinline preload='auto' {...(classes ? { class: classes } : {})} oncanplaythrough="this.parentNode.classList.add('loaded')"></video>
  </span>
);
