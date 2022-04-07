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
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import LazyImage from "../components/LazyImage";

const MotionGridItem = motion(GridItem);
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);
const MotionLink = motion(Link);

const GridImage = ({ i, project, ...props }) => {
  const textAnimation = {
    rest: {
      transform: "translate(-24px)",
    },
    hover: {
      transform: "translate(0px)",
    },
  };

  return (
    <MotionLink
      w="100%"
      to={`/${project.name
        .toLowerCase()
        .replaceAll(" ", "-")}`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      initial="rest"
      whileHover="hover"
    >
      <AspectRatio ratio={1}>
        <Image
          src={`/images/projekte/${project.name
            .toLowerCase()
            .replaceAll(" ", "-")}/${project.name
            .toLowerCase()
            .replaceAll(" ", "-")}0.jpg`}
          alt={`some-cover`}
          height="100%"
          width="100%"
          objectFit="cover"
        />
      </AspectRatio>
      <Box overflow="hidden">
        <MotionFlex align="center" variants={textAnimation}>
          <MotionText fontWeight={300}>___</MotionText>
          <MotionText
            fontSize={[
              "0.6rem",
              "0.7rem",
              "0.8rem",
              "0.9rem",
              "1rem",
            ]}
            fontWeight={300}
          >
            {project.name}
          </MotionText>
        </MotionFlex>
      </Box>
    </MotionLink>
  );
};

const PrintProjects = ({ projects, ...props }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <Grid
      templateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap="50px 10px"
      {...props}
    >
      {projects.map((project, i) => {
        return (
          <GridImage key={i} project={project} i={i} />
        );
      })}
    </Grid>
  );
};

export default PrintProjects;
// https://picsum.photos/1000/1000?random=${i}
