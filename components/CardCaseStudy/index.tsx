import Link from "next/link";
import { ICaseStudyDetail } from "../../utils/interfaces/ICaseStudyDetail";
import { Card } from "./styles";
import { Badge } from "../Badge/styles";

const CardCaseStudy = (caseStudy: ICaseStudyDetail) => {
  const { displayImage, title, overview, technologies, link } = caseStudy;

  return (
    <>
      <Card>
        <Link href="case-study/[case]" as={link}>
          <img
            className="w-100 rounded-top"
            src={displayImage}
            alt="Suku Infinite"
          />
        </Link>

        <div className="p-3">
          {technologies.map((tech, index) => (
            <a href={tech.url} target="_blank" key={index}>
              <Badge>{tech.name}</Badge>
            </a>
          ))}
          <Link href="case-study/[case]" as={link}>
            <div>
              <h4 className="mt-2">{title}</h4>
              <p className="text-justify">{overview}</p>
            </div>
          </Link>
        </div>
      </Card>
    </>
  );
};

export default CardCaseStudy;
