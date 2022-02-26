import axios from "axios";

export const getBlogPosts = async () =>
  await axios.get(
    `https://zircontech-backend-personal.vercel.app/api/blogs/posts`
  );
