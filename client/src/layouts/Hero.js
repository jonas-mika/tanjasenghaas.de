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
          opacity={0.6}
          objectFit="cover"
          src="/images/wolf/hero/hero3.jpeg"
        />
      </MotionBox>
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Flex
        flex={1}
        w="100%"
        h="90vh"
        justify="center"
        align="center"
        px={{ sm: "2rem", md: "3rem" }}
        maxWidth={1200}
      >
        <Heading
          fontSize={{
            sm: "1.4rem",
            md: "1.6rem",
            lg: "1.8rem",
            xl: "2.2rem",
          }}
          fontWeight={400}
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
