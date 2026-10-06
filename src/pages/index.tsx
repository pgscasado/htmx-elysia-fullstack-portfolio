import type * as elements from 'typed-html';
import render from '@core/render';
import Main from '@pages/Main';
import About from '@pages/About';
import Elysia from 'elysia';
import { asset, inlineCss, INLINE_CSS_MARKER } from '@core/asset';
import { setup } from '@root';
import Projects from '@pages/Projects';
import Contact from '@pages/Contact';
import { ProjectList, ProjectDetails } from '@components/ProjectList';
import { findProject, isProjectTech } from '@components/util/projects';
import { LOCALES, localeToHtmlLang, localePath, type Locale, type PageId } from '@i18n';
import { seoHead, robotsTxt, sitemapXml } from '@components/util/seo';

// Projects has its own routes below
const pages: { id: PageId; Page: (props: { lang: Locale }) => string }[] = [
  { id: '', Page: Main },
  { id: 'about', Page: About },
  { id: 'contact', Page: Contact },
];

// htmx sends the id of the element it will swap as HX-Target: a request for the project list or
// a project's body gets just that fragment, anything else (a direct visit, nav swapping <body>,
// a history restore) gets the full page. Vary keeps caches from mixing the two up.
const fragmentFor = (headers: Record<string, string | null>, set: { headers: Record<string, string> }, target: string) => {
  set.headers['vary'] = 'HX-Target';
  return headers['hx-target'] === target;
};

// The theme lives in a cookie the toggle writes (components/Navbar.tsx), so the server renders
// <html> in the right mode and nothing flips after load. Dark is the default; only an explicit
// light choice drops the class. Every full page goes through here, like inlineCss.
const fullPage = (html: string, cookie: string | null | undefined) => {
  const page = inlineCss(html);
  return /(?:^|;\s*)theme=light(?:;|$)/.test(cookie ?? '') ? page.replace(/(<html[^>]*?)\s+class=["']?dark["']?/, '$1') : page;
};

export const pageRouter = (app: Elysia) => {
  app.use(setup);
  for (const lang of LOCALES) {
    for (const { id, Page } of pages) {
      app.get(localePath(lang, id), ({ html, request }) => html(fullPage(<Page lang={lang} />, request.headers.get('cookie'))));
    }
    const projects = localePath(lang, 'projects');
    app.get(projects, ({ html, query, headers, set, request }) => {
      const tech = isProjectTech(query.tech) ? query.tech : undefined;
      return fragmentFor(headers, set, 'project-list')
        ? html(<ProjectList lang={lang} tech={tech} />)
        : html(fullPage(<Projects lang={lang} tech={tech} />, request.headers.get('cookie')));
    });
    app.get(`${projects}/:slug`, ({ html, params, headers, set, request }) => {
      const project = findProject(params.slug);
      if (!project) {
        return new Response(fullPage(<Projects lang={lang} />, request.headers.get('cookie')), { status: 404, headers: { 'content-type': 'text/html' } });
      }
      return fragmentFor(headers, set, `p-${project.slug}-body`)
        ? html(<ProjectDetails lang={lang} project={project} />)
        : html(fullPage(<Projects lang={lang} open={project.slug} />, request.headers.get('cookie')));
    });
  }
  app.get('/robots.txt', () => new Response(robotsTxt(), { headers: { 'content-type': 'text/plain; charset=utf-8' } }));
  app.get('/sitemap.xml', () => new Response(sitemapXml(), { headers: { 'content-type': 'application/xml; charset=utf-8' } }));
  return app;
};

export const Base = ({ children, class: classes, lang, page }: { children?: string[], class?: string, lang: Locale, page: PageId }) => `
<!DOCTYPE html>
<html lang='${localeToHtmlLang[lang]}' class='dark'>
<head>
  <meta charset='UTF-8' />
  <meta name='viewport' content='width=device-width, initial-scale=1.0' />
  ${seoHead(lang, page)}
  <link rel='preload' href='/static/fonts/ibm-plex-serif-300.woff2' as='font' type='font/woff2' crossorigin />
  <link rel='preload' href='/static/fonts/ibm-plex-serif-500.woff2' as='font' type='font/woff2' crossorigin />
  <link rel='preload' href='/static/fonts/roboto-slab-300.woff2' as='font' type='font/woff2' crossorigin />
  <link rel='stylesheet' href='${INLINE_CSS_MARKER}' />
  <noscript><style>.lqip>img,.lqip>video{opacity:1}</style></noscript>
  <link rel='icon' href='${asset('favicon.ico')}' sizes='16x16 32x32 48x48' />
  <link rel='icon' type='image/png' href='${asset('icon-512.png')}' sizes='512x512' />
  <link rel='apple-touch-icon' href='${asset('apple-touch-icon.png')}' />
  <script src='${asset('htmx.min.js')}' defer></script>
  <script src='${asset('htmx.json-enc.js')}' defer></script>
  ${process.env.NODE_ENV === 'development' ? '<script src="/static/frontend-dev-reload.js" defer></script>' : ''}
</head>
<body class='h-full bg-base-light-500/10 text-base-dark dark:bg-base-dark dark:text-base-light${classes ? ` ${classes}`: ''} transition-colors'>
${children?.join('')}
</body>
`;
