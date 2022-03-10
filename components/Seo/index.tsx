import Head from "next/head";
import { ISeo } from "../../utils/interfaces/ISeo";

export const Seo = ({ title, description, keywords }: ISeo) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} key="title" />
    <meta property="og:description" content={description} key="description" />
    <meta name="keywords" content={keywords} key="keywords" />
  </Head>
);
