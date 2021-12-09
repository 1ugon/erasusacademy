import React from "react";
import { BenefitsCard } from "../components/Card";

import discordImage from "../assets/benefits/discord.png";
import telegramImage from "../assets/benefits/telegram.png";
import leeImage from "../assets/benefits/lee.png";

import styles from "../styles/Benefits.module.css";

function Benefits() {
  return (
    <div className={styles.containerBenefits} id="Comunity">
      <h1 className={styles.title}>BENEFÍCIOS</h1>
      <div className={styles.containerBenefitsCards}>
        <BenefitsCard image={discordImage} text="Discord para membros" />
        <BenefitsCard image={telegramImage} text="Telegram para membros" />
        <BenefitsCard image={leeImage} text="Campeões específicos" />
      </div>
    </div>
  );
}

export default Benefits;
