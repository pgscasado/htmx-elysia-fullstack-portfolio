# htmx-elysia-fullstack-portfolio

Pedro Casado's personal portfolio. It's also a deliberate showoff piece: server-rendered
HTML with a JSX-like DX, but without shipping a frontend framework. Keep that constraint
in mind for every change — the pitch (see `src/pages/Projects.tsx`, project #1) is "you get
JSX ergonomics, but the JS payload is just HTMX's ~50KB, not a multi-megabyte bundle."

## Stack

- **Runtime**: Bun
- **Backend/router**: Elysia.js
- **Templating**: `typed-html`, driven through a custom JSX pragma — NOT React. No React,
  no client-side framework, no bundler for app code.
- **Client interactivity**: HTMX only (`hx-get`, `hx-boost`, `hx-swap`, etc.)
- **Styles**: Tailwind CSS (+ DaisyUI installed but not yet used)
- **Content language**: page copy is written in Brazilian Portuguese (pt-BR) — match this
  when writing/editing page content unless told otherwise.

## Architecture

- `src/core/render.ts` — the JSX pragma (`render`). Wraps `typed-html`'s `createElement`
  and runs every render through `html-minifier`. `renderFragment` is the fragment pragma.
  Any `.tsx` file rendering JSX needs `import render[, { renderFragment }] from '@core/render'`
  even if `render` looks unused — it's the JSX factory, wired via `tsconfig.json`
  (`jsxFactory`/`jsxFragmentFactory`).
- `src/pages/index.tsx` — exports `Base` (the `<html>` shell: head tags, htmx/uicons/
  fontawesome/devicon links, dark-mode class) and `pageRouter` (the Elysia GET routes for
  each page).
- `src/pages/*.tsx` — one file per route (`Main` = `/`, `About`, `Projects`, `Contact`).
  Each wraps its content in `<Base>` with `<Navbar active='...'/>` and `<Footer currentPage='...'/>`.
- `src/components/*.tsx` — shared components (`Navbar`, `Footer`, `Highlight`, `IconStack`),
  typed via `Component<T>` from `src/types/component.ts` (just `(props: T) => string`).
- `src/components/util/{brands,techs}.ts` — icon-name → CSS-class maps consumed by `IconStack`.
- `src/routes/frontend/util.tsx` — `POST /frontend/component/:name` dynamically imports a
  component by filename and server-renders it from POSTed body params, for htmx-driven
  partial swaps without a dedicated route per component.
- Path aliases (kept in sync between `tsconfig.json` and `jsconfig.json`): `@core`,
  `@components`, `@pages`, `@routes`, `@root`, `@types` → `src/*`.

## Conventions / gotchas

- New client behavior should be HTMX attributes, not inline `<script>` blocks, except where
  the codebase already does that sparingly (e.g. the theme toggle in `Navbar.tsx`).
- Tailwind's `content` globs in `tailwind.config.js` are only
  `./src/components/*.tsx` and `./src/pages/*.tsx` — if you add new component/page
  subdirectories, update that glob or new classes won't be generated. Run
  `bun run update-css` (or `update-css:dev` while developing) after class changes.
- Don't introduce a bundler, a client-side framework, or heavy JS deps — that undercuts the
  whole point of the project. Weigh any new dependency against payload size.
- `Dockerfile`'s header comment says "Northflank" — that's stale; actual deploy target is
  **Fly.io** via `.github/workflows/fly.yml` (push to `master` → `flyctl deploy --remote-only`,
  needs `FLY_API_TOKEN` secret), app name `pedrocasado`, region `gru` (see `fly.toml`).

## Commands

- `bun run dev` — dev server with CSS watch + live reload
- `bun run update-css` — one-off Tailwind build
