import { BaseContentfulAPIModel, BaseController } from "scu-ssg";
import { ContentTypeId } from "../types";
import { IWebsite } from "../@types/generated/contentful";
import {
  CONTENTFUL_WEBSITE_TAG,
  SCOTT_ROUSE_DESIGN_SYSTEM_TAG,
  SCOTT_ROUSE_DESIGN_TAG,
  SCOTT_ROUSE_DESIGN_WEBSITE,
  SCOTT_ROUSE_DEV_TAG,
  SCOTT_ROUSE_DEV_WEBSITE,
  SCOTT_ROUSE_OG_WEBSITE,
  SCOTT_ROUSE_SYSTEM_WEBSITE
} from "../constants";

export default class WebsiteModel extends BaseContentfulAPIModel {
  contentTypeId = ContentTypeId.website;

  requiredEntities = [
    SCOTT_ROUSE_OG_WEBSITE,
    SCOTT_ROUSE_DEV_WEBSITE,
    SCOTT_ROUSE_DESIGN_WEBSITE,
    SCOTT_ROUSE_SYSTEM_WEBSITE
  ];
}

export function getWebsite(controller: BaseController): IWebsite {
  console.log('CONTENTFUL_WEBSITE_TAG', CONTENTFUL_WEBSITE_TAG);
  if (CONTENTFUL_WEBSITE_TAG === SCOTT_ROUSE_DEV_TAG) {
    return controller.state.getEntry(SCOTT_ROUSE_DEV_WEBSITE) as unknown as IWebsite; 
  }
  if (CONTENTFUL_WEBSITE_TAG === SCOTT_ROUSE_DESIGN_TAG) {
    return controller.state.getEntry(SCOTT_ROUSE_DESIGN_WEBSITE) as unknown as IWebsite; 
  }
  if (CONTENTFUL_WEBSITE_TAG === SCOTT_ROUSE_DESIGN_SYSTEM_TAG) {
    return controller.state.getEntry(SCOTT_ROUSE_SYSTEM_WEBSITE) as unknown as IWebsite; 
  }
  return controller.state.getEntry(SCOTT_ROUSE_OG_WEBSITE) as unknown as IWebsite;
}