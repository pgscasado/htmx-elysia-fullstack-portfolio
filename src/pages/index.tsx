import type * as elements from 'typed-html';
import render from '@core/render';
import Main from '@pages/Main';
import About from '@pages/About';
import Elysia from 'elysia';
import { setup } from '@root';
import Projects from '@pages/Projects';
import Contact from '@pages/Contact';

export const pageRouter = (app: Elysia) => app
  .use(setup)
  .get('/', ({ html }) => html(<Main />))
  .get('/about', ({ html }) => html(<About />))
  .get('/projects', ({ html }) => html(<Projects />))
  .get('/contact', ({ html }) => html(<Contact />));

export const Base = ({ children, class: classes }: { children?: string[], class?: string }) => `
<!DOCTYPE html>
<html lang='pt-BR' class='dark'>
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