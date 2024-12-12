import { BaseController, html } from "scu-ssg";
import renderOutputHtml from "../utils/renderOutputHtml";
import { IPage } from "../@types/generated/contentful";
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import renderLayouts from "../utils/renderLayouts";

export default async function PortfolioView(
    page: IPage,
    controller: BaseController
) {
  const sectionHtml = await renderLayouts(controller, page.fields.sections);

  return renderOutputHtml(html`
    <style>
        @container portfolio (width < 800px) {
          .portfolio-body {
            display: block;
          }
            .portfolio-header {
              width: var( --sfr-spacing-12 );
              margin-right: 0;
            }

            .portfolio-content {
              width: var( --sfr-spacing-12 );
              margin-right: 0;
            }
        }
    </style>
    <div
        data-entry-type-id="${page.sys.contentType.sys.id}"
        data-entry-id="${page.sys.id}"
        ${style({
          flexH: true,
          alignmentCenter: true,
          backgroundColor: 'color-grey-100',
          paddingHeight: 'spacing-4',
        }, {
          alignItems: 'flex-start',// TEMP BUG FIX
          justifyContent: 'center',// TEMP BUG FIX
          container: 'page / inline-size',
          lineHeight: 'normal',
        })}>

        <div
          class="page-body"
          ${style({
            flexV: true,
            alignmentBaselineLeft: true,
            color: 'color-grey-00',
          }, {
            maxWidth: '800px',
            margin: '0 var( --section-margin )',
            width: '100%',
          })}>

            <div
                class="page-header"
                ${style({
                    flexH: true,
                    alignmentBaselineLeft: true,
                    marginRight: 'spacing-col-1',
                    borderBottom: 'color-grey-90'
                }, {
                    flex: 1,
                    width: '100%',
                })}>
                <div ${style({
                    font: 'type-text-semibold-100'
                }, {flex: 1})}>
                    Scott Rouse
                </div>
                <div ${style({
                    paddingBottom: 'spacing-2'
                }, {
                    alignSelf: 'flex-end'
                })}>
                    Portfolio 2025
                </div>
            </div>

            <div
                class="page-content"
                ${style({}, {
                    flex: '1',
                    flexDirection: 'column',
                    gap: 'var( --sfr-spacing-3 )',
                    display: 'flex',
                })}>
               ${sectionHtml.join('')}
            </div>

        </div>
      </div>
  `, page, controller);
}

