import React from "react";

import { FeatCard } from "../components/Card";

import defaultImage from "../assets/featuring/default.png";
import erasusImg from "../assets/featuring/erasus.png";

import styles from "../styles/Featuring.module.css";

import Button from "../components/Button";

function Featuring() {
  return (
    <div className={styles.containerFeaturing}>
      <h1 className={styles.title}>PARTICIPAÇÃO</h1>
      <div className={styles.containerFeaturingCards}>
        <FeatCard image={erasusImg} text="Erasus" />
        <FeatCard image={defaultImage} text="Em Breve" soon={true} />
      </div>
      <Button backgroundColor="#0f4c75" color="#efefef" text="FAÇA PARTE" />
    </div>
  );
}

export default Featuring;
