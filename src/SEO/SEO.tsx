import { ALLSEOProps } from "@/types";
import Head from "next/head";

type SEOProps={
    seo:ALLSEOProps
}

 const SEO = ({ seo }:SEOProps) => {
    const {title,description}=seo
    
  return (
    <Head>
      <title>{title}</title>
      {/**@ts-ignore */}
      <meta charset="utf-8" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="theme-color" content="#008000" />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/logos/dark_aloha.png"/>

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="/logos/dark_aloha.png" />
    </Head>
  );
};

export default SEO;