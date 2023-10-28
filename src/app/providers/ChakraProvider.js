"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
// import theme from "../theme/theme";
import MyTheme from "../theme/theme";

const ChakraProviders = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={MyTheme}>{children}</ChakraProvider>
    </CacheProvider>
  );
};

export default ChakraProviders;
