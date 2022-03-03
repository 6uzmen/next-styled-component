import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./CardCaseStudy.module.css";
import { ICaseStudyDetail } from "../../utils/interfaces/ICaseStudyDetail";

const CardCaseStudy = (caseStudy: ICaseStudyDetail) => {
  const { displayImage, title, overview, technologies, link } = caseStudy;

  const { badge, justifyText, card } = classes;

  return (
    <Link href="case-study/[case]" as={link}>
      <div className={`${card} rounded`}>
        <Image
          className="rounded-top"
          src={displayImage}
          alt="Suku Infinite"
          layout="responsive"
          height="50%"
          width="100%"
          quality={100}
          priority
        />
        <div className="p-2">
          {technologies.map((name, index) => (
            <span key={index} className={badge}>
              {name}
            </span>
          ))}
          <h4 className="mt-2">{title}</h4>
          <p className={justifyText}>{overview}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardCaseStudy;
