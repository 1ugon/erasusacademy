import React from "react";

import feed1 from "../assets/feedbacks/feed1.jpeg";
import feed2 from "../assets/feedbacks/feed2.jpeg";
import feed3 from "../assets/feedbacks/feed3.jpeg";
import feed4 from "../assets/feedbacks/feed4.jpeg";
import feed5 from "../assets/feedbacks/feed5.jpeg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Button from "../components/Button";

import styles from "../styles/Feedbacks.module.css";

function Feedbacks() {
  return (
    <div className={styles.containerFeedbacks}>
      <h1 className={styles.title}>FEEDBACKS</h1>
      <div className={styles.containerFeedbacksCards}>
        <Carousel
          infiniteLoop
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          dynamicHeight
        >
          <img src={feed1} className={styles.feedImage} alt="feedback 1" />
          <img src={feed2} className={styles.feedImage} alt="feedback 2" />
          <img src={feed3} className={styles.feedImage} alt="feedback 3" />
          <img src={feed4} className={styles.feedImage} alt="feedback 4" />
          <img src={feed5} className={styles.feedImage} alt="feedback 5" />
        </Carousel>
      </div>
      <Button backgroundColor="#0f4c75" color="#efefef" text="FAÇA PARTE" />
    </div>
  );
}

export default Feedbacks;
