import * as thtml from 'typed-html';
import { minify } from 'html-minifier';

export * from 'typed-html';

export default function render(name: string | thtml.CustomElementHandler, attrs?: (thtml.Attributes & thtml.Children), ...contents: string[]) {
  return minify(thtml.createElement(name, attrs, ...contents), {
    html5: true,
    minifyCSS: true,
    minifyURLs: true,
    removeComments: true,
    removeTagWhitespace: true,
    minifyJS: false, // NO JS NEEDED
    collapseWhitespace: false,
    collapseInlineTagWhitespace: false,
    removeEmptyAttributes: true,
    removeAttributeQuotes: true,
    sortAttributes: true,
  }).replace(/\n</g, '<').replace(/>\n/g, '>');
}

export const renderFragment = (args: { children: string[] }) => args.children.join('\n');