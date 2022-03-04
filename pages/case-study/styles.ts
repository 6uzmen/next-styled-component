import styled from "styled-components";

export const Content = styled.div`
  padding: 0 10vw;
  margin: 10vh 0;
`;

export const Title = styled.h2`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  line-height: 120%;
  letter-spacing: -0.04em;
  color: #222222;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.h2`
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 120%;
  letter-spacing: -0.04em;
  color: #222222;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
