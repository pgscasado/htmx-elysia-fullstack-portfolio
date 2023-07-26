import * as thtml from 'typed-html';
import { minify } from 'html-minifier';

export * from 'typed-html';

export default function render(name: string | thtml.CustomElementHandler, attrs?: (thtml.Attributes & thtml.Children), ...contents: string[]) {
  return minify(thtml.createElement(name, attrs, ...contents), {
    html5: true,
    minifyCSS: true,
    minifyURLs: true,
    removeComments: true,
    minifyJS: false, // NO JS NEEDED
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true,
    removeAttributeQuotes: true,
  });
}