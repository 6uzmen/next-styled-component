import Link from "next/link";
import { useState, useEffect, ReactElement } from "react";
import { NextPageContext } from 'next'
import { Badge } from "../../components/Badge/styles";
import { Content, Title, Subtitle } from "./styles";
import { caseStudies, defaultCase } from "../../utils/consts/caseStudyList";
import { ISeo } from "../../utils/interfaces/ISeo";
import { Seo } from "../../components/Seo";
import Layout from "../../components/Layout";

const keywords = "case-study, case, caso-de-estudio, caso, zircon, zircontech";

function CaseStudy({ caseStudy }) {
  const [selectedCase, setSelectedCase] = useState(defaultCase);
  const [seo, setSeo] = useState<ISeo>();

  useEffect(() => {
    caseStudy && loadCaseStudy();
  }, []);

  const loadCaseStudy = () => {
    const draftCase = caseStudies.find(
      ({ title }) => title.toLowerCase() === caseStudy.toLowerCase()
    );
    
    setSelectedCase(draftCase);
    setSeo({
      title: draftCase.title,
      description: draftCase.overview,
      keywords: `${keywords}, ${draftCase.title}`,
    });
  };

  return (
    <>
      <Seo {...seo} />
      <Content>
        <div className="row mt-5">
          <div className="col mt-5 text-center">
            <Title>{selectedCase.title}</Title>
            <Subtitle>{selectedCase.overview}</Subtitle>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img
              src={selectedCase.displayImage}
              className="w-100 rounded-top mt-3"
              alt="Case Study Image"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <h2>Challenge</h2>
            <p>{selectedCase.challenge}</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <h2>Solution</h2>
            <p>{selectedCase.solution}</p>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <h2>Technologies</h2>
            {selectedCase.technologies.map((tech, index) => (
              <a href={tech.url} target="_blank" key={index}>
                <Badge>{tech.name}</Badge>
              </a>
            ))}
          </div>
        </div>
      </Content>
    </>
  );
}

CaseStudy.getLayout = (page: ReactElement) => {
  return <Layout navBarVariant={true}>{page}</Layout>;
};

CaseStudy.getInitialProps = async (ctx: NextPageContext) => {
  const { caseStudy } = ctx.query;
  return { caseStudy };
};

export default CaseStudy;
