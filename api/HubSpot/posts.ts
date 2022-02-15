import axios from "axios";

export const getBlogPosts = async () =>
  await axios.get(
    `https://zircontech-backend-gnkum.ondigitalocean.app/api/hubspot/blogs`
  );
