import { Post } from "./Post";
import { Link, Title as TitlePost } from "./Post/styles";
import { Label, Title, Paragraph, BlogContainer, ImageWrapper } from "./styles";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getBlogPosts } from "../../api/HubSpot/posts";

export default function Blog() {
  const [blogs, setBlogs] = useState<any>([]);

  useEffect(() => {
    getBlogPosts().then((blogs: any) => {
      let _blogs: any[] = blogs?.data?.results?.sort((a: any, b: any) =>
        a.publishDate >= b.publishDate
          ? 1
          : b.publishDate >= a.publishDate
          ? -1
          : 0
      );

      if (_blogs) {
        if (_blogs.length > 3) {
          _blogs = _blogs.slice(0, 5);
        }

        setBlogs(_blogs);
      } else {
        _blogs = [];
      }
    });
  }, []);

  return (
    <BlogContainer
      id="blog"
      className="d-flex flex-column position-relative"
      image="/assets/images/svg/bg-blog.svg"
    >
      <div className="d-xl-flex">
        <div className="col-12 col-xl-4 pt-sm-5 mb-4 position-sm-relative">
          <Label>BLOG</Label>
          <Title>{`What's new?`}</Title>
          <Paragraph>
            Our insight about innovation, business and everything tech.
          </Paragraph>
          <Link href="/blog">
            <Image
              alt="icon-link"
              src="/assets/images/svg/icons/arrow-right-blue.svg"
              width={16}
              height={16}
            />
            <span className="ps-2">View All Articles</span>
          </Link>
        </div>
        <div className="col-12 col-xl-8 d-sm-flex flex-sm-wrap">
          <div className="d-none d-sm-block d-lg-flex mb-4 w-100">
            <div className="position-relative col-lg-5 col-md-12">
              <ImageWrapper>
                <Image
                  alt="nearshoring-img"
                  src="/assets/images/webp/img-blog.webp"
                  layout="fill"
                />
              </ImageWrapper>
            </div>
            <div className="d-flex col-lg-7 col-md-12 bg-primary">
              {blogs?.length && (
                <div className="d-flex flex-column my-auto px-5 py-sm-4 py-lg-0">
                  <TitlePost>{blogs[0]?.name}</TitlePost>
                  <Link className="text-white" href={`/${blogs[0]?.slug}`}>
                    <Image
                      alt="icon-link"
                      src="/assets/images/svg/icons/arrow-right-white.svg"
                      width={16}
                      height={16}
                    />
                    <span className="ps-2">View Article</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div
            style={{
              height: "100%",
            }}
          >
            <div className="grid">
              {blogs?.length &&
                blogs
                  ?.slice(1, 4)
                  .map((post: any, index: number) => (
                    <Post key={index} {...post} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </BlogContainer>
  );
}
