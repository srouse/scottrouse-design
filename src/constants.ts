export const SCOTT_ROUSE_OG_WEBSITE = '7CKULoxRapxruVVhstelFa';
export const SCOTT_ROUSE_DEV_WEBSITE = '5yEhKGITpyUGlVxDYlwnKM';
export const SCOTT_ROUSE_DESIGN_WEBSITE = 'HqCeYXMFu4GyL36tfgKwG';
export const SCOTT_ROUSE_SYSTEM_WEBSITE = '54WtLpkgVfBGmH7jIBjoho';

export const SCOTT_ROUSE_OG_TAG = 'scottRouseOg';
export const SCOTT_ROUSE_DEV_TAG = 'scottRouseDev';
export const SCOTT_ROUSE_DESIGN_TAG = 'scottRouseDesign';
export const SCOTT_ROUSE_DESIGN_SYSTEM_TAG = 'scottRouseDesignSystem';

// This works client side as well...
if (typeof process !== 'undefined') {
    globalThis.CONTENTFUL_WEBSITE_TAG = process.env.CONTENTFUL_WEBSITE_TAG;
}

// Preview needs these vars...
export const PREVIEW_CONTENTFUL_SPACE = process.env.PUBLIC_CONTENTFUL_SPACE;
export const PREVIEW_CONTENTFUL_ENVIRONMENT = process.env.PUBLIC_CONTENTFUL_ENVIRONMENT;
