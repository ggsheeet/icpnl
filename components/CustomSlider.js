import { Box, Flex, IconButton, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const CustomSlider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const onResize = () => {
      const width = window.innerWidth;
      if (width >= 1240) {
        setSlidesToShow(4);
      } else if (width >= 1024) {
        setSlidesToShow(3);
      } else if (width >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    onResize();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextSlide = () => {
    const nextIndex = currentIndex + 1;

    // Check if the next index is within the range of items
    if (nextIndex < items.length) {
      setCurrentIndex(nextIndex);
    } else {
      setCurrentIndex(items.length - slidesToShow);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextSlide,
    onSwipedRight: handlePrevSlide,
  });

  return (
    <Box width="100%" position="relative" overflow="hidden">
      <Flex
        width={`${
          items.length < slidesToShow
            ? items.length * (100 / items.length)
            : items.length * (100 / slidesToShow)
        }%`}
        transform={`translateX(-${(currentIndex * 100) / items.length}%)`}
        transition="transform 0.3s ease-in-out"
        {...swipeHandlers}
      >
        {items.map((item, index) => (
          <Box key={index} width="100%">
            {item}
          </Box>
        ))}
      </Flex>
      <IconButton
        position="absolute"
        left={0}
        top="50%"
        transform="translateY(-100%)"
        aria-label="Previous"
        sx={{
          "&::before": {
            content: "''",
            backgroundImage: `url('/arback2.svg')`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0,
            transition: "opacity 0.1s ease-in-out",
          },
          "&:hover::before": {
            opacity: 1,
          },
        }}
        width={{
          base: "5vh",
          md: "4.5vh",
        }}
        height={{
          base: "5vh",
          md: "4.5vh",
        }}
        rounded="full"
        onClick={handlePrevSlide}
        isDisabled={currentIndex === 0}
      >
        <Image src="/arbac1.svg" alt="Previous" />
      </IconButton>

      <IconButton
        position="absolute"
        right={0}
        top="50%"
        transform="translateY(-100%)"
        aria-label="Next"
        sx={{
          "&::before": {
            content: "''",
            backgroundImage: `url('/arforw2.svg')`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0,
            transition: "opacity 0.1s ease-in-out",
          },
          "&:hover::before": {
            opacity: 1,
          },
        }}
        width={{
          base: "5vh",
          md: "4.5vh",
        }}
        height={{
          base: "5vh",
          md: "4.5vh",
        }}
        rounded="100%"
        onClick={handleNextSlide}
        isDisabled={currentIndex >= items.length - slidesToShow}
      >
        <Image src="/arfor1.svg" alt="Next" />
      </IconButton>
    </Box>
  );
};

export default CustomSlider;
