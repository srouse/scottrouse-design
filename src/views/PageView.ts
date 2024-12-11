import { Entry } from "contentful";
import { BaseController, BaseView } from "scu-ssg";
import { IPage } from '../@types/generated/contentful';
import renderHtml from "./templates/renderHtml";
import renderLayouts from "../utils/renderLayouts";
import PortfolioView from "./PortfolioView";

export default class PageView extends BaseView {

  async renderContent(
    entry: Entry<unknown> | null | undefined,
    controller: BaseController
  ): Promise<string> {
    const page = entry as unknown as IPage;

    const sectionHtml = await renderLayouts(controller, page.fields.sections);

    if (page.fields.context === 'portfolio') {
      return await PortfolioView(page, controller);
    }

    return renderHtml(
      controller,
      sectionHtml.join(''),
    );
  }

}