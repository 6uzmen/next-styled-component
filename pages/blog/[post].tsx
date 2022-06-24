import type { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import { posts } from '../../posts';
import { ISeo } from '../../utils/interfaces/ISeo';

interface IProps {
  content: string
  seo: ISeo
}

const Post: NextPage<IProps> = ({seo, content}) => {
  return <>
      <Head>
        <meta charSet="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="author" content="Andres Zunino"/>
        <meta name="description" content={seo.description}/>
        <meta name="generator" content="HubSpot"/>
        <title>{seo.title}</title>
            
        <meta property="og:description" content={seo.description}/>
        <meta property="og:title" content={seo.description}/>
        <meta name="twitter:description" content={seo.description}/>
        <meta name="twitter:title" content={seo.description}/>
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
      seo: post.seo
    },
  };
};

export default Post;