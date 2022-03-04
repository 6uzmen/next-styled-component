import React from "react";
import Link from "next/link";
import { ICaseStudyDetail } from "../../utils/interfaces/ICaseStudyDetail";
import { Card, Badge } from "./styles";

const CardCaseStudy = (caseStudy: ICaseStudyDetail) => {
  const { displayImage, title, overview, technologies, link } = caseStudy;

  return (
    <Link href="case-study/[case]" as={link}>
      <Card>
        <img className="w-100 rounded-top" src={displayImage} alt="Suku Infinite" />
        <div className="p-2">
          {technologies.map((name, index) => (
            <Badge key={index}>{name}</Badge>
          ))}
          <h4 className="mt-2">{title}</h4>
          <p className="text-justify">{overview}</p>
        </div>
      </Card>
    </Link>
  );
};

export default CardCaseStudy;
