import React, { ReactElement } from "react";
import HorizontalMenu from "../../components/HorizontalMenu";
import * as S from "./styles";
import { MenuItems } from "./menuItems";
import CaseStudyDetail, {
  CaseStudyDetailType,
} from "../../containers/CaseStudyDetail";
import Layout from "../../components/Layout";

export const caseStudy: CaseStudyDetailType = {
  title: `Givetrack 🍃`,
  overview: `GiveTrack™ is an innovative donation platform for nonprofits to provide transparency and accountability to donors by sharing financial information and direct project results in real-time. The platform helps nonprofits overcome breakdowns and challenges to do their work without limitations.`,
  challenge: `One issue with charities is donors never know for sure how much of the funds they give actually make it to the intended cause. GiveTrack solves that problem by bringing transparency to the donation process. By using Bitcoin and blockchain technology, the web-based project allows donors to give to a cause and then track the progress of those funds in real-time, thereby reducing opportunities for fraud.`,
  solution: `ZirconTech was in charge of the frontend and backend development. We designed and implemented the solution that included communication with API Blockchain (RootStock), the back-end API (built with Node.JS) under the infrastructure of AWS and Jenkins CI and the front-end using React.JS. Once the implementation was finished, we took over the maintenance, support and development of new functionalities.  `,
  displayImage: `https://xylo-assets.s3.amazonaws.com/images/png/givetrack-study.png`,
  link: `/case-study/givetrack`,
};

export default function Givetrack() {
  return (
    <div>
      <S.Content className="d-flex flex-wrap gap-3">
        <div className="flex-grow-1 d-none d-xl-flex">
          <HorizontalMenu
            active="givetrack"
            className="flex-grow-1 col-12"
            items={MenuItems}
          />
        </div>
        <CaseStudyDetail caseStudy={caseStudy} />
      </S.Content>
    </div>
  );
}

Givetrack.getLayout = (page: ReactElement) => {
  return <Layout navBarVariant={true}>{page}</Layout>;
};
