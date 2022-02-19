import router from "next/router";
import React, { ReactElement } from "react";
import { ButtonPrimary } from "../../components/Button/styles";
import Layout from "../../components/Layout";
import * as S from "./styles";

export default function Team() {
  return (
    <div>
      <S.ContentWrapper className="d-flex flex-wrap col-12">
        <S.AboutTeamContainer className="col-12 align-items-center">
          <div className="px-5 col-12 col-xl-6">
            <S.TeamMemberLabel>Our Team</S.TeamMemberLabel>
            <S.TeamMemberName className="fw-normal">
              ZirconTech Management Team
            </S.TeamMemberName>
            <S.TeamImage
              className="col-12 d-md-none"
              src="/assets/images/webp/our-team.webp"
            />
            <S.TeamMemberDescription>
              We are a group of passionate about technology. For more than
              twenty years we have participated in challenging projects forming
              multicultural groups distributed in different countries, always
              working with state-of-the-art technology. In recent years we
              decided to join efforts to accompany multiple companies in the way
              of digital transformation. <br />
              <br />
              We have put our focus on Blockchain and IoT, but our experienced
              team of engineers is able to develop any type of application and
              carry out the most complex projects, designing and developing the
              technological solution from start to finish.
            </S.TeamMemberDescription>
            <ButtonPrimary
              className="mt-4"
              onClick={() => router.replace("/#contact")}
            >
              Contact Us
            </ButtonPrimary>
          </div>
          <S.TeamImage
            className="col-6 d-none d-xl-flex"
            src="/assets/images/webp/our-team.webp"
          />
        </S.AboutTeamContainer>
        <S.LeftContent className="col-12">
          <S.TeamMemberContainer className="mb-5">
            <S.ArrowIcon src="/assets/images/svg/icons/arrow-right-gradient-blue.svg" />
            <div>
              <S.TeamMemberLabel>Co-Founder and CEO</S.TeamMemberLabel>
              <S.TeamMemberName>Andres Zunino</S.TeamMemberName>
              <S.TeamMemberDescription>
                An experienced business leader with proven experience in sales
                and operations of technology companies. With a background in
                Civil Engineering and Business Administration, Andres has
                developed his career initially in construction companies and
                then in the telecommunications industry working at Operations in
                Ericsson where he oversaw the operations in several countries.
                In 2015 he invested in several startups with focus in emerging
                technologies, and in 2016 co-founded ZirconTech in the
                blockchain space with the domain expert Alejandro Narancio, CEO
                of Infuy.
              </S.TeamMemberDescription>
            </div>
          </S.TeamMemberContainer>
          <S.TeamMemberContainer className="my-5">
            <S.ArrowIcon src="/assets/images/svg/icons/arrow-right-gradient-blue.svg" />
            <div>
              <S.TeamMemberLabel>COO</S.TeamMemberLabel>
              <S.TeamMemberName>Martín Liguori</S.TeamMemberName>
              <S.TeamMemberDescription>
                He has been working in ZirconTech supporting the service
                delivery and now he is working as Chief Operating Officer.
                Before co-founding Infuy, another well-known software company in
                Uruguay, Martin worked in Tata Consultancy Services delivering
                services to global customers. He has extensive experience in web
                application development and cloud infrastructure in mission
                critical operations.
              </S.TeamMemberDescription>
            </div>
          </S.TeamMemberContainer>
          <S.TeamMemberContainer className="my-5">
            <S.ArrowIcon src="/assets/images/svg/icons/arrow-right-gradient-blue.svg" />
            <div>
              <S.TeamMemberLabel>CTO</S.TeamMemberLabel>
              <S.TeamMemberName>Williams Olivera</S.TeamMemberName>
              <S.TeamMemberDescription>
                A senior software and solution architect who has been leading
                several global projects in ZirconTech who is now defining the
                technology strategy and overseeing all technical aspects of the
                main projects in the company. He has been involved in key global
                projects in ZirconTech and has performed a key role in the
                competency development in different blockchain technologies like
                the evolution of Ethereum into Quorum, Hyperledger,
                Hedera/Hashgraph, R3 Corda, etc. He was one of the first R3
                Corda Certified Developers in Latin America. Williams is a
                Computer Science engineer who previously worked in the leading
                IT company from Uruguay Codigo del Sur.
              </S.TeamMemberDescription>
            </div>
          </S.TeamMemberContainer>
          <S.TeamMemberContainer className="my-5">
            <S.ArrowIcon src="/assets/images/svg/icons/arrow-right-gradient-blue.svg" />
            <div>
              <S.TeamMemberLabel>Board Member & Advisor</S.TeamMemberLabel>
              <S.TeamMemberName>Martin Machin</S.TeamMemberName>
              <S.TeamMemberDescription>
                Martin is a mentor, investor and advisor to companies in
                information and emerging technologies, and previously was
                managing partner in Pyxis, the fastest growing IT company in
                Uruguay in the last decade, expanding to Latin America and North
                America. Before that, Martin led the Global Delivery Center of
                Tata Consultancy Services in Montevideo and was Head of the
                Banking, Financial Services and Insurance Area of the operation.
                He also worked at IBM, Conaprole, and Banco Comercial which was
                later acquired by Scotiabank, and was Artificial Intelligence
                professor in the Universidad Católica del Uruguay.
              </S.TeamMemberDescription>
            </div>
          </S.TeamMemberContainer>
          <S.TeamMemberContainer className="my-5">
            <S.ArrowIcon src="/assets/images/svg/icons/arrow-right-gradient-blue.svg" />
            <div>
              <S.TeamMemberLabel>Board Member & Advisor</S.TeamMemberLabel>
              <S.TeamMemberName>Alejandro Narancio</S.TeamMemberName>
              <S.TeamMemberDescription>
                Alejandro is a thought leader in blockchain technologies,
                international speaker, university professor, RSK Rootstock
                ambassador and RIF product owner. Before co-founding Infuy,
                Alejandro worked for Tata Consultancy Services for several
                United States financial services companies, spending extensive
                time at onsite operations in Minneapolis, Miami, Los Angeles and
                New York City.
              </S.TeamMemberDescription>
            </div>
          </S.TeamMemberContainer>
        </S.LeftContent>
      </S.ContentWrapper>
    </div>
  );
}

Team.getLayout = (page: ReactElement) => {
  return <Layout navBarVariant={true}>{page}</Layout>;
};
