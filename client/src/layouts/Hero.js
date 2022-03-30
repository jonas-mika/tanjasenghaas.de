import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Image,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <>
      <Flex
        w="100%"
        h="80vh"
        justify="center"
        align="center"
      >
        <Heading
          fontSize={{
            sm: "1.4rem",
            md: "1.6rem",
            lg: "2rem",
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
    </>
  );
};

export default Hero;
