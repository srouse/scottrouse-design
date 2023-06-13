import { Entry } from "contentful";
import { BaseController, BaseView, html } from "scu-ssg";
import { IGridView, ISection } from '../@types/generated/contentful';
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import renderLayouts from "../utils/renderLayouts";

export default class GridView extends BaseView {

  async renderContent(
    entry: Entry<unknown> | null | undefined,
    controller: BaseController
  ): Promise<string> {
    const grid = entry as unknown as IGridView;
    const children = await renderLayouts(controller, grid.fields.views);

    return html`
        <style>
          @container grid (width < 600px) {
            .grid-body {
              display: block;
            }

              .grid-body > * {
                margin-right: 0;
              }
          }
        </style>
        <div
          data-entry-type-id="gridView"
          ${style({
            width: 'spacing-col-12'
          }, {
            container: 'grid / inline-size'
          })}>
          <div
            class="grid-body"
            ${style({
              flexH: true,
              width: 'spacing-col-12'
            })}>
            ${(children).map((child: string, index: number) => {
              return html`
                <div ${style({
                    marginRight: index < children.length ? 'spacing-2' : 'spacing-0'
                  }, {
                    flex: '1'
                  })}>
                  ${child}
                </div>
              `;
            }).join('')}
          </div>
        </div>
    `;
  }

}