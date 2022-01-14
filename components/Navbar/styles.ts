import styled from "styled-components";

export const MainContainer = styled.div<{ showNavbar: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: fit-content;
  overflow: hidden;
  transition: 0.5s;
  transform: ${(p) => (p.showNavbar ? "translateY(0)" : "translateY(-100%)")};
`;

export const NavbarContainer = styled.div<{
  variant: boolean;
  isScrolled: boolean;
}>`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: 0.5s;
  padding: 16px 10%;
  height: 80px;
  background: ${(p) =>
    p.variant || p.isScrolled
      ? "white"
      : "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)"};
  @media screen and (max-width: 988px) {
    background: white;
  }
  @media screen and (max-width: 768px) {
    padding: 16px 5%;
  }
`;

export const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  list-style-type: none;
  text-transform: uppercase;
`;

export const ItemLink = styled.a<{ variant: boolean; isScrolled: boolean }>`
  text-decoration: none;
  color: ${(p) => (p.isScrolled || p.variant ? "black" : "white")};
  :hover {
    color: ${(p) => (p.isScrolled || p.variant ? "black" : "white")};
    text-underline-offset: 3px;
    text-decoration: underline;
    text-decoration-color: ${(p) =>
      p.isScrolled || p.variant ? "black" : "white"};
  }
`;

export const MenuIcon = styled.img`
  margin-left: 20px;
`;

export const MenuContent = styled.div<{ isOpen: boolean }>`
  height: ${(p) => (p.isOpen ? "100vh" : "0px")};
  background-color: white;
  width: 100%;
  overflow: hidden;
  transition: 0.5s;
`;

export const Separator = styled.div`
  background-color: #dddddd;
  height: 1px;
  width: 90%;
  margin: 20px auto;
`;

export const SubLabel = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  text-transform: uppercase;
  color: #bdbdbd;
  margin-bottom: 5px;
`;

export const Link = styled.a`
  text-decoration: none;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: #0883e0;
`;
