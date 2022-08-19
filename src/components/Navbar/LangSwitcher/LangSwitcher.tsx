import { useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./langSwitcher.module.css";

const LangSwitcher: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const [activeLang, setActiveLang] = useState(i18n.language.toUpperCase());

  return (
    <div
      className={styles.langSwitcher}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <p>{activeLang}</p>

      {open && (
        <div className={styles.dropdown}>
          <p
            onClick={() => {
              setActiveLang("EN");
              i18n.changeLanguage("en");
            }}
            className={activeLang === "EN" ? styles.bold : ""}
          >
            EN
          </p>
          <p
            onClick={() => {
              setActiveLang("RU");
              i18n.changeLanguage("ru");
            }}
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
