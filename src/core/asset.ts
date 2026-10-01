import { readFileSync } from 'fs';

const dev = process.env.NODE_ENV === 'development';

// Read once per process in production; on every call in dev, where the CSS watcher rewrites files
const cached = <T>(fn: (path: string) => T) => {
  const cache = new Map<string, T>();
  return (path: string) => {
    if (dev) return fn(path);
    if (!cache.has(path)) cache.set(path, fn(path));
    return cache.get(path)!;
  };
};

const hashOf = cached((path) => Bun.hash(readFileSync(`public/${path}`)).toString(36).slice(0, 8));

// /static URL with a content hash, so nginx can cache it for a year and a deploy still busts it
export const asset = (path: string) => `/static/${path}?v=${hashOf(path)}`;

// The whole stylesheet is ~6KB gzipped, so inlining it beats a render-blocking request (which
// also delayed discovering the fonts). Base emits a <link> to this marker and pageRouter swaps
// it for the <style> after rendering, so the CSS skips html-minifier on every request.
export const INLINE_CSS_MARKER = '__inline_css__';
const css = cached((path) => readFileSync(`public/${path}`, 'utf8'));
export const inlineCss = (html: string) =>
  html.replace(new RegExp(`<link[^>]*${INLINE_CSS_MARKER}[^>]*>`), () => `<style>${css('styles.css')}</style>`);
