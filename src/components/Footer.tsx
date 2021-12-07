import React from "react";

import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <p>
        Feito com ❤️ por <a href="https://lugon.dev">Pedro Lugon</a> © 2021
      </p>
    </div>
  );
}

export default Footer;
