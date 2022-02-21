import { useMediaQuery } from "react-responsive";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ButtonPrimary } from "../../components/Button/styles";
import Mockup from "./components/Mockup";
import { CardTest } from "./components/CardShuffle/test";
import { useState } from "react";
import * as S from "./styles";

export type CaseStudieType = {
  title: string;
  description: string;
  src: string;
  displayImage: string;
  link: string;
  iconBackground?: string;
  id: string;
};

const allCaseStudies: CaseStudieType[] = [
  {
    title: "Infinite",
    description:
      "SUKU Infinite will use its platform to securely create and sell verifiable non-fungible tokens that represent the authenticity of both digital and physical products. These tokens will be transacted in their marketplace ",
    src: "/assets/images/webp/suku-illustration-only.webp",
    displayImage: '/assets/images/webp/suku-infinite.webp',
    link: "/case-study/infinite",
    id: 'infinite'
  },
  {
    title: "Cuckoo",
    description: `Cuckoo Links allows you to create a link-in-bio landing page with links to not only major streaming platforms, but beat markets for producers, YouTube videos, custom URL's like your website or merch store and much more.`,
    src: "/assets/images/webp/cuckoo.webp",
    displayImage: '/assets/images/webp/cuckoo-study.webp',
    link: "/case-study/cuckoo",
    id: 'cuckoo'
  },
  {
    title: "Givetrack",
    description:
      "GiveTrack™ is an innovative donation platform for nonprofits to provide transparency and accountability to donors by sharing financial information and direct project results in real-time.",
    src: "/assets/images/webp/bitgive.webp",
    displayImage: '/assets/images/webp/givetrack-study.webp',
    iconBackground: 'white',
    link: "/case-study/givetrack",
    id: 'givetrack'
  },
  {
    title: "Monax",
    description:
      "Monax is a contract lifecycle management platform which allows consumers to easily procure lawyer-tested agreements and stay in full control of their business contracts.",
    src: "/assets/images/webp/monax.webp",
    displayImage: '/assets/images/webp/monax-study.webp',
    link: "/case-study/monax",
    id: 'monax'
  },
];

export default function CaseStudy() {
  const isMediumDevice = useMediaQuery({ query: "(max-width: 988px)" });
  const [currentCase, setCurrentCase] = useState<any>(allCaseStudies[0]);
  
  return (
    <S.CaseStudyContainer id="case-study" className="d-flex flex-wrap">
      <S.ContentContainer className="col-12 col-xl-4">
        <S.Label>case studies</S.Label>
        <S.Title>
          Some of the projects we
          <br />
          <span className="fw-normal">Were working on</span>
        </S.Title>
        <S.CaseContainer>
          <CardTest setCurrentCase={(x: any) => setCurrentCase(x)} items={allCaseStudies} />
        </S.CaseContainer>
        <ButtonPrimary
          className="mt-5 py-4 px-4"
          onClick={() => window.scrollTo(0, document.body.scrollHeight)}
        >
          Get a quote
        </ButtonPrimary>
      </S.ContentContainer>
      {!isMediumDevice && (
        <div className="col-12 col-xl-8 position-relative">
          <Mockup caseStudy={currentCase} />
        </div>
      )}
    </S.CaseStudyContainer>
  );
}