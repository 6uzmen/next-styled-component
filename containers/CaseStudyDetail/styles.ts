import styled from "styled-components";

export const DisplayImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 350px;
`;

export const SectionContainer = styled.div<{ background: string }>`
  padding: 20px;
  border-radius: 10px;
  background: ${(p) => p.background};
`;

export const Title = styled.h1`
  font-family: Rubik;
  text-transform: uppercase;
`;

export const Subtitle = styled.h4`
  font-family: Rubik;
`;

export const Paragraph = styled.p``;