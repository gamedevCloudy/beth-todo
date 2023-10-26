import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";

const app = new Elysia()
  .use(html())
  .get('/', ({ html }) => {
    return html(
      <BaseHtml>
        <body class="flex h-screen w-full justify-center items-center">
          <button hx-post="/clicked" hx-swap="outerHTML">
            Click Me
          </button>
        </body>
      </BaseHtml>
    );
  })
  .post('/clicked', ()=><div class="text-blue-600">I am a div</div>)
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

const BaseHtml = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"></meta>
<meta name="viewport" content="width=device-width, inital-scale=1.0">

<title>the BETH stack</title>

<script src="https://unpkg.com/htmx.org@1.9.6"></script>
<script src="https://cdn.tailwindcss.com"></script>

</head>
${children}
</html>
`;
