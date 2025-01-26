import { html } from "scu-ssg";
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";

export default function Divider() {
  return html`<div
    ${style({
        backgroundColor: 'color-grey-95'
    }, {
        minWidth: '2px',
        minHeight: '2px',
        alignSelf: 'stretch'
    })}></div>`;
}