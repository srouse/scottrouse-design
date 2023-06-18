import { BaseController, html, renderEntry } from "scu-ssg";
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";

export default async function renderSimpleHtml(
  controller: BaseController,
  content: string,
  cacheBreak: string = `${Math.random()}`
) {

  return html`
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="https://scottrouse-design-system.netlify.app/transformations/fds-web/sfr.css?${cacheBreak}" />
  </head>
  <!-- Google tag (gtag.js) -->
  <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-GKPHMTEMSG"></script> -->
  <!-- <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-GKPHMTEMSG');
  </script> -->
  <style>
    html, body {
      margin: 0; padding: 0;
    }
    * {
      box-sizing: border-box;
    }
    :root {
      --page-max-width: 1090px;
      --section-margin: var( --sfr-spacing-5 );
    }
    /* [data-entry-type-id] {
      border: 1px solid pink;
    } */
    *:focus {
      box-shadow: var( --sfr-effect-focus-shadow );
      border-radius: 4px;
      outline: none;
    }
  </style>
  <body ${style({
        'font': 'type-text-50',
      })}>
      <div ${style({
        stack: true,
        width: 'spacing-col-12'
      })}>
        ${content}
      </div>
  </body>
</html>`;
}