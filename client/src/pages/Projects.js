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
import ProjectGallery from "../layouts/ProjectGallery";
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
        <ProjectGallery
          projects={data.projects}
          border={false}
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
        />
      </MotionFlex>
    </>
  );
};

export default Projects;
