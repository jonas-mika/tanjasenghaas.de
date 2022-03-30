import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Grid,
  GridItem,
  AspectRatio
} from "@chakra-ui/react";

import LazyImage from "../components/LazyImage";

const PrintProjects = () => {
  const projects = [
    { name: "gesund-leben", num_images: 1 },
    { name: "holly", num_images: 5 },
    { name: "hygge", num_images: 3 },
    { name: "modern-living", num_images: 4 },
    { name: "robb", num_images: 3 },
    { name: "salzwasser-medien", num_images: 1 },
    { name: "sport-fitness", num_images: 1 },
    { name: "wohllebens-welt", num_images: 5 },
    { name: "wolf", num_images: 6 },
  ];
  const dummies = [{ name: "dummy", num_images: 5 }];

  return (
    <Box w="100%">
      <Text
        ml="3rem"
        mt="10rem"
        mb="1rem"
        fontWeight={500}
        fontSize={{
          sm: "1.2rem",
          md: "1.3rem",
          lg: "1.4rem",
        }}
      >
        Print Projekte
      </Text>
      <Grid
        templateColumns={{
          "sm": "repeat(1, 1fr)",
          "md": "repeat(2, 1fr)",
          "lg": "repeat(3, 1fr)",
        }}
        gap={5}
      >
        {dummies.map((project, i) => {
          return Array.from(
            Array(project.num_images).keys()
          ).map((j) => {
            return (
              <GridItem 
                w='100%'
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
    </Box>
  );
};

export default PrintProjects;
// https://picsum.photos/1000/1000?random=${i}
