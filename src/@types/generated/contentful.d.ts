// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IArticleFields {
  /** Entry Title */
  entryTitle: string;

  /** Title */
  title?: Document | undefined;

  /** Type */
  type?: "internal" | "external" | undefined;

  /** External Organization */
  externalOrganization?: "Figma" | "Contentful" | undefined;

  /** Summary */
  summary?: Document | undefined;

  /** Image */
  image?: IImage | undefined;

  /** External Article Link */
  externalArticleLink?: ILink | undefined;

  /** Content */
  content?: Document | undefined;
}

/** Long form content that can either be inside the website or reference an external article. */

export interface IArticle extends Entry<IArticleFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "article";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IButtonWcFields {
  /** Label */
  label: string;

  /** URL */
  url?: string | undefined;

  /** Web Component */
  webComponentConfig?: Record<string, any> | undefined;
}

/** Simple example of a Content Type connected to a web component */

export interface IButtonWc extends Entry<IButtonWcFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "buttonWc";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ICardViewFields {
  /** Entry Title */
  entryTitle: string;

  /** Button One Design */
  buttonOneDesign?:
    | "light"
    | "dark"
    | "primaryLight"
    | "primaryDark"
    | undefined;

  /** Button Two Design */
  buttonTwoDesign?:
    | "light"
    | "dark"
    | "primaryLight"
    | "primaryDark"
    | undefined;

  /** Content */
  content?: IContent | IProject | IArticle | undefined;
}

export interface ICardView extends Entry<ICardViewFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "cardView";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IContentFields {
  /** Entry Title */
  entryTitle: string;

  /** Title */
  title?: Document | undefined;

  /** Content */
  content?: Document | undefined;

  /** Image */
  image?: IImage | undefined;

  /** Links */
  links?: ILink[] | undefined;
}

/** Basic content building block. */

export interface IContent extends Entry<IContentFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "content";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IFooterFields {
  /** Entry Title */
  entryTitle: string;

  /** Located */
  located?: Document | undefined;

  /** Email */
  email?: string | undefined;

  /** LinkedIn Url */
  linkedInUrl?: ILink | undefined;

  /** Content */
  content?: Document | undefined;

  /** Main Navigation */
  mainNavigation?: INavigation | undefined;
}

/** Describes the information found in the footer of a website. */

export interface IFooter extends Entry<IFooterFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "footer";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IFormViewFields {
  /** Entry Title */
  entryTitle: string;

  /** Type */
  type?: "Contact" | undefined;
}

/** Placeholder for rendering a form of some kind. */

export interface IFormView extends Entry<IFormViewFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "formView";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IGridViewFields {
  /** Entry Title */
  entryTitle: string;

  /** Min Width Horizontal */
  minWidthHorizontal?: number | undefined;

  /** Views */
  views?:
    | (ISimpleView | IGridView | IImageView | IFormView | ICardView)[]
    | undefined;
}

export interface IGridView extends Entry<IGridViewFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "gridView";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IHeaderFields {
  /** Entry Title */
  entryTitle?: string | undefined;

  /** Title */
  title?: string | undefined;

  /** Main Navigation */
  mainNavigation?: INavigation | undefined;
}

/** Information about a website's header. */

export interface IHeader extends Entry<IHeaderFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "header";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IIdeaFields {
  /** Title */
  title: string;

  /** URL Slug */
  urlSlug: string;

  /** Date */
  date: string;

  /** Importance */
  importance: number;

  /** Content */
  content?: Document | undefined;

  /** Size Variations */
  sizeVariations?: "Third and Up" | "Half and Up" | "Full Only" | undefined;

  /** Image */
  image?: Asset | undefined;

  /** Image Size */
  imageSize?: "small" | "medium" | "large" | undefined;

  /** Image Placement */
  imagePlacement?: "Top" | "Bottom" | "Left" | "Right" | undefined;

  /** Image Scale Mode */
  imageScaleMode?: "fit" | "fill" | undefined;

  /** Related Ideas */
  relatedIdeas?: IIdea[] | undefined;
}

/** A singular idea that can be connected to other ideas */

export interface IIdea extends Entry<IIdeaFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "idea";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IIdeaPageFields {
  /** Title */
  title: string;

  /** date */
  date: string;

  /** URL Slug */
  urlSlug: string;

  /** Ideas */
  ideas?: IIdea[] | undefined;
}

/** A cluster of related ideas */

export interface IIdeaPage extends Entry<IIdeaPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "ideaPage";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IImageFields {
  /** Title */
  title?: string | undefined;

  /** Name */
  name?: string | undefined;

  /** Description */
  description?: string | undefined;

  /** Asset */
  asset?: Asset | undefined;

  /** Digital Asset Manager Id */
  digitalAssetManagerId?: string | undefined;

  /** Figma File Id */
  figmaFileId?: string | undefined;

  /** Figma Node Id */
  figmaNodeId?: string | undefined;

  /** Figma User */
  figmaUser?: string | undefined;
}

/** An asset wrapper that adds metadata to an image. It contains Figma DAM information. */

export interface IImage extends Entry<IImageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "image";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IImageViewFields {
  /** Entry Title */
  entryTitle: string;

  /** Max Width */
  maxWidth?: number | undefined;

  /** Image */
  image?: IImage | undefined;

  /** Link */
  link?: ILink | undefined;
}

export interface IImageView extends Entry<IImageViewFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "imageView";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ILinkFields {
  /** Entry Title */
  entryTitle: string;

  /** Title */
  title: string;

  /** Url */
  url?: IUrl | undefined;

  /** External Url */
  externalUrl?: string | undefined;

  /** Target */
  target?: string | undefined;

  /** Anchor */
  anchor?: string | undefined;
}

export interface ILink extends Entry<ILinkFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "link";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface INavigationFields {
  /** Entry Title */
  entryTitle: string;

  /** Link */
  link?: ILink | undefined;

  /** Children */
  children?: INavigation[] | undefined;
}

/** Structure for weaving together links into meaningful clusters */

export interface INavigation extends Entry<INavigationFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "navigation";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageFields {
  /** Entry Title */
  entryTitle: string;

  /** Title */
  title?: string | undefined;

  /** Url */
  url?: IUrl | undefined;

  /** Sections */
  sections?: ISection[] | undefined;
}

/** A root view of a website that presents other views and determines url. */

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "page";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IProjectFields {
  /** Entry Title */
  entryTitle: string;

  /** Title */
  title?: Document | undefined;

  /** Type */
  type?: "Figma Widget" | "Contentful App" | "Figma Plugin" | undefined;

  /** Content */
  content?: Document | undefined;

  /** Image */
  image?: IImage | undefined;

  /** Website */
  website?: ILink | undefined;

  /** App Profile */
  appProfile?: ILink | undefined;
}

/** Content that describes a work project. */

export interface IProject extends Entry<IProjectFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "project";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPromotionalBannerFields {
  /** Title */
  title?: string | undefined;

  /** Description */
  description?: Document | undefined;

  /** Image */
  image?: Asset | undefined;

  /** Web Component Config */
  webComponentConfig?: Record<string, any> | undefined;
}

export interface IPromotionalBanner extends Entry<IPromotionalBannerFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "promotionalBanner";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPromotionalBannerWcFields {
  /** Title */
  title: string;

  /** Description */
  description?: Document | undefined;

  /** Web Component Config */
  webComponentConfig?: Record<string, any> | undefined;
}

export interface IPromotionalBannerWc
  extends Entry<IPromotionalBannerWcFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "promotionalBannerWc";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IReadmeContentFields {
  /** Title */
  title?: string | undefined;

  /** Header */
  header?: string | undefined;

  /** Content */
  content?: string | undefined;

  /** Files */
  files?: Asset[] | undefined;

  /** Images */
  images?: IImage[] | undefined;
}

export interface IReadmeContent extends Entry<IReadmeContentFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "readmeContent";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IReadmePageFields {
  /** Title */
  title?: string | undefined;

  /** Name */
  name?: string | undefined;

  /** Content */
  content?:
    | (IImage | IReadmeContent | IReadmeProject | IReadmePage)[]
    | undefined;
}

export interface IReadmePage extends Entry<IReadmePageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "readmePage";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IReadmeProjectFields {
  /** Title */
  title?: string | undefined;

  /** Name */
  name?: string | undefined;

  /** Project Abbreviation */
  projectAbbreviation?: string | undefined;

  /** Table of Contents */
  tableOfContents?: boolean | undefined;

  /** Badges */
  badges?: Record<string, any> | undefined;

  /** Developer Emails */
  developerEmails?: string | undefined;

  /** NPM URL */
  npmUrl?: string | undefined;

  /** Repo URL */
  repoUrl?: string | undefined;

  /** Figma Widget URL */
  figmaWidgetUrl?: string | undefined;

  /** Production URL */
  productionUrl?: string | undefined;

  /** NonProduction URL */
  nonProductionUrl?: string | undefined;

  /** ## Description */
  description?: string | undefined;

  /** Content */
  content?:
    | (IImage | IReadmeContent | IReadmePage | IReadmeProject)[]
    | undefined;
}

export interface IReadmeProject extends Entry<IReadmeProjectFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "readmeProject";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISectionFields {
  /** Entry Title */
  entryTitle: string;

  /** Title */
  title?: string | undefined;

  /** Anchor */
  anchor?: string | undefined;

  /** Max Width */
  maxWidth?: number | undefined;

  /** Background Color */
  backgroundColor?:
    | "primary"
    | "primary-light"
    | "secondary"
    | "secondary-light"
    | "default"
    | undefined;

  /** Alignment */
  alignment?: "left" | "center" | "right" | undefined;

  /** Views */
  views?:
    | (ISimpleView | IGridView | IImageView | IFormView | ICardView)[]
    | undefined;
}

export interface ISection extends Entry<ISectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "section";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISimpleViewFields {
  /** Entry Title */
  entryTitle: string;

  /** Alignment */
  alignment?: "left" | "center" | "right" | undefined;

  /** Button One Design */
  buttonOneDesign?:
    | "light"
    | "dark"
    | "primaryLight"
    | "primaryDark"
    | undefined;

  /** Button Two Design */
  buttonTwoDesign?:
    | "light"
    | "dark"
    | "primaryLight"
    | "primaryDark"
    | undefined;

  /** Content */
  content?: IContent | undefined;
}

export interface ISimpleView extends Entry<ISimpleViewFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "simpleView";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IUrlFields {
  /** Entry Title */
  entryTitle: string;

  /** Slug */
  slug: string;
}

/** Contains basic slug information for an internal page. */

export interface IUrl extends Entry<IUrlFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "url";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IWebsiteFields {
  /** Entry Title */
  entryTitle: string;

  /** Title */
  title?: string | undefined;

  /** Header */
  header: IHeader;

  /** Footer */
  footer: IFooter;
}

/** Describes the basic information of a single website. */

export interface IWebsite extends Entry<IWebsiteFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "website";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "article"
  | "buttonWc"
  | "cardView"
  | "content"
  | "footer"
  | "formView"
  | "gridView"
  | "header"
  | "idea"
  | "ideaPage"
  | "image"
  | "imageView"
  | "link"
  | "navigation"
  | "page"
  | "project"
  | "promotionalBanner"
  | "promotionalBannerWc"
  | "readmeContent"
  | "readmePage"
  | "readmeProject"
  | "section"
  | "simpleView"
  | "url"
  | "website";

export type IEntry =
  | IArticle
  | IButtonWc
  | ICardView
  | IContent
  | IFooter
  | IFormView
  | IGridView
  | IHeader
  | IIdea
  | IIdeaPage
  | IImage
  | IImageView
  | ILink
  | INavigation
  | IPage
  | IProject
  | IPromotionalBanner
  | IPromotionalBannerWc
  | IReadmeContent
  | IReadmePage
  | IReadmeProject
  | ISection
  | ISimpleView
  | IUrl
  | IWebsite;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
