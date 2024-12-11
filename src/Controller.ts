import { BaseController } from 'scu-ssg';
import { ContentTypeId } from './types';
import PageModel from './models/PageModel';
import PageView from './views/PageView';
import HeaderView from './views/HeaderView';
import WebsiteModel from './models/WebsiteModel';
import FooterView from './views/FooterView';
import SectionView from './views/SectionView';
import GridView from './views/GridView';
import SimpleView from './views/SimpleView';
import JsonView from './views/JsonView';
import ImageView from './views/ImageView';
import CardView from './views/CardView';
import FormView from './views/forms/FormView';
import PortfolioSectionView from './views/PortfolioSectionView';
import PortfolioEntryView from './views/PortfolioEntry';

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