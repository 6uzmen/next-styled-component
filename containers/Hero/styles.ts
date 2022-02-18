import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  z-index: 0;
`;

export const BackgroundColor = styled.div`
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -2;
`;

export const LandingContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

export const TitleContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: calc(50% - 20px);
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
  width: 100%;
  color: white;
  text-align: center;
  text-transform: capitalize;
  font-size: 34px;
  @media screen and (max-width: 988px) {
    font-size: 24px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const BackgroundVideoContainer = styled.div<{ scale: number }>`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(p) => `calc(${p.scale} * 100vh)`};
  overflow: hidden;
  background: linear-gradient(
    180deg,
    #000000 0%,
    rgba(0, 0, 0, 0) 66.15%,
    #000000 92.19%
  );
`;

export const BackgroundVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`;

export const AwardsContainer = styled.div`
  position: absolute;
  bottom: 40px;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AwardImage = styled.img`
  height: 58px;
  width: fit-content;
  max-width: 40%;
  @media screen and (max-width: 768px) {
    height: 89px;
    width: 318px;
    max-width: none;
  }
`;