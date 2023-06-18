import { Entry } from "contentful";
import { BaseController, BaseView, html } from "scu-ssg";
import { ISection } from '../@types/generated/contentful';
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import { SFRColorValue } from "@srouse/-scottrouse-design-system/transformations/fds-web/css-vars";
import renderLayouts from "../utils/renderLayouts";
import renderOutputHtml from "../utils/renderOutputHtml";
import Controller from "../Controller";
import Header from "./components/Header";

export default class SectionView extends BaseView {

  async renderContent(
    entry: Entry<unknown> | null | undefined,
    controller: BaseController
  ): Promise<string> {
    const section = entry as unknown as ISection;

    let backgroundColor: SFRColorValue = 'color-grey-100';
    let inverse: boolean = false;
    const bgColor = section.fields.backgroundColor;
    if (bgColor !== 'default') {
      switch (bgColor) {
        case 'primary':
          backgroundColor = 'color-primary';
          inverse = true;
          break;
        case 'primary-light':
          backgroundColor = 'color-primary-90';
          break;
        case 'secondary':
          backgroundColor = 'color-secondary';
          inverse = true;
          break;
        case 'secondary-light':
          backgroundColor = 'color-secondary-90';
          break;
      }
    }

    const localController = (controller as Controller);
    const origInverse = localController.renderState.inverse;
    localController.renderState.inverse = inverse;
    const children = await renderLayouts(controller, section.fields.views);
    localController.renderState.inverse = origInverse;

    let textColor: SFRColorValue = 'color-grey-00';
    if (inverse === true) {
      textColor = 'color-grey-100'
    }

    let maxWidth = 'var( --page-max-width )';
    if (section.fields.maxWidth) {
      maxWidth = `${section.fields.maxWidth}px`;
    }

    return renderOutputHtml(html`
      <style>
        [data-entry-id="${section.sys.id}"] .section-body > * {
          margin-bottom: var( --sfr-spacing-2 );
        }
      </style>
      <div
        data-entry-type-id="${section.sys.contentType.sys.id}"
        data-entry-id="${section.sys.id}"
        id="${section.fields.anchor}"
        ${style({
          stack: true,
          width: 'spacing-col-12',
          paddingHeight: 'spacing-8',
          backgroundColor
        }, {
          paddingLeft: 'var( --section-margin )',
          paddingRight: 'var( --section-margin )',
        })}>
        <div
          class="section-body"
          ${style({
            stack: true,
          }, {
            maxWidth,
            margin: '0 auto',
          })}>
          ${section.fields.title ? html`
            ${Header(
              section.fields.title, 2,
              {
                color: textColor,
                font: 'type-text-bold-60',
              },
              {
                textAlign: section.fields.alignment === 'center' ? 'center' :
                  section.fields.alignment === 'left' ? 'left' : 'right'
              }
            )}
          `: ''}
          ${children.join('')}
        </div>
      </div>`,
      section,
      controller
    );
  }

}