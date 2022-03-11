import { ReactElement } from "react";
import { GetServerSidePropsContext } from "next";
import { Badge } from "../../components/Badge/styles";
import { Content, Title, Subtitle } from "./styles";
import { ISeo } from "../../utils/interfaces/ISeo";
import { Seo } from "../../components/Seo";
import Layout from "../../components/Layout";
import ContactUs from "../../containers/ContactUs";
import { ICaseStudyDetail } from "../../utils/interfaces/ICaseStudyDetail";
import { caseStudies } from "../../utils/consts/caseStudyList";

const keywords = "case-study, case, caso-de-estudio, caso, zircon, zircontech";

function CaseStudy({ caseStudy, seo }: {caseStudy: ICaseStudyDetail, seo: ISeo}) {

  return (
    <>
      <Seo {...seo} />
      <Content>
        <div className="row mt-5">
          <div className="col mt-5 text-center">
            <Title>{caseStudy.title}</Title>
            <Subtitle>{caseStudy.overview}</Subtitle>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img
              src={caseStudy.displayImage}
              className="w-100 rounded-top mt-3"
              alt="Case Study Image"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <h2>Challenge</h2>
            <p>{caseStudy.challenge}</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <h2>Solution</h2>
            <p>{caseStudy.solution}</p>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <h2>Technologies</h2>
            {caseStudy.technologies.map((tech, index) => (
              <a href={tech.url} target="_blank" key={index}>
                <Badge>{tech.name}</Badge>
              </a>
            ))}
          </div>
        </div>
      </Content>
      <ContactUs />
    </>
  );
}

CaseStudy.getLayout = (page: ReactElement) => {
  return <Layout navBarVariant={true}>{page}</Layout>;
};

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  
  const draftCase = caseStudies.find(
    ({ title }) => title.toLowerCase() === (ctx.query.caseStudy as string).toLowerCase()
  );

  return {
    props: {
      caseStudy: draftCase,
      seo: {
        title: draftCase.title,
        description: draftCase.overview,
        keywords: `${keywords}, ${draftCase.title}`
      }
    },
  };
};

export default CaseStudy;
