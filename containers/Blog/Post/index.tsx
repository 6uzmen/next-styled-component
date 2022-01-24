import React from "react";
import { Link, PostContainer, TextDate, Title } from "./styles";

interface IPost {
  publishDate?: string;
  name?: string;
  url?: string;
  background?: string;
}

export const Post = ({ publishDate, name, url }: IPost) => {
  const dateOptions = {
    year: "numeric",
    weekday: "short",
    month: "long",
    day: "numeric",
  };
  const date = new Date(publishDate ? publishDate : "").toLocaleDateString(
    "en-US",
    dateOptions
  );
  return (
    publishDate &&
    name &&
    url && (
      <PostContainer className="g-col-lg-6 g-col-xl-4 g-col-12">
        {/* <TextDate>{date && date}</TextDate> */}
        <Title>{name && name}</Title>
        <Link href={url && url} isAbsolute>
          <img
            alt="icon-url"
            src="assets/images/svg/icons/arrow-right-blue.svg"
          />
          View Article
        </Link>
      </PostContainer>
    )
  );
};
