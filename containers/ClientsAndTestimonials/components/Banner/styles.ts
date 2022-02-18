import styled, { keyframes } from "styled-components";

export const BannerContainer = styled.div`
  overflow: hidden;
  position: relative;
`;

const slide = keyframes`
    from {
      background-position-x: 0;
    }
    to {
      background-position-x: -3220px;
    }
`;

const slideSm = keyframes`
    from {
      background-position-x: 0;
    }
    to {
      background-position-x: -2086px;
    }
`;

export const Banner = styled.div`
  overflow: hidden;
  width: 3220px;
  height: 186px;
  background-image: url("https://xylo-assets.s3.amazonaws.com/images/png/banner.png");
  background-size: 3220px 186px;
  animation: ${slide} 30s linear infinite;
  @media screen and (max-width: 768px) {
    height: 120px;
    width: 2086px;
    animation: ${slideSm} 30s linear infinite;
    background-size: 2086px 120px;
  }
`;