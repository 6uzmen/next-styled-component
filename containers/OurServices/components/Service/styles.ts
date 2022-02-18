import styled from "styled-components";

export const ServiceContainer = styled.div`
  display: flex;
  justify-content: start;
  padding: 20px 0;
  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }
`;

export const IconContainer = styled.div`
  height: 55px;
  width: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ServiceIcon = styled.img``;

export const ServiceTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const ServiceTitle = styled.h4`
  height: 55px;
  display: flex;
  align-items: center;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

export const ServiceSubtitle = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  color: #868686;
`;