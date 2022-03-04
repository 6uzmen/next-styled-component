import Layout from "../../components/Layout";
import CardCaseStudy from "../../components/CardCaseStudy";
import { ReactElement } from "react";
import { caseStudies } from "../../utils/consts/caseStudyList";
import { Content, Title, Subtitle } from "./styles";

function CaseStudies() {
  return (
    <Content>
      <div className="row mt-5">
        <div className="col mt-4 text-center">
          <Title>Case Studies</Title>
          <Subtitle>See what we do and how we do it</Subtitle>
        </div>
      </div>
      <div className="row">
        {caseStudies.map((caseStudy, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 mt-4 d-flex align-items-stretch"
          >
            <CardCaseStudy {...caseStudy} />
          </div>
        ))}
      </div>
    </Content>
  );
}

CaseStudies.getLayout = (page: ReactElement) => {
  return <Layout navBarVariant={true}>{page}</Layout>;
};

export default CaseStudies;
