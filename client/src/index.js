import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ColorModeScript } from '@chakra-ui/react';

// react app
import App from './App';

// theme
import theme from "./styling/theme";

console.log(theme.config.initialColorMode)

ReactDOM.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>,
  document.getElementById('root')
);

reportWebVitals();
