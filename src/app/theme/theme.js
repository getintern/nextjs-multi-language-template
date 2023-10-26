// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "dark",
  direction: "ltr",

  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },

  fonts: {
    heading: "pinar",
    body: "IRANSans",
  },
});

export default theme;
