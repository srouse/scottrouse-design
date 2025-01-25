import { Entry } from "contentful";
import { BaseController, BaseView, html } from "scu-ssg";
import { ISection } from '../@types/generated/contentful';
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import { SFRColorValue, SFRSpacingValue, SFRTypeValue } from "@srouse/-scottrouse-design-system/transformations/fds-web/css-vars";
import renderLayouts from "../utils/renderLayouts";
import renderOutputHtml from "../utils/renderOutputHtml";
import Controller from "../Controller";
import Header from "./components/Header";

type StyleConfig = {
  headerType: SFRTypeValue;
  headerColor: SFRColorValue;
  headerBoldColor: SFRColorValue;
  headerAlign: string, // TextAlign typing?
  maxPageWidth: string,
  maxHeaderWidth: string,
  backgroundColor: SFRColorValue;
  innerBackgroundColor: SFRColorValue;
  innerCornerRadius: SFRSpacingValue;
  innerPadding: SFRSpacingValue;
  inverse: boolean;
};

export default class SectionView extends BaseView {

  async renderContent(
    entry: Entry<unknown> | null | undefined,
    controller: BaseController
  ): Promise<string> {
    const section = entry as unknown as ISection;

    const styleConfig: StyleConfig = {
      headerType: 'type-text-bold-60',
      headerColor: 'color-grey-00',
      headerBoldColor: 'color-grey-00',
      headerAlign: section.fields.alignment === 'center' ? 'center' :
      section.fields.alignment === 'left' ? 'left' : 'right',
      maxPageWidth: 'var( --page-max-width )',
      maxHeaderWidth: 'var( --page-max-width )',
      backgroundColor: 'color-grey-100',
      innerBackgroundColor: 'color-grey-100',
      innerCornerRadius: 'spacing-0',
      innerPadding: 'spacing-0',
      inverse: false,
    };
    
    if (section.fields.maxWidth) {
      styleConfig.maxPageWidth = `${section.fields.maxWidth}px`;
      styleConfig.maxHeaderWidth = `${section.fields.maxWidth}px`;
    }

    const bgColor = section.fields.backgroundColor;
    
    if (section.fields.designStyle === 'Version-2023') {
        if (bgColor !== 'default') {
            switch (bgColor) {
                case 'primary':
                  styleConfig.backgroundColor = 'color-primary';
                  styleConfig.inverse = true;
                    break;
                case 'primary-light':
                  styleConfig.backgroundColor = 'color-primary-90';
                    break;
                case 'secondary':
                  styleConfig.backgroundColor = 'color-secondary';
                  styleConfig.inverse = true;
                    break;
                case 'secondary-light':
                  styleConfig.backgroundColor = 'color-secondary-90';
                    break;
            }
        }
        if (styleConfig.inverse === true) {
          styleConfig.headerColor = 'color-grey-100';
        }
    } else {
      styleConfig.headerType = 'type-text-bold-110';
      styleConfig.headerColor = 'color-grey-60';
      styleConfig.headerBoldColor = 'color-grey-20';
      styleConfig.innerBackgroundColor = 'color-grey-98';
      styleConfig.innerCornerRadius = 'spacing-1';
      styleConfig.innerPadding = 'spacing-4';
      styleConfig.headerAlign = 'center';
      // styleConfig.maxHeaderWidth = `calc( ${styleConfig.maxPageWidth} - 300px )`;
    }

    const localController = (controller as Controller);
    const origInverse = localController.renderState.inverse;
    localController.renderState.inverse = styleConfig.inverse;
    const children = await renderLayouts(controller, section.fields.views);
    localController.renderState.inverse = origInverse;

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
          backgroundColor: styleConfig.backgroundColor
        }, {
          paddingLeft: 'var( --section-margin )',
          paddingRight: 'var( --section-margin )',
        })}>
        <div
          class="section-body"
          ${style({
            stack: true
          }, {
            maxWidth: styleConfig.maxPageWidth,
            margin: '0 auto'
          })}>
          ${section.fields.title ? html`
            ${Header(
              section.fields.title, 2,
              {
                color: styleConfig.headerColor,
                font: styleConfig.headerType,
              },
              {
                textAlign: styleConfig.headerAlign as any,
                lineHeight: '1.1',
                maxWidth: styleConfig.maxHeaderWidth,
                marginLeft: 'auto',
                marginRight: 'auto'
              },
              {
                color: styleConfig.headerBoldColor
              }
            )}
          `: ''}
          <div
            ${style({
              backgroundColor: styleConfig.innerBackgroundColor,
              borderRadius: styleConfig.innerCornerRadius,
              padding: styleConfig.innerPadding
            })}>
            ${children.join('')}
          </div>
        </div>
      </div>`,
      section,
      controller
    );
  }

}