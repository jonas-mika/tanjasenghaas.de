import React, { useState } from "react";
import {
  Box,
  Image,
  Flex,
  Text,
  Heading,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import Hero from "../layouts/Hero";
import PrintProjects from "../layouts/PrintProjects";
import TypographyProjects from "../layouts/TypographyProjects";
import Customers from "../layouts/Customers";

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

const Home = ({ data }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <MotionBox
        pos="absolute"
        h="100vh"
        w="100vw"
        zIndex={-1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        userSelect='none'
      >
        <Image
          h="100%"
          w="100%"
          opacity={0.6}
          objectFit="cover"
          src="/images/wolf/hero/hero3.jpeg"
        />
      </MotionBox>
      <MotionFlex
        direction="column"
        mx="auto"
        px="3rem"
        w="100%"
        maxWidth={1200}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <PrintProjects projects={data.projects} />
        <TypographyProjects projects={data.projects} />
        <Customers customers={data.customers} />
      </MotionFlex>
    </>
  );
};

export default Home;
