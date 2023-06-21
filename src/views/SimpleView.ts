import { Entry } from "contentful";
import { BaseController, BaseView, html } from "scu-ssg";
import { ILink, ISimpleView } from '../@types/generated/contentful';
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import renderOutputHtml from "../utils/renderOutputHtml";
import Controller from "../Controller";
import { SFRColorValue } from "@srouse/-scottrouse-design-system/transformations/fds-web/css-vars";
import Button, { ButtonDesigns } from "./components/Button";
import { SFRProp } from "@srouse/-scottrouse-design-system/transformations/fds-web/css-atoms";
import Header from "./components/Header";

export default class SimpleView extends BaseView {

  async renderContent(
    entry: Entry<unknown> | null | undefined,
    controller: BaseController
  ): Promise<string> {
    const simpleView = entry as unknown as ISimpleView;

    const content = simpleView.fields.content;
    let titleHtml = '';
    let contentHtml = '';
    let linksHtml = '';
    if (content) {
      // TITLE
      if (content.fields.title) {
        // const headerRender = (node, next, level) => {
        //   let text = next(node.content);
        //   text = text.replace(/\r|\n/g, '<br/>');
        //   return Header(text, level);
        // }
        const options = {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, next) => {
              let text = next(node.content);
              text = text.replace(/\r|\n/g, '<br/>');
              return html`
                <h3 ${style({
                  font: 'type-text-semibold-70',
                })}>
                  ${text}
              </h3>`;
            },
            [INLINES.HYPERLINK]: (node, next) => {
              return `<a href="${node.data.uri}" ${style({color: 'color-grey-00'}, {})}>${next(node.content)}</a>`;
            }
            // [BLOCKS.HEADING_1]: (node, next) => headerRender(node, next, 1),
            // [BLOCKS.HEADING_2]: (node, next) => headerRender(node, next, 2),
            // [BLOCKS.HEADING_3]: (node, next) => headerRender(node, next, 3),
            // [BLOCKS.HEADING_4]: (node, next) => headerRender(node, next, 4),
            // [BLOCKS.HEADING_5]: (node, next) => headerRender(node, next, 5),
            // [BLOCKS.HEADING_6]: (node, next) => headerRender(node, next, 6),
          },
        };
        titleHtml = documentToHtmlString(content.fields.title, options);
      }

      // CONTENT
      if (content.fields.content) {
        const headerRender = (node, next, level) => {
          let text = next(node.content);
          text = text.replace(/\r|\n/g, '<br/>');
          return Header(text, level);
        }
        const options = {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, next) => {
              let text = next(node.content);
              text = text.replace(/\r|\n/g, '<br/>');
              return html`
                <p ${style({
                  font: 'type-text-50',
                })}>
                  ${text}
                </p>`;
            },
            [BLOCKS.HEADING_1]: (node, next) => headerRender(node, next, 1),
            [BLOCKS.HEADING_2]: (node, next) => headerRender(node, next, 2),
            [BLOCKS.HEADING_3]: (node, next) => headerRender(node, next, 3),
            [BLOCKS.HEADING_4]: (node, next) => headerRender(node, next, 4),
            [BLOCKS.HEADING_5]: (node, next) => headerRender(node, next, 5),
            [BLOCKS.HEADING_6]: (node, next) => headerRender(node, next, 6),
          },
        };
        contentHtml = documentToHtmlString(content.fields.content, options);
      }

      // LINK
      if (content.fields.links) {
        linksHtml = html`
          <div
            ${style({
              flexH: true
            })}>
            ${content.fields.links.map((link: ILink, index: number) => {
                const design = index === 0 ? simpleView.fields.buttonOneDesign : simpleView.fields.buttonTwoDesign;
                return Button(link, design as ButtonDesigns);
              }).join('')}
          </div>
        `;
      }
    }

    // possibly inversed color
    const localController = (controller as Controller);
    let textColor: SFRColorValue = 'color-grey-00';
    if (localController.renderState.inverse === true) {
      textColor = 'color-grey-100'
    }

    let simpleStyle: SFRProp = {
      stack: true,
    };
    if (simpleView.fields.alignment === 'center') {
      simpleStyle = {
        center: true,
      };
    }else if (simpleView.fields.alignment === 'right') {
      simpleStyle = {
        flexH: true,
        alignmentRight: true,
      };
    }

    const output = html`
      <div
        data-entry-type-id="${simpleView.sys.contentType.sys.id}"
        data-entry-id="${simpleView.sys.id}"
        ${style({
          ...simpleStyle,
          width: 'spacing-col-12',
          color: textColor,
        })}>
        ${titleHtml}
        ${contentHtml}
        ${linksHtml}
      </div>`;

    return renderOutputHtml( output, simpleView, controller );
  }

}
