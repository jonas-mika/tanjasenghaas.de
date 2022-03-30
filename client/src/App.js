import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {
  ChakraProvider,
  Container,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import AnimatedCursor from "react-animated-cursor";
import useMobileDetect from "use-mobile-detect-hook";

// pages
import Home from "./pages/Home";
import Vita from "./pages/Vita";
import Project from "./pages/Project";

// global styling
import theme from "./styling/theme";
import Font from "./styling/font";

// global components
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const App = () => {
  const mobile = useMobileDetect();
  const { colorMode, toggleColorMode } = useColorMode();

  console.log(theme);

  return (
    <ChakraProvider theme={theme}>
      <Font />
      {mobile.isMobile && (
        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color="193, 11, 111"
          outerAlpha={0.2}
          innerScale={0}
          outerScale={5}
        />
      )}

      <Router>
        <Flex
          direction="column"
          align="flex-start"
          height="100vh"
          width="100vw"
        >
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="vita" element={<Vita />} />
            <Route
              path=":projectId"
              element={<Project />}
            />
          </Routes>

          <Footer />
        </Flex>
      </Router>
    </ChakraProvider>
  );
};

export default App;
