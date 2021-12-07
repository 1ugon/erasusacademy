import React from "react";

import { FeatCard } from "../components/Card";

import erasusImg from "../assets/featuring/erasus.png";

import styles from "../styles/Featuring.module.css";

function Featuring() {
  return (
    <div className={styles.containerFeaturing}>
      <h1 className={styles.title}>PARTICIPAÇÃO</h1>
      <div className={styles.containerFeaturingCards}>
        <FeatCard image={erasusImg} text="Erasus - Jungle" />
        <FeatCard image={erasusImg} text="Erasus - Jungle" />
        <FeatCard image={erasusImg} text="Erasus - Jungle" />
      </div>
    </div>
  );
}

export default Featuring;
