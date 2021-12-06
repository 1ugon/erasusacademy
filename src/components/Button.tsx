import React from "react";

import styles from "../styles/Button.module.css";

interface ButtonProps {
  backgroundColor: any;
  color: any;
  text: string;
}

function Button(props: ButtonProps) {
  return (
    <a href="https://pay.kiwify.com.br/MXD0adC">
      <button
        className={styles.button}
        style={{ backgroundColor: props.backgroundColor, color: props.color }}
      >
        {props.text}
      </button>
    </a>
  );
}

export default Button;
