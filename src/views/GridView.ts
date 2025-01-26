import { Entry } from "contentful";
import { BaseController, BaseView, html } from "scu-ssg";
import { IGridView, ISection } from '../@types/generated/contentful';
import renderLayouts from "../utils/renderLayouts";
import renderOutputHtml from "../utils/renderOutputHtml";
import Grid from "./components/Grid";

export default class GridView extends BaseView {

  async renderContent(
    entry: Entry<unknown> | null | undefined,
    controller: BaseController
  ): Promise<string> {
    const gridView = entry as unknown as IGridView;
    const children = await renderLayouts(controller, gridView.fields.views);
    const gridHtml = Grid(
      gridView.fields.minWidthHorizontal,
      children,
      undefined,
      gridView.sys.id,
      gridView.sys.contentType.sys.id
    );

    return renderOutputHtml(
      gridHtml,
      gridView,
      controller
    );
  }

}
