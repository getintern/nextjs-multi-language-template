import useCheckDir from "@/app/hooks/useCheckDir";
import styles from "./ButtonSubmit.module.css";

import Loader from "./Loader";

const ButtonSubmit = ({ persianTitle, englishTitle, isLoading = false }) => {
  const checkDirection = useCheckDir();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <button type="submit" className={styles.Button}>
          <span className={styles.button_top}>
            {checkDirection === "ltr" ? englishTitle : persianTitle}
          </span>
        </button>
      )}
    </>
  );
};

export default ButtonSubmit;
