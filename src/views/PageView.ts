import { Entry } from "contentful";
import { BaseController, BaseView, html, renderEntry } from "scu-ssg";
import { IPage, ISection } from '../@types/generated/contentful';
import renderHtml from "./templates/renderHtml";
import renderLayouts from "../utils/renderLayouts";

export default class PageView extends BaseView {

  async renderContent(
    entry: Entry<unknown> | null | undefined,
    controller: BaseController
  ): Promise<string> {
    const page = entry as unknown as IPage;

    const sectionHtml = await renderLayouts(controller, page.fields.sections);

    return renderHtml(
      controller,
      sectionHtml.join(''),
    );
  }

}