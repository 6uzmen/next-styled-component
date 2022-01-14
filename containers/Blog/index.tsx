import Image from "next/image";
import { Post } from "./Post";
import { Link, TextDate, Title as TitlePost } from "./Post/styles";
import { Label, Title, Paragraph, BlogContainer, ImageWrapper } from "./styles";

const allPosts = [
  {
    textDate: "November 17th, 2021",
    title: "The Ultimate Offshore Software Development Guide for CEOs",
    link: "https://blog.zircon.tech/blog/the-ultimate-offshore-software-development-guide-for-ceos/",
  },
  {
    textDate: "July 14th, 2021",
    title: "What is Blockchain Technology and Why Is It Important for Your Company",
    link: "https://blog.zircon.tech/blog/what-is-blockchain-technology-and-why-is-it-important-for-your-company/",
  },
  {
    textDate: "August 18th, 2021",
    title: "Everything You Need to Know About Nearshoring and Its Benefits",
    link: "https://blog.zircon.tech/blog/everything-nearshoring-benefits/",
  },
  {
    textDate: "August 04th, 2021",
    title: "What is Decentralized Finance (DeFi)? Benefits and Advantages",
    link: "https://blog.zircon.tech/blog/what-is-decentralized-finance-defi-benefits-and-advantages/",
  },
];

export default function Blog() {
  return (
    <BlogContainer
      id="blog"
      className="d-flex flex-column position-relative"
      image="assets/images/svg/bg-blog.svg"
    >
      <div className="d-xl-flex">
        <div className="col-12 col-xl-4 pt-sm-5 mb-4 position-sm-relative">
          <Label>BLOG</Label>
          <Title>{`What's new?`}</Title>
          <Paragraph>
            Our insight about innovation, business and everything tech.
          </Paragraph>
          <Link href="https://blog.zircon.tech">
            <img
              alt="icon-link"
              src="assets/images/svg/icons/arrow-right-blue.svg"
            />
            View All Articles
          </Link>
        </div>
        <div className="col-12 col-xl-8 d-sm-flex flex-sm-wrap">
          <div className="d-none d-sm-block d-lg-flex mb-4 w-100">
            <div className="position-relative col-lg-5 col-md-12">
              <ImageWrapper>
                <img
                  alt="nearshoring-img"
                  src='https://xylo-assets.s3.amazonaws.com/images/png/img-blog.png'
                  width='100%'
                  style={{ objectFit: 'cover' }}
                />
              </ImageWrapper>
            </div>
            <div className="d-flex col-lg-7 col-md-12 bg-primary">
              <div className="d-flex flex-column my-auto px-5 py-sm-4 py-lg-0">
                <TextDate className="text-white">
                  {allPosts[0].textDate}
                </TextDate>
                <TitlePost>{allPosts[0].title}</TitlePost>
                <Link className="text-white" href={allPosts[0].link}>
                  <img
                    alt="icon-link"
                    src="assets/images/svg/icons/arrow-right-white.svg"
                  />
                  View Article
                </Link>
              </div>
            </div>
          </div>
          <div className="grid">
            {allPosts.map((post, index) => (
              index > 0 && <Post key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
    </BlogContainer>
  );
}
