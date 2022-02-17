import React from "react";
import { Link, PostContainer, TextDate, Title } from "./styles";

interface IPost {
  publishDate?: string;
  name?: string;
  slug?: string;
  background?: string;
}

export const Post = ({ publishDate, name, slug }: IPost) => {
  const dateOptions = {
    year: "numeric",
    weekday: "short",
    month: "long",
    day: "numeric",
  };
  const date = new Date(publishDate ? publishDate : "").toLocaleDateString(
    "en-US",
    //@ts-ignore
    dateOptions
  );
  return (
    publishDate &&
    name &&
    slug && (
      <PostContainer className="g-col-lg-6 g-col-xl-4 g-col-12">
        {/* <TextDate>{date && date}</TextDate> */}
        <Title>{name && name}</Title>
        <Link href={`/${slug}`} isAbsolute>
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
