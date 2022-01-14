import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  z-index: -2;
`;

export const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 10% 80px 10%;
  height: fit-content;
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 120px 10% 40px 10%;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
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
  color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const SectionSubtitle = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  color: #868686;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 40px 0;
  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }
`;
