import { Flex } from "@chakra-ui/react";
import DarkToggle from "../Modules/DarkToggle";
import styles from "./HeaderLayout.module.css";

const HeaderLayout = ({ children }) => {
  return (
    <>
      <Flex
        p={3}
        as="nav"
        justifyContent="space-between"
        alignItems="center"
        className={styles.nav}
      >
        <p className={styles.logo}>Organizer</p>
        <DarkToggle />
      </Flex>
      <div>{children}</div>
    </>
  );
};

export default HeaderLayout;
