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

const PrintProjects = ({ projects, ...props }) => {
  const [hovered, setHovered] = useState(null);

  const dummies = [{ name: "dummy", num_images: 5 }];

  return (
    <Grid
      templateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={5}
      {...props}
    >
      {projects.map((project, i) => {
        return (
          <MotionGridItem
            key={i}
            w="100%"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ type: "spring", duration: 1 }}
            onMouseEnter={() => {
              setHovered(i);
            }}
            onMouseLeave={() => {
              setHovered(null);
            }}
            whileHover={{
              background: "rgba(56, 255, 255, 0.1)",
            }}
            viewport={{ once: true }}
          >
            <AspectRatio ratio={1}>
              <>
                <Image
                  key={i}
                  src={`/images/dummy/dummy${i % 5}.jpeg`}
                  alt={`${project.name}-cover`}
                  height="100%"
                  width="100%"
                  objectFit="cover"
                />
                {i === hovered && (
                  <AnimatePresence>
                    <Link
                      to={project.name
                        .toLowerCase()
                        .replaceAll(" ", "-")}
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      <MotionFlex
                        position="absolute"
                        zIndex={10}
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        initial={{
                          background: "rgba(0, 0, 0, 0)",
                        }}
                        animate={{
                          background: "rgba(0, 0, 0, 0.8)",
                        }}
                        initial={{
                          background: "rgba(0, 0, 0, 0)",
                        }}
                        transition={{
                          type: "easeInOut",
                          duration: 0,
                        }}
                      >
                        <MotionText
                          textAlign="center"
                          fontSize={[
                            "1.4rem",
                            "1.6rem",
                            "1.8rem",
                            "2rem",
                            "2.2rem",
                          ]}
                          fontWeight={300}
                          color="white"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            delay: 0.1,
                            duration: 0.1,
                          }}
                        >
                          {project.name.toUpperCase()}
                        </MotionText>
                      </MotionFlex>
                    </Link>
                  </AnimatePresence>
                )}
              </>
            </AspectRatio>
          </MotionGridItem>
        );
      })}
    </Grid>
  );
};

export default PrintProjects;
// https://picsum.photos/1000/1000?random=${i}
