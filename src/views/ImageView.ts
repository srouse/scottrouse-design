import { Entry } from "contentful";
import { BaseController, BaseView, html, imageUrl } from "scu-ssg";
import { IImageView } from '../@types/generated/contentful';
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import renderOutputHtml from "../utils/renderOutputHtml";

export default class ImageView extends BaseView {

  async renderContent(
    entry: Entry<unknown> | null | undefined,
    controller: BaseController
  ): Promise<string> {
    const imageView = entry as unknown as IImageView;
    const image = imageView.fields.image;
    let url = '';
    let alt: string | undefined = '';
    let imgStyle = imageView.fields.maxWidth ? 
      `style="max-width: ${imageView.fields.maxWidth}px;"` : '';
    if (image && image?.fields.asset) {
      const asset = controller.state.getAsset(image.fields.asset.sys.id);
      url = imageUrl(asset, controller, imageView.fields.maxWidth);
      alt = image.fields.description;
    }
    
    const output = html`
      <div
        data-entry-type-id="${imageView.sys.contentType.sys.id}"
        data-entry-id="${imageView.sys.id}"
        ${style({
          center: true,
        })}>
        <img src="${url}" alt="${alt}" ${imgStyle} />
      </div>`;

    return renderOutputHtml( output, imageView, controller );
  }

}