import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  useColorMode,
} from "@chakra-ui/react";

// custom imports
import Back from "../components/Back";
import Header from "../layouts/Header";

const NoMatch = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Flex
        direction="column"
        my="6rem"
        mx="auto"
        px={["1.5rem", "3rem"]}
        w="100%"
        maxWidth={1200}
      >
        <Back />
        <Heading
          fontSize={[
            "1.3rem",
            "1.4rem",
            "1.5rem",
            "1.6rem",
            "1.7rem",
          ]}
          mb="1rem"
        >
          404 :/
        </Heading>
        <Text>
          Hey, leider scheint diese Seite nicht zu
          existieren. Klick dich doch mal durch das Menü.
          Oder vielleicht interessieren Dich ein paar meiner
          neuesten Projekte.
        </Text>
      </Flex>
    </>
  );
};

export default NoMatch;
