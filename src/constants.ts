export const SCOTT_ROUSE_OG_WEBSITE = '7CKULoxRapxruVVhstelFa';
export const SCOTT_ROUSE_DEV_WEBSITE = '5yEhKGITpyUGlVxDYlwnKM';

export const SCOTT_ROUSE_OG_TAG = 'websiteScottRouseOg';
export const SCOTT_ROUSE_DEV_TAG = 'websiteScottRouseDev';
export const SCOTT_ROUSE_DESIGN_TAG = 'websiteScottRouseDesign';
export const SCOTT_ROUSE_DESIGN_SYSTEM_TAG = 'websiteScottRouseDesignSystem';

// This works client side as well...
if (typeof process !== 'undefined') {
    globalThis.CONTENTFUL_WEBSITE_TAG = process.env.CONTENTFUL_WEBSITE_TAG;
}

// Preview needs these vars...
export const PREVIEW_CONTENTFUL_SPACE = process.env.PUBLIC_CONTENTFUL_SPACE;
export const PREVIEW_CONTENTFUL_ENVIRONMENT = process.env.PUBLIC_CONTENTFUL_SPACE;
