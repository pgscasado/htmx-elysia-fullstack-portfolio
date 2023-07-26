import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import render from "@core/render"
import Main from './components/Main';

const app = new Elysia()
  // use Elysia.js HTML sender
  .use(html())
  // serve static files
  .use(staticPlugin({ prefix: "/static" }))
  // render main page
  .get("/", ({ html }) => html(<Main />))
  .post("/clicked", ({ html }) => html(
    <div>Hello!</div>
  ))
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${`localhost`}:${app.server?.port}`
);

