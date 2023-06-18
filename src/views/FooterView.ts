import { Entry } from "contentful";
import { BaseController, BaseView, html, renderEntry } from "scu-ssg";
import { IFooter, IHeader, INavigation, IPage, IUrl } from '../@types/generated/contentful';
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import { ContentTypeId } from "../types";
import renderOutputHtml from "../utils/renderOutputHtml";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Header from "./components/Header";

export default class FooterView extends BaseView {

  async renderContent(
    entry: Entry<unknown> | null | undefined,
    controller: BaseController
  ): Promise<string> {
    const footer = entry as unknown as IFooter;

    

    // LOCATED
    let located = '';
    if (footer.fields.located) {
      const options = {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, next) => {
            let text = next(node.content);
            text = text.replace(/\r|\n/g, '<br/>');
            return html`<p ${style({marginTop: 'spacing-0'})}>${text}</p>`;
          },
        },
      };
      located = documentToHtmlString(footer.fields.located, options);
    }

    // CONTENT
    let content = '';
    if (footer.fields.content) {
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
            return html`<p ${style({marginTop: 'spacing-0'})}>${text}</p>`;
          },
          [BLOCKS.HEADING_1]: (node, next) => headerRender(node, next, 1),
          [BLOCKS.HEADING_2]: (node, next) => headerRender(node, next, 2),
          [BLOCKS.HEADING_3]: (node, next) => headerRender(node, next, 3),
          [BLOCKS.HEADING_4]: (node, next) => headerRender(node, next, 4),
          [BLOCKS.HEADING_5]: (node, next) => headerRender(node, next, 5),
          [BLOCKS.HEADING_6]: (node, next) => headerRender(node, next, 6),
        },
      };
      content = documentToHtmlString(footer.fields.content, options);
    }

    // NAVIGATION
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
                font: 'type-text-60',
                color: 'color-grey-00',
                marginBottom: 'spacing-1',
                colorHover: 'color-grey-40',
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
 
    return renderOutputHtml(html`
      <style>
        @container footer (width < 800px) {
          .footer-body {
            display: block;
          }
            .footer-content {
              width: var( --sfr-spacing-12 );
              margin-right: 0;
            }
            .footer-located {
              width: var( --sfr-spacing-12 );
            }
            .footer-nav {
              width: var( --sfr-spacing-12 );
              margin-top: var( --sfr-spacing-3 );
            }
        }
      </style>
      <div
        data-entry-type-id="${footer.sys.contentType.sys.id}"
        data-entry-id="${footer.sys.id}"
        ${style({
          flexH: true,
          alignmentCenter: true,
          backgroundColor: 'color-grey-100',
          paddingHeight: 'spacing-4',
        }, {
          alignItems: 'flex-start',// TEMP BUG FIX
          justifyContent: 'center',// TEMP BUG FIX
          container: 'footer / inline-size',
        })}>

        <div
          class="footer-body"
          ${style({
            flexH: true,
            alignmentBaselineLeft: true,
          }, {
            maxWidth: 'var( --page-max-width )',
            margin: '0 var( --section-margin )',
            width: '100%',
          })}>

          <div
            class="footer-content"
            ${style({
              marginRight: 'spacing-col-1',
            }, {
              flex: '1',
            })}>
            ${content}
          </div>
    
          <div
            class="footer-located"
            ${style({
              stack: true,
              width: 'spacing-col-5'
            })}>
            <div>${located}</div>
            <div ${style({
              flexH: true,
            })}>
              <a
                ${style({
                  marginRight: 'spacing-1'
                })}
                href="${footer.fields.linkedInUrl?.fields.externalUrl}"
                target="_new"
                alt="Scott Rouse LinkedIn Profile">
                <svg width="26" height="26" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <rect width="240" height="240" fill="url(#pattern0)"/>
                  <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlink:href="#image0_11_277" transform="scale(0.00390625)"/>
                    </pattern>
                    <image id="image0_11_277" width="256" height="256" xlink:href="data:image/png;base64,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"/>
                  </defs>
                </svg>
              </a>
              <a
                href="emailto:${footer.fields.email}"
                alt="Scott Rouse Email">
                <svg width="26" height="26" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_11_275)">
                    <path d="M120 240C151.826 240 182.348 227.357 204.853 204.853C227.357 182.348 240 151.826 240 120C240 88.174 227.357 57.6516 204.853 35.1472C182.348 12.6428 151.826 0 120 0C88.174 0 57.6516 12.6428 35.1472 35.1472C12.6428 57.6516 0 88.174 0 120C0 151.826 12.6428 182.348 35.1472 204.853C57.6516 227.357 88.174 240 120 240ZM60 95.6719V75H180V95.6719L120 119.438L60 95.6719ZM122.766 134.484L180 111.797V165H60V111.797L117.234 134.484L120 135.563L122.766 134.484Z" fill="black"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_11_275">
                      <rect width="240" height="240" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>

          <div
            class="footer-nav"
            ${style({
              flexV: true,
              width: 'spacing-col-2-6'
            })}>
            ${mainNavHtml}
          </div>
        </div>
      </div>`,
      footer,
      controller
    );
  }

}