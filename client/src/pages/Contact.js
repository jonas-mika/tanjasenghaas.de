import React, { useState } from "react";
import {
  Flex,
  Box,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// custom imports
import Back from "../components/Back";
import Header from "../layouts/Header";

const MotionFlex = motion(Flex);

const ContactItem = ({ name, detail, link, ...props }) => {
  return (
    <Flex align="center">
      <Text w={100} fontWeight={500}>
        {name}
      </Text>
      <Link href={link}>
        <Text textAlign="left">{detail}</Text>
      </Link>
    </Flex>
  );
};

const Contact = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <MotionFlex
        direction="column"
        mx="auto"
        px={{ sm: "2rem", md: "3rem" }}
        w="100%"
        my="6rem"
        maxWidth={1200}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Back mb="3rem" />
        <Flex w="100%">
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
            Kontakt
          </Text>
        </Flex>
        <Text
          flex={2}
          fontSize={[
            ".8rem",
            ".9rem",
            "1rem",
            "1.1rem",
            "1.2rem",
          ]}
          maxWidth={480}
          mb="2rem"
        >
          Hey! Kontaktieren Sie mich gerne bei Anfragen
          jeglicher Art über einen der folgenden Wege. Ich
          freue mich, mit Ihnen in Kontakt zu treten!
        </Text>
        <ContactItem
          name="Tel"
          detail="+49 151 22543476"
          link="tel:+49 151 22543476"
        />
        <ContactItem
          name="Mail"
          detail="tanja.senghaas@web.de"
          link="mail:tanja.senghaas@web.de"
        />
        <ContactItem
          name="Instagram"
          detail="@tanjasenghaas"
          link="https://www.instagram.com/tanjasenghaas/"
        />
      </MotionFlex>
    </>
  );
};

export default Contact;
