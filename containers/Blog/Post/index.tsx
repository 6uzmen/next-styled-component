import React from "react";
import { Link, PostContainer, Title } from "./styles";
import Image from "next/image"

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
        <Image
          alt="icon-url"
          src="https://xylo-assets.s3.amazonaws.com/images/svg/icons/arrow-right-blue.svg"
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
