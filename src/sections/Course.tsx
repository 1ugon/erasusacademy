import React from "react";

import cnbLogo from "../assets/teams/cnb.png";
import santosLogo from "../assets/teams/santos.png";
import redLogo from "../assets/teams/red.png";
import opkLogo from "../assets/teams/opk.png";
import rensgaLogo from "../assets/teams/rensga.png";

import Button from "../components/Button";

import styles from "../styles/Course.module.css";

function Course() {
  return (
    <div className={styles.containerCourse} id="Course">
      <h2 className={styles.text}>
        ENTENDA O QUE O JOGADOR ERASUS APRENDEU AO LONGO DESSES ANOS
      </h2>
      <div className={styles.experience}>
        <p>Experiência</p>
        <div className={styles.row}>
          <img
            src={cnbLogo}
            className={styles.teamLogo}
            alt="CNB"
            title="CNB"
          />
          <img
            src={santosLogo}
            className={styles.teamLogo}
            alt="CNB"
            title="CNB"
          />
          <img
            src={redLogo}
            className={styles.teamLogo}
            alt="CNB"
            title="CNB"
          />
          <img
            src={opkLogo}
            className={styles.teamLogo}
            alt="CNB"
            title="CNB"
          />
          <img
            src={rensgaLogo}
            className={styles.teamLogo}
            alt="CNB"
            title="CNB"
          />
        </div>
      </div>
      <div className={styles.videoContainer}>
        <p className={styles.text}>
          UM POUCO DO QUE PODE SER VISTO AO DECORRER DO CURSO 👇🏼
        </p>
        <iframe
          src="https://www.youtube.com/embed/k-7CI5E1fdE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          className={styles.video}
        />
      </div>
      <Button backgroundColor="#0f4c75" color="#efefef" text="COMPRAR" />
    </div>
  );
}

export default Course;
