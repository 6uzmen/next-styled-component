import styled from "styled-components";

export const ContentWrapper = styled.div`
  padding: 0 10vw;
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 768px) {
    padding: 0 5vw;
    margin: 80px 0;
  }
`;

export const LeftContent = styled.div`
  padding: 40px 5%;
`;

export const RightContent = styled.div``;

export const AboutTeamContainer = styled.div`
  min-height: 100vh;
  display: flex;
  position: relative;
  @media screen and (max-width: 768px) {
    align-items: start;
  }
`;

export const TeamMemberContainer = styled.div`
  display: flex;
  align-items: start;
`;

export const ArrowIcon = styled.img`
  padding: 0 10px;
  margin: 36px 0;
  @media screen and (max-width: 768px) {
    height: 20px;
    padding: 0 10px;
    margin: 32px 0;
  }
`;

export const TeamMemberLabel = styled.label`
  font-size: 14px;
  color: #bdbdbd;
  margin: 0;
`;

export const TeamMemberName = styled.h1`
  margin: 5px 0 0;
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 42px;
  line-height: 120%;
  letter-spacing: -0.04em;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const TeamMemberDescription = styled.p`
  padding-top: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  color: #868686;
  max-width: 700px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const TeamMemberLink = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: #0883e0;
  & > img {
    width: auto !important;
    margin-right: 8px;
  }
`;

export const TeamImage = styled.img`
  object-fit: cover;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export default {};
