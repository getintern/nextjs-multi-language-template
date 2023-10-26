// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  direction: "rtl",

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
