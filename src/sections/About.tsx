import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faInstagram,
  faTwitch,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

import profileImg from "../assets/profile.png";

import styles from "../styles/White.module.css";

function About() {
  return (
    <div className={styles.containerWhite} id="About">
      <h1 className={styles.title}>SOBRE</h1>
      <div className={styles.rowSocials}>
        <img src={profileImg} className={styles.aboutImg} alt="erasus" />
        <div className={styles.containerText}>
          <p className={styles.aboutText}>
            Erasus alcançou o elo desafiante pela primeira vez aos 13 anos,
            recebendo destaque e ficando conhecido pela sua mecânica,
            principalmente com o campeão Lee Sin, rapidamente se tornou um jovem
            talento do cenário nacional. Após sua entrada para o cenário
            competitivo ganhou experiências em outras organizações, então
            decidiu trazer um conteúdo para aqueles que desejam um conhecimento
            mais aprofundado sobre a selva e sobre os campeões que tem mais
            afinidade, juntamente com os demais convidados.
          </p>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <a href="https://discord.gg/EGWez7GYJG">
          <FontAwesomeIcon icon={faDiscord} size="2x" />
        </a>
        <a href="https://twitter.com/erasusplay">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/erasusplay/">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.twitch.tv/erasusplay">
          <FontAwesomeIcon icon={faTwitch} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default About;
