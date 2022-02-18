import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #021419;
  width: 100%;
`;

export const FooterWrapper = styled.div`
  min-height: 60px;
  height: fit-content;
  display: flex;
  align-items: center;
`;

export const Copyright = styled.span`
  font-size: 14px;
  height: 100%;
  display: flex;
  align-items: center;
  color: white;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
`;

export const SocialMediaIconWrapper = styled.a`
  cursor: pointer;
  margin: 0 10px;
`;

export const SocialMediaIcon = styled.img`
  svg {
    fill: white;
  }
`;