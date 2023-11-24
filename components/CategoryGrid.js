import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";
import DOMPurify from "dompurify";

const CategoryGrid = ({ articles }) => {
  return (
    <div className="bg-brand-white-smoke">
      <div className="flex flex-col p-[0.6%]">
        {articles.map((article) => {
          if (!article) {
            return null;
          }
          const paragraphs = article.content.split("\n\n");

          return (
            <div key={article.id} className="border-b-2">
              <Box
                p={4}
                width="full"
                display={{ base: "relative", md: "flex" }}
                alignItems="center"
                justifyContent="space-between"
              >
                <Link href={`/nota/${article.slug}`}>
                  <img
                    src={article.featuredImage.node.sourceUrl}
                    alt={article.title}
                    className="w-full md:w-[16vw] h-[40vw] md:h-[10vw] rounded-[1vh] object-cover"
                  />
                </Link>
                <div className="text-start md:text-end w-full md:w-1/2">
                  <Link href={`/nota/${article.slug}`}>
                    <Text
                      mt={2}
                      fontSize={{ base: "base", md: "1.3vh", lg: "md", xl: "lg" }}
                      fontWeight="semibold"
                      lineHeight="short"
                      justifyContent="end"
                    >
                      {article.title}
                    </Text>
                  </Link>

                  {/* Description */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(paragraphs[2]),
                    }}
                    className="font-medium text-brand-orange-plum text-[1.6vh] md:text-[1.2vh] lg:text-[2vh] mt-[3%] md:mt-[1%] mb-[1%] md:mb-[1%]"
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(paragraphs[4]),
                    }}
                    className="inline-block bg-gray-200 rounded-[2vw] font-medium px-2 text-[1.4vh] md:text-[1vh] lg:text-[1.8vh]"
                  />
                  
                </div>
              </Box>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryGrid;
