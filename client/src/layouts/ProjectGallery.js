import React, { useState } from "react";
import { Box, Flex, Text, Image, Grid, GridItem } from "@chakra-ui/react";

import LazyImage from "../components/LazyImage";

const ProjectGallery = () => {
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

  return (
    <Box w="100%">
      <Text
        ml="3rem"
        mt="5rem"
        mb="1rem"
        fontWeight={500}
        fontSize={{ sm: "1.2rem", md: "1.3rem", lg: "1.4rem" }}
      >
        Projekte
      </Text>
      <Grid
        templateColumns={{ sm: "repeat(1, 3fr)", md: "repeat(2, 1fr)" }}
        gap={5}
      >
        {projects.map((project, i) => {
          for (var j = 0; j < project.num_images; j++) {
            return (
              <GridItem h={400}>
                <Image
                  key={i}
                  src={`/images/${project.name}/${project.name}${j}.jpg`}
                  alt={`${project.name}-cover`}
                  height='100%'
                  width="100%"
                  objectFit='scale-down'
                />
              </GridItem>
            );
          }
        })}
      </Grid>
    </Box>
  );
};

export default ProjectGallery;
// https://picsum.photos/1000/1000?random=${i}
