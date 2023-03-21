

export default function renderHTML(content, css) {
  const cacheBreak = new Date().getTime();
  const anchoredContent = content.replace(/href="([\w])/g, 'target="_example" href="$1');
  return `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="https://readme-design-system.netlify.app/transformations/fds-web/rds.css?${cacheBreak}" />
    <script src="https://readme-design-system.netlify.app/transformations/fds-web/icons/presentation-deck-widget-web-comp.js?${cacheBreak}"></script>
    <style>
      ${css}
    </style>
    <link rel="stylesheet" href="./assets/styles.css?${cacheBreak}" />
  </head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-TG3CZT9Y5S"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-TG3CZT9Y5S');
  </script>
  <body class="markdown-body">
      <div class="header">
        <div class="header-content">
          <rds-icon-presentation-deck-widget
            style="
              width: 28px;
              --color: var( --rds-color-grey-10 );
              margin-right: var( --rds-spacing-1-6 )">
          </rds-icon-presentation-deck-widget>
          <div style="font: var( --rds-type-text-8 );">
            Scott Rouse
          </div>
        </div>
      </div>
      <div class="markdown-content">
        ${anchoredContent}
      </div>
  </body>
</html>`;
}