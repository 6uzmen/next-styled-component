import React, { ReactElement } from "react";
import Head from "../../components/Head";
import HorizontalMenu from "../../components/HorizontalMenu";
import Navbar from "../../components/Navbar";
import * as S from "./styles";
import { MenuItems } from "./menuItems";
import CaseStudyDetail, {
  CaseStudyDetailType,
} from "../../containers/CaseStudyDetail";
import Layout from "../../components/Layout";

export const caseStudy: CaseStudyDetailType = {
  title: `✨Infinite✨`,
  overview: `Infinite will use its platform to securely create and sell verifiable non-fungible tokens that represent the authenticity of both digital and physical products. These tokens will be transacted in their marketplace.`,
  challenge: `SUKU needed an attractive marketplace and at the same time a cost-effective, secure, and scalable way to prove digital and physical asset authenticity and ownership by brands and customers that require a high degree of trust.`,
  solution: `ZirconTech was part of the core team that developed the different parts of the platform. Hedera Token Service (HTS) was used to strengthen the trust between brands, customers, and marketplace participants. The system guarantees the scalability to millions of users through a backend infrastructure built in AWS ecosystem running NodeJs (NestJs) backed up by a MongoDB data layer. Quality aspects were ensured through  unit and integration tests as well as interface tests with Cypress Lastly, the frontend was developed using React.js first and then Svelte.js. We were using Svelte and SvelteKit working in pairs with a design team to power the use of a custom UI library and a defined set of development guidelines. `,
  displayImage: `https://xylo-assets.s3.amazonaws.com/images/png/suku-infinite.png`,
  link: `/case-study/infinite`,
};

export default function Infinite() {
  return (
    <div>
      <Navbar variant={true} />
      <Head />
      <S.Content className="d-flex flex-wrap gap-3">
        <div className="flex-grow-1 d-none d-xl-flex">
          <HorizontalMenu
            active="infinite"
            className="flex-grow-1 col-12"
            items={MenuItems}
          />
        </div>
        <CaseStudyDetail caseStudy={caseStudy} />
      </S.Content>
    </div>
  );
}

Infinite.getLayout = (page: ReactElement) => {
  return <Layout navBarVariant={true}>{page}</Layout>;
};
