import React, { useState } from "react";
import { Flex, Box, Heading, Image } from "@chakra-ui/react";

const Hero = () => {
  return (
    <>
      <Flex w='100%' mt='10rem' mb='1rem'>
        <Heading fontSize={{ sm: "1.2rem", md: "1.5rem", lg: "2rem" }} fontWeight={300}>
          Gutes Design lebt immer von einer Haltung. Es macht sich unsichtbar,
          es lässt Dinge weg. Und doch – braucht es am Ende Details, die Bildern
          und Texten eine Visualität und Typographie verleihen. So wird
          Gestaltung lebendig.
        </Heading>
      </Flex>
      <Box h={{"sm": 500, "md": 600, "lg": 800}} ml='calc(50% - 50vw)' mr='calc(50% - 50vw)'>
        <Image
          h="100%"
          w="100%"
          objectFit="cover"
          src="/images/wolf/hero/hero2.jpeg"
        />
      </Box>
    </>
  );
};

export default Hero;
