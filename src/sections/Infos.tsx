import React from "react";

import info1 from "../assets/infos/info1.jpg";
import info2 from "../assets/infos/info2.jpg";
import info3 from "../assets/infos/info3.jpg";
import info4 from "../assets/infos/info4.jpg";
import info5 from "../assets/infos/info5.jpg";
import info6 from "../assets/infos/info6.jpg";
import info7 from "../assets/infos/info7.jpg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Button from "../components/Button";

import styles from "../styles/White.module.css";

function Infos() {
  return (
    <div className={styles.containerWhite}>
      <h1 className={styles.title}>O QUE VOU APRENDER?</h1>
      <div className={styles.containerInfosCards}>
        <Carousel infiniteLoop showStatus={false} showIndicators={false}>
          <img src={info1} className={styles.feedImage} alt="info 1" />
          <img src={info2} className={styles.feedImage} alt="info 2" />
          <img src={info3} className={styles.feedImage} alt="info 3" />
          <img src={info4} className={styles.feedImage} alt="info 4" />
          <img src={info5} className={styles.feedImage} alt="info 5" />
          <img src={info6} className={styles.feedImage} alt="info 6" />
          <img src={info7} className={styles.feedImage} alt="info 7" />
        </Carousel>
        <Button text="QUERO APRENDER" />
      </div>
    </div>
  );
}

export default Infos;
