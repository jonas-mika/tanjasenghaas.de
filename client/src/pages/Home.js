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
import ProjectGallery from "../layouts/ProjectGallery";
import Customers from "../layouts/Customers";
import QuoteSlider from "../components/QuoteSlider";

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

const Home = ({ data, menuOpen, setMenuOpen }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const printProjects = data.projects.filter(
    (p) => p.type === "print"
  );
  const typoProjects = data.projects.filter(
    (p) => p.type === "typo"
  );

  return (
    <MotionFlex
      direction="column"
      mx="auto"
      px={["1.5rem", "3rem"]}
      w="100%"
      maxWidth={1200}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Hero menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Text m="5rem 0rem 1rem 2rem" fontWeight={600}>
        Print Projekte
      </Text>
      <ProjectGallery
        projects={printProjects}
        border={false}
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          // xl: "repeat(4, 1fr)",
        }}
      />
      <Text m="5rem 0rem 1rem 2rem" fontWeight={600}>
        Typografie Projekte
      </Text>
      <ProjectGallery
        projects={typoProjects}
        border={true}
        templateColumns={{
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
          // lg: "repeat(4, 1fr)",
        }}
      />
      <Text m="5rem 0rem 1rem 2rem" fontWeight={600}>
        Kunden
      </Text>
      <QuoteSlider
        quotes={data.customers}
        showNavigation={false}
        autoScroll={true}
      />
    </MotionFlex>
  );
};

export default Home;
