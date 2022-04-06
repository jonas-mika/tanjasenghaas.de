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
import QuoteSlider from "../components/QuoteSlider";

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

const Home = ({ data, menuOpen, setMenuOpen }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <MotionFlex
      direction="column"
      mx="auto"
      px={{ sm: "2rem", md: "3rem" }}
      w="100%"
      maxWidth={1200}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Hero menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Text m="5rem 0rem 1rem 2rem">Print Projekte</Text>
      <PrintProjects projects={data.projects} />
      <Text m="5rem 0rem 1rem 2rem">Typografie Projekte</Text>
      <TypographyProjects projects={data.projects} />
      <Text m="5rem 0rem 1rem 2rem">Kunden</Text>
      <QuoteSlider
        quotes={data.customers}
        showNavigation={false}
        autoScroll={true}
      />
    </MotionFlex>
  );
};

export default Home;
