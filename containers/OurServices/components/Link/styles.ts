import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  width: fit-content;
`;

export const Icon = styled.img``;

export const Label = styled.a`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  display: flex;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: #0883e0;
  text-decoration: none;
  margin-left: 10px;
  :hover {
    color: #0883e0;
  }
`;