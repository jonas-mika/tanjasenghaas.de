import { useState, useEffect } from "react";
import {
  RiArrowDropLeftFill,
  RiArrowDropRightFill,
} from "react-icons/ri";

import {
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Slide = ({ quote }) => {
  return (
    <Flex
      w="100%"
      h="100%"
      p="2rem 4rem"
      align="center"
      justify="center"
      direction="column"
    >
      <Text
        textAlign="center"
        fontWeight={350}
        fontSize={[".9rem", ".95rem", "1rem", "1.05rem"]}
        lineHeight="150%"
      >
        {quote.quote}
      </Text>
      <Text
        textAlign="center"
        fontWeight={500}
        fontSize={[".7rem", ".8rem", ".9rem", "1rem"]}
        mt="2rem"
        mb=".3rem"
      >
        {quote.author}
      </Text>
      <Text
        textAlign="center"
        fontSize={[".5rem", ".6rem", ".7rem", ".8rem"]}
        lineHeight="120%"
      >
        {quote.position}
      </Text>
      <Text
        textAlign="center"
        fontSize={[".5rem", ".6rem", ".7rem", ".8rem"]}
        lineHeight="120%"
      >
        {quote.company}
      </Text>
    </Flex>
  );
};

const QuoteSlider = ({
  delay,
  quotes,
  showDots,
  showNavigation,
  autoScroll,
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(
        current === quotes.length - 1 ? 0 : current + 1
      );
    };

    if (autoScroll) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [current]);

  const computeTransform = (slidesNum) => {
    return `-${(100 / slidesNum) * current}`;
  };

  const nextSlide = () => {
    setCurrent(
      current === quotes.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrent(
      current === 0 ? quotes.length - 1 : current - 1
    );
  };

  const goToSlide = (id) => {
    setCurrent(id);
  };

  return (
    <Box
      // gray box
      ml="calc(50% - 50vw)"
      mr="calc(50% - 50vw)"
      bg="blackAlpha.300"
    >
      <Flex
        // big wrapper
        maxWidth={1280}
        w="100%"
        py="1rem"
        mx="auto"
        direction="column"
        align="center"
        justify="center"
      >
        <Box
          // slides wrapper
          overflow="hidden"
          w="100%"
          maxWidth={720}
        >
          <Flex
            // slideRow
            w={`${100 * quotes.length}%`}
            h="100%"
            flexWrap="nowrap"
            transition="1s ease-in-out"
            align="center"
            transform={`translate(-${
              (100 / quotes.length) * current
            }%)`}
          >
            {quotes.map((quote, index) => {
              return <Slide key={index} quote={quote} />;
            })}
          </Flex>
        </Box>
        <Flex
          w={11 * quotes.length}
          align="center"
          justify="space-between"
        >
          {Array.from(Array(quotes.length).keys()).map(
            (i) => {
              return (
                <Box
                  key={i}
                  borderRadius="100%"
                  h={1.5}
                  w={1.5}
                  cursor="pointer"
                  transform={
                    i === current
                      ? "scale(1.2)"
                      : "scale(1)"
                  }
                  bgColor={
                    i === current
                      ? "white"
                      : "whiteAlpha.500"
                  }
                  onClick={() => setCurrent(i)}
                />
              );
            }
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default QuoteSlider;
