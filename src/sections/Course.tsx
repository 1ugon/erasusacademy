import React from "react";

import cnbLogo from "../assets/teams/cnb.png";

import styles from "../styles/Course.module.css";

function Course() {
  return (
    <div className={styles.containerCourse}>
      <h2>
        Entenda como o jogador Erasus foi high elo tão cedo e o que aprendeu ao
        longo do tempo
      </h2>
      <div className={styles.experience}>
        <h3>Experiência</h3>
        <div className={styles.row}>
          <img
            src={cnbLogo}
            className={styles.teamLogo}
            alt="CNB"
            title="CNB"
          />
        </div>
      </div>
    </div>
  );
}

export default Course;
