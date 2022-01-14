import styled from "styled-components";

export const TestimonialContainer = styled.div`
`;

export const TestimonialTitle = styled.h4`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #222222;
  @media screen and (max-width: 1200px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const TestimonialParagraph = styled.p`
  max-width: 700px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #868686;
  margin-top: 10px;
  margin-bottom: 0;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ClientContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0;
`;

export const ClientAvatar = styled.img`
  border-radius: 50%;
  height: 48px;
  width: 48px;
  background-color: #dddddd;
`;

export const ClientInformationContainer = styled.div`
  padding: 0 20px;
  border-right: 1px solid #dddddd;
`;

export const ClientName = styled.h5`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: #222222;
  margin: 0 0 2px 0;
`;

export const ClientPosition = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #868686;
`;

export const CompanyLogo = styled.img`
  margin-left: 40px;
  height: 60px;
`;

export const DotContainer = styled.div`
  display: flex;
`;

export const Dot = styled.div<{ active: boolean }>`
  margin: 0 10px 0 0;
  height: 10px;
  width: 10px;
  background: ${(p) => (p.active ? "#0883e0" : "#dfdfdf")};
  border-radius: 50%;
`;
