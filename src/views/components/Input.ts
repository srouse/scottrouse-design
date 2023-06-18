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
  return InputLayout(
    label, name, externalSFRStyles, externalStyles,
    required, 
    html`
      <style>
        .form-input {
          -webkit-appearance: none;
        }
        .form-input:focus {
          outline: none;
          box-shadow: var( --sfr-effect-focus-shadow );
          border: 1px solid var( --sfr-color-grey-100 );
        }
        .form-input:focus:required:invalid {
          box-shadow: var( --sfr-effect-focus-shadow );
        }
        .form-input:focus:required:valid {
          box-shadow: var( --sfr-effect-valid-shadow );
        }
      </style>
      <input
        class="form-input"
        ${style({
          font: 'type-text-60',
          color: 'color-grey-00',
          border: 'color-grey-00',
          padding: 'spacing-1-6',
        }, {
          borderRadius: '10px',
        })}
        type="${type}"
        ${required ? 'required' : ''}
        id="form-input-${name}"
        placeholder="${placeholder}"
        name="${name}" />`
  );
}