import { extendTheme } from "@chakra-ui/react";
import {
  createBreakpoints,
  mode,
} from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#ffffff", "#202023")(props),
    },
  }),
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

/*
const components = {
  Heading: {
    sizes: {
      sm: { fontSize: '1rem', color: 'blue' },
      md: { fontSize: '1.2rem', color: 'green' },
      lg: { fontSize: '1.5rem', color: 'red' },
      xl: { fontSize: '1.7rem', color: 'pink' },
    },
  },
}
*/

const fonts = {
  heading: "Montserrat",
  body: "Montserrat",
};

const sizes = {
  sm: "20px",
  md: "40px",
  lg: "60px",
  xl: "80px",
};

const colors = {
  grassTeal: "#88ccca",
};

const breakpoints = createBreakpoints({
  base: "0px", // 480px
  sm: "380px", // mobile
  md: "720px", // half screen laptop
  lg: "1300px", // full screen laptop
  xl: "1920px", // desktop
  "2xl": "2220px", // large desktop
});

const theme = extendTheme({
  styles,
  config,
  sizes,
  colors,
  fonts,
  breakpoints,
});
export default theme;
