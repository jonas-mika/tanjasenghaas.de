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

// custom imports
import PrintProjects from "../layouts/PrintProjects";
import TypographyProjects from "../layouts/TypographyProjects";
import Header from "../layouts/Header";
import Back from "../components/Back";

// motion components
const MotionFlex = motion(Flex);

const Projects = ({ data, menuOpen, setMenuOpen }) => {
  return (
    <>
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <MotionFlex
        direction="column"
        mx="auto"
        px={["1.5rem", "3rem"]}
        w="100%"
        maxWidth={1200}
        my="6rem"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Back />
        <PrintProjects projects={data.projects} mb="5rem" />
        <TypographyProjects projects={data.projects} />
      </MotionFlex>
    </>
  );
};

export default Projects;
