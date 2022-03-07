import React, { useState } from "react";
import { Flex, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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

const MenuLink = ({ item, link }) => {
  return (
    <Link to={`/${link}`}>
      <Text
        fontWeight={300}
        pl="1rem"
        fontSize={{ sm: ".7rem", md: ".85rem", lg: "1rem" }}
      >
        {item}
      </Text>
    </Link>
  );
};

const Header = () => {
  return (
    <Flex
      py="3rem"
      mx="auto"
      px="2rem"
      w='100%'
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
      <Flex className="menu">
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
