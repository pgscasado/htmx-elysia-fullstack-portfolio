import type * as elements from "typed-html";
process.env.NODE_ENV = 'production'
export default ({ children, ...attributes }: elements.Children & elements.Attributes) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Elysia</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://unpkg.com/htmx.org@1.9.4"></script>
  <link rel="stylesheet" href="/static/styles.css" />
  ${process.env.NODE_ENV === 'development' ? `<script>
    document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></' + 'script>')
  </script>` : ''}
</head>
${children}
`;