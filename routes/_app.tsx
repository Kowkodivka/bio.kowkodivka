import { define } from "../utils.ts";

export default define.page(({ Component }) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" />
        <title>Kowkodivka</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});
