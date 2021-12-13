import React from "react";

import info1 from "../assets/infos/info1.png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Button from "../components/Button";

import styles from "../styles/Infos.module.css";

function Infos() {
  return (
    <div className={styles.containerInfos}>
      <h1 className={styles.title}>O QUE APRENDEREI?</h1>
      <div className={styles.containerInfosCards}>
        <Carousel infiniteLoop showStatus={false}>
          <div>
            <img src={info1} className={styles.feedImage} alt="feedback one" />
          </div>
          <div>
            <img src={info1} className={styles.feedImage} alt="feedback two" />
          </div>
        </Carousel>
        <Button
          backgroundColor="#0f4c75"
          color="#efefef"
          text="QUERO APRENDER"
        />
      </div>
    </div>
  );
}

export default Infos;