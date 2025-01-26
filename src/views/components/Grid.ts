import { html } from "scu-ssg";
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";

export default function Grid(
    minWidthHorizontal: number | undefined,
    children: string[],
    gapNumber: number = 4,
    entryId?: string,
    entryContentTypeId?: string
) {
    const minHorizontalWidth = minWidthHorizontal || 600;
    const compId = entryId || Math.floor(Math.random()*1000000);
    const containerRef = `[data-entry-id="${compId}"]`;

    const gap = `var( --sfr-spacing-${gapNumber} )`;
    const gridHtml = html`
    <style>
        ${containerRef} > .grid-body > *:not(:last-child) {
            margin-right: ${gap};
        }
        @container (width < ${minHorizontalWidth}px) {
            ${containerRef} > .grid-body {
                display: block;
            }
            ${containerRef} > .grid-body > *:not(:last-child) {
                margin-right: 0;
                margin-bottom: ${gap};
            }
        }
    </style>
    <div
        data-entry-type-id="${entryContentTypeId}"
        data-entry-id="${compId}"
        ${style({
            width: 'spacing-col-12'
        }, {
            containerType: `inline-size`
        })}>
        <div
            class="grid-body"
            ${style({
                flexH: true,
                width: 'spacing-col-12'
            },  {
                alignItems: 'stretch',
                justifyContent: 'center',
            })}>
            ${children.join('')}
        </div>
    </div>
    `;

    return gridHtml;
}