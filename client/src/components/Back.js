import React, { useState } from "react";
import {
  Flex,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

const MotionFlex = motion(Flex);

const textAnimation = {
  rest: {
    color: "white",
  },
  hover: {
    color: "black",
  },
};

const iconAnimation = {
  rest: {
    rotate: 0,
  },
  hover: {
    rotate: 45,
  },
};

const Back = ({ ...props }) => {
  const navigate = useNavigate();

  return (
    <MotionFlex
      w={90}
      align="center"
      justify="flex-start"
      cursor="pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
      onClick={() => navigate(-1)}
      mb="2rem"
      {...props}
    >
      <MotionFlex
        h={4}
        w={4}
        align="center"
        justify="center"
        variants={iconAnimation}
      >
        <AiOutlinePlus size="50px" />
      </MotionFlex>
      <Text fontSize='.8rem' ml=".25rem" variants={textAnimation}>
        Zurück
      </Text>
    </MotionFlex>
  );
};

export default Back;
