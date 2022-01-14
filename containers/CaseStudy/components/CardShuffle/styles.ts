import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
`;

export const CardWrap = styled.div`
  width: 100%,
  position: relative,
`;

export const CardTitle = styled.h4`
  font-size: 20px;
`;

export const CardParagraph = styled.p`
  font-family: Roboto;
  font-size: 16px;
  line-height: 150%;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  display: flex;
  flex: wrap;
  flex-direction: column;
`;
