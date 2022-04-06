import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const MotionFlex = motion(Flex);
const MotionText = motion(Text);

const MenuLink = ({ name, link, setMenuOpen }) => {
  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        when: "afterChildren",
      },
    },
  };

  return (
    <MotionText
      fontWeight={400}
      fontSize={["1.5rem", "1.75rem", "2rem", "2.5rem"]}
      my=".5rem"
      initial="hidden"
      animate="visible"
      variant={variants}
      whileHover={{ scale: 1.01 }}
      whileTab={{ scale: 0.5 }}
      onClick={() => setMenuOpen(false)}
    >
      <Link to={link}>{name}</Link>
    </MotionText>
  );
};

const OverlayMenu = ({ menuOpen, setMenuOpen }) => {
  const bg = useColorModeValue("white", "gray.800");

  const variants = {
    visible: {
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
        duration: 0.5,
      },
    },
    hidden: {
      y: "-100%",
      transition: {
        when: "afterChildren",
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <MotionFlex
          bgColor={bg}
          position="absolute"
          w="100vw"
          h="100vh"
          direction="column"
          align="center"
          justify="center"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          zIndex={10}
        >
          <MenuLink
            name={"Projekte"}
            link={"projekte"}
            setMenuOpen={setMenuOpen}
          />
          <MenuLink
            name={"Angebot"}
            link={"angebot"}
            setMenuOpen={setMenuOpen}
          />
          <MenuLink
            name={"Über Mich"}
            link={"vita"}
            setMenuOpen={setMenuOpen}
          />
          <MenuLink
            name={"Kontakt"}
            link={"kontakt"}
            setMenuOpen={setMenuOpen}
          />
        </MotionFlex>
      )}
    </AnimatePresence>
  );
};

export default OverlayMenu;
