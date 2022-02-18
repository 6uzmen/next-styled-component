import styled from "styled-components";

export const Content = styled.div`
  padding: 0 10vw;
  margin: 10vh 0;
  @media screen and (max-width: 768px) {
    padding: 16px 5%;
  }
`;

export const PreviewsWrapper = styled.div`
  overflow: auto;
  border-radius: 8px;
  height: 80vh;
  @media screen and (max-width: 1200px) {
    height: fit-content;
  }
`;

export const PreviewContainer = styled.div`
  min-height: 300px;
  background: #f6f6f6;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const PreviewImage = styled.img`
  margin: 0;
  object-fit: cover;
`;

export const Title = styled.h1`
  margin: 8px 0 0;
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 42px;
  line-height: 120%;
  letter-spacing: -0.04em;
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

export const PreviewTitle = styled.h1`
  margin: 8px 0 0;
  font-family: Rubik;
  font-style: normal;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 34px;
  line-height: 120%;
  letter-spacing: -0.04em;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const PreviewDescription = styled.p`
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