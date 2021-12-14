import React from "react";

import { Accordion } from "react-accessible-accordion";

import { useWindowSize } from "react-use";

import { faDiscord, faTelegram } from "@fortawesome/free-brands-svg-icons";

import { faChartLine, faChess } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/Blue.module.css";
import { AccordionBenefits } from "../components/Accordion";

function Benefits() {
  const { width } = useWindowSize();

  return (
    <div className={styles.containerBlue} id="Comunity">
      <h1 className={styles.title}>BENEFÍCIOS</h1>
      <div className={styles.containerBenefitsCards}>
        <Accordion
          allowZeroExpanded
          allowMultipleExpanded
          style={{
            width: width > 1080 ? "30vw" : "90vw",
          }}
        >
          <AccordionBenefits
            icon={faDiscord}
            title="Comunidade do Discord"
            text="Discord para interagir com a comunidade, trocar conhecimentos,
          arranjar amigos para jogar e mais!"
            isLink={true}
            link="https://discord.gg/XSVCvUWj"
          />
          <AccordionBenefits
            icon={faTelegram}
            title="Grupo no Telegram"
            text="Telegram para contato direto com o jogador, fazer perguntas e
            estar sempre atualizado sobre o que é aprendido"
          />
        </Accordion>
        <Accordion
          allowZeroExpanded
          allowMultipleExpanded
          style={{ width: width > 1080 ? "30vw" : "90vw" }}
        >
          <AccordionBenefits
            icon={faChess}
            title="Módulos de campeões específicos"
            text="Contamos com aulas sobre a mecânica, matchups e dicas sobre
            campeões especificos para ajuda-lo com a masterização do seu
            campeão favorito"
          />
          <AccordionBenefits
            icon={faChartLine}
            title="Analise da sua partida no aulão"
            text="Você terá a chance de ter sua partida analisada na Twitch, um
            dia do mês é separado para ajuda-los assistindo replays e
            comentando sobre acertos e erros em jogos"
          />
        </Accordion>
      </div>
    </div>
  );
}

export default Benefits;
