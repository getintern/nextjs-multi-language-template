import { Flex } from "@chakra-ui/react";
import DarkToggle from "../Modules/DarkToggle";

const HeaderLayout = ({ children }) => {
  return (
    <>
      <Flex as="nav" justifyContent="space-between">
        <p>Hi to all</p>
        <DarkToggle />
      </Flex>
      <div>{children}</div>
    </>
  );
};

export default HeaderLayout;
