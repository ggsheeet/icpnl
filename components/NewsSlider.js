import React from "react";
import Link from "next/link";
import {
  Skeleton,
  SkeletonText,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Select,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import CustomSlider from "./CustomSlider";
import DOMPurify from "dompurify";

const DataTabs = ({ data, selectedTab, onSelectTab, tabData }) => (
  <>
    <Tabs display={{ base: "none", lg: "block" }}>
      <TabList bg="brand.200" justifyContent={"center"}>
        {data.map((tab, index) => (
          <Tab
            key={index}
            py="2.5vh"
            mx="0.5vw"
            fontSize={{
              base: "2vh",
              lg: "1.2vw",
              xl: "1vw",
              xxl: "1vw",
            }}
            color="brand.1200"
            fontWeight={600}
            fontFamily="figtree"
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabPanels bg="brand.200">
        {data.map((tab, index) => (
          <TabPanel px="2vh" py="2vh" key={index}>
            {tab.content}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
    <Tabs
      isLazy
      index={selectedTab}
      onChange={(index) => onSelectTab(index)}
      display={{ base: "relative", lg: "none" }}
    >
      <TabList bg="brand.200" justifyContent={"center"}>
        <Select
          value={selectedTab}
          onChange={(event) => onSelectTab(Number(event.target.value))}
          bg="brand.1400"
          fontSize={{
            base: "2vh",
            md: "1.7vh",
          }}
          textColor="brand.200"
          color="brand.200"
          fontWeight={500}
          fontFamily="figtree"
          mx="2vh"
          py="2.5vh"
        >
          {tabData.map((tab, index) => (
            <option key={index} value={index}>
              {tab.label}
            </option>
          ))}
        </Select>
      </TabList>
      <TabPanels bg="brand.200">
        {tabData.map((tab, index) => (
          <TabPanel key={index}>
            {selectedTab === index ? tab.content : null}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  </>
);

const NewsSlider = ({ articles }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    if (articles.length > 0) {
      setIsLoading(false);
    }
  }, [articles]);

  const tabData = articles.map(({ category, articles }) => ({
    label: category,
    content: (
      <>
        <CustomSlider
          key={category}
          items={
            isLoading
              ? Array.from({ length: 1 }).map((_, index) => (
                  <div key={index} className="p-4">
                    <Skeleton
                      height={{ base: "50vw", md: "40vw", lg: "30vw" }}
                      mb="4"
                      rounded="md"
                    />
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
                    <div key={article.id} className="px-[2.5%] py-[3%]">
                      <div>
                        <div className="relative">
                          <Link href={`/nota/${article.slug}`}>
                            <img
                              src={article.featuredImage.node.sourceUrl}
                              className="not-selectable w-full h-[60vw] md:h-[35vw] lg:h-[26vw] xl:h-[23vw] 2xl:h-[40vh] object-cover mb-4 rounded z-[-2]"
                              style={{ objectPosition: "50% 30%" }}
                              alt={article.title}
                            />
                            {/* {article.tags.nodes.map((tags) => (
                            <div className="absolute top-[0%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-brand-orange-plum text-center text-brand-white-smoke text-[2.5vw] md:text-[1vw] lg:text-[0.8vw] px-[1.5%] rounded-[0.5vh] font-medium">
                              {tags.name}
                            </div>
                          ))} */}
                          </Link>
                        </div>
                        <Link href={`/nota/${article.slug}`}>
                          <div className="font-bold text-[2.1vh] md:text-[2.5vw] lg:text-[1.4vw] xl:text-[1.2vw]">
                            {article.title}
                          </div>
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
                })
          }
        />
      </>
    ),
  }));

  return (
    <>
      <DataTabs
        data={tabData}
        selectedTab={selectedTab}
        onSelectTab={setSelectedTab}
        tabData={tabData}
      />
    </>
  );
};

export default NewsSlider;
