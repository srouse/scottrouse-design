/**
 * A utility to transform text with Markdown-style bold markers (** or __)
 * into HTML <b> tags and line break markers (\\) into <br /> tags.
 */

import { SFRProp } from "@srouse/-scottrouse-design-system/transformations/fds-web/css-atoms";
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";

/**
 * Transforms Markdown-style markers into HTML tags:
 * - Bold markers (** or __) into <b> tags
 * - Line break markers (\\) into <br /> tags
 *
 * @param {string} input - The input string containing Markdown markers.
 * @param {SFRProp} [boldSFRStyles] - Optional SFR styles for the bold <b> tag.
 * @returns {string} The transformed string with HTML tags.
 */
export function transformSimpleMarkdown(
    input: string,
    boldSFRStyles?: SFRProp
): string {
    // Regular expression to match bold markers (** or __)
    const boldRegex = /(\*\*|__)(.+?)\1/g;

    // Regular expression to match line break markers (\\)
    const lineBreakRegex = /\\\\/g;

    // Replace bold markers and line break markers
    return input
        .replace(boldRegex, (_, __, content) => `<b ${
            boldSFRStyles && style(boldSFRStyles)
        }>${content}</b>`)
        .replace(lineBreakRegex, '<br />');
}