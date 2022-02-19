import { useRef } from "react";
import Banner from "./components/Banner";
import Slideshow from "./components/Slideshow";
import * as S from "./styles";
import { CaretLeft, CaretRight } from "../../components/CaretIcon";

export type TypeTestimonial = {
  title: string;
  paragraph: string;
  name: string;
  position: string;
  picture: string;
  logo: string;
  company: string;
};

const allTestimonials: TypeTestimonial[] = [
  {
    title: `ZirconTech excels in delivering time-critical work under pressure.`,
    paragraph: `We've had lots of critical releases and urgent go-lives for our customers. Zircon's team has always been able to deliver on time without compromising quality.`,
    name: `Lucas Henning`,
    position: `CTO`,
    picture: `/assets/images/webp/CTO-Suku.webp`,
    logo: `/assets/images/webp/suku.webp`,
    company: `SUKU`,
  },
  {
    title: `Their ability to respond even if there are chaotic situations has been impressive throughout the workflow.`,
    paragraph: `We achieve a great level of stability on our platform. Before them we had several unknown issues, several random errors. Website went from a D Level to an A Level on Speed Performance.`,
    name: `Sole Cánepa`,
    position: `Technical Operations Manager`,
    picture: `/assets/images/webp/SoleCanepa.webp`,
    logo: `https://pineapplefund.org/img/bitgive.png`,
    company: `Bitgive Foundation`,
  },
  {
    title: `They combined technical expertise, excellent acumen, and great knowledge in the market.`,
    paragraph: `Our client decided to extend the original service many times due to the quality of the engineering. Communication with Zircon was also vital to ensure we could capitalize every opportunity.`,
    name: `Miguel Martin`,
    position: `Director of Talent`,
    picture: `/assets/images/webp/Equteq.webp`,
    logo: `https://www.cognigy.com/hubfs/2020_Partner%20Marketing%20Material/Equteq_logos_purple_02.png`,
    company: `Equteq`,
  },
  {
    title: `Their experience and knowledge about Blockchain were outstanding.`,
    paragraph: `The final customer was really impressed by the experience and knowledge of the people involved. The project was delivered on time and the project was a success.`,
    name: `Gabriel Garro`,
    position: `Business Dev Manager`,
    picture: `/assets/images/webp/GabrielGarro.webp`,
    logo: `https://dividato.com/images/logo.png`,
    company: `Nearshore Software Development Company`,
  },
];

export default function ClientsAndTestimonials() {
  const childRef = useRef(null);
  return (
    <S.MainContainer>
      <S.TestimonialWrapper>
        <S.TitleContainer className="col-12 col-xl-6">
          <S.Label>success stories</S.Label>
          <S.Title>
            Why clients and partners <br />
            <span>
              trust in our technology <br />
              solutions
            </span>
          </S.Title>
        </S.TitleContainer>
        <div className="d-flex col-12 col-xl-6">
          <S.SlideBox
            direction={1}
            className="d-none d-lg-flex"
            onClick={() => childRef.current.doSwipe(-1)}
          >
            <CaretLeft />
          </S.SlideBox>
          <Slideshow ref={childRef} items={allTestimonials} />
          <S.SlideBox
            direction={0}
            className="d-none d-lg-flex"
            onClick={() => childRef.current.doSwipe(1)}
          >
            <CaretRight />
          </S.SlideBox>
        </div>
      </S.TestimonialWrapper>
      <Banner />
    </S.MainContainer>
  );
}
