import Item from "./components/Item"
import Slideshow from "./components/Slideshow"
import * as S from "./styles";
import { ButtonPrimary } from "../../components/Button/styles";
import router from "next/router";

const itemsArray = [
  {
    name: `Clear and continuous communication`,
    description: `When working with remote teams it is critical to maintain fluid communication. We adapt to our clients' communication tools to make sure this is possible. We prefer the use of instant communication tools to ensure fast interaction. We also have escalation mechanisms so that customers always receive a response to their interactions in a timely manner.`,
  },
  {
    name: `Control of project deliverables`,
    description: `To achieve this, collaboration is essential. Also good communication as well as being aligned with the times and culture of our clients. Finally, the use of agile methodologies (and in particular their components) is our great bet so that our clients have real control of the project.`,
  },
  {
    name: `On time delivery`,
    description: `Regarding this point there are no secrets. The first thing that is needed is good planning (based on a precise and detailed definition of requirements). Then you have to choose the developers with the right profile. Finally, working with the client as a single team, closely monitoring the project through the use of agile methodologies.`,
  },
  {
    name: `Low risk projects`,
    description: `We know how important it is to minimize the risk of a project. This is why, on the one hand, we ensure transparency in project management and control over the deliverables and times involved. But, no less important, is to ensure that all information management is protected by an NDA and that intellectual property is always on the client's side.`,
  },
];

export default function AboutUs() {
  return (
    <S.AboutUsContainer id="about-us" className="d-xl-flex d-auto">
      <S.AboutUsSection>
        <S.SectionTextContainer className="col-12 col-xl-4">
          <S.SectionName>ABOUT US</S.SectionName>
          <S.SectionTitle className="mt-2">
            Agile, Nearshore and <span className="fw-normal">Experienced</span>{" "}
          </S.SectionTitle>
          <S.SectionSubtitle className="mt-2">
            With over Twenty years of experience, our team has participated in
            diverse projects comprised of teams from around the world. We make
            use of Agile Methodologies to deliver winning digital experiences to
            our clients.
          </S.SectionSubtitle>
          <ButtonPrimary
            className="mt-2 py-4 px-4"
            onClick={() => {
              router.push("/our-team");
            }}
          >
            Our Team
          </ButtonPrimary>
        </S.SectionTextContainer>
        <Slideshow />
      </S.AboutUsSection>
      <S.ItemsWrapper className="d-none d-md-flex flex-wrap">
        {itemsArray.map((item, index) => (
          <div key={`item${index}`} className="col-6 py-4">
            <Item title={item.name} subtitle={item.description} />
          </div>
        ))}
      </S.ItemsWrapper>
    </S.AboutUsContainer>
  );
}
