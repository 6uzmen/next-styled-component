import styled from "styled-components";

export const AboutUsContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 1200px) {
    height: 90vh;
  }
  @media screen and (max-width: 988px) {
    height: fit-content;
    padding: 40px 0;
  }
`;

export const AboutUsSection = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: center;
  margin: auto 0;
  @media screen and (max-width: 988px) {
    margin: 40px 0 10px 0;
  }
  @media screen and (max-width: 768px) {
    align-items: none;
    margin: 0;
  }
`;

export const SectionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding: 0 0 0 10%;
  @media screen and (max-width: 1200px) {
    padding: 40px 10%;
  }
`;

export const SectionName = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  text-transform: uppercase;
  color: #bdbdbd;
`;

export const SectionTitle = styled.h2`
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 42px;
  line-height: 120%;
  letter-spacing: -0.04em;
  color: #000000;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const SectionSubtitle = styled.p`
  font-family: Roboto;
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  color: #868686;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ItemsWrapper = styled.div`
  display: flex;
  padding: 0 10%;
  margin: auto 0 50px 0;
  width: 100%;
  justify-content: space-between;
  flex-basis: fit-content;
  @media screen and (max-width: 988px) {
    margin: 50px 0 50px 0;
  }
`;