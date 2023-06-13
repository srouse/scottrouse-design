import { Entry } from "contentful";
import { BaseController, BaseView, html } from "scu-ssg";
import { ISimpleView } from '../@types/generated/contentful';
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from "@contentful/rich-text-types";

export default class SimpleView extends BaseView {

  async renderContent(
    entry: Entry<unknown> | null | undefined,
    controller: BaseController
  ): Promise<string> {
    const simpleView = entry as unknown as ISimpleView;

    const content = simpleView.fields.content;
    let contentHtml = '';
    let headerHtml = '';
    if (content) {
      headerHtml = content.fields.title || '';
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
        contentHtml = documentToHtmlString(content.fields.content, options);
      }
    }

    return html`
        <div
          data-entry-type-id="section"
          ${style({
            stack: true,
            width: 'spacing-col-12'
          })}>
          ${headerHtml}
          ${contentHtml}
        </div>
    `;
  }

}