import React, { useState } from "react";
import { useEffect } from "react";
import { Context } from "vm";
import { caseStudies } from "../../utils/consts/caseStudyList";
import { ICaseStudyDetail } from "../../utils/interfaces/ICaseStudyDetail";

const defaultCase: ICaseStudyDetail = {
  title: "",
  overview: "",
  challenge: "",
  solution: "",
  displayImage: "",
  link: "",
  technologies: [],
};

function CaseStudy({ caseStudy }) {
  const [selectedCase, setSelectedCase] =
    useState<ICaseStudyDetail>(defaultCase);

  useEffect(() => {
    caseStudy && loadCaseStudy();
  }, []);

  const loadCaseStudy = () => {
    const draftCase = caseStudies.find(
      ({ title }) => title.toLowerCase() === caseStudy.toLowerCase()
    );
    setSelectedCase(draftCase);
  };

  return <div>Here we´ll have the case study of: {selectedCase.title}</div>;
}

export default CaseStudy;

CaseStudy.getInitialProps = async (ctx: Context) => {
  const { caseStudy } = ctx.query;
  return { caseStudy };
};
