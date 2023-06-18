import { html } from "scu-ssg";
import { ILink } from "../../@types/generated/contentful";
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";

export default function Button(
  link: ILink
) {
  let href = link.fields.externalUrl;
  const url = link.fields.url;
  if (url) {
    href = url.fields.slug;
  }
  if (link.fields.anchor) {
    href = `${href}#${link.fields.anchor}`;
  }

  return html`
    <a
      ${style({
        font: 'type-text-bold-70',
        paddingHeight: 'spacing-1',
        paddingWidth: 'spacing-1-6',
        backgroundColor: 'color-grey-100',
        border: 'color-grey-00',
        color: 'color-grey-00',
      }, {
        textDecoration: 'none',
        borderRadius: 'var( --sfr-spacing-1 )',
      })}
      href="${href}"
      ${link.fields.target ? `target="${link.fields.target}"` : ''}>
      ${link.fields.title}
    </a>
  `;
}