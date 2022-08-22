import { useState } from "react";
import { useTranslation } from "react-i18next";

import LangSwitcherComponent from "../../components/Navbar/LangSwitcher";

const LangSwitcher = () => {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState(i18n.language.toUpperCase());

  const handleOnMouseEnter = () => {
    setOpen(true);
  };

  const handleOnMouseLeave = () => {
    setOpen(false);
  };

  const handleClick = (lang: string) => {
    if (lang === "en") {
      setActiveLang("EN");
      i18n.changeLanguage("en");
    } else if (lang === "ru") {
      setActiveLang("RU");
      i18n.changeLanguage("ru");
    }
  };

  return (
    <LangSwitcherComponent
      activeLang={activeLang}
      handleClick={handleClick}
      handleOnMouseEnter={handleOnMouseEnter}
      handleOnMouseLeave={handleOnMouseLeave}
      open={open}
    />
  );
};

export default LangSwitcher;
