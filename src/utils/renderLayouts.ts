import {BaseController, renderEntry} from 'scu-ssg';
import {Entry} from 'contentful';

/**
 * renderLayout
 * This cycles through all the Sections within the page and renders them
 * @param {BaseController} controller
 * @param {any[]} layouts
 * @return {Promise<string[]>}
 */

export default async function renderLayouts(
  controller: BaseController,
  layouts: Entry<unknown>[] | undefined
): Promise<string[]> {
  if (!layouts) return [];
  const components = layouts?.map((layout: Entry<unknown>) => {
    return renderEntry(controller, layout);
  });
  if (components) {
    const layoutHTML = await Promise.all(components);
    return layoutHTML;
  }
  return [];
}
