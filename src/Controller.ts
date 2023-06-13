import { BaseContentfulAPIModel, BaseController, BaseModel } from 'scu-ssg';
import { ContentTypeId } from './types';
import PageModel from './models/PageModel';
import PageView from './views/PageView';
import HeaderView from './views/HeaderView';
import WebsiteModel from './models/WebsiteModel';
import FooterView from './views/FooterView';
import SectionView from './views/SectionView';
import GridView from './views/GridView';
import SimpleView from './views/SimpleView';

export default class Controller extends BaseController {

  debugSequence = false;
  debugFileCreation = true;
  debugImageCache = true;
  debugStateToFile = true;

  models = {
    [ContentTypeId.page]: new PageModel(),
    [ContentTypeId.website]: new WebsiteModel(),
  };

  views = {
    [ContentTypeId.page]: new PageView(),
    [ContentTypeId.header]: new HeaderView(),
    [ContentTypeId.footer]: new FooterView(),
    [ContentTypeId.section]: new SectionView(),
    [ContentTypeId.gridView]: new GridView(),
    [ContentTypeId.simpleView]: new SimpleView(),
  };

}