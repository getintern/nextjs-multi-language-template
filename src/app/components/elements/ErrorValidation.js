import styles from "./ErrorValidation.module.css";

const ErrorValidation = ({ errorMessage }) => {
  return <span className={styles.ErrorMessageValidation}>{errorMessage}</span>;
};

export default ErrorValidation;
