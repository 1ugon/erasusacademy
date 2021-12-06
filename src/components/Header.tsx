import React from "react";

import headerImg from "../assets/headerImg.png";
import bush from "../assets/bush.png";

import styles from "../styles/Header.module.css";

function Header() {
  return (
    <div className={styles.containerHeader}>
      <div className={styles.header}>
        <div className={styles.text}>
          <div className={styles.mainText}>
            <img src={bush} className={styles.bush} alt="bush" />
            <h1>JUNGLE PRO</h1>
            <img src={bush} className={styles.bush} alt="bush" />
          </div>
          <h5>por Leonardo "Erasus" Faria</h5>
          <h3>aprenda tudo sobre a selva e mais!</h3>
        </div>
        <img src={headerImg} className={styles.headerImg} alt="erasus" />
      </div>
    </div>
  );
}

export default Header;
