import React from "react";
import { ButtonPrimary } from "../../components/Button/styles";
import Service from "./components/Service";
import Slideshow from "./components/Slideshow";
import * as S from "./styles";

const iconsRoute = "/assets/images/svg/services/";
export type ServiceType = {
  name: string;
  icon: string;
  description: string;
  link: string;
};
const allServices: ServiceType[] = [
  {
    name: "Blockchain",
    icon: `${iconsRoute}blockchain.svg`,
    description:
      "We are a pioneer blockchain development company in pursuit of transforming industries around the world.",
    link: "/info/zircontech-services-blockchain",
  },
  {
    name: "IOT",
    icon: `${iconsRoute}iot.svg`,
    description:
      "Our experience in development and open source tools, positions us to handle all kinds of new digitally connected devices.",
    link: "/info/zircontech-services-iot",
  },
  {
    name: "Cloud",
    icon: `${iconsRoute}cloud.svg`,
    description:
      "We deliver consultancy services for cloud adoption strategy, application transformation, and support.",
    link: "/info/zircontech-services-cloud-consultancy",
  },
  {
    name: "Artificial Intelligence",
    icon: `${iconsRoute}ia.svg`,
    description:
      "We have certified experts that can help you explore the best AI opportunities to capture new markets, grow revenue, enhance profitability.",
    link: "/info/zircontech-services-ai",
  },
];

export default function OurServices() {

  return (
    <S.ServicesContainer id="services">
      <S.Background />
      <S.SectionContainer className="col-12 col-xl-6">
        <S.SectionName>OUR SERVICES</S.SectionName>
        <S.SectionTitle className="mt-2">
          <span className="fw-regular">Digital transformation with</span>
          <br /> custom-made web and mobile software solutions
        </S.SectionTitle>
        <S.SectionSubtitle className="py-3">
          We build mobile and web apps using the most widely spread
          technologies. Leveraging on our experience in Agile Methodologies,
          cross-industries knowledge, and UX/UI tactics to help companies excel
          in their digital strategy.
        </S.SectionSubtitle>
        <ButtonPrimary
          className="py-4 px-4"
          onClick={() => window.scrollTo(0, document.body.scrollHeight)}
        >
          Get a quote
        </ButtonPrimary>
      </S.SectionContainer>
      <S.ServicesWrapper className="mt-5 d-none d-lg-flex">
        {allServices.map((service, index) => (
          <Service
            key={service.name + index}
            className="col-6"
            title={service.name}
            subtitle={service.description}
            icon={service.icon}
            link={service.link}
          />
        ))}
      </S.ServicesWrapper>
      <Slideshow items={allServices} />
    </S.ServicesContainer>
  );
}