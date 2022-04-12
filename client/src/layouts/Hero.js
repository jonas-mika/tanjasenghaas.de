import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import Header from "./Header";
const MotionBox = motion(Box);

const Hero = ({ menuOpen, setMenuOpen }) => {
  return (
    <Flex
      direction="column"
      ml="calc(50% - 50vw)"
      mr="calc(50% - 50vw)"
      h="100vh"
      align="center"
    >
      <MotionBox
        pos="absolute"
        h="100vh"
        w="100vw"
        zIndex={-1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        userSelect="none"
      >
        <Image
          h="100%"
          w="100%"
          opacity={.9}
          objectFit="cover"
          src="/images/portrait/portrait0.jpg"
        />
      </MotionBox>
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Flex
        flex={1}
        h="90vh"
        align={["flex-start", "flex-start", "center"]}
        justify="flex-start"
        px={["1.5rem", "3rem"]}
        maxWidth={1200}
      >
        <Heading
          mt={["5rem", "7rem", "0rem"]}
          fontSize={[
            ".9rem",
            "1rem",
            "1.2rem",
            "1.6rem",
            "2rem",
          ]}
          fontWeight={300}
          lineHeight={[5, 5, 7, 9]}
          w="40%"
        >
          Gutes Design lebt immer von einer Haltung. Es
          macht sich unsichtbar, es lässt Dinge weg. Und
          doch – braucht es am Ende Details, die Bildern und
          Texten eine Visualität und Typographie verleihen.
          So wird Gestaltung lebendig.
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Hero;
