import React from "react";

import styles from "../styles/Header.module.css";

function Header() {
  return (
    <div className={styles.containerHeader}>
      <div className={styles.text}>
        <h1>JUNGLE PRO</h1>
        <h5>por Leonardo "Erasus" Faria</h5>
        <h3>aprenda tudo sobre a selva e mais!</h3>
      </div>
    </div>
  );
}

export default Header;
