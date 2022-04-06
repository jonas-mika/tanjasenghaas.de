import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Grid,
  GridItem,
  AspectRatio,
} from "@chakra-ui/react";

import LazyImage from "../components/LazyImage";

const ProjectGallery = ({ ...props }) => {
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
    <Grid
      templateColumns={{
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={5}
      {...props}
    >
      {dummies.map((project, i) => {
        return Array.from(Array(3).keys()).map((j) => {
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
  );
};

export default ProjectGallery;
// https://picsum.photos/1000/1000?random=${i}
