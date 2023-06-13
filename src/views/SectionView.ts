import { Entry } from "contentful";
import { BaseController, BaseView, html } from "scu-ssg";
import { ISection } from '../@types/generated/contentful';
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import { SFRColorValue } from "@srouse/-scottrouse-design-system/transformations/fds-web/css-vars";
import renderLayouts from "../utils/renderLayouts";

export default class SectionView extends BaseView {

  async renderContent(
    entry: Entry<unknown> | null | undefined,
    controller: BaseController
  ): Promise<string> {
    const section = entry as unknown as ISection;

    let backgroundColor: SFRColorValue = 'color-grey-100';
    const bgColor = section.fields.backgroundColor;
    if (bgColor !== 'default') {
      switch (bgColor) {
        case 'primary':
          backgroundColor = 'color-primary';
          break;
        case 'primary-light':
          backgroundColor = 'color-primary-90';
          break;
        case 'secondary':
          backgroundColor = 'color-secondary';
          break;
        case 'secondary-light':
          backgroundColor = 'color-secondary-90';
          break;
      }
    }


    const children = await renderLayouts(controller, section.fields.views);

    return html`
        <div
          data-entry-type-id="section"
          ${style({
            flexH: true,
            alignmentCenter: true,
            width: 'spacing-col-12',
            paddingHeight: 'spacing-5',
            backgroundColor
          }, {
            justifyContent: 'center',// TEMP BUG FIX
          })}>
          <div ${style({
              stack: true,
            }, {
              maxWidth: 'var( --page-max-width )',
              margin: 'var( --section-margin )',
              width: '100%',
              alignItems: 'baseline',// TEMP BUG FIX
            })}>
            ${children.join('')}
          </div>
        </div>
    `;
  }

}