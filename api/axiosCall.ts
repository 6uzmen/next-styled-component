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
