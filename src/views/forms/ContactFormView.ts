import { html } from "scu-ssg";
import Input from "../components/Input";
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import Textarea from "../components/Textarea";
import { IFormView } from "../../@types/generated/contentful";
import Checkbox from "../components/Checkbox";



export async function renderContactFormView(
  formView: IFormView
) {
  const id = `form-${formView.sys.id}`;
  return html`
    <script>
      const urlParams = new URLSearchParams(window.location.search);
      console.log('urlParams', urlParams);
      const form = urlParams.get('form');
      const success = urlParams.get('success');
    </script>
    <style>
      @container ${id} (width < 740px) {
        .form-name {
          display: block;
        }
        #${id} > *, .form-name > *{
          max-width: 100% !important;
          width: 100% !important;
        }
      }
    </style>
    <form
      id="${id}"
      ${style({
        stack: true,
      }, {
        width: '100%',
        container: `${id} / inline-size`
      })}
      name="contact"
      action="/?form=contact&success=true#contact"
      netlify>
      <div
        class="form-name"
        ${style({
          flexH: true,
        })}>
        ${Input(
          'First Name',
          'first-name',
          {
            marginRight: 'spacing-2',
          }, {
            maxWidth: '340px',
            width: '100%',
          },
          'text', true
        )}
        ${Input(
          'Last Name',
          'last-name', 
          {}, {
            maxWidth: '340px',
            width: '100%',
          }, 'text', true
        )}
      </div>

      ${Input(
        'E-mail Address',
        'email',
        {}, {
          maxWidth: '340px',
          width: '100%',
        }, 'email', true
      )}

      <div
        ${style({
          font: 'type-text-semibold-60',
          marginHeight: 'spacing-2',
        })}>
        Let's talk about...
      </div>

      ${Checkbox(
        'Design Systems',
        'interest',
        'designSystem'
      )}
      ${Checkbox(
        'Figma Widgets',
        'interest',
        'figmaWidgets'
      )}
      ${Checkbox(
        'Partnership and collaboration',
        'interest',
        'partnership'
      )}
      ${Checkbox(
        'Other',
        'interest',
        'other',
      )}

      ${Textarea(
        'A brief description of what you may be interested in:',
        'message',
        {
          marginTop: 'spacing-4'
        }, {
          maxWidth: '500px',
          width: '100%',
        }, true
      )}
      
      <button
        ${style({
          font: 'type-text-bold-70',
          paddingHeight: 'spacing-1',
          paddingWidth: 'spacing-1-6',
          backgroundColor: 'color-primary-50',
          color: 'color-grey-100',
        }, {
          display: 'block',
          border: 'none',
          width: 'auto',
          borderRadius: 'var( --sfr-spacing-1 )'
        })}
        type="submit">
        Submit
      </button>
    </form>
  `;
}