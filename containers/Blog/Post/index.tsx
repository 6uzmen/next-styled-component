import React from "react";
import { Link, PostContainer, TextDate, Title } from "./styles";

interface IPost {
  textDate: string;
  title: string;
  link: string;
  background?: string;
}

export const Post = ({ textDate, title, link }: IPost) => {
  return (
    <PostContainer className="g-col-lg-6 g-col-xl-4 g-col-12">
      <TextDate>{textDate}</TextDate>
      <Title>{title}</Title>
      <Link href={link} isAbsolute>
        <img
          alt="icon-link"
          src="assets/images/svg/icons/arrow-right-blue.svg"
        />
        View Article
      </Link>
    </PostContainer>
  );
};
