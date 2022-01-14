import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: white;
  position: relative;
  overflow: hidden;
  padding: 40px 0;
`;

export const TestimonialWrapper = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  padding: 10vh 10% 10vh 10%;
  background-image: url("https://xylo-assets.s3.amazonaws.com/images/svg/bg-testimonials.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: content-box;
  @media screen and (max-width: 1200px) {
    padding: 10vh 10% 0 10%;
  }
`;

export const BreakWord = styled.span`
  white-space: initial;
`;

export const TitleContainer = styled.div`
  position: relative;
`;

export const QuoteIcon = styled.img`
  position: absolute;
  left: 50%;
  top: 70%;
`;

export const Label = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  text-transform: uppercase;
  color: #bdbdbd;
`;

export const Title = styled.h2`
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 42px;
  line-height: 120%;
  letter-spacing: -0.04em;
  color: #222222;
  margin-top: 10px;
  span {
    font-weight: 500;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
