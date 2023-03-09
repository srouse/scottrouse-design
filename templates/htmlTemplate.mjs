

export default function renderHTML(content, css) {
  return `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <style>
      ${css}
    </style>
  </head>
  <body class="markdown-body">
      <div class="markdown-content">
        ${content}
      </div>
  </body>
</html>`;
}