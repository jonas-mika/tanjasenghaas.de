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
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);
const MotionGridItem = motion(GridItem);

const Project = ({ project }) => {
  let { projectID } = useParams();

  const dummies = [{ name: "dummy", num_images: 5 }];

  return (
    <MotionFlex
      direction="column"
      mx="auto"
      px="3rem"
      w="100%"
      mt="6rem"
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
          lineHeight={0}
          mt=".8rem"
          color="gray.700"
          fontWeight={300}
        >
          {project.date}, {project.task}
        </Text>
        <Text mt="2rem" maxWidth="70%">
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
          fontWeight="bold"
          color="gray.700"
          mt="1rem"
        >
          {project.company}
        </Text>
      </Box>
      <Grid
        mt='6rem'
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
              <GridItem
                w="100%"
              >
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
