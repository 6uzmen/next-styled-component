import axios, { AxiosResponse } from "axios";
import { unAuthAxiosCall } from "../axiosCall";

export const getBlogPosts = async () =>
  await axios.get(
    `https://zircontech-backend-gnkum.ondigitalocean.app/api/hubspot/blogs`
  );
