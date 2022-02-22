import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

// pages
import Home from "./pages/Home";
import Vita from "./pages/Vita";
import Project from "./pages/Project";

// global styling
import Theme from './styling/theme';
import Font from './styling/font';

const App = () => {
  return (
    <ChakraProvider theme={Theme}>
      <Font />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="vita" element={<Vita />} />
          <Route path=":projectId" element={<Project />} />
        </Routes>
      </Router>
    </ChakraProvider> 
  );
};

export default App;
