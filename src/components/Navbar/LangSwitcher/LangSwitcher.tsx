import styles from "./langSwitcher.module.css";

interface Props {
  open: boolean;
  activeLang: string;
  handleOnMouseEnter: () => void;
  handleOnMouseLeave: () => void;
  handleClick: (lang: string) => void;
}

const LangSwitcher: React.FC<Props> = (props) => {
  const {
    open,
    activeLang,
    handleClick,
    handleOnMouseEnter,
    handleOnMouseLeave,
  } = props;

  return (
    <div
      className={styles.langSwitcher}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <p>{activeLang}</p>

      {open && (
        <div className={styles.dropdown}>
          <p
            onClick={() => handleClick("en")}
            className={activeLang === "EN" ? styles.bold : ""}
          >
            EN
          </p>
          <p
            onClick={() => handleClick("ru")}
            className={activeLang === "RU" ? styles.bold : ""}
          >
            RU
          </p>
        </div>
      )}
    </div>
  );
};

export default LangSwitcher;
