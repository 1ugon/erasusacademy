import React from "react";

import { FeatCard } from "../components/Card";

import defaultImage from "../assets/featuring/default.png";
import shimaImg from "../assets/featuring/shima.jpeg";

import styles from "../styles/Blue.module.css";

function Featuring() {
  return (
    <div className={styles.containerBlue}>
      <h1 className={styles.title}>PARTICIPAÇÃO</h1>
      <div className={styles.containerFeaturingCards}>
        <FeatCard image={shimaImg} text="Shimadah" />
        <FeatCard image={defaultImage} text="Em Breve" soon={true} />
      </div>
    </div>
  );
}

export default Featuring;
