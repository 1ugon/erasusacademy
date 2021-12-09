import React from "react";

import feed1 from "../assets/feedbacks/feed1.png";
import feed2 from "../assets/feedbacks/feed2.png";
import feed3 from "../assets/feedbacks/feed3.png";
import feed4 from "../assets/feedbacks/feed4.png";

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
          <div>
            <img
              src={feed3}
              className={styles.feedImage}
              alt="feedback three"
            />
          </div>
          <div>
            <img src={feed4} className={styles.feedImage} alt="feedback four" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Infos;
