import BurgerMenu from "./BurgerMenu";
import LangSwitcher from "../../containers/LanguageSwitcher";
import Search from "./Search";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

import styles from "./navbar.module.css";

const Navbar: React.FC<{
  changeSearchTerm: (search: string | number) => void;
}> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoMenu}>
        <BurgerMenu />
        <div className={styles.logo}>
          <Logo width={30} height={30} />
        </div>
      </div>
      <div className={styles.menu}>
        <Search changeSearchTerm={props.changeSearchTerm} />
        <p className={styles.menuItem}>Sign In</p>
        <LangSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
