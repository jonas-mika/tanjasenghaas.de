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

  // load static data at root
  const projects = require("./projects.json");
  const customers = require("./customers.json");
  const vita = require("./vita.json");

  const data = {
    projects: projects,
    customers: customers,
    vita: vita,
  };

  return (
    <ChakraProvider theme={theme}>
      <Font />
      <Router>
        <OverlayMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <Flex
          direction="column"
          align="flex-start"
          height="100vh"
          width="100vw"
        >
          <Header
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />

          <Routes>
            <Route
              path="/"
              element={<Home data={data} />}
            />
            {/*<Route path="projekte" element={<Projects />} />*/}
    {/*<Route path="angebot" element={<Offerings />} />*/}
            <Route path="vita" element={<Vita vita={vita}/>} />
    {/*<Route path="kontakt" element={<Contact />} />*/}
            {projects.map((project, i) => {
              return (
                <Route
                  path={project.name
                    .toLowerCase()
                    .replaceAll(" ", "-")}
                  element={<Project project={project} />}
                />
              );
            })}
            <Route path="*" element={<NoMatch />} />
          </Routes>

          <Footer />
        </Flex>
      </Router>
    </ChakraProvider>
  );
};

export default App;
