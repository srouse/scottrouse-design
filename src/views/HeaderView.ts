import { Entry } from "contentful";
import { BaseController, BaseView, html } from "scu-ssg";
import { IHeader, INavigation, IPage, IUrl } from '../@types/generated/contentful';
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import { ContentTypeId } from "../types";

export default class HeaderView extends BaseView {

  async renderContent(
    entry: Entry<unknown> | null | undefined,
    controller: BaseController
  ): Promise<string> {
    const header = entry as unknown as IHeader;

    
    const focusedEntry = controller.state.getEntry(controller.state.context.entryId);
    let pageUrl: IUrl | undefined;
    if (focusedEntry && focusedEntry.sys.contentType.sys.id === ContentTypeId.page) {
      const page = focusedEntry as IPage;
      pageUrl = page.fields.url;
    }

    const mainNav = header.fields.mainNavigation;
    let mainNavHtml = '';
    if (mainNav && mainNav.fields.children) {
      mainNavHtml = mainNav.fields.children.map((nav: INavigation, index: number) => {
        const link = nav.fields.link;
        if (link) {
          const url = link.fields.url;
          const anchor = link.fields.anchor ? `#${link.fields.anchor}` : '';
          const target = link.fields.target ? link.fields.target : '_self';

          const isSameUrl = // TODO: maybe highlight anchors? maybe fix?
            ( pageUrl?.fields.slug === url?.fields.slug ) &&
            ( !link.fields.anchor );

          return html`
            <a
              ${style({
                font: 'type-text-70',
                marginLeft: index > 0 ? 'spacing-3' : 'spacing-0',
                color: 'color-grey-00',
                borderBottom: 'color-grey-00',
                paddingBottom: 'spacing-0-6'
              }, {
                textDecoration: 'none',
                borderWidth: isSameUrl ? '4px' : '0',
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
    <style>
      @container header (width < 600px) {
        .header-body {
          display: block;
        }
        .header-fill {
          display: none;
        }
        .header-navigation {
          flex-flow: row nowrap;
          justify-content: space-between;
        }
          .header-navigation a {
            font: var( --sfr-type-text-50 );
          }
      }
      @container header (width < 300px) {
        .header-navigation {
          flex-flow: column nowrap;
        }
          .header-navigation a {
            font: var( --sfr-type-text-40 );
            margin: 0;
            margin-bottom: var( --sfr-spacing-1 );
          }
      }
    </style>
    <div
      data-entry-type-id="header"
      ${style({
        flexH: true,
        alignmentCenter: true,
      }, {
        height: '200px',
        alignItems: 'center',// TEMP BUG FIX
        justifyContent: 'center',// TEMP BUG FIX
        position: 'sticky',
        top: '0',
        backgroundColor: 'rgba( 255, 255, 255, 0.8)',
        container: 'header / inline-size'
      })}>
      <div
        class="header-body"
        ${style({
          flexH: true,
          alignmentBaselineLeft: true,
        }, {
          maxWidth: 'var( --page-max-width )',
          margin: 'var( --section-margin )',
          width: '100%',
          alignItems: 'baseline',// TEMP BUG FIX
        })}>
        <div
          class="header-title"
          ${style({
            font: 'type-text-semibold-100'
          })}>
          ${header.fields.title}
        </div>
        <div
          class="header-fill"
          ${style({}, {
            flex: 1 
          })}>
        </div>
        <div
          class="header-navigation"
          ${style({
            flexH: true,
          })}>
          ${mainNavHtml}
        </div>
      </div>
    </div>`;
  }

}