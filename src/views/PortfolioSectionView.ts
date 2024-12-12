import { Entry } from "contentful";
import { BaseController, BaseView, html } from "scu-ssg";
import { IPortfolioSection } from '../@types/generated/contentful';
import renderOutputHtml from "../utils/renderOutputHtml";
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import renderLayouts from "../utils/renderLayouts";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default class PortfolioSectionView extends BaseView {

  async renderContent(
    entry: Entry<unknown> | null | undefined,
    controller: BaseController
  ): Promise<string> {
    const portfolioSection = entry as unknown as IPortfolioSection;
    const portfolioEntries = await renderLayouts(controller, portfolioSection.fields.portfolioEntries);

    return renderOutputHtml(html`
      <style>
        [data-entry-id="${portfolioSection.sys.id}"] {
          margin-bottom: var( --sfr-spacing-2 );
        }
        [data-entry-id="${portfolioSection.sys.id}"] p {
          margin: 0px;
        }
        [data-entry-id="${portfolioSection.sys.id}"] p:not(:last-child) {
          margin-bottom:  var( --sfr-spacing-1 );
        }
      </style>
      <div
        data-entry-type-id="${portfolioSection.sys.contentType.sys.id}"
        data-entry-id="${portfolioSection.sys.id}"
        >
        <div
          ${style({
            flexV: true,
            marginTop: 'spacing-1',
            marginBottom: 'spacing-2'
          }, {
            // gap: 'var( --sfr-spacing-0-6 )'
          })}>
          <div
            ${style({
              font: 'type-text-semibold-90'
            })}>
            ${portfolioSection.fields.title}
          </div>
          ${portfolioSection.fields.description ? html`
              <div
                ${style({
                  font: 'type-text-30'
                })}>
                ${portfolioSection.fields.description ? documentToHtmlString(portfolioSection.fields.description) : ''}
              </div>
            ` : ''}
        </div>
        ${portfolioEntries.join('')}
      </div>`,
      portfolioSection,
      controller
    );
  }

}