import React from "react";
import { ButtonPrimary } from "../../components/Button/styles";
import Image from "next/image";
import * as S from "./styles";
import { sendContactForm } from "../../api/HubSpot/form";
import { toast } from "react-toastify";

export default function ContactUs() {
  return (
    <S.MainContainer id="contact">
      <div className="d-flex flex-column flex-wrap col-12 col-xl-6 px-0 px-lg-4 px-xl-5">
        <S.Title className="col-12 col-sm-6 mb-4">
          <span>Let’s talk!</span> <br />
          We are always open for new opportunities and collaboration
        </S.Title>
        <div className="d-flex flex-wrap col-12">
          <S.LocationContainer className="col-12 col-md-6">
            <S.LocationIcon
              src="https://xylo-assets.s3.amazonaws.com/images/svg/icons/location.svg"
              alt="Location icon"
            />
            <S.LocationLabel>montevideo, uy</S.LocationLabel>
            <S.LocationText>
              8 de Octubre 2956 <br />
              +(598) 98312859 <br />
              <img
                onClick={() => window.scrollTo(0, 0)}
                height="22px"
                width="147px"
                src="https://xylo-assets.s3.amazonaws.com/images/svg/contact.svg"
                alt="contact-email"
              />
            </S.LocationText>
          </S.LocationContainer>
          <S.LocationContainer className="col-12 col-md-6">
            <S.LocationIcon
              src="https://xylo-assets.s3.amazonaws.com/images/svg/icons/location.svg"
              alt="Location icon"
            />
            <S.LocationLabel>new york, us</S.LocationLabel>
            <S.LocationText>
              1325 Avenue of the Americas <br />
              +(1) 347571 9089 <br />
              <img
                onClick={() => window.scrollTo(0, 0)}
                height="22px"
                width="147px"
                src="https://xylo-assets.s3.amazonaws.com/images/svg/contact.svg"
                alt="contact-email"
              />
            </S.LocationText>
          </S.LocationContainer>
        </div>
      </div>
      <S.ContactFormContainer className="col-12 col-xl-6 p-0 p-md-4 p-lg-5 mt-5">
        <S.ContactTitle className="mb-5">Contact Us</S.ContactTitle>
        <S.ContactForm
          onSubmit={(e) => {
            e.preventDefault();
            //@ts-ignore
            const form = {
              email: e.target.email.value,
              firstname: e.target.firstname.value,
              lastname: e.target.lastname.value,
              message: e.target.message.value,
            };
            sendContactForm(form).then(() => toast.success("Sent!"));
          }}
          className="d-flex flex-wrap"
        >
          <div className="mb-4 col-12 col-xl-6 px-2">
            <S.ContactLabel id="input-field-1" className="form-label">
              First Name *
            </S.ContactLabel>
            <S.ContactInput
              aria-labelledby="input-field-1"
              type="text"
              className="form-control"
              name="firstname"
            />
          </div>
          <div className="mb-4 col-12 col-xl-6 px-2">
            <S.ContactLabel id="input-field-2" className="form-label">
              Last Name *
            </S.ContactLabel>
            <S.ContactInput
              aria-labelledby="input-field-2"
              type="text"
              className="form-control"
              name="lastname"
            />
          </div>
          <div className="mb-4 col-12 px-2">
            <S.ContactLabel id="email-input" className="form-label">
              Email address *
            </S.ContactLabel>
            <S.ContactInput
              aria-labelledby="email-input"
              type="email"
              className="form-control"
              name="email"
            />
          </div>
          <div className="mb-5 col-12 px-2">
            <S.ContactLabel id="message-label" className="form-label">
              Message *
            </S.ContactLabel>
            <S.ContactTextArea
              aria-labelledby="message-label"
              className="form-control"
              rows={6}
              name="message"
            ></S.ContactTextArea>
          </div>
          <div className="w-100 d-flex justify-content-end px-2">
            <S.ContactButton>Send</S.ContactButton>
          </div>
        </S.ContactForm>
      </S.ContactFormContainer>
    </S.MainContainer>
  );
}
