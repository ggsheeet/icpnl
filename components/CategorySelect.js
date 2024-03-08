import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Text,
  Heading,
  Grid,
  GridItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const categoryColors = {
  "Fiscal": "brand.1200",
  "Laboral": "brand.1200",
  "Comercio Exterior": "brand.1200",
  "Nacional": "brand.1200",
  "Empresas": "brand.1200",
  "Finanzas": "brand.1200",
  "RSE": "brand.1200",
};

const CategorySelect = ({ articles }) => {
  if (!articles) {
    return (
      <div className="bg-brand-white-smoke">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[2vw] pt-[5%] md:pt-[2%] pb-[1.5%] px-[3%] md:px-[1.7%]">
          {Array.from({ length: 6 }).map((_, index) => (
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
  return (
    <div className="flex flex-col fade-in bg-brand-white-smoke justify-center w-full pt-[3%] md:pt-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[4vw] md:gap-[2vw] my-[2%] mx-[4%] md:mx-[2%]">
        {articles.map((category) => (
          <Box
            key={category.category}
            border={{
              base: "0.6vh solid",
              md: "0.5vh solid",
            }}
            borderColor={{
              base: "gray.200",
              md: "gray.200",
            }}
            bgColor="gray.100"
            borderRadius="md"
            minWidth="full"
          >
            <Heading
              as="h1"
              textColor={categoryColors[category.category]}
              bgColor="gray.200"
              fontSize={{
                base: "2vh",
                md: "2.3vw",
                lg: "1.4vw",
                xl: "1.2vw"
              }}
              p="4"
              fontWeight="extrabold"
              display="flex"
              justifyContent="space-between"
              borderRadius="sm"
            >
              <Link
                href={`noticias/${encodeURIComponent(category.category)}`}
                className="font-figtree"
              >
                {category.category}
              </Link>
              <Link
                href={`noticias/${encodeURIComponent(category.category)}`}
                className="flex flex-row items-center"
              >
                <Text
                  fontSize={{base: "1.8vh", md: "1.9vw", lg: "1.2vw", xl: "1vw"}}
                  fontFamily="figtree"
                  cursor="pointer"
                  sx={{
                    "&:hover": {
                      borderBottomWidth: ["0.2vh", "0.2vh", "0.2vh"],
                      borderBottomColor: `${categoryColors[category.category]}`,
                    },
                  }}
                >
                  Ver todas
                </Text>
                <ChevronRightIcon
                  color={categoryColors[category.category]}
                  mt={{
                    base: "2%",
                    md: "1%",
                  }}
                />
              </Link>
            </Heading>
            <Grid templateColumns="repeat(1, 1fr)">
              {category.articles.slice(0, 3).map((article) => (
                <GridItem key={article.id}>
                  <Link href={`/nota/${article.slug}`}>
                    <Box
                      p="4"
                      transition="transform 0.2s ease-in-out"
                      _hover={{ transform: "scale(1.015)" }}
                      display="flex"
                      alignItems="center"
                    >
                      <img
                        src={article.featuredImage.node.sourceUrl}
                        alt="featured-img"
                        className="not-selectable object-cover w-[30%] h-[80%] mr-[3%] rounded-[1vw]"
                      />
                      <div className="w-[70%] text-[1.55vh] md:text-[3vw] lg:text-[1.2vw] xl:text-[0.9vw] font-bold">
                        {article.title}
                      </div>
                    </Box>
                  </Link>
                </GridItem>
              ))}
            </Grid>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default CategorySelect;
