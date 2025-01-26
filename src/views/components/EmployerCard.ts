import { html } from "scu-ssg";
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import tsStyle from "@srouse/-scottrouse-design-system/transformations/fds-web/javascript-vars";
import { transformSimpleMarkdown } from "../../utils/textTransformations";

export default function EmployerCard(
  titles: string | undefined,
  sizeStat: string | undefined,
  imageUrl: string | undefined,
  imageAlt: string | undefined
) {

    const viewId = Math.floor(Math.random()*1000000);
    const containerRef = `[data-view-id="${viewId}"]`;

    return html`
        <style>
            @container employer-card (width > 500px) {
                ${containerRef} > .titles {
                    font: ${tsStyle.sfrTypeTextSemibold90};
                    line-height: 1.1;
                }
            }
        </style>
        <div
            data-view-id="${viewId}"
            ${style({
                flexV: true,
            }, {
                alignItems: 'stretch',
                flex: 1,
                containerType: `inline-size`,
                containerName: 'employer-card'
            })}>
            <div
                ${style({
                    element: true,
                }, {
                    aspectRatio: '247 / 139',
                    // maxWidth: '500px',
                    overflow: 'hidden'
                })}>
                <img
                    ${style({}, {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    })}
                    src="${imageUrl}" 
                    alt="${imageAlt}" />
            </div>
            <div
                class="titles"
                ${style({
                    element: true,
                    paddingLeft: 'spacing-2',
                    paddingRight: 'spacing-2',
                    font: 'type-text-semibold-50',
                    color: 'color-grey-20',
                    marginBottom: 'spacing-2'
                }, {
                    flex: 1,
                    textAlign: "center"
                })}>
                ${transformSimpleMarkdown(titles)}
            </div>
            <div
                class="size-stats"
                ${style({
                    element: true,
                    font: 'type-text-50',
                    color: 'color-grey-40'
                }, {
                    textAlign: "center",
                    textTransform: 'capitalize'
                })}>
                ${sizeStat}
            </div>
        </div>
    `;
}