import { html } from "scu-ssg";
import Input from "../components/Input";
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import Textarea from "../components/Textarea";



export async function renderContactFormView() {
  return html`
    <script>
      const urlParams = new URLSearchParams(window.location.search);
      console.log('urlParams', urlParams);
      const form = urlParams.get('form');
      const success = urlParams.get('success');
    </script>
    <style>
      form::after {
        content: "";
        clear: both;
        display: table;
      }
    </style>
    <form
      ${style({}, {
        display: 'block',
        width: '100%'
      })}
      name="contact"
      action="/?form=contact&success=true#contact"
      netlify>
      ${Input(
        'First Name',
        'first-name',
        {
          marginRight: 'spacing-2',
        }, {
          maxWidth: '340px',
          width: '100%',
          float: 'left',
        },
        'text', true
      )}
      ${Input(
        'Last Name',
        'last-name', 
        {}, {
          maxWidth: '340px',
          width: '100%',
          float: 'left',
        }, 'text', true
      )}
      ${Input(
        'E-mail Address',
        'email',
        {}, {
          maxWidth: '340px',
          width: '100%',
          float: 'left',
          clear: 'left'
        }, 'email', true
      )}
      ${Textarea(
        'A brief description of what you may be interested in:',
        'message',
        {}, {
          maxWidth: '500px',
          width: '100%',
          float: 'left',
          clear: 'left'
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
          float: 'left',
          clear: 'left',
          border: 'none',
          borderRadius: 'var( --sfr-spacing-1 )'
        })}
        type="submit">
        Submit
      </button>
    </form>
  `;
}