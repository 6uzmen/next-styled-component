import React from "react";
import { Link, PostContainer, Title } from "./styles";
import Image from "next/image"

interface IPost {
  name?: string;
  slug?: string;
  background?: string;
}

export const Post = ({ name, slug }: IPost) => {

  return (
    <PostContainer className="g-col-lg-6 g-col-xl-4 g-col-12">
      <Title>{name || ''}</Title>
      <Link href={`/${slug}`} isAbsolute={true}>
        <Image
          alt="icon-url"
          src="/assets/images/svg/icons/arrow-right-blue.svg"
          width={16}
          height={16}
        />
        <span className="ps-2">
          View Article
        </span>
      </Link>
    </PostContainer>
  );

};