import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import styles from "../styles/Blue.module.css";

const items = [
  {
    id: 1,
    heading: "Quanto custa e como é feito o pagamento?",
    content:
      "O curso tem o valor de R$97,00, podendo ser parcelado em até 12 vezes com juros e seu pagamento é feito através da plataforma Kiwify, totalmente segura e confiável.",
  },
  {
    id: 2,
    heading: "Por quanto tempo terei acesso ao curso?",
    content:
      "Você terá acesso vitalício ao curso, ou seja, depois de comprado ficará pra sempre na sua conta do Kiwify!",
  },
  {
    id: 3,
    heading: "O que acontece se eu não gostar do curso?",
    content:
      "Você terá uma garantia de 7 dias corridos (1 semana) para pedir reembolso caso não goste do curso!",
  },
  {
    id: 4,
    heading: "De quanto em quanto tempo o curso é atualizado?",
    content:
      "O curso é sempre atualizado caso existam mudanças abruptas nas mecanica de jogo e dos aprendizados, e uma vez ao mês de acordo com o roadmap do nosso instrutor.",
  },
  {
    id: 5,
    heading: "Sou bronze/diamante, vou entender sobre os assuntos abordados?",
    content:
      "Esse curso é destinado a todos os elos e entendimentos do jogo, abordamos inicialmente o básico até a parte avançada da teoria e prática.",
  },
];

function Questions() {
  return (
    <div className={styles.containerBlue}>
      <h1 className={styles.title}>PERGUNTAS FREQUENTES</h1>
      <div className={styles.containerQuestionCards}>
        <Accordion allowZeroExpanded allowMultipleExpanded>
          {items.map((item) => (
            <AccordionItem key={item.id}>
              <AccordionItemHeading aria-level={2}>
                <AccordionItemButton>{item.heading}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordionPanel}>
                {item.content}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Questions;
