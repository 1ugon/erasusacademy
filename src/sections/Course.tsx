import React from "react";

import cnbLogo from "../assets/teams/cnb.png";
import Button from "../components/Button";

import styles from "../styles/Course.module.css";

function Course() {
  return (
    <div className={styles.containerCourse} id="Course">
      <p className={styles.text}>
        Entenda como o jogador Erasus foi high elo tão cedo e o que aprendeu ao
        longo do tempo
      </p>
      <div className={styles.experience}>
        <h3 className={styles.text}>Experiência</h3>
        <div className={styles.row}>
          <img
            src={cnbLogo}
            className={styles.teamLogo}
            alt="CNB"
            title="CNB"
          />
        </div>
      </div>
      <div className={styles.videoContainer}>
        <p className={styles.text}>
          Experimente um pouco do que pode ser visto ao decorrer do curso 👇🏼
        </p>
        <iframe
          src="https://www.youtube.com/embed/k-7CI5E1fdE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          className={styles.video}
        />
      </div>
      <Button
        backgroundColor="#275DAC"
        color="white"
        text="QUERO SUBIR DE ELO"
      />
    </div>
  );
}

export default Course;
