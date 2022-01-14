import styled from "styled-components";

export const MenuContainer = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ItemContainer = styled.div<{ hasChilds?: boolean }>`
  display: flex;
  justify-content: ${(p) => (p.hasChilds ? "space-between" : "auto")};
  align-items: center;
  width: 100%;
  padding: 10px 5%;
  overflow: hidden;
`;

export const ArrowIcon = styled.img<{ isOpen: boolean }>`
  height: 24px;
  width: 24px;
  transition: 0.3s;
  transform: ${(p) => `scaleY(${p.isOpen ? -1 : 1})`};
`;

export const ItemLabel = styled.a`
  width: 100%;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #222222;
  text-decoration: none;
`;

export const SubItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: "fit-content";
  padding: 0px 5% 0px 10%;
  transition: 0.3s;
  overflow: hidden;
`;

export const SubItemContainer = styled.div<{ isOpen: boolean }>`
  height: ${(p) => (p.isOpen ? "35px" : "0px")};
  transition: 0.3s;
  height: ${(p) => (p.isOpen ? "5px 0" : "0")};
  overflow: hidden;
`;

export const SubItemLabel = styled.a`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: #0883e0;
  text-decoration: none;
`;
