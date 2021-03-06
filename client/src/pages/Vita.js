import React, { useState } from "react";
import {
  Flex,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

// custom imports
import Back from "../components/Back";
import Header from "../layouts/Header";

const MotionFlex = motion(Flex);

const VitaItem = ({ data }) => {
  const gray = useColorModeValue(
    "blackAlpha.800",
    "whiteAlpha.800"
  );

  // assumes item to be in wrapped in flex
  return (
    <Flex w="100%" my="1rem" direction={["column", "row"]}>
      <Text
        w={["100%", "5rem", "7rem"]}
        mb={[".5rem", "0"]}
        fontSize={[
          ".6rem",
          ".7rem",
          ".8rem",
          ".8rem",
          ".9rem",
        ]}
      >
        {data.date}
      </Text>
      <Flex flex={2} maxWidth={580} direction="column">
        <Text
          fontSize={[
            ".7rem",
            ".8rem",
            ".9rem",
            ".9rem",
            "1rem",
          ]}
          fontWeight={500}
        >
          {data.title}
        </Text>
        <Text
          mb=".5rem"
          fontWeight={350}
          fontSize={[
            ".7rem",
            ".8rem",
            ".9rem",
            ".9rem",
            "1rem",
          ]}
        >
          {data.description}
        </Text>
        <Text
          color={gray}
          fontWeight={350}
          fontSize={[
            ".7rem",
            ".8rem",
            ".9rem",
            ".9rem",
            "1rem",
          ]}
        >
          {data.company}
        </Text>
      </Flex>
    </Flex>
  );
};

const Vita = ({ vita, menuOpen, setMenuOpen }) => {
  const customers = [
    "Gruner+Jahr, Hamburg",
    "Motor Presse, Stuttgart",
    "Deutsche Medienmanufaktur, Münster",
    "Jahreszeitenverlag, Hamburg",
    "Burda, Offenburg",
    "Narrative Impact, Berlin / Hamburg",
    "Salzwassermedien, Hamburg",
    "Arztpraxis Nowak, München",
    "CondeNast, New York",
    "Mnieralum, Hamburg",
    "Töpper Consulting, Hamburg",
  ];

  return (
    <>
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <MotionFlex
        direction="column"
        mx="auto"
        px={["1.5rem", "3rem"]}
        w="100%"
        my="6rem"
        maxWidth={1200}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Back mb="3rem" />
        <Flex w="100%">
          <Box w={["0rem", "5rem", "7rem"]} />
          <Text
            mb="1rem"
            flex={2}
            fontSize={[
              ".8rem",
              ".9rem",
              ".9rem",
              "1rem",
              "1.1rem",
            ]}
            fontWeight="bold"
            textTransform="uppercase"
          >
            Vita
          </Text>
        </Flex>
        {vita.map((item, i) => {
          return <VitaItem key={i} data={item} />;
        })}
        <Flex w="100%">
          <Box w={["0", "0", "7rem"]} />
          <Flex direction="column">
            <Text
              mt="3rem"
              mb="1rem"
              flex={2}
              fontSize={[
                ".8rem",
                ".9rem",
                ".9rem",
                "1rem",
                "1.1rem",
              ]}
              fontWeight="bold"
              textTransform="uppercase"
            >
              Ausgewählte Kunden
            </Text>
            {customers.map((customer, i) => {
              return (
                <Text
                  key={i}
                  flex={2}
                  fontSize={[
                    ".7rem",
                    ".8rem",
                    ".9em",
                    ".9rem",
                    "1rem",
                  ]}
                  fontWeight={350}
                  my=".05rem"
                >
                  {customer}
                </Text>
              );
            })}
          </Flex>
        </Flex>
      </MotionFlex>
    </>
  );
};

export default Vita;
