import Layout from "../../components/Layout";
import CardCaseStudy from "../../components/CardCaseStudy";
import { ReactElement } from "react";
import { caseStudies } from "../../utils/consts/caseStudyList";
import classes from "./CaseStudies.module.css";

function CaseStudies() {
  const { containerPadding } = classes;

  return (
    <div className={`container-fluid ${containerPadding}`}>
      <div className="row mt-5">
        <div className="col mt-4">
          <h1>Case Studies</h1>
          <h4>See what we do and how we do it</h4>
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
    </div>
  );
}

CaseStudies.getLayout = (page: ReactElement) => {
  return <Layout navBarVariant={true}>{page}</Layout>;
};

export default CaseStudies;
