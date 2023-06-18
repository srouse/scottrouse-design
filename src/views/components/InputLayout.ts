import { html } from "scu-ssg";
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import { SFRProp } from "@srouse/-scottrouse-design-system/transformations/fds-web/css-atoms";
import type * as CSS from 'csstype';

export default function InputLayout(
  label: string,
  name: string,
  externalSFRStyles: SFRProp = {},
  externalStyles: CSS.Properties = {},
  required: boolean = false,
  content: string
) {
  return html`
    <style>
      #form-input-${name}::placeholder {
        color: var( --sfr-color-grey-80 );
        font: var( --sfr-text-type-60 );
      }
    </style>
    <div
      id="form-input-${name}"
      ${style({
        ...externalSFRStyles,
        stack: true,
        marginBottom: 'spacing-1-6',
      }, externalStyles)}>
      <label
        ${style({
          font: 'type-text-30',
          color: 'color-grey-00',
          marginBottom: 'spacing-0-6',
        }, {
          display: 'block'
        })}
        for="form-input-${name}">
        ${label}${required ? ' *' : ''}
      </label>
      ${content}
    </div>
  `;
}