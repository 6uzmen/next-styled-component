import Link from "next/link";
import { ICaseStudyDetail } from "../../utils/interfaces/ICaseStudyDetail";
import { ButtonWrapper, Card, Description } from "./styles";
import { Badge } from "../Badge/styles";
import { ButtonPrimary } from "../Button/styles";

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

        <Description>
          {technologies.map((tech, index) => (
            <a href={tech.url} target="_blank" key={index}>
              <Badge>{tech.name}</Badge>
            </a>
          ))}
          <Link href="case-study/[case]" as={link}>
            <div>
              <h4 className="mt-2">{title}</h4>
              <p className="text-justify">{overview}</p>
              <ButtonWrapper>
                <ButtonPrimary className="h-100">Read more</ButtonPrimary>
              </ButtonWrapper>
            </div>
          </Link>
        </Description>
      </Card>
    </>
  );
};

export default CardCaseStudy;
