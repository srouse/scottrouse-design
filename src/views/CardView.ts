import { Entry } from "contentful";
import { BaseController, BaseView, html, imageUrl } from "scu-ssg";
import { ICardView, IProject } from '../@types/generated/contentful';
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from "@contentful/rich-text-types";
import renderOutputHtml from "../utils/renderOutputHtml";
import Controller from "../Controller";
import { SFRColorValue } from "@srouse/-scottrouse-design-system/transformations/fds-web/css-vars";
import Button from "./components/Button";

export default class CardView extends BaseView {

  async renderContent(
    entry: Entry<unknown> | null | undefined,
    controller: BaseController
  ): Promise<string> {
    const cardView = entry as unknown as ICardView;

    // possibly inversed color
    const localController = (controller as Controller);
    let textColor: SFRColorValue = 'color-grey-00';
    if (localController.renderState.inverse === true) {
      textColor = 'color-grey-100'
    }

    const content = cardView.fields.content;
    let headerHtml = '';
    let contentHtml = '';
    let imgHtml = '';
    let btnsHtml = '';
    if (content) {
      // IMAGE
      const image = content.fields.image;
      if (image) {
        let url = '';
        let alt: string | undefined = '';
        if (image && image?.fields.asset) {
          const asset = controller.state.getAsset(image.fields.asset.sys.id);
          url = imageUrl(asset, controller, 750);
          alt = image.fields.description;
        }
        imgHtml = html`
          <div ${style({
            borderBottom: 'color-grey-100',
            paddingBottom: 'spacing-1-6',
            marginBottom: 'spacing-2'
          }, {
            borderWidth: '4px'
          })}>
              <div ${style({}, {
                  overflow: 'hidden',
                  borderRadius: 'var( --sfr-spacing-0-6 )',
                })}>
                <img
                  src="${url}"
                  alt="${alt}"
                  ${style({}, {
                    width: '100%',
                  })} />
                </div>
          </div>`;
      }

      // HEADER
      headerHtml = content.fields.title || '';
      headerHtml = content.fields.title ? html`
            <h2 ${style({
                font: 'type-text-semibold-80',
                marginBottom: 'spacing-1',
                color: textColor,
              },{
                marginTop: 0, marginLeft: 0, marginRight: 0,
                padding: 0,
              })}>
              ${content.fields.title}
            </h2>
          `: '';

      // CONTENT
      if (content.fields.content) {
        const options = {
          renderMark: {
            // [MARKS.BOLD]: (text) => `<custom-bold>${text}<custom-bold>`,
          },
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, next) => {
              let text = next(node.content);
              text = text.replace(/\r|\n/g, '<br/>');
              return html`<p>${text}</p>`;
            }
          },
        };
        contentHtml = html`
          <div ${style({
              paddingWidth: 'spacing-2',
              font: 'type-text-60',
              marginBottom: 'spacing-2',
            })}>
            ${documentToHtmlString(content.fields.content, options)}
          </div>`;
      }

      // BUTTONS
      if (content.sys.contentType.sys.id === 'project') {
        const project = content as IProject;
        if (project.fields.website) {
          btnsHtml = html`
            <div ${style({
                flexH: true,
                alignmentCenter: true,
              }, {
                justifyContent: 'center', // bug fix
              })}>
              ${Button(project.fields.website)}
            </div>
          `;
        }
      }
    }

    const output = html`
      <div
        data-entry-type-id="${cardView.sys.contentType.sys.id}"
        data-entry-id="${cardView.sys.id}"
        ${style({
          stack: true,
          width: 'spacing-col-12',
          color: textColor,
        }, {
          overflow: 'hidden',
          borderRadius: 'var( --sfr-spacing-0-6 )',
          textAlign: 'center',
          alignContent: 'center', // bug fix
        })}>
        ${imgHtml}
        ${headerHtml}
        ${contentHtml}
        ${btnsHtml}
      </div>`;

    return renderOutputHtml( output, cardView, controller );
  }

}