import React from "react";

import styles from "../styles/Button.module.css";

interface ButtonProps {
  text: string;
}

function Button(props: ButtonProps) {
  return (
    <a href="https://pay.kiwify.com.br/MXD0adC" className={styles.text}>
      <button className={styles.button}>{props.text}</button>
    </a>
  );
}

export default Button;
