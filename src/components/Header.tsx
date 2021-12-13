import React from "react";

import styles from "../styles/Header.module.css";

function Header() {
  return (
    <div className={styles.containerHeader}>
      <div className={styles.text}>
        <h1>JUNGLE PRO</h1>
        <h3>por Leonardo "Erasus" Faria</h3>
        {/* <h3>APRENDA TUDO SOBRE A SELVA E MAIS!</h3> */}
      </div>
    </div>
  );
}

export default Header;
