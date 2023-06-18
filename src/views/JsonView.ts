import { Entry } from "contentful";
import { BaseController, BaseView, Extensions, html } from "scu-ssg";

export default class JsonView extends BaseView {

  extension = Extensions.json;

  async renderContent(
    entry: Entry<unknown> | null | undefined,
    controller: BaseController
  ): Promise<string> {
    return JSON.stringify(entry, null, 2);
  }

}