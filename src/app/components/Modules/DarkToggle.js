"use client";
import { useColorMode, Button } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import ChangeLang from "./ChangeLang";
import { PiSunDimDuotone,PiMoonStarsDuotone } from "react-icons/pi";

import styles from "./DarkToggle.module.css";

const DarkToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { locale } = useParams();

  return (
    <div className={styles.leftNav}>
      <Button onClick={toggleColorMode} className={styles.button}>
        <span>{colorMode === "light" ? <PiSunDimDuotone /> : <PiMoonStarsDuotone/>}</span>
      </Button>
      <ChangeLang locale={locale} />
    </div>
  );
};

export default DarkToggle;
