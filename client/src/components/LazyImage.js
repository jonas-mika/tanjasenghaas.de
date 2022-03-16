import React, { useState } from "react"
import { Box, Container, Flex, Image, Text } from '@chakra-ui/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const PlaceHolder = () => {
  <Text>Loading</Text>
}

const LazyImage = ({ src, alt, height, width, objectFit }) => {
  return(
    <LazyLoadImage
      src={src} 
      alt={alt}
      height={height}
      width={width} 
      effect='blur'
    />
  )
}

export default LazyImage
