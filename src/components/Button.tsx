import React from "react";

import ReactPixel from "react-facebook-pixel";

import styles from "../styles/Button.module.css";

ReactPixel.init("350341889879476");

interface ButtonProps {
  text: string;
}

function Button(props: ButtonProps) {
  ReactPixel.track("track", "Purchase");

  return (
    <a href="https://pay.kiwify.com.br/MXD0adC" className={styles.text}>
      <button className={styles.button}>{props.text}</button>
    </a>
  );
}

export default Button;
