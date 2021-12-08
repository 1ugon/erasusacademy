import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import profileImg from "../assets/profile.png";

import styles from "../styles/About.module.css";

function About() {
  return (
    <div className={styles.containerAbout} id="About">
      <h1 className={styles.title}>SOBRE</h1>
      <div className={styles.row}>
        <img src={profileImg} className={styles.headerImg} alt="erasus" />
        <div className={styles.containerText}>
          <p className={styles.text}>
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
        <a href="/">
          <FontAwesomeIcon icon={faYoutube} size="4x" />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faFacebook} size="4x" />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faTwitter} size="4x" />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faInstagram} size="4x" />
        </a>
      </div>
    </div>
  );
}

export default About;
