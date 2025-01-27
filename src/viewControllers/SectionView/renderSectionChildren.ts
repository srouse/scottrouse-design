import { Entry } from "contentful";
import { BaseController, html } from "scu-ssg";
import { IEmployer, IPortfolioEntry, ISection } from '../../@types/generated/contentful';
import style from "@srouse/-scottrouse-design-system/transformations/fds-web/style";
import renderLayouts from "../../utils/renderLayouts";
import EmployerCard from "../../views/components/EmployerCard";
import Divider from "../../views/components/Divider";
import Grid from "../../views/components/Grid";

type EmployerContentTypeId = IEmployer['sys']['contentType']['sys']['id'];
type PortfolioContentTypeId = IPortfolioEntry['sys']['contentType']['sys']['id'];

export default async function renderSectionChildren(
    entry: Entry<unknown> | null | undefined,
    controller: BaseController
  ) {
    const section = entry as unknown as ISection;
    let isEmployerSection = true;
    let isPortfolioSection = true;
    const employerContentTypeId: EmployerContentTypeId = "employer";
    const portfolioContentTypeId: PortfolioContentTypeId = "portfolioEntry";
    section.fields.views?.map(view => {
      if (view.sys.contentType.sys.id !== employerContentTypeId) {
        isEmployerSection = false;
      }
      if (view.sys.contentType.sys.id !== portfolioContentTypeId) {
        isPortfolioSection = false;
      }
    });

    // Employers...
    if (isEmployerSection) {
      const employerHTML: any[] = [];
      const totalEmployers = section.fields.views?.length || 0;
      section.fields.views?.map((view, index) => {
        const employer = view as unknown as IEmployer;
        employerHTML.push(EmployerCard(
          employer.fields.jobTitles,
          employer.fields.sizeStat,
          employer.fields.logoHorizontal?.fields.file.url,
          employer.fields.title
        ));
        if (index < totalEmployers-1) {
          employerHTML.push(Divider())
        }
      });
      const gridHtml = html`
        <div ${style({
            marginTop: 'spacing-2',
            marginBottom: 'spacing-4'
          })}>
            ${Grid(
                undefined,
                employerHTML,
                4
            )}
        </div>`;
      return [gridHtml];
    }

    
    if (isPortfolioSection) {
      const portfolioHTML: any[] = [];
      const totalPortfolios = section.fields.views?.length || 0;
      section.fields.views?.map((view, index) => {
        const portfolio = view as unknown as IPortfolioEntry;
        portfolioHTML.push(EmployerCard(
          portfolio.fields.title,
          portfolio.fields.year,
          portfolio.fields.mainImage?.fields.file.url,
          portfolio.fields.title
        ));
        if (index < totalPortfolios-1) {
          portfolioHTML.push(Divider())
        }
      });
      const gridHtml = html`
        <div ${style({
            marginTop: 'spacing-2',
            marginBottom: 'spacing-4'
          })}> 
            ${Grid(
                undefined,
                portfolioHTML,
                4
            )}
        </div>`;
      return [gridHtml];
    }

    return await renderLayouts(controller, section.fields.views);
}