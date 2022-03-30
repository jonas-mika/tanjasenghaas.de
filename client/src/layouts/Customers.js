import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  AspectRatio,
} from "@chakra-ui/react";

// custom components
import QuoteSlider from "../components/QuoteSlider";

const Customers = () => {
  const customers = require('../customers.json')

  return (
    <Box w="100%">
      <Text
        ml="3rem"
        mt="10rem"
        mb="1rem"
        fontWeight={500}
        fontSize={{
          sm: "1.2rem",
          md: "1.3rem",
          lg: "1.4rem",
        }}
      >
        Kunden
      </Text>
      <QuoteSlider
        quotes={customers}
        showNavigation={false}
        autoScroll={true}
      />
    </Box>
  );
};

export default Customers;
