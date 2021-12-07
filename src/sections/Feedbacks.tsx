import React from "react";

import Button from "../components/Button";

import feed1 from "../assets/feedbacks/feed1.png";
import feed2 from "../assets/feedbacks/feed2.png";
import feed3 from "../assets/feedbacks/feed3.png";
import feed4 from "../assets/feedbacks/feed4.png";

import styles from "../styles/Feedbacks.module.css";

function Feedbacks() {
  return (
    <div className={styles.containerFeedbacks}>
      <h1 className={styles.title}>FEEDBACKS</h1>
      <div className={styles.containerFeedbacksCards}>
        <img src={feed1} className={styles.feedImage} alt="feedback one" />
        <img src={feed2} className={styles.feedImage} alt="feedback two" />
        <img src={feed3} className={styles.feedImage} alt="feedback three" />
        <img src={feed4} className={styles.feedImage} alt="feedback four" />
      </div>
      <Button backgroundColor="white" color="black" text="FAÇA PARTE" />
    </div>
  );
}

export default Feedbacks;
