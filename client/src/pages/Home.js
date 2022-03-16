import React, { useState } from "react";
import { Flex, Text, Heading, Button, useColorMode } from "@chakra-ui/react";

import Hero from "../layouts/Hero";
import ProjectGallery from "../layouts/ProjectGallery";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      direction="column"
      mx="auto"
      px="2rem"
      w="100%"
      maxWidth={1200}
    >
      <Hero />
      <ProjectGallery />
    </Flex>
  );
};

export default Home;
