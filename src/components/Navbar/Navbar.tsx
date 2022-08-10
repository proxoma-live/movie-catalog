import React from "react";

import { ReactComponent as Notification } from "../../assets/images/notif.svg";
import BurgerMenu from "./BurgerMenu";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logoMenu}>
        <BurgerMenu />
        <Logo width={30} height={30} />
      </div>
      <div className={styles.menu}>
        <p className={styles.menuItem}>Sign In</p>
        <p className={styles.menuItem}>En</p>
      </div>
    </div>
  );
}

export default Navbar;
