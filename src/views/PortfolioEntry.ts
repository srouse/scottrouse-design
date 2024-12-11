import { Entry } from "contentful";
import { BaseController, BaseView, html } from "scu-ssg";
import { IPortfolioEntry, IPortfolioSection } from '../@types/generated/contentful';
import renderOutputHtml from "../utils/renderOutputHtml";
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import Button, { ButtonDesigns, ButtonSize } from "./components/Button";

export default class PortfolioEntryView extends BaseView {

  async renderContent(
    entry: Entry<unknown> | null | undefined,
    controller: BaseController
  ): Promise<string> {
    const portfolioEntry = entry as unknown as IPortfolioEntry;


    return renderOutputHtml(html`
      <style>
        [data-entry-id="${portfolioEntry.sys.id}"] .section-body > * {
          margin-bottom: var( --sfr-spacing-2 );
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
            gap: 'var( --sfr-spacing-0-9 )'
          })}>
          <div
            ${style({
              font: 'type-text-semibold-40'
            })}>
            ${portfolioEntry.fields.title}
          </div>
          <div
            ${style({
              font: 'type-text-30'
            })}>
            ${portfolioEntry.fields.summary || ''}
          </div>
          <div
          ${style({
            flexH: true
          }, {
            gap: 'var( --sfr-spacing-1 )'
          })}>
          ${portfolioEntry.fields.links?.map(link => 
            Button(link, ButtonDesigns.dark, ButtonSize.small)
          ).join('') || ''}
          ${portfolioEntry.fields.assetExamples?.map(asset => 
            Button({
              fields: {
                title: asset.fields.title,
                entryTitle: "",
                externalUrl: `https:${asset.fields.file.url}`,
                target: asset.fields.title
              }
            }, ButtonDesigns.dark, ButtonSize.small)
          ).join('') || ''}
        </div>
        </div>
      </div>`,
      portfolioEntry,
      controller
    );
  }

}

 //asset.fields.file.url
// ${
//   portfolioEntry.fields.assetExamples?.map(asset => 
//     Button(asset.fields., ButtonDesigns.dark, ButtonSize.small)
//   ).join('')
// }