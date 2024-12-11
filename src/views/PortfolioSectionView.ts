import { Entry } from "contentful";
import { BaseController, BaseView, html } from "scu-ssg";
import { IPortfolioSection } from '../@types/generated/contentful';
import renderOutputHtml from "../utils/renderOutputHtml";
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import renderLayouts from "../utils/renderLayouts";

export default class PortfolioSectionView extends BaseView {

  async renderContent(
    entry: Entry<unknown> | null | undefined,
    controller: BaseController
  ): Promise<string> {
    const portfolioSection = entry as unknown as IPortfolioSection;
    const portfolioEntries = await renderLayouts(controller, portfolioSection.fields.portfolioEntries);

    return renderOutputHtml(html`
      <style>
        [data-entry-id="${portfolioSection.sys.id}"] .section-body > * {
          margin-bottom: var( --sfr-spacing-2 );
        }
      </style>
      <div
        data-entry-type-id="${portfolioSection.sys.contentType.sys.id}"
        data-entry-id="${portfolioSection.sys.id}"
        >
        <div
          ${style({
            flexV: true,
            marginTop: 'spacing-3',
          }, {
            gap: 'var( --sfr-spacing-0-6 )'
          })}>
          <div
            ${style({
              font: 'type-text-semibold-70'
            })}>
            ${portfolioSection.fields.title}
          </div>
          <div
            ${style({
              font: 'type-text-50'
            })}>
            ${portfolioSection.fields.summary || ''}
          </div>
          ${portfolioEntries.join('')}
        </div>
      </div>`,
      portfolioSection,
      controller
    );
  }

}