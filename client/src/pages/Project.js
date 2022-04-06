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
  useColorModeValue
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import useWindowSize from "../components/useWindowSize";

const MotionFlex = motion(Flex);
const MotionGridItem = motion(GridItem);

const Project = ({ project }) => {
  const windowSize = useWindowSize();

  const gray = useColorModeValue("blackAlpha.700", "whiteAlpha.700")
  const dummies = [{ name: "dummy", num_images: 5 }];

  return (
    <MotionFlex
      direction="column"
      mx="auto"
      px={{"sm": "2rem", "md": "3rem"}}
      w="100%"
      my="6rem"
      maxWidth={1200}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Box w="100%">
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
        <Text
          mt=".8rem"
          color={gray}
          fontWeight={400}
        >
          {project.date}, {project.task}
        </Text>
        <Text
          mt="3rem"
          fontSize={[
            ".8rem",
            ".9rem",
            "1rem",
            "1.1rem",
            "1.2rem",
          ]}
          lineHeight={7}
          maxWidth={windowSize.width > 600 ? "70%" : "100%"}
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
          mt="2rem"
        >
          {project.company}
        </Text>
      </Box>
      <Grid
        mt="6rem"
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={5}
      >
        {dummies.map((project, i) => {
          return Array.from(
            Array(project.num_images).keys()
          ).map((j) => {
            return (
              <GridItem w="100%">
                <AspectRatio ratio={1}>
                  <Image
                    key={i}
                    src={`/images/${project.name}/${project.name}${j}.jpeg`}
                    alt={`${project.name}${j}`}
                    height="100%"
                    width="100%"
                    objectFit="cover"
                  />
                </AspectRatio>
              </GridItem>
            );
          });
        })}
      </Grid>
    </MotionFlex>
  );
};

export default Project;
