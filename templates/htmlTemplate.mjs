

export default function renderHTML(content, css) {
  return `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="https://readme-design-system.netlify.app/transformations/fds-web/rds.css" />
    <script src="https://readme-design-system.netlify.app/transformations/fds-web/icons/dam-widget-web-comp.js"></script>
    <style>
      ${css}
    </style>
    <style>

      html, body {
        font-size: 16px;
        margin: 0; padding: 0;
        background-color: var( --rds-color-primary-5 );
        color: var( --rds-color-grey-2 );
      }

      .markdown-body {
        font: var( --rds-type-text );
      }

      .markdown-body h2 {
        font: var( --rds-type-text-8 );
        margin-top: calc( var( --rds-spacing-2 ) + var( --rds-spacing-0-6 ));
        margin-bottom: var( --rds-spacing-1 );
        padding: 0;
      }

      .header {
        background-color: var( --color-header );
        color: var( --color-header-text );
        font-size: 1.4em;
        height: 140px;
        display: flex;
        justify-content: center;
      }

        .header-content {
          display: flex;
          justify-content: start;
          align-items: center;
          width: 100%;
        }

        .markdown-content,
        .header-content {
          padding-left: 80px;
          padding-right: 80px;
          max-width: 1000px;
          margin: 0 auto;
          font-size: 16px;
        }

        .markdown-content {
          padding-top: 40px;
          padding-bottom: 80px;
        }

        .markdown-content img {
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        }

        .markdown-body hr {
          height: 1px;
        }

      @media (max-width:768px) {
        .markdown-content,
        .header-content {
          padding-left: 40px;
          padding-right: 40px;
          font-size: 14px;
        }
        .markdown-content {
          padding-top: 30px;
          padding-bottom: 40px;
        }
      }
      @media (max-width:500px) {
        .markdown-content, .header-content {
          font-size: 12px;
        }
        .markdown-content {
          padding-top: 20px;
          padding-bottom: 30px;
        }
      }


      @media (prefers-color-scheme: dark) {
        .markdown-body {
          color-scheme: dark;
          --color-prettylights-syntax-comment: #8b949e;
          --color-prettylights-syntax-constant: #79c0ff;
          --color-prettylights-syntax-entity: #d2a8ff;
          --color-prettylights-syntax-storage-modifier-import: #c9d1d9;
          --color-prettylights-syntax-entity-tag: #7ee787;
          --color-prettylights-syntax-keyword: #ff7b72;
          --color-prettylights-syntax-string: #a5d6ff;
          --color-prettylights-syntax-variable: #ffa657;
          --color-prettylights-syntax-brackethighlighter-unmatched: #f85149;
          --color-prettylights-syntax-invalid-illegal-text: #f0f6fc;
          --color-prettylights-syntax-invalid-illegal-bg: #8e1519;
          --color-prettylights-syntax-carriage-return-text: #f0f6fc;
          --color-prettylights-syntax-carriage-return-bg: #b62324;
          --color-prettylights-syntax-string-regexp: #7ee787;
          --color-prettylights-syntax-markup-list: #f2cc60;
          --color-prettylights-syntax-markup-heading: #1f6feb;
          --color-prettylights-syntax-markup-italic: #c9d1d9;
          --color-prettylights-syntax-markup-bold: #c9d1d9;
          --color-prettylights-syntax-markup-deleted-text: #ffdcd7;
          --color-prettylights-syntax-markup-deleted-bg: #67060c;
          --color-prettylights-syntax-markup-inserted-text: #aff5b4;
          --color-prettylights-syntax-markup-inserted-bg: #033a16;
          --color-prettylights-syntax-markup-changed-text: #ffdfb6;
          --color-prettylights-syntax-markup-changed-bg: #5a1e02;
          --color-prettylights-syntax-markup-ignored-text: #c9d1d9;
          --color-prettylights-syntax-markup-ignored-bg: #1158c7;
          --color-prettylights-syntax-meta-diff-range: #d2a8ff;
          --color-prettylights-syntax-brackethighlighter-angle: #8b949e;
          --color-prettylights-syntax-sublimelinter-gutter-mark: #484f58;
          --color-prettylights-syntax-constant-other-reference-link: #a5d6ff;

          --color-fg-default: var( --rds-color-grey-9 );
          --color-fg-muted: var( --rds-color-grey-8 );
          --color-fg-subtle: var( --rds-color-grey-7 );
          --color-canvas-default: var( --rds-color-grey-0 );
          --color-canvas-subtle: var( --rds-color-grey-1 );
          --color-border-default: var( --rds-color-grey-2 );
          --color-border-muted: var( --rds-color-grey-1 );
          --color-neutral-muted: var( --rds-color-grey-5 );
          --color-accent-fg: var( --rds-color-primary-5 );
          --color-accent-emphasis: var( --rds-color-primary-5 );
          --color-attention-subtle: var( --rds-color-primary-1 );
          --color-danger-fg: var( --rds-color-primary-1 );

          --color-header: var( --rds-color-primary-5 );
          --color-header-text: var( --rds-color-grey-10 );
        }
      }
      
      @media (prefers-color-scheme: light) {
        .markdown-body {
          color-scheme: light;
          --color-prettylights-syntax-comment: #6e7781;
          --color-prettylights-syntax-constant: #0550ae;
          --color-prettylights-syntax-entity: #8250df;
          --color-prettylights-syntax-storage-modifier-import: #24292f;
          --color-prettylights-syntax-entity-tag: #116329;
          --color-prettylights-syntax-keyword: #cf222e;
          --color-prettylights-syntax-string: #0a3069;
          --color-prettylights-syntax-variable: #953800;
          --color-prettylights-syntax-brackethighlighter-unmatched: #82071e;
          --color-prettylights-syntax-invalid-illegal-text: #f6f8fa;
          --color-prettylights-syntax-invalid-illegal-bg: #82071e;
          --color-prettylights-syntax-carriage-return-text: #f6f8fa;
          --color-prettylights-syntax-carriage-return-bg: #cf222e;
          --color-prettylights-syntax-string-regexp: #116329;
          --color-prettylights-syntax-markup-list: #3b2300;
          --color-prettylights-syntax-markup-heading: #0550ae;
          --color-prettylights-syntax-markup-italic: #24292f;
          --color-prettylights-syntax-markup-bold: #24292f;
          --color-prettylights-syntax-markup-deleted-text: #82071e;
          --color-prettylights-syntax-markup-deleted-bg: #ffebe9;
          --color-prettylights-syntax-markup-inserted-text: #116329;
          --color-prettylights-syntax-markup-inserted-bg: #dafbe1;
          --color-prettylights-syntax-markup-changed-text: #953800;
          --color-prettylights-syntax-markup-changed-bg: #ffd8b5;
          --color-prettylights-syntax-markup-ignored-text: #eaeef2;
          --color-prettylights-syntax-markup-ignored-bg: #0550ae;
          --color-prettylights-syntax-meta-diff-range: #8250df;
          --color-prettylights-syntax-brackethighlighter-angle: #57606a;
          --color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;
          --color-prettylights-syntax-constant-other-reference-link: #0a3069;

          --color-fg-default: var( --rds-color-grey-2 );
          --color-fg-muted: var( --rds-color-grey-4 );
          --color-fg-subtle: var( --rds-color-grey-3 );
          --color-canvas-default: var( --rds-color-grey-10 );
          --color-canvas-subtle: var( --rds-color-grey-95 );
          --color-border-default: var( --rds-color-grey-9 );
          --color-border-muted: var( --rds-color-grey-9 );
          --color-neutral-muted: var( --rds-color-grey-5 );
          --color-accent-fg: var( --rds-color-primary-5 );
          --color-accent-emphasis: var( --rds-color-primary-5 );
          --color-attention-subtle: var( --rds-color-primary-9 );
          --color-danger-fg: var( --rds-color-primary-9 );

          --color-header: var( --rds-color-primary-5 );
          --color-header-text: var( --rds-color-grey-10 );
        }
      }
    </style>
  </head>
  <body class="markdown-body">
      <div class="header">
        <div class="header-content">
          <rds-icon-dam-widget
            style="
              width: 28px;
              --color: var( --rds-color-grey-10 );
              margin-right: var( --rds-spacing-1-6 )">
          </rds-icon-dam-widget>
          <div style="font: var( --rds-type-text-8 );">
            Scott Rouse
          </div>
        </div>
      </div>
      <div class="markdown-content">
        ${content}
      </div>
  </body>
</html>`;
}