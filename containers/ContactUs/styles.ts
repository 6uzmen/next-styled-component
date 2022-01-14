import styled from "styled-components";
import { ButtonPrimary } from "../../components/Button/styles";

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #021419;
  background-image: url("assets/images/svg/bg-contact.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 0 10%;
  @media screen and (max-width: 1200px) {
    height: fit-content;
    padding: 60px 10%;
  }
  @media screen and (max-width: 768px) {
    padding: 60px 5%;
  }
`;

export const Title = styled.h2`
  width: 100%;
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 42px;
  line-height: 120%;
  letter-spacing: -0.04em;
  color: #ffffff;
  span {
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const LocationContainer = styled.div``;

export const LocationIcon = styled.img``;

export const LocationLabel = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  margin-left: 10px;
  font-size: 14px;
  line-height: 160%;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 10px;
`;

export const LocationText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #868686;
  margin-left: 22px;
`;

export const SocialIcon = styled.img`
  height: 28px;
`;

export const ContactFormContainer = styled.div`
  background: #021419;
  border: 3px solid rgba(8, 131, 224, 0.2);
  box-sizing: border-box;
  border-radius: 3px;
  @media screen and (max-width: 768px) {
    border: none;
  }
`;

export const ContactForm = styled.form``;

export const ContactTitle = styled.h3`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

export const ContactLabel = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  text-transform: uppercase;
  color: #868686;
`;

export const ContactInput = styled.input`
  border: 1px solid rgba(8, 131, 224, 0.3);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0) !important;
  transition: 0.3s;
  box-shadow: 0px 0px 0px rgba(8, 131, 224, 0);
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  :focus,
  :active,
  :focus-visible {
    background: rgba(255, 255, 255, 0);
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
    border: 1px solid rgba(8, 131, 224, 0.3);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 20px rgba(8, 131, 224, 0.3);
    outline: none !important;
  }
`;

export const ContactTextArea = styled.textarea`
  border: 1px solid rgba(8, 131, 224, 0.3);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0) !important;
  transition: 0.3s;
  box-shadow: 0px 0px 0px rgba(8, 131, 224, 0);
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  :focus,
  :active,
  :focus-visible {
    background: rgba(255, 255, 255, 0);
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
    border: 1px solid rgba(8, 131, 224, 0.3);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 20px rgba(8, 131, 224, 0.3);
    outline: none !important;
  }
`;

export const ContactButton = styled(ButtonPrimary)`
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;
