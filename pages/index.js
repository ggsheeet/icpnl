import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HeaderComp from "@/components/HeaderComp";
import NewsSlider from "@/components/NewsSlider";
import CategorySelect from "@/components/CategorySelect";
import FooterMain from "@/components/FooterMain";
import { useQuery } from "@apollo/client";
import {
  GET_POSTS_IG,
  GET_POSTS_OA,
  GET_POSTS_MO,
  GET_POSTS_CA,
  GET_POSTS_OC,
  GET_POSTS_AF,
  GET_POSTS_CE,
  GET_POSTS_AM,
  GET_POSTS_MX,
  GET_POSTS_BY_CATEGORY,
} from "@/lib/queries";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Center, Divider } from "@chakra-ui/react";

export default function Home() {
  const {
    loading: loadingIG,
    error: errorIG,
    data: dataIG,
  } = useQuery(GET_POSTS_IG);
  const postsIG = dataIG?.posts?.nodes || [];

  const {
    loading: loadingOA,
    error: errorOA,
    data: dataOA,
  } = useQuery(GET_POSTS_OA);
  const postsOA = dataOA?.posts?.nodes || [];

  const {
    loading: loadingMO,
    error: errorMO,
    data: dataMO,
  } = useQuery(GET_POSTS_MO);
  const postsMO = dataMO?.posts?.nodes || [];

  const {
    loading: loadingCA,
    error: errorCA,
    data: dataCA,
  } = useQuery(GET_POSTS_CA);
  const postsCA = dataCA?.posts?.nodes || [];

  const {
    loading: loadingOC,
    error: errorOC,
    data: dataOC,
  } = useQuery(GET_POSTS_OC);
  const postsOC = dataOC?.posts?.nodes || [];

  const {
    loading: loadingAF,
    error: errorAF,
    data: dataAF,
  } = useQuery(GET_POSTS_AF);
  const postsAF = dataAF?.posts?.nodes || [];

  const {
    loading: loadingCE,
    error: errorCE,
    data: dataCE,
  } = useQuery(GET_POSTS_CE);
  const postsCE = dataCE?.posts?.nodes || [];

  const {
    loading: loadingAM,
    error: errorAM,
    data: dataAM,
  } = useQuery(GET_POSTS_AM);
  const postsAM = dataAM?.posts?.nodes || [];

  // const {
  //   loading: loadingMX,
  //   error: errorMX,
  //   data: dataMX,
  // } = useQuery(GET_POSTS_MX);
  // const postsMX = dataMX?.posts?.nodes || [];

  const combinedPosts = [
    ...postsIG,
    ...postsOA,
    ...postsMO,
    ...postsCA,
    ...postsOC,
    ...postsAF,
    ...postsCE,
    ...postsAM,
    // ...postsMX,
  ];

  const categories = {
    "Información Global": postsIG,
    "Océano Atlántico": postsOA,
    "Medio Oriente": postsMO,
    "Continente Asiático": postsCA,
    Oceanía: postsOC,
    "Continente Africano": postsAF,
    "Continente Europeo": postsCE,
    "Continente Americano": postsAM,
    // México: postsMX,
  };

  const categoriesArray = [
    { name: "Información Global", slug: "informacion-global" },
    { name: "Océano Atlántico", slug: "oceano-atlantico" },
    { name: "Medio Oriente", slug: "medio-oriente" },
    { name: "Continente Asiático", slug: "continente-asiatico" },
    { name: "Oceanía", slug: "oceania" },
    { name: "Continente Africano", slug: "continente-africano" },
    { name: "Continente Europeo", slug: "continente-europeo" },
    { name: "Continente Americano", slug: "continente-americano" },
  ];

  const newsArticles = Object.entries(categories).map(
    ([category, articles]) => ({
      category,
      articles: articles
        .map((post) => ({
          id: post.id,
          title: post.title,
          description: post.content,
          featuredImage: post.featuredImage,
          date: post.date,
          tags: post.tags,
          slug: post.slug,
        }))
        .sort((a, b) => new Date(a.date) - new Date(b.date)),
    })
  );

  return (
    <>
      <Head>
        <title>BP Boletín</title>
        <meta name="description" content="Boletín global para BP Boletín" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/bplogo.svg" />
      </Head>
      <div className="bg-brand-white-smoke">
        <HeaderComp />
        <NewsSlider articles={newsArticles} />
        <div className="flex bg-brand-white-smoke justify-center px-[10%] md:px-[3%] lg:px-[2%] py-[1%]">
          <p className="font-extrabold font-figtree text-brand-bp-green text-center text-[2.5vh] md:text-[2.3vh] lg:text-[2.7vh] border-b-[0.5vh] border-b-brand-bp-green pb-[3%] md:pb-[0.5%]">
            Boletín de Noticias Oil & Gas (Mes de Octubre 2023)
          </p>
        </div>
        <div className="flex items-center justify-center md:hidden pt-[4%] mx-[3.6%] text-[1.7vh] text-center text-brand-bp-green font-medium">
          <ChevronLeftIcon width="6vw" height="6vw" />
          <p className="px-[1%]">
            Desliza para navegar entre las diferentes categorías
          </p>
          <ChevronRightIcon width="6vw" height="6vw" />
        </div>
        <div className="flex justify-start md:justify-center space-x-[2vw] px-[4%] md:px-[1%] pt-[4%] pb-[4%] md:pt-[2%] md:pb-[3%] lg:pt-[1%] lg:pb-[2%] bg-brand-white-smoke font-figtree font-medium overflow-x-auto">
          {categoriesArray.map((category) => (
            <Link href={`/noticias/${category.name}`} key={category.slug}>
              <button className="w-[25vw] h-[16vw] md:w-[10vw] md:h-[8vw] lg:w-[9.3vw] lg:h-[6.3vw] mx-[1.5%] px-[5%] md:px-[5%] lg:px-[1%] py-[0.5%] bg-brand-bp-vibe rounded-[1vw] md:rounded-[0.7vw] text-white text-[1.6vh] md:text-[1.4vw] lg:text-[1.2vw] border-[0.5vw] md:border-[0.25vw] border-gray-200">
                {category.name}
              </button>
            </Link>
          ))}
        </div>
        <CategorySelect articles={newsArticles} />
        <FooterMain />
      </div>
    </>
  );
}
