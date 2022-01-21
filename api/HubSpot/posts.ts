import { AxiosResponse } from "axios";
import { unAuthAxiosCall } from "../axiosCall";

export const getBlogPosts = async (): Promise<
  AxiosResponse<any> | undefined
> => {
  return unAuthAxiosCall(
    `/submissions/v3/integration/submit/7707659/c68db72c-e71a-42d0-b65c-47090ad46ef8`,
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }
  );
};
