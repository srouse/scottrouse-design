import { html } from "scu-ssg";
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import { SFRProp } from "@srouse/-scottrouse-design-system/transformations/fds-web/css-atoms";
import type * as CSS from 'csstype';

export default function Checkbox(
  label: string,
  name: string,
  value: string,
  externalSFRStyles: SFRProp = {},
  externalStyles: CSS.Properties = {},
  required: boolean = false,
) {
  const id = `id-${Math.random()}`;
  return html`
    <style>
      .sfr-form-checkbox {
        display: block;
        position: relative;
        padding-left: var( --sfr-spacing-4 );
        margin-bottom: var( --sfr-spacing-2 );
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .sfr-form-checkbox .form-checkbox-input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }

      .sfr-form-checkbox .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 28px;
        width: 28px;
        background-color: var( --sfr-color-grey-100 );
        border: 1px solid var( --sfr-color-grey-00 );;
        border-radius: 6px;
      }

      .sfr-form-checkbox:hover .checkmark {
        background-color: var( --sfr-color-primary-90 );
      }

      .sfr-form-checkbox .form-checkbox-input:checked + .checkmark {
        background-color: var( --sfr-color-grey-00 );
      }

      .sfr-form-checkbox .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }

        .sfr-form-checkbox .form-checkbox-input:checked + .checkmark:after {
          display: block;
        }

        .sfr-form-checkbox .checkmark:after {
          left: 9px;
          top: 5px;
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 4px 4px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }

        .sfr-form-checkbox .form-checkbox-input:focus + .checkmark {
          box-shadow: var( --sfr-effect-focus-shadow );
          border: 1px solid var( --sfr-color-grey-100 );
        }
        .sfr-form-checkbox .form-checkbox-input:checked:focus + .checkmark {
          border: 1px solid var( --sfr-color-grey-00 );
        }
    </style>
    <label
      class="sfr-form-checkbox"
      for="form-input-${value}"
      ${style({
        flexH: true,
        marginBottom: 'spacing-1',
        font: 'type-text-60',
        color: 'color-grey-00',
        ...externalSFRStyles
      }, {
        ...externalStyles
      })}
      onClick="(evt) => {
        return false;
      }"
      onKeyDown="(evt) => {
        return false;
      }">
      <input
        type="checkbox"
        class="form-checkbox-input"
        id="form-input-${value}"
        name="${name}"
        value="${value}"
        ${style({
          marginRight: 'spacing-1',
          border: 'color-grey-00'
        }, {
          font: 'inherit',
          color: '#f00',
          width: '1.15em',
          height: '1.15em',
          borderRadius: '6px',
          transform: 'translateY(-0.075em)',
        })} />
        ${label}${required ? ' *' : ''}
      <span class="checkmark"></span>
    </label>`;
}