import axios from "axios";

const API_URL =
  process.env.REACT_APP_API_URL?.toString() || "https://api.hsforms.com";

const axiosInstance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  validateStatus: (status: number) => status < 400,
});

const encodeQueryParams = (url: string, query: any) => {
  const encodeURL = new URL(url);
  if (query) {
    Object.entries(query).forEach(([k, v]: any) =>
      encodeURL.searchParams.append(k, v)
    );
  }
  return encodeURL;
};

const axiosCall = async (url: any, { query, ...requestOptions }: any) => {
  try {
    const requestUrl: any = encodeQueryParams(`${API_URL}${url}`, query);

    const response = await axiosInstance({
      method: requestOptions.method,
      url: requestUrl,
      data: requestOptions.body,
      headers: requestOptions.headers,
    });

    if (response.status >= 200 && response.status < 400) {
      return response;
    }
  } catch (error) {
    throw console.error("Internal error");
  }
};

export const unAuthAxiosCall = (url: any, requestOptions: any) =>
  axiosCall(url, requestOptions);

//https://api.hubapi.com

//api key pat-na1-ef9192cd-a2d9-41eb-bf59-114ee95dbe13

//c5aeb8c9-f9de-4c03-94ae-4c692ad9fcef

//   curl --request GET \
//   --url 'https://api.hubapi.com/crm/v3/objects/contacts?limit=10&archived=false' \
//   --header 'authorization: Bearer YOUR_ACCESS_TOKEN'
