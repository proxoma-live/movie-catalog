import styles from "./spinner.module.css";

function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.loadingSpinner} />
    </div>
  );
}

export default Spinner;
