import Elysia, { ws } from 'elysia';
import html from '@elysiajs/html';
import { staticPlugin } from '@elysiajs/static';
import render from '@core/render';
import { pageRouter } from '@pages';
import { frontend } from '@routes/frontend';
import { refreshCache, startAutoRefresh } from '@i18n';

export const setup = (app: Elysia) => app
  .use(html());

// Load translations from the DB into memory before accepting requests, so page
// renders never wait on a DB round-trip. Falls back to the bundled dictionaries
// if the DB is unreachable at boot.
await refreshCache();
startAutoRefresh();

const app = new Elysia()
  // serve static files
  .use(staticPlugin({ prefix: '/static' }))
  // use Elysia.js HTML sender
  .use(setup)
  .use(ws())
  .ws('/dev-reload', {
    message(ws, message) {
      ws.send('alive');
    }
  })
  .use(pageRouter)
  .use(frontend)
  .listen({ hostname: '0.0.0.0', port: Number(process.env.PORT) || 3000 });

console.log(
  `🦊 Elysia is running at http://${`localhost`}:${app.server?.port}`
);

