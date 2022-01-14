import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  width: fit-content;
  max-width: 750px;
  padding-right: 20px;
`;

export const CheckIcon = styled.img`
  height: 24px;
  width: 24px;
  margin-right: 16px;
  @media screen and (max-width: 992px) {
    height: 20px;
    width: 20px;
    margin-right: 12px;
  }
`;

export const ItemTitle = styled.h4`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  letter-spacing: -0.02em;
  color: #222222;
  @media screen and (max-width: 992px) {
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ItemSubtitle = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 137%;
  color: #868686;
  @media screen and (max-width: 992px) {
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
