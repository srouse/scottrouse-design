import { BaseContentfulAPIModel, BaseController } from "scu-ssg";
import { ContentTypeId } from "../types";
import { IWebsite } from "../@types/generated/contentful";


export const websiteId = '7CKULoxRapxruVVhstelFa';

export default class WebsiteModel extends BaseContentfulAPIModel {
  contentTypeId = ContentTypeId.website;

  requiredEntities = [
    websiteId,
  ];
}

export function getWebsite(controller: BaseController): IWebsite {
  return controller.state.getEntry(websiteId) as unknown as IWebsite;
}