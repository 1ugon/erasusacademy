import React, { useState } from "react";

import Button from "../components/Button";

import feed1 from "../assets/feedbacks/feed1.png";
import feed2 from "../assets/feedbacks/feed2.png";
import feed3 from "../assets/feedbacks/feed3.png";
import feed4 from "../assets/feedbacks/feed4.png";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import styles from "../styles/Feedbacks.module.css";

function Feedbacks() {
  const [displayImageModal, setDisplayImageModal] = useState(false);
  const [image, setImage] = useState("");

  function handleImage(image: string) {
    setImage(image);
    setDisplayImageModal(true);
  }

  return (
    <div className={styles.containerFeedbacks}>
      <h1 className={styles.title}>FEEDBACKS</h1>
      <div className={styles.containerFeedbacksCards}>
        <img
          src={feed1}
          className={styles.feedImage}
          alt="feedback one"
          onClick={() => handleImage(feed1)}
        />
        <img
          src={feed2}
          className={styles.feedImage}
          alt="feedback two"
          onClick={() => handleImage(feed2)}
        />
        <img
          src={feed3}
          className={styles.feedImage}
          alt="feedback three"
          onClick={() => handleImage(feed3)}
        />
        <img
          src={feed4}
          className={styles.feedImage}
          alt="feedback four"
          onClick={() => handleImage(feed4)}
        />
      </div>
      {displayImageModal && (
        <Lightbox
          mainSrc={image}
          onCloseRequest={() => setDisplayImageModal(false)}
          zoomInLabel="Zoom"
          zoomOutLabel="Tirar zoom"
          closeLabel="Fechar"
          /* nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]} */
        />
      )}

      <Button backgroundColor="#efefef" color="#1b262c" text="FAÇA PARTE" />
    </div>
  );
}

export default Feedbacks;
