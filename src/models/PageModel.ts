import { BaseContentfulAPIModel } from "scu-ssg";
import { ContentTypeId } from "../types";

export default class PageModel extends BaseContentfulAPIModel {
  contentTypeId = ContentTypeId.page;
}