import React from "react";
import { Flex, Text, Heading } from "@chakra-ui/react";

const PageContainer = ({ component }) => {
  return (
    <Flex py="3rem" mx="auto" px="2rem" maxWidth={1200}>
      {component}
    </Flex>
  );
};

export default PageContainer;
