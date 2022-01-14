import { AxiosResponse } from "axios";
import { unAuthAxiosCall } from "../axiosCall";

interface IProps {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}

export const sendContactForm = async ({
  firstname,
  lastname,
  email,
  message,
}: IProps): Promise<AxiosResponse<any> | undefined> => {
  const data = {
    fields: [
      {
        name: "email",
        value: email,
      },
      {
        name: "firstname",
        value: firstname,
      },
      {
        name: "lastname",
        value: lastname,
      },
      {
        name: "message",
        value: message,
      },
    ],
    context: {
      pageUri: "www.example.com/page",
      pageName: "Contact Form Zircontech",
    },
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: "I agree to allow Example Company to store and process my personal data.",
        communications: [
          {
            value: true,
            subscriptionTypeId: 999,
            text: "I agree to receive marketing communications from Example Company.",
          },
        ],
      },
    },
  };

  const params = JSON.stringify(data);

  return unAuthAxiosCall(
    `/submissions/v3/integration/submit/7707659/c68db72c-e71a-42d0-b65c-47090ad46ef8`,
    {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: params,
    }
  );
};