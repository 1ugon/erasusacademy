import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { useWindowSize } from "react-use";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDiscord, faTelegram } from "@fortawesome/free-brands-svg-icons";

import { faChartLine, faChess } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/Benefits.module.css";

function Benefits() {
  const { width } = useWindowSize();

  return (
    <div className={styles.containerBenefits} id="Comunity">
      <h1 className={styles.title}>BENEFÍCIOS</h1>
      <div className={styles.containerBenefitsCards}>
        {/* <BenefitsCard image={discordImage} text="Comunidade no Discord" />
        <BenefitsCard image={telegramImage} text="Telegram para os membros" />
        <BenefitsCard
          image={leeImage}
          text="Módulos sobre campeões específicos"
        />
        <BenefitsCard
          image={twitchImage}
          text="Analise da sua partida no aulão!"
        />
        <BenefitsCard
          image={refreshImage}
          text="Curso em constante atualização"
        /> */}
        <Accordion
          allowZeroExpanded
          allowMultipleExpanded
          style={{ width: width > 1080 ? "30vw" : "90vw" }}
        >
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Comunidade do Discord </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <FontAwesomeIcon icon={faDiscord} size="2x" color="#efefef" />
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                nibh diam, pellentesque vitae varius in, suscipit a enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Grupo no Telegram</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <FontAwesomeIcon icon={faTelegram} size="2x" color="#efefef" />
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                nibh diam, pellentesque vitae varius in, suscipit a enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        <Accordion
          allowZeroExpanded
          allowMultipleExpanded
          style={{ width: width > 1080 ? "30vw" : "90vw" }}
        >
          <AccordionItem key="1">
            <AccordionItemHeading>
              <AccordionItemButton>
                Módulos sobre campeões específicos
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <FontAwesomeIcon icon={faChess} size="2x" color="#efefef" />
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                nibh diam, pellentesque vitae varius in, suscipit a enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem key="1">
            <AccordionItemHeading>
              <AccordionItemButton>
                Analise da sua partida no aulão
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <FontAwesomeIcon icon={faChartLine} size="2x" color="#efefef" />
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                nibh diam, pellentesque vitae varius in, suscipit a enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Benefits;
