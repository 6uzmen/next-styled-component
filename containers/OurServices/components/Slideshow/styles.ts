import styled from "styled-components";

export const DotContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const Dot = styled.div<{ active: boolean }>`
  margin: 0 10px;
  height: 10px;
  width: 10px;
  background: ${(p) => (p.active ? "#0883e0" : "white")};
  border-radius: 50%;
`;
