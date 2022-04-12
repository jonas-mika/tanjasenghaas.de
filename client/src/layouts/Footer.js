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
        _hover={{ color: "#00793F" }}
        h={["1.5rem", "1.5rem", "1.5rem","1.6rem"]}
        w={["1.5rem", "1.5rem", "1.5rem","1.6rem"]}
      />
    </Link>
  );
};

const FooterText = ({ text, ...props }) => {
  return (
    <Text
      fontSize={[
        ".7rem",
        ".8rem",
        ".9rem",
        "1em",
        "1.1rem",
      ]}
      {...props}
    >
      {text}
    </Text>
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
      px={["1.5rem", "3rem"]}
      maxWidth={1200}
      align="flex-start"
      justify="space-between"
    >
      <Flex direction="column">
        <FooterText
          text="Tanja Senghaas"
          fontSize={['.6rem', '.7rem', '.8rem', '.9rem']}
          fontWeight={700}
          mb=".2rem"
        />
        <FooterText
          text="Horandstieg 30"
          fontSize={['.5rem', '.6rem', '.7rem', '.8rem']}
          fontWeight={400}
        />
        <FooterText
          text="22559 Hamburg, Deutschland"
          fontSize={['.5rem', '.6rem', '.7rem', '.8rem']}
          fontWeight={400}
        />
        <Link href="mailto:tanja.senghaas@web.de">
          <FooterText
            text="tanja.senghaas@web.de"
            fontSize={['.5rem', '.6rem', '.7rem', '.8rem']}
            fontWeight={400}
          />
        </Link>
        <Flex mt=".5rem">
          <Link href="https://www.jonas-mika.de/">
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
          </Link>
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
