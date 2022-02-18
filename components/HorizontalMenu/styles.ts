import styled from "styled-components";

export const MenuContainer = styled.div`
  padding: 10px;
  background: #d7d7d7;
  border-radius: 8px;
  min-height: fit-content;
  @media screen and (max-width: 768px) {
    max-height: 130px;
    overflow: auto;
    box-shadow: inset 0px 0px 16px rgba(0, 0, 0, 0.25);
  }
`;

export const MenuItem = styled.a<{ active: boolean }>`
  text-decoration: none;
  height: 50px;
  width: 100%;
  min-width: 120px;
  background: ${(p) => p.active ? '#b8e3fc' : 'white'};
  border-radius: 6px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  transition: 0.3s;
  color: rgba(0, 0, 0, 0.8);
  :hover {
    background: #def1ff;
    color: rgba(0, 0, 0, 1);
  }
`;

export const MenuText = styled.span`
  font-family: Rubik;
  /* text-transform: uppercase; */
`;