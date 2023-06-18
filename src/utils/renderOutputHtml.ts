import { Entry } from "contentful";
import { BaseController } from "scu-ssg";
import renderSimpleHtml from "../views/templates/renderSimpleHtml";

export default async function renderOutputHtml(
  html: string,
  view: Entry<unknown> | null | undefined,
  controller: BaseController
) {
  if (view && controller.isRootEntry(view)) {
    return await renderSimpleHtml(controller, html);
  }
  return html;
}