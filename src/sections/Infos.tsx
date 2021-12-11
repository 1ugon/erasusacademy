import React from "react";

import feed1 from "../assets/feedbacks/feed1.jpeg";
import feed2 from "../assets/feedbacks/feed2.jpeg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "../styles/Infos.module.css";

function Infos() {
  return (
    <div className={styles.containerInfos}>
      <h1 className={styles.title}>O QUE APRENDEREI?</h1>
      <div className={styles.containerInfosCards}>
        <Carousel
          infiniteLoop
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <img src={feed1} className={styles.feedImage} alt="feedback one" />
          </div>
          <div>
            <img src={feed2} className={styles.feedImage} alt="feedback two" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Infos;
