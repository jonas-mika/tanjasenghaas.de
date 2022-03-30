import React, { useState } from "react";
import { Box, Container, Flex, Text, Link, Icon, Button, useColorMode } from "@chakra-ui/react";
import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
  TiSocialPinterestCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";
import { BiError } from "react-icons/bi";

const SocialLink = ({ text, url, icon = BiError }) => {
  return (
    <Link
      href={url}
      _hover={{ textDecoration: "none" }}
    >
      <Icon as={icon} _focus={{ outline: 0 }} h="1.8rem" w="1.8rem" />
    </Link>
  );
};

const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      marginTop="auto"
      w="100%"
      py="3rem"
      mx="auto"
      px="3rem"
      maxWidth={1200}
      align="flex-start"
      justify="space-between"
    >
      <Flex direction="column">
        <Text fontWeight={700} mb=".2rem">
          Tanja Senghaas
        </Text>
        <Text
          fontSize={{ sm: ".8rem", md: ".9rem", lg: "1rem" }}
          fontWeight={300}
          lineHeight="20px"
        >
          {" "}
          Horandstieg 30
        </Text>
        <Text
          fontSize={{ sm: ".8rem", md: ".9rem", lg: "1rem" }}
          fontWeight={300}
          lineHeight="20px"
        >
          22559 Hamburg, Deutschland
        </Text>
        <Link
          href='mailto:tanja.senghaas@web.de'
        >
        <Text
          fontSize={{ sm: ".8rem", md: ".9rem", lg: "1rem" }}
          fontWeight={300}
          lineHeight="20px"
        >
          tanja.senghaas@web.de
        </Text>
        </Link>
        <Flex mt='1rem'>
          <Text
            fontSize={{ sm: ".7rem", md: ".8rem", lg: ".9rem" }}
            fontWeight={300}
            fontStyle="italic"
          >
            &copy; 2022 Jonas-Mika Senghaas, 
          </Text>
          <Text 
            fontSize={{ sm: ".7rem", md: ".8rem", lg: ".9rem" }}
            fontWeight={300}
            fontStyle="italic"
            ml='.1rem'
            onClick={toggleColorMode}>
            {colorMode === 'light' ? 'Dunkles Theme' : 'Helles Theme' }
          </Text>
        </Flex>
      </Flex>
      <Flex direction="column">
        <SocialLink
          url="https://www.facebook.com/tanja.senghaas"
          icon={TiSocialFacebookCircular}
        />
        <SocialLink
          url="https://www.instagram.com/tanjasenghaas/"
          icon={TiSocialInstagramCircular}
        />
        <SocialLink
          url="https://www.pinterest.de/senghaas/"
          icon={TiSocialPinterestCircular}
        />
      </Flex>
    </Flex>
  );
};

export default Footer;
