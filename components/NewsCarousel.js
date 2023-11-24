import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import {
  Skeleton,
  SkeletonText,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import DOMPurify from "dompurify";

const DataTabs = ({ data }) => (
  <Tabs isLazy>
    <TabList justifyContent={"center"}>
      {data.map((tab, index) => (
        <Tab key={index} py='2vh' mx='0.5vh' fontSize='2vh'>{tab.label}</Tab>
      ))}
    </TabList>
    <TabPanels>
      {data.map((tab, index) => (
        <TabPanel p={4} key={index}>
          {tab.content}
        </TabPanel>
      ))}
    </TabPanels>
  </Tabs>
);

const NewsCarousel = ({ articles }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (articles.length > 0) {
      setIsLoading(false);
    }
  }, [articles]);

  const [sliderKey, setSliderKey] = useState(0);

  useEffect(() => {
    // Update the key whenever the window is resized
    const handleResize = () => {
      setSliderKey((prevKey) => prevKey + 1);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="custom-arrow custom-prev-arrow hover:opacity-100"
    >
      <img src="/arrow-backwa.png" alt="Previous" />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="custom-arrow custom-next-arrow hover:opacity-100"
    >
      <img src="/arrow-forwa.png" alt="Next" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const tabData = articles.map(({ category, articles }) => ({
    label: category,
    content: (
      <Slider key={sliderKey} {...settings}>
        {isLoading
          ? Array.from({ length: settings.slidesToShow }).map((_, index) => (
              <div key={index} className="p-4">
                <Skeleton height="20vw" mb="4" rounded="md" />
                <SkeletonText mt="2" spacing="2" />
              </div>
            ))
          : articles.map((article) => {
              const paragraphs = article.description.split("\n\n");
              const formattedDate = new Date(article.date)
                .toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                })
                .toLocaleUpperCase("es-ES");
              const [formattedMonth, formattedYear] =
                formattedDate.split(" DE ");

              return (
                <div key={article.id} className="p-3">
                  <div>
                    <div className="relative">
                      <img
                        src={article.featuredImage.node.sourceUrl}
                        className="w-full h-[60vw] md:h-[40vw] lg:h-[30vw] xl:h-[25vw] 2xl:h-[40vh] object-cover mb-4 rounded z-[-2]"
                        alt={article.title}
                      />
                      {/* {article.tags.nodes.map((tags) => (
                        <div className="absolute top-[7%] left-24 transform -translate-x-1/2 -translate-y-1/2 bg-brand-orange-plum text-center text-brand-white-smoke text-[2.5vw] md:text-[1vw] lg:text-[0.8vw] px-[1%] font-medium">
                          {tags.name}
                        </div>
                      ))} */}
                    </div>
                    <Link href={`/news/${article.id}`}>
                      <div className="font-semibold text-[2.5vh]">{article.title}</div>
                    </Link>
                    {/* <p className="">{`${formattedMonth} ${formattedYear}`}</p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(paragraphs[0]),
                      }}
                    />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(paragraphs[2]),
                      }}
                    /> */}
                  </div>
                </div>
              );
            })}
      </Slider>
    ),
  }));

  return (
    <>
      <DataTabs data={tabData} />
    </>
  );
};

export default NewsCarousel;
