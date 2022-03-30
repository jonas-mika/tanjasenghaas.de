import React, { useState } from "react";
import { Box, Image, Flex, Text, Heading, Button, useColorMode } from "@chakra-ui/react";

import Hero from "../layouts/Hero";
import PrintProjects from "../layouts/PrintProjects";
import TypographyProjects from "../layouts/TypographyProjects";
import Customers from "../layouts/Customers";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        pos='absolute'
        h='100vh'
        w='100vw'
        zIndex={-1}
      >
        <Image
          h="100%"
          w="100%"
          opacity={0.6}
          objectFit="cover"
          src="/images/wolf/hero/hero3.jpeg"
        />
      </Box>
    <Flex
      direction="column"
      mx="auto"
      px="3rem"
      w="100%"
      maxWidth={1200}
    >
      <Hero />
      <PrintProjects />
      <TypographyProjects />
      <Customers />
    </Flex>
    </>
  );
};

export default Home;
