import type * as elements from 'typed-html';
import render from '@core/render';
import Main from '@pages/Main';
import About from '@pages/About';
import Elysia from 'elysia';
import { setup } from '@root';
import Projects from '@pages/Projects';
import Contact from '@pages/Contact';
import { LOCALES, localeToHtmlLang, localePath, type Locale, type PageId } from '@i18n';

const pages: { id: PageId; Page: (props: { lang: Locale }) => string }[] = [
  { id: '', Page: Main },
  { id: 'about', Page: About },
  { id: 'projects', Page: Projects },
  { id: 'contact', Page: Contact },
];

export const pageRouter = (app: Elysia) => {
  app.use(setup);
  for (const lang of LOCALES) {
    for (const { id, Page } of pages) {
      app.get(localePath(lang, id), ({ html }) => html(<Page lang={lang} />));
    }
  }
  return app;
};

export const Base = ({ children, class: classes, lang }: { children?: string[], class?: string, lang: Locale }) => `
<!DOCTYPE html>
<html lang='${localeToHtmlLang[lang]}' class='dark'>
<head>
  <meta charset='UTF-8' />
  <title>Pedro Casado</title>
  <meta name='viewport' content='width=device-width, initial-scale=1.0' />
  <link rel='stylesheet' href='/static/styles.css' />
  <link rel='stylesheet' href='/static/uicons/css/uicons-brands.css' />
  <link rel="icon" type="image/x-icon" href="/static/favicon.ico">
  <script src="https://kit.fontawesome.com/9b9fd56c88.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
  <script src='static/htmx.min.js'></script>
  <script src="static/htmx.json-enc.js"></script>
  ${process.env.NODE_ENV === 'development' ? '<script src="static/frontend-dev-reload.js"></script>' : ''}
</head>
<body class='h-full bg-base-light-500/10 text-base-dark dark:bg-base-dark dark:text-base-light${classes ? ` ${classes}`: ''} transition-colors duration-150'>
${children?.join('')}
</body>
`;
