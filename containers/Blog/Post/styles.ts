import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 100%;
  min-height: 288px;
  background-color: #002432;
  position: relative;
  @media only screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const TextDate = styled.span`
  font-size: 14px;
  color: #dddddd;
  font-weight: 500;
  font-family: Roboto;
  text-transform: uppercase;
`;

export const Title = styled.h3`
  font-size: 22px;
  font-weight: 400;
  color: #fff;
  font-family: Rubik;
  margin-top: 12px;
  @media only screen and (max-width: 767px) {
    font-size: 22px;
  }
`;

interface LinkProps {
  readonly isAbsolute?: boolean;
}

export const Link = styled.a<LinkProps>`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: #0393ff;
  position: ${(props) => (props.isAbsolute ? "absolute" : "relative")};
  bottom: ${(props) => (props.isAbsolute ? "30px" : 0)};
  & > img {
    margin-right: 8px;
  }
`;
