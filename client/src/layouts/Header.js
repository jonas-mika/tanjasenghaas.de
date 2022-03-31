import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Heading,
  Icon,
  useColorMode,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { CgDarkMode } from "react-icons/cg";
import { AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";

// custom hook
import useWindowSize from "../components/useWindowSize";
import Switch from "../components/Switch";

const MotionFlex = motion(Flex);

const Title = () => {
  return (
    <Heading
      fontSize={[".9rem", "1rem", "1.1rem", "1.2rem"]}
    >
      Tanja Senghaas Designs
    </Heading>
  );
};

const Subtitle = () => {
  return (
    <Text
      fontWeight={300}
      fontSize={[".7rem", ".8rem", ".9rem", "1rem"]}
    >
      Creative Direction | Magazinentwicklung
    </Text>
  );
};

const MenuLink = ({ item, link, pr }) => {
  return (
    <Box ml="1rem">
      <Link to={`/${link}`}>
        <Text
          fontWeight={400}
          fontSize={{
            sm: ".8rem",
            md: ".9rem",
            lg: "1rem",
          }}
        >
          {item}
        </Text>
      </Link>
    </Box>
  );
};

const Header = ({ menuOpen, setMenuOpen }) => {
  const windowSize = useWindowSize();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      pt="3rem"
      mx="auto"
      px="3rem"
      w="100%"
      h="5rem"
      maxWidth={1200}
      align={windowSize.width > 800 ? "flex-end" : "center"}
      justify="space-between"
    >
      <Link to="/">
        <Flex direction="column">
          <Title />
          <Subtitle />
        </Flex>
      </Link>
      {windowSize.width > 900 ? (
        <Flex className="menu" align="center">
          <MenuLink item={"Designs"} link={"vita"} />
          <MenuLink item={"Angebot"} link={"vita"} />
          <MenuLink item={"Über mich"} link={"vita"} />
          <MenuLink item={"Kundenfeeback"} link={"vita"} />
          <MenuLink item={"Kontakt"} link={"vita"} />
          <Switch
            isOn={colorMode === "light"}
            onClick={toggleColorMode}
            bgOn="#A89C92"
            bgOff="#1A202C"
            ml='1rem'
          />
        </Flex>
      ) : (
        <MotionFlex
          h={7}
          w={7}
          align="center"
          justify="center"
          onClick={() => setMenuOpen(!menuOpen)}
          zIndex={10}
          whileHover={{ rotate: 45, cursor: "pointer" }}
          whileTab={{ scale: 0.9 }}
        >
          <AiOutlinePlus size="50px" />
        </MotionFlex>
      )}
    </Flex>
  );
};

export default Header;
