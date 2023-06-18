import { BaseController, html, renderEntry } from "scu-ssg";
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import { IWebsite } from "../../@types/generated/contentful";
import WebsiteModel, { getWebsite } from "../../models/WebsiteModel";
import { javascript } from "./javascript";
import renderSimpleHtml from "./renderSimpleHtml";

export default async function renderHtml(
  controller: BaseController,
  content: string,
  cacheBreak: string = `${Math.random()}`
) {
  // need website
  const website : IWebsite = getWebsite(controller);
  const headerHtml = await renderEntry(controller, website.fields.header);
  const footerHtml = await renderEntry(controller, website.fields.footer);

  return renderSimpleHtml(
    controller,
    html`
      ${headerHtml}
      ${content}
      ${footerHtml}`,
    cacheBreak,
  );
}