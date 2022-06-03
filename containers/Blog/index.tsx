import { Post } from "./Post";
import { Link, Title as TitlePost } from "./Post/styles";
import { Label, Title, Paragraph, BlogContainer, ImageWrapper } from "./styles";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getBlogPosts } from "../../api/HubSpot/posts";

const fullList = [
  'https://blog.zircon.tech/',
  'https://blog.zircon.tech/olap-online-analytical-processing-tools/',
  'https://blog.zircon.tech/zircontech-carves-a-niche-with-solutions-of-resolute-character-that-get-noticed-at-goodfirms/',
  'https://blog.zircon.tech/best-practices-for-it-cost-optimization/',
  'https://blog.zircon.tech/pros-and-cons-of-offshore-software-development/',
  'https://blog.zircon.tech/smart-contracts-with-blockchain-clauseio/',
  'https://blog.zircon.tech/smart-contract-alliance/',
  'https://blog.zircon.tech/offshore-software-development-company-growth/',
  'https://blog.zircon.tech/smart-contracts-with-blockchain-monax/',
  'https://blog.zircon.tech/zircon-tech-to-demo-usage-based-insurance-on-hyperledger/',
  'https://blog.zircon.tech/everything-you-need-to-know-about-nearshoring-benefits/',
  'https://blog.zircon.tech/zircontech-notarizer/',
  'https://blog.zircon.tech/non-fungible-tokens-nfts-explained/',
  'https://blog.zircon.tech/creating-smart-contracts-and-digital-contracts-in-the-different-areas-of-law/',
  'https://blog.zircon.tech/the-lowdown-on-software-development-offshoring/',
  'https://blog.zircon.tech/offshoring-software-development-in-south-america/',
  'https://blog.zircon.tech/zircontech-strengths-partnerships-with-systems-integrators-to-deliver-blockchain-based-solutions-in-north-america/',
  'https://blog.zircon.tech/legaltech-aplicaciones-de-contratos-digitales-con-tecnologia-monax-en-latinoamerica/',
  'https://blog.zircon.tech/benefits-of-notarization-with-blockchain/',
  'https://blog.zircon.tech/how-does-blockchains-future-look-like-in-china-and-us/',
  'https://blog.zircon.tech/tag/data-management',
  'https://blog.zircon.tech/data-management-benefits-and-keypoints/',
  'https://blog.zircon.tech/data-integration-benefits/',
  'https://blog.zircon.tech/tag/blockchain-technology',
  'https://blog.zircon.tech/nearshore-software-development-southamerica/',
  'https://blog.zircon.tech/contratos-digitales-blockchain-suscribo-y-zircontech/',
  'https://blog.zircon.tech/zircon-tech-a-year-in-review-of-blockchain-initiatives/',
  'https://blog.zircon.tech/the-ultimate-offshore-software-development-guide-for-ceos/',
  'https://blog.zircon.tech/data-lifecycle-management-dml-best-practices/',
  'https://blog.zircon.tech/cloud-services-adoption-strategy-and-application-transformation/',
  'https://blog.zircon.tech/bitcoin-how-to-create-a-cold-storage/',
  'https://blog.zircon.tech/strategic-it-cost-optimization-model-for-cios/',
  'https://blog.zircon.tech/top-blockchain-applications-for-businesses-to-know-in-2021/',
  'https://blog.zircon.tech/an-ethereum-bill-of-landing-for-grain-exports-and-supply-chain/',
  'https://blog.zircon.tech/the-first-enterprise-ethereum-alliance-new-york-city-meetup/',
  'https://blog.zircon.tech/the-definitive-guide-to-it-cost-optimization/',
  'https://blog.zircon.tech/zircon-tech-works-with-monax-technology-for-the-legal-sector-using-blockchain/',
  'https://blog.zircon.tech/our-in-depth-expertise-in-nearshore-software-development/',
  'https://blog.zircon.tech/how-we-use-agile-methodologies-to-deliver-great-digital-experiences/',
  'https://blog.zircon.tech/zircontech-as-new-york-city-best-recommended-cloud-consulting-2022/',
  'https://blog.zircon.tech/cost-savings-benefits-offshoring-software-development/',
  'https://blog.zircon.tech/developing-la-tecnologia-blockchain-en-chile/',
  'https://blog.zircon.tech/the-future-of-non-fungible-tokens-2022-trends/',
  'https://blog.zircon.tech/what-is-a-blockchain-wallet/',
  'https://blog.zircon.tech/choosing-the-right-agile-methodology-to-deliver-your-projects/',
  'https://blog.zircon.tech/how-it-staff-augmentation-can-bring-benefits-to-your-business/',
  'https://blog.zircon.tech/supply-chain-notarization-and-product-traceability/',
  'https://blog.zircon.tech/how-to-start-buying-selling-and-creating-non-fungible-tokens/',
  'https://blog.zircon.tech/hyperledger-composer-workshop-smart-legal-contracts-with-the-accord-project/',
  'https://blog.zircon.tech/cloud-business-cases-involving-blockchain-technologies/',
  'https://blog.zircon.tech/why-choose-outsourcing-for-your-software-development/',
  'https://blog.zircon.tech/aplicacion-de-blockchain-en-los-acuerdos-legales/',
  'https://blog.zircon.tech/the-state-of-enterprise-ethereum-adoption-the-virtual-event-from-the-enterprise-ethereum-alliance/',
  'https://blog.zircon.tech/what-is-decentralized-finance-defi-benefits-and-advantages/',
  'https://blog.zircon.tech/zircon-tech-works-with-monax-technology-for-the-legal-industry-using-blockchain/',
  'https://blog.zircon.tech/taking-a-leading-role-in-blockchain-initiatives-in-usa-and-latin-america/',
  'https://blog.zircon.tech/clutch-recognizes-zircontech-as-argentinas-best-blockchain-developer-for-2021/',
  'https://blog.zircon.tech/zircon-tech-participo-en-el-latam-blockchain-forum-de-santiago-de-chile/',
  'https://blog.zircon.tech/global-legal-hackaton-glh2020-3a-edition-a-look-from-argentina/',
  'https://blog.zircon.tech/enabling-smart-homes-digital-platforms-through-internet-of-things/',
  'https://blog.zircon.tech/the-second-enterprise-ethereum-alliance-new-york-city-meetup/',
  'https://blog.zircon.tech/zircontech-appoints-andres-zunino-as-chief-executive-officer/',
  'https://blog.zircon.tech/what-is-blockchain-technology-and-why-is-it-important-for-your-company/',
  'https://blog.zircon.tech/blog/strategic-it-cost-optimization-model-for-cios',
  'https://blog.zircon.tech/how-it-staff-augmentation-can-bring-benefits-to-your-business',
  'https://blog.zircon.tech/legaltech-aplicaciones-de-contratos-digitales-con-tecnologia-monax-en-latinoamerica?hs_amp=true',
  'https://blog.zircon.tech/aplicacion-de-blockchain-en-los-acuerdos-legales',
  'https://blog.zircon.tech/our-in-depth-expertise-in-nearshore-software-development',
  'https://blog.zircon.tech/blog/zircon-tech-accompanied-the-launch-of-givetrack-in-labitconf-2018',
  'https://blog.zircon.tech/blog/developing-blockchain-technology-in-chile',
]
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
          <Link href="https://blog.zircon.tech">
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
          <div className="forced-blog-posts" style={{ height: 0, overflow: 'hidden', opacity: 0 }}>
            <ul>
              {fullList.map(l => (
                <li><Link href={l} isAbsolute={true}>{l}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </BlogContainer>
  );
}
