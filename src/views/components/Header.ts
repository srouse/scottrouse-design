import { html } from "scu-ssg";
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import { SFRProp } from "@srouse/-scottrouse-design-system/transformations/fds-web/css-atoms";
import type * as CSS from 'csstype';

export default function Header(
  heading: string,
  level: 1 | 2 | 3 | 4 | 5 | 6,
  externalSFRStyles: SFRProp = {},
  externalStyles: CSS.Properties = {},
) {
  const h = `h${level}`;

  let headerStyle: SFRProp = {};
  switch (level) {
    case 1:
      headerStyle = {
        font: 'type-text-bold-80'
      }
      break;
    case 2:
      headerStyle = {
        font: 'type-text-bold-70'
      }
      break;
    case 3:
      headerStyle = {
        font: 'type-text-bold-60'
      }
      break;
    case 4:
      headerStyle = {
        font: 'type-text-bold-50'
      }
      break;
    case 5:
      headerStyle = {
        font: 'type-text-bold-50'
      }
      break;
    case 6:
      headerStyle = {
        font: 'type-text-bold-50'
      }
      break;
  }

  return html`
    <${h}
      ${style({
        ...headerStyle,
        margin: 'spacing-0',
        padding: 'spacing-0',
        ...externalSFRStyles
      }, {
        ...externalStyles
      })}>
      ${heading}
    </${h}>
  `;
}