import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_POSTS_BY_CATEGORY } from "@/lib/queries";
import HeaderOther from "@/components/HeaderOther";
import CategoryGrid from "@/components/CategoryGrid";
import { useTheme, Box, Text, Skeleton, SkeletonText } from "@chakra-ui/react";

const CategoryPage = () => {
  const router = useRouter();
  const { categorySlug } = router.query;

  const { loading, error, data } = useQuery(GET_POSTS_BY_CATEGORY, {
    variables: { categorySlug },
  });

  if (loading) {
    return (
      <div className="bg-brand-white-smoke">
        <HeaderOther />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw] pt-[5%] md:pt-[2%] pb-[1.5%] px-[3%] md:px-[1.7%]">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index}>
              <Box
                p={4}
                borderWidth="0.5vh"
                borderColor="gray.200"
                borderRadius="md"
                overflow="hidden"
              >
                <Skeleton
                  height={{
                    base: "20vh",
                    md: "25vh",
                    lg: "40vh",
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

  if (error) return <p>Error: {error.message}</p>;

  const articles = data.posts.nodes;
  const sortedArticles = articles
    .slice()
    .sort((a, b) => new Date(a.date) - new Date(b.date));

    const categoryColors = {
      "Fiscal": "brand.1200",
      "Laboral": "brand.1200",
      "Comercio Exterior": "brand.1200",
      "Nacional": "brand.1200",
      "Empresas": "brand.1200",
      "Finanzas": "brand.1200",
      "RSE": "brand.1200",
    };
  
  const borderColor = categoryColors[categorySlug];

  return (
    <>
      <Head>
        <title>ICPNL Boletín</title>
        <meta name="description" content="Boletín diario para ICPNL México" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icpnl-ico.svg" />
      </Head>
      <div className="bg-brand-white-smoke">
        <HeaderOther />
        <div className="text-center md:text-start">
          <Text
            textColor="brand.1200"
            fontFamily="figtree"
            borderBottomWidth={{ base: "0.65vw", md: "0.2vw" }}
            borderBottomColor={borderColor}
            fontSize={{ base: "2.5vh", md: "2.5vw", xl: "1.8vw" }}
            fontWeight={700}
            my={{ base: "4%", md: "2%", lg: "1%" }}
            mx={{ base: "2.3%", md: "2.5%", lg: "2%" }}
            className="inline-block"
          >
            Noticias: {categorySlug}
          </Text>
        </div>
        <CategoryGrid
          category={categorySlug}
          articles={sortedArticles}
          loading={loading}
        />
        <footer className="flex flex-col items-center justify-center p-[2%] bg-brand-white-smoke">
          <p className="text-gray-500 text-[1.7vh] md:text-[2vw] lg:text-[1vw] pb-[1%]">
            ICPNL Boletín Diario
          </p>
          <p className="text-gray-500 text-[1.7vh] md:text-[2vw] lg:text-[1vw] pb-[2%]">
            © NBN
          </p>
        </footer>
      </div>
    </>
  );
};

export default CategoryPage;
