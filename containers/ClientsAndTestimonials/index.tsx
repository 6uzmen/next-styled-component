import React from "react";
import Banner from "./components/Banner/Banner";
import Slideshow from "./components/Slideshow";
import * as S from "./styles";

export type TypeTestimonial = {
  title: string;
  paragraph: string;
  name: string;
  position: string;
  picture: string;
  logo: string;
  company: string;
};

const allTestimonials: TypeTestimonial[] = [{
  title: `ZirconTech excels in delivering time-critical work under pressure.`,
  paragraph: `We've had lots of critical releases and urgent go-lives for our customers. Zircon's team has always been able to deliver on time without compromising quality.`,
  name: `Lucas Henning`,
  position: `CTO`,
  picture: `https://media-exp1.licdn.com/dms/image/C5103AQF_WjoV3QxPDw/profile-displayphoto-shrink_100_100/0/1517545035699?e=1646870400&v=beta&t=-umWk26RRDmz8wQ51cLHeqHYBhSNBW7Fgy9fCdoAkUg`,
  logo: `https://xylo-assets.s3.amazonaws.com/images/png/suku.png`,
  company: `SUKU`,
}, {
  title: `Their ability to respond even if there are chaotic situations has been impressive throughout the workflow.`,
  paragraph: `We achieve a great level of stability on our platform. Before them we had several unknown issues, several random errors. Website went from a D Level to an A Level on Speed Performance.`,
  name: `Sole Cánepa`,
  position: `Technical Operations Manager`,
  picture: `https://media-exp1.licdn.com/dms/image/C4E03AQEluVYBrDakWQ/profile-displayphoto-shrink_400_400/0/1577145865916?e=1647475200&v=beta&t=B3UfKL0KCV2_CKGE5TGIj1yBsY9nt3BMztk0341qHkE`,
  logo: `https://pineapplefund.org/img/bitgive.png`,
  company: `Bitgive Foundation`,
}, {
  title: `They combined technical expertise, excellent acumen, and great knowledge in the market.`,
  paragraph: `Our client decided to extend the original service many times due to the quality of the engineering. Communication with Zircon was also vital to ensure we could capitalize every opportunity.`,
  name: `Miguel Martin`,
  position: `Director of Talent`,
  picture: `https://media-exp1.licdn.com/dms/image/D5603AQF-pFog_0eMgQ/profile-displayphoto-shrink_400_400/0/1636058932766?e=1647475200&v=beta&t=GHvsZZ84n15sbaGGqnBIIkyFZx9So1EmhMuTlyFrBi8`,
  logo: `https://www.cognigy.com/hubfs/2020_Partner%20Marketing%20Material/Equteq_logos_purple_02.png`,
  company: `Equteq`,
}, {
  title: `Their experience and knowledge about Blockchain were outstanding.`,
  paragraph: `The final customer was really impressed by the experience and knowledge of the people involved. The project was delivered on time and the project was a success.`,
  name: `Gabriel Garro`,
  position: `Business Dev Manager`,
  picture: `https://media-exp1.licdn.com/dms/image/C4E03AQH02vr0iWK5gw/profile-displayphoto-shrink_400_400/0/1572460961189?e=1647475200&v=beta&t=AkGwxvqwW6C3ekUnZnX3rGDZl0ldXoc91DLG0Z8kqQI`,
  logo: `https://dividato.com/images/logo.png`,
  company: `Nearshore Software Development Company`,
}]


export default function ClientsAndTestimonials() {
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
        <Slideshow items={allTestimonials} />
      </S.TestimonialWrapper>
      <Banner />
    </S.MainContainer>
  );
}
