import { BaseController, html, renderEntry } from "scu-ssg";
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import { IWebsite } from "../../@types/generated/contentful";
import WebsiteModel, { getWebsite } from "../../models/WebsiteModel";

export default async function renderHtml(
  controller: BaseController,
  content: string,
  cacheBreak: string = `${Math.random()}`
) {

  // need website
  const website : IWebsite = getWebsite(controller);
  const headerHtml = await renderEntry(controller, website.fields.header);
  const footerHtml = await renderEntry(controller, website.fields.footer);

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
      --section-margin: 0 var( --sfr-spacing-3 );
    }
    [data-entry-type-id] {
      border: 1px solid pink;
    }
  </style>
  <body ${style({
        'font': 'type-text-50'
      })}>
      ${headerHtml}
      <div ${style({
        stack: true,
        width: 'spacing-col-12'
      })}>
        ${content}
      </div>
      ${footerHtml}
  </body>
</html>`;
}