import styled from "styled-components";

interface IBlogContainer {
  image: string;
}

export const BlogContainer = styled.section<IBlogContainer>`
  padding: 56px 20px 30px;
  background-color: #000;
  @media only screen and (min-width: 768px) {
    background-color: #021419;
    padding: 80px 10% 30px;
    width: 100%;
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
`;

export const Label = styled.span`
  font-size: 14px;
  color: #ddd;
  font-weight: 500;
`;

export const Title = styled.h3`
  font-size: 42px;
  font-weight: 400;
  color: #fff;
  margin: 8px 0 24px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #868686;
  margin-bottom: 24px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 300px;
  @media only screen and (min-width: 768px) {
    min-height: 350px;
    max-height: 500px;
  } ;
`;
