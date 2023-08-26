import Elysia, { ws } from 'elysia';
import html from '@elysiajs/html';
import { staticPlugin } from '@elysiajs/static';
import render from '@core/render';
import { pageRouter } from '@pages';
import { frontend } from '@routes/frontend';

export const setup = (app: Elysia) => app
  .use(html());

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
  .listen({ hostname: '127.0.0.1', port: 3000 });
    
console.log(
  `🦊 Elysia is running at http://${`localhost`}:${app.server?.port}`
);

