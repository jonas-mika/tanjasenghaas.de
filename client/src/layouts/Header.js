import React, { useState } from "react";
import { Box, Flex, Text, Heading, Icon, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { CgDarkMode } from "react-icons/cg";

const Title = () => {
  return (
    <Heading fontSize={{ sm: "1rem", md: "1.1rem", lg: "1.2rem" }}>
      Tanja Senghaas Designs
    </Heading>
  );
};

const Subtitle = () => {
  return (
    <Text fontWeight={300} fontSize={{ sm: ".8rem", md: ".9rem", lg: "1rem" }}>
      Creative Direction | Magazinentwicklung
    </Text>
  );
};

const MenuLink = ({ item, link, pr }) => {
  return (
    <Box ml="1rem">
      <Link to={`/${link}`}>
        <Text
          fontWeight={300}
          fontSize={{ sm: ".7rem", md: ".85rem", lg: "1rem" }}
        >
          {item}
        </Text>
      </Link>
    </Box>
  );
};

const Header = () => {
  return (
    <Flex
      pt="3rem"
      mx="auto"
      px="2rem"
      w="100%"
      maxWidth={1200}
      align="flex-end"
      justify="space-between"
    >
      <Link to="/">
        <Flex direction="column">
          <Title />
          <Subtitle />
        </Flex>
      </Link>
      <Flex className="menu" align="center">
        <MenuLink item={"Designs"} link={"vita"} />
        <MenuLink item={"Angebot"} link={"vita"} />
        <MenuLink item={"Über mich"} link={"vita"} />
        <MenuLink item={"Kundenfeeback"} link={"vita"} />
        <MenuLink item={"Kontakt"} link={"vita"} />
      </Flex>
    </Flex>
  );
};

export default Header;
