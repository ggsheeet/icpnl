import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";
import DOMPurify from "dompurify";

const ArticleComp = ({ article }) => {
  const paragraphs = article.content.split("\n\n");

  return (
    <div className="flex">
      <div key={article.id}>
        <div className="relative">
          <img
            src={article.featuredImage.node.sourceUrl}
            alt={article.title}
            className="not-selectable w-full h-[63vw] md:h-[40vw] lg:h-[35vw] xl:h-[33vh] object-cover"
          />
          <div className="absolute top-0 left-0 inset-0 bg-black opacity-50 z-10" />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-brand-white-smoke text-[2.4vh] md:text-[3vh] lg:text-[4vw] xl:text-[5vh] w-2/3 font-figtree font-semibold z-20">
            {article.title}
          </h1>
        </div>
        <div className="text-start w-full px-[2%] relative">
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(paragraphs[2]),
            }}
            className="text-brand-news mt-[3%] md:mt-[1%] font-medium text-[1.9vh] md:text-[2.1vh] lg:text-[2.7vw]"
          />
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(paragraphs[0]),
            }}
            className="font-medium text-[1.9vh] md:text-[2vh] lg:text-[3vw] xl:text-[3vh]"
          />
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(paragraphs[4]),
            }}
            className="text-brand-link font-medium text-[1.7vh] md:text-[1.75vh] lg:text-[2.7vw] py-[0.1%] mt-[2%] md:mt-[0.5%] mb-[3%] md:mb-[1%] rounded-[2vw] underline"
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleComp;
