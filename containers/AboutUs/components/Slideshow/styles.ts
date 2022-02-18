import styled, { keyframes } from "styled-components";

export const SlideshowContainer = styled.div`
  overflow: hidden;
  border-radius: 5px 0 0 5px;
  position: relative;
  margin-top: 20px;
`;

const slide = keyframes`
    from {
      background-position-x: 0;
    }
    to {
      background-position-x: -2674px;
    }
`;

const slideSm = keyframes`
    from {
      background-position-x: 0;
    }
    to {
      background-position-x: -1440px;
    }
`;

export const Slideshow = styled.div`
  overflow: hidden;
  width: 100%;
  height: 432px;
  background-image: url("https://xylo-assets.s3.amazonaws.com/images/png/aboutUs.png");
  background-size: 2674px 432px;
  animation: ${slide} 30s linear infinite;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
    background-image: url("https://xylo-assets.s3.amazonaws.com/images/png/aboutUs-sm.png");
    width: 100%;
    height: 229px;
    background-size: 1440px 229px;
    animation: ${slideSm} 30s linear infinite;
  }
`;

export const Rectangle = styled.img`
  position: absolute;
`;

Rectangle.defaultProps = {
  src: "https://xylo-assets.s3.amazonaws.com/images/svg/icons/rectangle.svg",
};