import React, { useState } from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  Link,
  Icon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
  TiSocialPinterestCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";
import { BiError } from "react-icons/bi";

const SocialLink = ({ text, url, icon = BiError }) => {
  return (
    <Link href={url} _hover={{ textDecoration: "none" }}>
      <Icon
        as={icon}
        _focus={{ outline: 0 }}
        h="1.8rem"
        w="1.8rem"
      />
    </Link>
  );
};

const Footer = () => {
  const gray = useColorModeValue(
    "blackAlpha.700",
    "whiteAlpha.700"
  );

  return (
    <Flex
      marginTop="auto"
      w="100%"
      py="3rem"
      mx="auto"
      px={{ sm: "2rem", md: "3rem" }}
      maxWidth={1200}
      align="flex-start"
      justify="space-between"
    >
      <Flex direction="column">
        <Text
          fontSize={[
            ".6rem",
            ".7rem",
            ".8rem",
            ".9em",
            "1rem",
          ]}
          fontWeight={700}
          mb=".2rem"
        >
          Tanja Senghaas
        </Text>
        <Text
          fontSize={[
            ".6rem",
            ".7rem",
            ".8rem",
            ".9rem",
            "1rem",
          ]}
          fontWeight={300}
          lineHeight="16px"
        >
          {" "}
          Horandstieg 30
        </Text>
        <Text
          fontSize={[
            ".6rem",
            ".7rem",
            ".8rem",
            ".8rem",
            "1rem",
          ]}
          fontWeight={300}
          lineHeight="16px"
        >
          22559 Hamburg, Deutschland
        </Text>
        <Link href="mailto:tanja.senghaas@web.de">
          <Text
            fontSize={[
              ".6rem",
              ".7rem",
              ".8rem",
              ".8rem",
              "1rem",
            ]}
            fontWeight={300}
            lineHeight="16px"
          >
            tanja.senghaas@web.de
          </Text>
        </Link>
        <Flex mt=".5rem">
          <Text
            color={gray}
            fontSize={[
              ".5rem",
              ".6rem",
              ".7rem",
              ".8rem",
              ".9rem",
            ]}
            fontWeight={300}
            fontStyle="italic"
          >
            &copy; 2022 Jonas-Mika Senghaas
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
