

export function javascript() {
  return [
    "{",
      "const checkHash = () => {",
      "  let css = '';",
      "  if (window.location.hash) {",
      "     const cls = `nav-${window.location.hash.substring(1)}`;",
      "     css = `",
      "         .nav { border-bottom: none !important; }",
      "         .${cls} { border-bottom: 4px solid var( --sfr-color-grey-00 ) !important; }",
      "     `;",
      "  }",
      "  document.querySelector('#nav-css').innerHTML = css",
      "}",
      "window.addEventListener('load', () => { checkHash() });",
      "window.addEventListener('hashchange',() =>{ checkHash() });",
    "}",
  ].join('\n');
}