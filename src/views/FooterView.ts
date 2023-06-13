import { Entry } from "contentful";
import { BaseController, BaseView, html } from "scu-ssg";
import { IFooter, IHeader, INavigation, IPage, IUrl } from '../@types/generated/contentful';
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import { ContentTypeId } from "../types";

export default class FooterView extends BaseView {

  async renderContent(
    entry: Entry<unknown> | null | undefined,
    controller: BaseController
  ): Promise<string> {
    const footer = entry as unknown as IFooter;

    const focusedEntry = controller.state.getEntry(controller.state.context.entryId);
    let pageUrl: IUrl | undefined;
    if (focusedEntry && focusedEntry.sys.contentType.sys.id === ContentTypeId.page) {
      const page = focusedEntry as IPage;
      pageUrl = page.fields.url;
    }

    const mainNav = footer.fields.mainNavigation;
    let mainNavHtml = '';
    if (mainNav && mainNav.fields.children) {
      mainNavHtml = mainNav.fields.children.map((nav: INavigation) => {
        const link = nav.fields.link;
        if (link) {
          const url = link.fields.url;
          const anchor = link.fields.anchor ? `#${link.fields.anchor}` : '';
          const target = link.fields.target ? link.fields.target : '_self';

          return html`
            <a
              ${style({
                font: 'type-text-30',
                marginLeft: 'spacing-3',
                color: 'color-grey-00',
                borderBottom: 'color-grey-00',
                marginBottom: 'spacing-1'
              }, {
                textDecoration: 'none',
              })}
              href="${url ? url.fields.slug : link.fields.externalUrl}${anchor}"
              target="${target}">
              ${link.fields.title.toLowerCase()}
            </a>
          `;
        }
      }).join('');
    }

    return html`
    <div
      data-entry-type-id="footer"
      ${style({
        flexH: true,
        alignmentCenter: true,
        backgroundColor: 'color-grey-100'
      }, {
        height: '200px',
        alignItems: 'center',// TEMP BUG FIX
        justifyContent: 'center',// TEMP BUG FIX
        position: 'sticky',
        top: '0'
      })}>
      <div ${style({
          flexH: true,
          alignmentBaselineLeft: true,
        }, {
          maxWidth: 'var( --page-max-width )',
          margin: 'var( --section-margin )',
          width: '100%',
          alignItems: 'baseline',// TEMP BUG FIX
        })}>
        <div ${style({
            font: 'type-text-semibold-100'
          }, {
            flex: '1'
          })}>
          (footer)
        </div>
        <div ${style({
            width: 'spacing-col-3-6'
          })}>
          Located in Madison, Wisconsin
        </div>
        <div ${style({
            flexV: true,
            width: 'spacing-col-3-6'
          })}>
          ${mainNavHtml}
        </div>
      </div>
    </div>`;
  }

}