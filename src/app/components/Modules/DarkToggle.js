"use client";
import { useColorMode, Button } from "@chakra-ui/react";

import ChangeLang from "./ChangeLang";

const DarkToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Button onClick={toggleColorMode}>
        <span>{colorMode === "light" ? "Its Light" : "Its Dark"}</span>
      </Button>
      <ChangeLang />
    </div>
  );
};

export default DarkToggle;
