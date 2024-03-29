import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_POSTS_BY_ID, GET_POSTS_BY_CATEGORY } from "@/lib/queries";
import HeaderOther from "@/components/HeaderOther";
import ArticleComp from "@/components/ArticleComp";
import RelatedArticles from "@/components/RelatedArticles";
import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

const ArticlePage = () => {
  const router = useRouter();
  const { articleSlug } = router.query;

  const { loading, error, data } = useQuery(GET_POSTS_BY_ID, {
    variables: { articleSlug },
  });

  if (loading) {
    return (
      <div className="bg-brand-white-smoke">
        <HeaderOther />
        <div className="pt-[5%] md:pt-[2%] pb-[1.5%] px-[3%] md:px-[1.7%]">
          {Array.from({ length: 1 }).map((_, index) => (
            <div key={index}>
              <Box
                p={4}
                borderWidth="0.5vh"
                borderColor="gray.200"
                borderRadius="md"
                overflow="hidden"
                width="full"
              >
                <Skeleton
                  height={{
                    base: "40vh",
                    md: "50vh",
                    lg: "60vh",
                  }}
                />
                <SkeletonText height="" />
              </Box>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-brand-white-smoke">
        <HeaderOther />
        <p>Error: {mainError.message}</p>
      </div>
    );
  }

  const article = data?.postBy;

  return (
    <>
      <Head>
      <title>ICPNL Boletín Diario</title>
				<meta name='description' content='Boletín Diario ICPNL' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/icpnl-ico.svg' />
				<meta property='og:title' content='ICPNL Boletín Diario' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://icpnl.vercel.app' />
				<meta property='og:image' content='/icpnl-og.png' />
				<meta property="og:image:type" content="image/png" />
				<meta property='og:image:width' content='1200' />
				<meta property='og:image:height' content='630' />
      </Head>
      <div className="bg-brand-white-smoke">
        <HeaderOther />
        <ArticleComp article={article} />
        {/* <RelatedArticles articles={categoryArticles} /> */}
        <footer className="flex flex-col items-center justify-center pt-[6%] px-[2%] bg-brand-white-smoke">
          <p className="text-gray-500 text-[1.7vh] md:text-[2vh] pb-[1%]">
            ICPNL Boletín Diario
          </p>
          <p className="text-gray-500 text-[1.7vh] md:text-[2vh] pb-[1%]">
            © NBN
          </p>
        </footer>
      </div>
    </>
  );
};

export default ArticlePage;
