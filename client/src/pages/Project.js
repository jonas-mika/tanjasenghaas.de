import React, { useState } from "react";
import {
  AspectRatio,
  Box,
  Flex,
  Image,
  Text,
  Heading,
  Grid,
  GridItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import Back from "../components/Back";
import useWindowSize from "../components/useWindowSize";
import Header from "../layouts/Header";

const MotionFlex = motion(Flex);
const MotionImage = motion(Image);
const MotionGridItem = motion(GridItem);

const imageFlyIn = {
  initial: {
    left: "100%",
  },
  animate: {
    left: "60%",
    transition: { delay: 1, duration: 0.5 },
  },
};

const Project = ({ project, menuOpen, setMenuOpen }) => {
  const windowSize = useWindowSize();

  const gray = useColorModeValue(
    "blackAlpha.700",
    "whiteAlpha.700"
  );

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
        my="8rem"
        maxWidth={1200}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Back />
        <Flex
          direction="column"
          w={{sm: "100%", md: "80%", lg: "70%"}}
        >
          <Text
            fontSize={[
              ".9rem",
              "1rem",
              "1.1rem",
              "1.2rem",
              "1.3rem",
            ]}
            fontWeight="bold"
            textTransform="uppercase"
          >
            {project.name}
          </Text>
          <Text color={gray} 
            fontSize={[
              ".8rem",
              ".8rem",
              ".9rem",
              "1rem",
              "1.1rem",
            ]}
    fontWeight={400}>
            {project.date}, {project.task}
          </Text>
          <Text
            mt="1rem"
            fontSize={[
              ".7rem",
              ".8rem",
              ".9rem",
              "1rem",
              "1.1rem",
            ]}
            fontWeight={500}
            lineHeight='160%'
          >
            {project.description}
          </Text>
          <Text
            fontSize={[
              ".7rem",
              ".8rem",
              ".9rem",
              "1rem",
              "1.1rem",
            ]}
            fontWeight={400}
            color={gray}
            mt="1rem"
          >
            {project.company}
          </Text>
        </Flex>
        <Grid
          mt="10rem"
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={5}
        >
          {Array.from(
            Array(parseInt(project.numImages)).keys()
          ).map((i) => {
            return (
              <AspectRatio ratio={1}>
                <Image
                  key={i}
                  src={`/images/projekte/${project.name
                    .toLowerCase()
                    .replaceAll(" ", "-")}/${project.name
                    .toLowerCase()
                    .replaceAll(" ", "-")}${i}.jpg`}
                  alt={`${project.name
                    .toLowerCase()
                    .replaceAll(" ", "-")}${i}`}
                  height="100%"
                  width="100%"
                  objectFit="cover"
                />
              </AspectRatio>
            );
          })}
        </Grid>
      </MotionFlex>
    </>
  );
};

export default Project;
