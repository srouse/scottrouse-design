import { html } from "scu-ssg";
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import { SFRProp } from "@srouse/-scottrouse-design-system/transformations/fds-web/css-atoms";
import type * as CSS from 'csstype';
import InputLayout from "./InputLayout";

export default function Input(
  label: string,
  name: string,
  externalSFRStyles: SFRProp = {},
  externalStyles: CSS.Properties = {},
  type: 'text' | 'email' = 'text',
  required: boolean = false,
  placeholder: string = '',
) {

  let pattern = '';
  if (type === 'email') {
    pattern = "/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/";
  }

  return InputLayout(
    label, name, externalSFRStyles, externalStyles,
    required, 
    html`
      <input
        ${style({
          font: 'type-text-60',
          color: 'color-grey-00',
          border: 'color-grey-00',
          padding: 'spacing-1-6',
        }, {
          borderRadius: '10px',
        })}
        type="text"
        ${pattern ? 'pattern="${pattern}"' : ''}
        ${required ? 'required' : ''}
        id="form-input-${name}"
        placeholder="${placeholder}"
        name="${name}" />`
  );
}