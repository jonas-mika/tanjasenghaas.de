import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

const Switch = ({ isOn, bgOn, bgOff, ...props }) => {
  return (
    <MotionFlex
      minWidth={8}
      w={8}
      h={5}
      p={1}
      align="center"
      justify={isOn ? "flex-end" : "flex-start"}
      bgColor={isOn ? bgOn : bgOff}
      borderRadius={50}
      cursor="pointer"
      animate
      {...props}
    >
      <MotionBox
        bgColor="white"
        borderRadius={50}
        w={4}
        h={4}
        animate
      />
    </MotionFlex>
  );
};

export default Switch;
