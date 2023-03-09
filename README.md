# Summit Tokenizer
<!-- 
  Do not edit directly, built using contentful-readme-generator.
  Content details in Build Information below.
-->

- [Description](#description)
- [How To Install](#how-to-install)
- [Build Information](#build-information)

---


__Title__: Summit Tokenizer

<span class="badge-npmversion"><a href="https://npmjs.org/package/scu-tokenizer" title="View this project on NPM"><img src="https://img.shields.io/npm/v/scu-tokenizer.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/scu-tokenizer" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/scu-tokenizer.svg" alt="NPM downloads" /></a></span>

__Project Abbreviation__: scu-tokenizer

__Developer Emails__: scott.rouse@summitcreditunion.com

__NPM URL__: https://www.npmjs.com/package/scu-tokenizer

__Repo URL__: https://bitbucket.org/rouse_scu/scu-tokenizer/admin

## Description

scu-tokenizer is a tokenizer using a Figma file as the source 
of truth for all tokens with an eye towards enabling more powerful token transformations.

## How To Install

Config file example:
```
var builds = require('scu-tokenizer/dist/index.js');// BUILD FROM NPM PACKAGE
require('dotenv').config();
const paths = require('../paths');
const log = require('../builds/utils/building/logging').createLogger('Tokens');
const globalCss = require('../cssComponents/cssComps/global.scss.cjs.js');

async function buildTokens() {
  const distPath = paths.getDist();
  return builds.buildNode({
    figmaFileIDs: process.env.DSYS_COMPONENTS_ENGINE_FIGMA_FILE_ID,
    figmaToken: process.env.DSYS_COMPONENTS_ENGINE_FIGMA_ACCESS_TOKEN,
    buildPath: `${distPath}/scu/reference/tokens/`,
    fontConfigs: [
      {
        path: __dirname + "/fonts/Proxima/proximanova_semibold_macroman/proximanova-semibold-webfont.woff",
        name: "Proxima Nova",
        weight: 600,
        style: "normal",
      }
    ],
    prefix: 'scu',
    hooks: {
      preCssHook: () => {
        return globalCss.css();
      }
    }
  }).then(() => {
    log.end();
    return true;
  });
}

exports.buildTokens = buildTokens;
```

## Build Information

*Dynamically built using contentful-readme-generator. Do not edit directly.*

*__updated__: 3/9/2023, 10:47:56 AM*

*__built__: 3/9/2023, 3:19:11 PM*

*__space__: 7gg213tt004u*

*__environment__: sandbox-readme*

*__entity id__: 57porcJFEFtM8Ez24WKbQT*

[Edit Contentful Entry](https://app.contentful.com/spaces/7gg213tt004u/environments/sandbox-readme/entries/57porcJFEFtM8Ez24WKbQT)