import type { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import { posts } from '../../posts';
import { ISeo } from '../../utils/interfaces/ISeo';

interface IProps {
  content: string
  seo: ISeo & {
    image: string
  },
  slug: string
}

const Post: NextPage<IProps> = ({seo, content, slug}) => {
  return <>
      <Head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <meta name="author" content="Andres Zunino"/>
        <meta name="description" content={seo.description}/>
        <meta name="generator" content="HubSpot"/>
        <title>{seo.title}</title>
        
        <meta property="og:description" content={seo.description}/>
        <meta property="og:title" content={seo.description}/>
        <meta name="twitter:description" content={seo.description}/>
        <meta name="twitter:title" content={seo.description}/>
        <meta name="twitter:image" content={seo.image} />
        <meta name="twitter:image:alt" content={seo.description}/>
        <meta name="twitter:card" content="summary"/>
        <link rel="canonical" href={`https://zircon.tech/blog/${slug}`}/>
        <meta property="og:type" content="article"/>
        <link rel="alternate" type="application/rss+xml" href="https://blog.zircon.tech/rss.xml"/>
        <meta name="twitter:domain" content="https://zircon.tech"/>
        <meta httpEquiv="content-language" content="en-us" />
        <Script>
          {`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W2TPTNG');
          `}
        </Script>
        <Script src='//platform.linkedin.com/in.js'>
          {`
lang: en_US
        `}
        </Script>
        <style>
          {`
a.cta_button{-moz-box-sizing:content-box !important;-webkit-box-sizing:content-box !important;box-sizing:content-box !important;vertical-align:middle}.hs-breadcrumb-menu{list-style-type:none;margin:0px 0px 0px 0px;padding:0px 0px 0px 0px}.hs-breadcrumb-menu-item{float:left;padding:10px 0px 10px 10px}.hs-breadcrumb-menu-divider:before{content:'›';padding-left:10px}.hs-featured-image-link{border:0}.hs-featured-image{float:right;margin:0 0 20px 20px;max-width:50%}@media (max-width: 568px){.hs-featured-image{float:none;margin:0;width:100%;max-width:100%}}.hs-screen-reader-text{clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute !important;width:1px}    
`}
        </style>
      </Head>
      <div dangerouslySetInnerHTML={{
        __html: content
      }}></div>
  </>
}

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  
  const post = posts.find(
    ({ slug }) => slug === (ctx.query.post as string)
  );

  return {
    props: {
      content: post.content,
      seo: post.seo,
      slug: post.slug
    },
  };
};

export default Post;