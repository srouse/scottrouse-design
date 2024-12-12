import { Entry } from "contentful";
import { BaseController, BaseView, html } from "scu-ssg";
import { IPortfolioEntry } from '../@types/generated/contentful';
import renderOutputHtml from "../utils/renderOutputHtml";
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import Button, { ButtonDesigns, ButtonSize } from "./components/Button";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default class PortfolioEntryView extends BaseView {

  async renderContent(
    entry: Entry<unknown> | null | undefined,
    controller: BaseController
  ): Promise<string> {
    const portfolioEntry = entry as unknown as IPortfolioEntry;

    return renderOutputHtml(html`
      <style>
        [data-entry-id="${portfolioEntry.sys.id}"] {
          margin-bottom: var( --sfr-spacing-2 );
        }
        [data-entry-id="${portfolioEntry.sys.id}"] p {
          margin: 0px;
        }
        [data-entry-id="${portfolioEntry.sys.id}"] .description a {
          color: var( --sfr-color-grey-00 );
        }]
        [data-entry-id="${portfolioEntry.sys.id}"] p:not(:last-child) {
          margin-bottom:  var( --sfr-spacing-1 );
        }
      </style>
      <div
        data-entry-type-id="${portfolioEntry.sys.contentType.sys.id}"
        data-entry-id="${portfolioEntry.sys.id}"
        >
        <div
          ${style({
            flexV: true,
            marginTop: 'spacing-2',
          }, {
            // gap: 'var( --sfr-spacing-0-6 )'
          })}>
          <div
            ${style({
              font: 'type-text-semibold-60'
            })}>
            ${portfolioEntry.fields.title}
          </div>
          <div class="description"
            ${style({
              font: 'type-text-30',
              marginBottom: 'spacing-1'
            })}>
            ${portfolioEntry.fields.description ? documentToHtmlString(portfolioEntry.fields.description) : ''}
          </div>
          <div
          ${style({
            flexH: true
          }, {
            gap: 'var( --sfr-spacing-1 )'
          })}>
          ${portfolioEntry.fields.links?.map(link => 
            Button(link, ButtonDesigns.dark, ButtonSize.small, portfolioEntry.fields.rainbowColored)
          ).join('') || ''}
          ${portfolioEntry.fields.assetExamples?.map(asset => 
            Button({
              fields: {
                title: asset.fields.title,
                entryTitle: "",
                externalUrl: `https:${asset.fields.file.url}`,
                target: asset.fields.title
              }
            }, ButtonDesigns.dark, ButtonSize.small, portfolioEntry.fields.rainbowColored)
          ).join('') || ''}
        </div>
        </div>
      </div>`,
      portfolioEntry,
      controller
    );
  }

}
