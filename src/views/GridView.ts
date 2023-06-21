import { Entry } from "contentful";
import { BaseController, BaseView, html } from "scu-ssg";
import { IGridView, ISection } from '../@types/generated/contentful';
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import renderLayouts from "../utils/renderLayouts";
import renderOutputHtml from "../utils/renderOutputHtml";

export default class GridView extends BaseView {

  async renderContent(
    entry: Entry<unknown> | null | undefined,
    controller: BaseController
  ): Promise<string> {
    const gridView = entry as unknown as IGridView;
    const children = await renderLayouts(controller, gridView.fields.views);
    const minHorizontalWidth = gridView.fields.minWidthHorizontal || 600;
    const containerRef = `[data-entry-id="${gridView.sys.id}"]`;

    const gap = 'var( --sfr-spacing-4 )';
    const gridHtml = html`
      <style>
        ${containerRef} > .grid-body > *:not(:last-child) {
          margin-right: ${gap};
        }
        @container (width < ${minHorizontalWidth}px) {
          ${containerRef} > .grid-body {
            display: block;
          }
            ${containerRef} > .grid-body > *:not(:last-child) {
              margin-right: 0;
              margin-bottom: ${gap};
            }
        }
      </style>
      <div
        data-entry-type-id="${gridView.sys.contentType.sys.id}"
        data-entry-id="${gridView.sys.id}"
        ${style({
          width: 'spacing-col-12'
        }, {
          containerType: `inline-size`
        })}>
        <div
          class="grid-body"
          ${style({
            flexH: true,
            width: 'spacing-col-12'
          },  {
            alignItems: 'stretch',
            justifyContent: 'center',
          })}>
          ${(children).map((child: string, index: number) => {
            return html`
              <!-- <div ${style({}, {
                  flex: '1'
                })}> -->
                ${child}
              <!-- </div> -->
            `;
          }).join('')}
        </div>
      </div>
    `;

    return renderOutputHtml(
      gridHtml,
      gridView,
      controller
    );
  }

}
