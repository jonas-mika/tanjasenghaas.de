import React, { useState } from "react";
import { Container, Flex, Text, Link } from "@chakra-ui/react";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaPinterestSquare } from "react-icons/fa";

const SocialLink = ({ icon, link }) => {
  return <Link href={link}>link</Link>;
};

const Footer = () => {
  return (
    <Flex
      marginTop='auto'
      w='100%'
      py="3rem"
      mx="auto"
      px="2rem"
      maxWidth={1200}
      align="flex-start"
      justify="space-between"
    >
      <Flex direction="column">
        <Text fontWeight={700} m={0} p={0}>
          Tanja Senghaas
        </Text>
        <Text m={0} p={0}>
          Horandstieg 30
        </Text>
        <Text>22559 Hamburg</Text>
        <Text>Deutschland</Text>
        <Text>tanja.senghaas@web.de</Text>
        <Text>&copy 2022 Jonas-Mika Senghaas</Text>
      </Flex>
      <Flex direction="column">
        <SocialLink />
        <SocialLink />
        <SocialLink />
      </Flex>
    </Flex>
  );
};

export default Footer;
