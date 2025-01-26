import { BaseController } from 'scu-ssg';
import { ContentTypeId } from './types';
import PageModel from './models/PageModel';
import PageView from './views/PageView';
import HeaderView from './views/HeaderView';
import WebsiteModel from './models/WebsiteModel';
import FooterView from './views/FooterView';
import GridView from './views/GridView';
import SimpleView from './views/SimpleView';
import JsonView from './views/JsonView';
import ImageView from './views/ImageView';
import CardView from './views/CardView';
import FormView from './views/forms/FormView';
import PortfolioSectionView from './views/PortfolioSectionView';
import PortfolioEntryView from './views/PortfolioEntry';
import { Entry } from 'contentful';
import { CONTENTFUL_WEBSITE_TAG } from './constants';
import SectionView from './viewControllers/SectionView/SectionView';

export default class Controller extends BaseController {

  debugSequence = false;
  debugFileCreation = true;
  debugImageCache = true;
  debugStateToFile = true;

  models = {
    [ContentTypeId.page]: new PageModel(),
    [ContentTypeId.website]: new WebsiteModel(),
  };

  // used to hand off information between parent and child views
  renderState: {inverse:Boolean} = {inverse: false};

  findEntrySlug(entry: Entry<unknown> | null | undefined): string | undefined {
    // we are enabling multiple websites this way...
    let slug = super.findEntrySlug(entry);
    const prevSlug = slug;
    if (slug !== undefined && CONTENTFUL_WEBSITE_TAG) { // applied to just intentional routes
      const hasTag = entry?.metadata.tags.find(tag => tag.sys.id === CONTENTFUL_WEBSITE_TAG);
      if (!hasTag) {
        slug = undefined; // just ignore slug...
      }
    }
    if (prevSlug !== undefined)
    return slug;
  }

  views = {
    [ContentTypeId.page]: [
      new PageView(),
      new JsonView()
    ],
    [ContentTypeId.header]: [
      new HeaderView(),
      new JsonView()
    ],
    [ContentTypeId.footer]: [
      new FooterView(),
      new JsonView()
    ],
    [ContentTypeId.section]: [
      new SectionView(),
      new JsonView()
    ],
    [ContentTypeId.gridView]: [
      new GridView(),
      new JsonView()
    ],
    [ContentTypeId.simpleView]: [
      new SimpleView(),
      new JsonView()
    ],
    [ContentTypeId.imageView]: [
      new ImageView(),
      new JsonView()
    ],
    [ContentTypeId.cardView]: [
      new CardView(),
      new JsonView()
    ],
    [ContentTypeId.formView]: [
      new FormView(),
      new JsonView()
    ],
    [ContentTypeId.portfolioSection]: [
      new PortfolioSectionView(),
      new JsonView()
    ],
    [ContentTypeId.portfolioEntry]: [
      new PortfolioEntryView(),
      new JsonView()
    ]
  };

}