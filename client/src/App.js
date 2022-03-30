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
import NoMatch from "./pages/NoMatch";

// global styling
import theme from "./styling/theme";
import Font from "./styling/font";

// global components
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import OverlayMenu from "./layouts/OverlayMenu";

const App = () => {
  const mobile = useMobileDetect();
  const { colorMode, toggleColorMode } = useColorMode();
  const [menuOpen, setMenuOpen] = useState(false);

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
          <OverlayMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Flex
            direction="column"
            align="flex-start"
            height="100vh"
            width="100vw"
            cursor="none"
          >
            <Header
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="vita" element={<Vita />} />
              <Route path=":projectId" element={<Project />} /> 
              <Route path="*" element={<NoMatch />} />
            </Routes>

            <Footer />
          </Flex>
      </Router>
    </ChakraProvider>
  );
};

export default App;
