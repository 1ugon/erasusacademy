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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nibh
            diam, pellentesque vitae varius in, suscipit a enim. Aenean lacinia
            sit amet augue id venenatis. Praesent libero velit, ullamcorper et
            metus in, pretium finibus justo. Aliquam nec dictum velit, et
            blandit metus. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae.
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
