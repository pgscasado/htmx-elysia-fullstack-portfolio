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

export const Base = ({ children }: { children?: string[] }) => `
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8' />
  <title>Elysia</title>
  <meta name='viewport' content='width=device-width, initial-scale=1.0' />
  <link rel='stylesheet' href='/static/styles.css' />
  <link rel='stylesheet' href='/static/uicons/css/uicons-brands.css' />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
  <script src='static/htmx.min.js'></script>
  <script src="static/htmx.json-enc.js"></script>
  ${process.env.NODE_ENV === 'development' ? '<script src="static/frontend-dev-reload.js"></script>' : ''}
</head>
<body class='h-full'>
${children?.join('')}
</body>
`;