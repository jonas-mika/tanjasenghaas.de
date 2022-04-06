import React, { useState } from "react";
import {
  Flex,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);

const VitaItem = ({ data }) => {
  const gray = useColorModeValue(
    "blackAlpha.700",
    "whiteAlpha.700"
  );

  // assumes item to be in wrapped in flex
  return (
    <Flex w="100%" my="1rem">
      <Text
        w={{ sm: "5rem", md: "6rem" }}
        fontSize={[
          ".6rem",
          ".7rem",
          ".8rem",
          ".9rem",
          "1rem",
        ]}
      >
        {data.date}
      </Text>
      <Flex flex={2} maxWidth={580} direction="column">
        <Text
          fontSize={[
            ".6rem",
            ".7rem",
            ".8rem",
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
            ".6rem",
            ".7rem",
            ".8rem",
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
            ".6rem",
            ".7rem",
            ".8rem",
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

const Vita = ({ vita }) => {
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
    <MotionFlex
      direction="column"
      mx="auto"
      px={{"sm": "2rem", "md": "3rem"}}
      w="100%"
      my="9rem"
      maxWidth={1200}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Flex w="100%">
        <Box w={{ sm: "5rem", md: "6rem" }} />
        <Text
          mb="1rem"
          flex={2}
          fontSize={[
            ".8rem",
            ".9rem",
            "1rem",
            "1.1rem",
            "1.2rem",
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
        <Box w={{ md: "0rem", lg: "6rem" }} />
        <Flex direction="column">
          <Text
            mt="3rem"
            mb="1rem"
            flex={2}
            fontSize={[
              ".8rem",
              ".9rem",
              "1rem",
              "1.1rem",
              "1.2rem",
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
                  ".6rem",
                  ".7rem",
                  ".8em",
                  ".9rem",
                  "1rem",
                ]}
                fontWeight={350}
              >
                {customer}
              </Text>
            );
          })}
        </Flex>
      </Flex>
    </MotionFlex>
  );
};

export default Vita;
