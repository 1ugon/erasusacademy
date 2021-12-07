import React from "react";
import { BenefitsCard } from "../components/Card";

import telegramImage from "../assets/benefits/telegram.png";

import styles from "../styles/Benefits.module.css";

function Benefits() {
  return (
    <div className={styles.containerBenefits} id="Comunity">
      <h1 className={styles.title}>BENEFÍCIOS</h1>
      <div className={styles.containerBenefitsCards}>
        <BenefitsCard image={telegramImage} text="Grupo no Telegram" />
        <BenefitsCard image={telegramImage} text="Grupo no Telegram" />
        <BenefitsCard image={telegramImage} text="Grupo no Telegram" />
      </div>
    </div>
  );
}

export default Benefits;
