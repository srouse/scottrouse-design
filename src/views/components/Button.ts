import { html } from "scu-ssg";
import { ILink } from "../../@types/generated/contentful";
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import { SFRProp } from "@srouse/-scottrouse-design-system/transformations/fds-web/css-atoms";

export enum ButtonDesigns {
  light = 'light',
  dark = 'dark',
  primaryDark = 'primaryDark'
}

export default function Button(
  link: ILink,
  design: ButtonDesigns = ButtonDesigns.light
) {
  const id = `btn-${Math.round(Math.random()*1000000000)}`;

  let href = link.fields.externalUrl;
  const url = link.fields.url;
  if (url) {
    href = url.fields.slug;
  }
  if (link.fields.anchor) {
    href = `${href}#${link.fields.anchor}`;
  }

  let designStyle: SFRProp = {};
  switch (design) {
    case ButtonDesigns.light:
      designStyle = {
        backgroundColor: 'color-grey-100',
        border: 'color-grey-00',
        color: 'color-grey-00',
      }
      break;
    case ButtonDesigns.dark:
      designStyle = {
        backgroundColor: 'color-grey-00',
        color: 'color-grey-100',
      }
      break;
    case ButtonDesigns.primaryDark:
      designStyle = {
        backgroundColor: 'color-primary-50',
        color: 'color-grey-100',
      }
      break;
  }

  const borderFocus = (design === ButtonDesigns.light) ?
    'border: 1px solid var( --sfr-color-grey-100 );' : ''

  return html`
    <style>
      .${id}:focus {
        outline: none;
        box-shadow: var( --sfr-effect-focus-shadow );
        ${borderFocus}
      }
    </style>
    <a
      class="${id}"
      ${style({
        ...designStyle,
        font: 'type-text-bold-70',
        paddingHeight: 'spacing-1',
        paddingWidth: 'spacing-1-6',
      }, {
        textDecoration: 'none',
        borderRadius: 'var( --sfr-spacing-1 )',
      })}
      href="${href}"
      ${link.fields.target ?
        `target="${link.fields.target}"` : ''}>
      ${link.fields.title}
    </a>
  `;
}