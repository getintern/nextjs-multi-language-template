import { Flex } from "@chakra-ui/react";
import DarkToggle from "../Modules/DarkToggle";
import styles from "./HeaderLayout.module.css";

const HeaderLayout = ({ children }) => {
  return (
    <>
      <Flex p={3} as="nav" justifyContent="space-between" className={styles.nav}>
        <p>Hi to all</p>
        <DarkToggle />
      </Flex>
      <div>{children}</div>
    </>
  );
};

export default HeaderLayout;
