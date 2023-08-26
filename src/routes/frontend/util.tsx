import Elysia, { ws } from 'elysia';
import path from 'path';
import fs from 'fs';
import { setup } from '@root';

const componentsPath = path.join(import.meta.dir, '..', '..', 'components');

export const util = (app: Elysia) => app
    .use(setup)
    .post('/component/:name', async ({ html, body, params, set }) => {
      if (!fs.existsSync(`${componentsPath}/${params.name}.tsx`)) {
        set.status = 404;
        return 'Not Found'
      }
      const component: { [key: string]: (...params: any[]) => string } = await import(`${componentsPath}/${params.name}.tsx`);
      return Object.values(component)[0](body);
    })