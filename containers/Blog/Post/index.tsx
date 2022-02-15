import React from "react";
import { Link, PostContainer, Title } from "./styles";

interface IPost {
  name?: string;
  url?: string;
  background?: string;
}

export const Post = ({ name, url }: IPost) => {

  return (
    <PostContainer className="g-col-lg-6 g-col-xl-4 g-col-12">
      <Title>{name || ''}</Title>
      <Link href={url || '#'} isAbsolute>
        <img
          alt="icon-url"
          src="assets/images/svg/icons/arrow-right-blue.svg"
        />
        View Article
      </Link>
    </PostContainer>
  );

};
