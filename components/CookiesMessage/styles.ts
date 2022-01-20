import styled from "styled-components";

export const CookiesContainer = styled.div`
  border-radius: 4px;
  font-family: Roboto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  max-width: 1250px;
  z-index: 2147483647;
  @media screen and (max-width: 1350px) {
    max-width: calc(100% - 40px);
    flex-direction: column;
  }
`;

export const CookiesButton = styled.div`
  color: white;
  background-color: #0883e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  cursor: pointer;
`;

export const MessageContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  color: white;
  @media screen and (max-width: 1350px) {
    margin-bottom: 20px;
  }
`;

export const CookiesInfoIcon = styled.img``;

export const CookiesMessage = styled.p`
  margin: 0;
`;
