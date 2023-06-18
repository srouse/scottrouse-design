import { html } from "scu-ssg";
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import { SFRProp } from "@srouse/-scottrouse-design-system/transformations/fds-web/css-atoms";
import type * as CSS from 'csstype';
import InputLayout from "./InputLayout";

export default function Textarea(
  label: string,
  name: string,
  externalSFRStyles: SFRProp = {},
  externalStyles: CSS.Properties = {},
  required: boolean = false,
) {
  return InputLayout(
    label, name,
    externalSFRStyles, externalStyles,
    required, 
    html`
      <style>
        .sfr-form-textarea:focus {
          outline: none;
          box-shadow: var( --sfr-effect-focus-shadow );
          border: 1px solid var( --sfr-color-grey-100 );
        }
      </style>
      <textarea
        class="sfr-form-textarea"
        name="${name}"
        ${style({
            font: 'type-text-60',
            color: 'color-grey-00',
            border: 'color-grey-00',
            padding: 'spacing-1-6',
          }, {
            borderRadius: '10px',
            height: '270px'
          })}
          ${required ? 'required' : ''}></textarea>`
  );
}