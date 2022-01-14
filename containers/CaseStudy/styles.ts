import styled from "styled-components";
import Image from "next/image";

export const CaseStudyContainer = styled.section`
  width: 100%;
  padding: 0px 10vw 0px 10vw;
  background-color: white;
  position: relative;
`;

export const CaseContainer = styled.div`
  font-family: Roboto;
  height: 240px;
  position: relative;
  margin-top: 20px;
  width:100%;
  display: flex,
  align-items: center,
  justify-content: center,
  @media screen and (max-width: 768px) {
    height: 400px,
  }
`;

export const CompanyLogo = styled.img<{ background?: string }>`
  position: absolute;
  transform: translate(-30%, -30%);
  top: 0;
  left: 0;
  height: 46px;
  width: 46px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${(p) => p?.background || "black"};
  padding: 5px;
`;

export const Link = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: #0083e6;
  & > img {
    width: auto !important;
    color: #0083e6;
    margin-right: 8px;
  }
`;

export const ContentContainer = styled.div``;

export const Label = styled.label`
  font-size: 14px;
  color: #bdbdbd;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  margin: 8px 0 0;
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

export const Subtitle = styled.p`
  font-family: Roboto;
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  color: #868686;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Paragraph = styled.p`
  padding-top: 20px;
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

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 300px;
  @media only screen and (min-width: 768px) {
    min-height: 450px;
    max-height: 500px;
  } ;
`;

export const NextImage = styled(Image)`
  height: 500px;
`;

export const Dot = styled.li<{ isSelected: boolean }>`
  transition: opacity 0.25s ease-in;
  opacity: 0.3;
  filter: alpha(opacity=30);
  background: ${(props) => (!props.isSelected ? "#C4C4C4" : "#fff")};
  border: 2px solid #c4c4c4;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  cursor: pointer;
  display: inline-block;
  margin: 0 19px 0 0;
`;

interface ArrowProps {
  isLeft?: boolean;
}

export const Arrow = styled.button<ArrowProps>`
  border: none;
  background: none;
  width: 50px;
  top: 0;
  left: ${(props) => (props.isLeft ? "-50px" : "")};
  right: ${(props) => (!props.isLeft ? "-50px" : "")};
  color: white;
  font-size: 26px;
  bottom: 0;
  margin-top: 0;
  padding: 5px;
  opacity: 0.4;
  transition: all 0.25s ease-in;
  :hover {
    opacity: 0.7;
  }
  ::before {
    border-right: ${(props) => (props.isLeft ? "10px solid #000" : "")};
    border-left: ${(props) => (!props.isLeft ? "10px solid #000" : "")};
    margin: 0 5 px;
    display: inline-block;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    content: "";
  }
`;
