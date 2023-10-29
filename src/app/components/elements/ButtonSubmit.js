import { Button } from "@chakra-ui/react";
import styles from "./ButtonSubmit.module.css";

const ButtonSubmit = () => {
  return (
    <button type="submit" className={styles.Button}>
      <span className={styles.button_top}>Login </span>
    </button>
  );
};

export default ButtonSubmit;
