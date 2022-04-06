import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  AspectRatio,
} from "@chakra-ui/react";

// custom components
import QuoteSlider from "../components/QuoteSlider";

const Customers = ({ customers }) => {
  return (
    <Box w="100%">
      <QuoteSlider
        quotes={customers}
        showNavigation={false}
        autoScroll={true}
      />
    </Box>
  );
};

export default Customers;
