import Link from "next/link";
import { Box, Text, Image } from "@chakra-ui/react";

const RelatedArticles = ({ articles }) => {
  return (
    <div className="bg-brand-white-smoke">
      <div className="flex flex-col p-[0.6%]">
        {articles.map((article) => (
          <div key={article.id} className="border-b-2">
            <Box
              p={4}
              width="full"
              display={{ base: "relative", md: "flex" }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Link href={`/articles/${article.id}`} passHref>
                  <Image
                    src={article.featuredImage.node.sourceUrl}
                    alt={article.title}
                    className="w-full md:w-[16vw] h-[40vw] md:h-[10vw] rounded-[1vh]"
                  />
              </Link>
              <div className="text-start md:text-end w-full md:w-1/2">
                <Link href={`/articles/${article.id}`} passHref>
                    <Text
                      mt={2}
                      fontSize={{ base: "base", md: "sm", lg: "md", xl: "lg" }}
                      fontWeight="semibold"
                      lineHeight="short"
                      justifyContent="end"
                    >
                      {article.title}
                    </Text>
                </Link>
                {/* Other article details */}
              </div>
            </Box>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
