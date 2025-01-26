import { BaseContentfulAPIModel, BaseController } from "scu-ssg";
import { ContentTypeId } from "../types";
import { IWebsite } from "../@types/generated/contentful";
import { SCOTT_ROUSE_DEV_TAG, SCOTT_ROUSE_DEV_WEBSITE, SCOTT_ROUSE_OG_WEBSITE } from "../constants";

export default class WebsiteModel extends BaseContentfulAPIModel {
  contentTypeId = ContentTypeId.website;

  requiredEntities = [
    SCOTT_ROUSE_OG_WEBSITE,
    SCOTT_ROUSE_DEV_WEBSITE
  ];
}

export function getWebsite(controller: BaseController): IWebsite {
  if (process.env.PUBLIC_CONTENTFUL_WEBSITE_TAG === SCOTT_ROUSE_DEV_TAG) {
    return controller.state.getEntry(SCOTT_ROUSE_DEV_WEBSITE) as unknown as IWebsite; 
  }
  return controller.state.getEntry(SCOTT_ROUSE_OG_WEBSITE) as unknown as IWebsite;
}