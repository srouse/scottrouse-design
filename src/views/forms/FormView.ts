import { Entry } from "contentful";
import { BaseController, BaseView, html } from "scu-ssg";
import { IFormView } from '../../@types/generated/contentful';
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import renderOutputHtml from "../../utils/renderOutputHtml";
import Controller from "../../Controller";
import { SFRColorValue } from "@srouse/-scottrouse-design-system/transformations/fds-web/css-vars";
import { renderContactFormView } from "./ContactFormView";

export default class FormView extends BaseView {

  async renderContent(
    entry: Entry<unknown> | null | undefined,
    controller: BaseController
  ): Promise<string> {
    const formView = entry as unknown as IFormView;

    // possibly inversed color
    const localController = (controller as Controller);
    let textColor: SFRColorValue = 'color-grey-00';
    if (localController.renderState.inverse === true) {
      textColor = 'color-grey-100'
    }

    let formHtml = '';
    switch( formView.fields.type ) {
      case "Contact" :
        formHtml = await renderContactFormView();
        break;
    }

    const output = html`
      <div
        data-entry-type-id=${formView.sys.contentType.sys.id}
        data-entry-id="${formView.sys.id}"
        ${style({
          stack: true,
          width: 'spacing-col-12',
          color: textColor,
        })}>
        ${formHtml}
      </div>`;

    return renderOutputHtml( output, formView, controller );
  }

}