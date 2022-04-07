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

const GridImage = ({ i, project, ...props }) => {
  const text = {
    rest: {},
    hover: {
      scale: 1.1,
    },
  };

  return (
    <Link
      w="100%"
      to={`/${project.name
        .toLowerCase()
        .replaceAll(" ", "-")}`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <AspectRatio ratio={1}>
        <Image
          src={`/images/dummy/dummy${i % 5}.jpeg`}
          alt={`some-cover`}
          height="100%"
          width="100%"
          objectFit="cover"
        />
      </AspectRatio>
      <Flex>
        <Text
          variants={text}
          fontSize={[
            "0.6rem",
            "0.7rem",
            "0.8rem",
            "0.9rem",
            "1rem",
          ]}
          fontWeight={300}
        >
          {project.name},
        </Text>
        <Text
          fontSize={[
            "0.6rem",
            "0.7rem",
            "0.8rem",
            "0.9rem",
            "1rem",
          ]}
          fontWeight={300}
          ml=".1rem"
        >
          {project.date}
        </Text>
      </Flex>
    </Link>
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
