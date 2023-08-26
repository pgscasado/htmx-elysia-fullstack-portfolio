import Elysia from 'elysia';
import { util } from '@routes/frontend/util';

export const frontend = (app: Elysia) => app.group('/frontend', (router) =>
  router
    .use(util)
);