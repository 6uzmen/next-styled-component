import styled from "styled-components";

export const Button = styled.button`
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  height: 46px;
  border-radius: 4px 20px 20px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  font-family: Rubik;
  :focus {
    outline: none;
  }
  @media only screen and (max-width: 768px) {
    min-width: 96px;
    height: fit-content;
    max-height: 46px;
    font-size: 14px;
    padding: 8px 10px;
  } ;
`;

export const ButtonPrimary = styled(Button)`
  background-color: #0883e0;
  color: white;
`;

export const ButtonSecondary = styled(Button)`
  background-color: white;
  color: #112d60;
`;
