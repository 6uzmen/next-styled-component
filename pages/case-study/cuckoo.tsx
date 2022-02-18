import React, { ReactElement } from "react";
import HorizontalMenu from "../../components/HorizontalMenu";
import * as S from "./styles";
import { MenuItems } from "./menuItems";
import CaseStudyDetail, { CaseStudyDetailType } from "../../containers/CaseStudyDetail";
import Layout from "../../components/Layout";

export const caseStudy: CaseStudyDetailType = {
  title: `Cuckoo 🎵`,
  overview: `Cuckoo Links allows you to create a link-in-bio landing page with links to not only major streaming platforms, but beat markets for producers, indie stores, indie streaming platforms, YouTube videos, custom URL's like your website or merch store and much more.`,
  challenge: `The music industry is becoming more competitive and it is difficult, mainly for independent artists, to create and maintain a place where they can have up-to-date information about their music and social networks. Added to this is the impossibility of publishing more than one link on some social networks (eg Instagram) which makes it necessary to have a single url with which you can access all the information about each artist.`,
  solution: `We designed and developed a mobile application (Android and iOS) that works as a CMS (Content Management Service) that allows artists to unify all the information from streaming platforms and social networks in a single link. The application was developed using React Native with a backend in Node.JS. All the infrastructure is in Amazon Web Services. It also has an integration with Google analytics that allows obtaining information about the engagement generated. Both the backoffice and the web page that is generated from the CMS were developed in React.JS`,
  displayImage: `https://xylo-assets.s3.amazonaws.com/images/png/cuckoo-study.png`,
  link: `/case-study/cuckoo`
}

export default function Cuckoo() {
  return (
    <div>
      <S.Content className="d-flex flex-wrap gap-3">
        <div className="flex-grow-1 d-none d-xl-flex">
          <HorizontalMenu active="cuckoo" className="flex-grow-1 col-12" items={MenuItems} />
        </div>
        <CaseStudyDetail caseStudy={caseStudy} />
      </S.Content>
    </div>
  );
}

Cuckoo.getLayout = (page: ReactElement) => {
  return (
    <Layout navBarVariant={true}>
      {page}
    </Layout>
  )
}