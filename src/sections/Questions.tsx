import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import Button from "../components/Button";

import "react-accessible-accordion/dist/fancy-example.css";
import styles from "../styles/Questions.module.css";

const items = [
  {
    id: 1,
    heading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nibh diam, pellentesque vitae varius in, suscipit a enim.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nibh diam, pellentesque vitae varius in, suscipit a enim. Aenean lacinia sit amet augue id venenatis. Praesent libero velit, ullamcorper et metus in, pretium finibus justo. Aliquam nec dictum velit, et blandit metus.",
  },
  {
    id: 2,
    heading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nibh diam, pellentesque vitae varius in, suscipit a enim. Aenean lacinia sit amet augue id venenatis.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    heading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nibh diam, pellentesque vitae varius in, suscipit a enim. Aenean lacinia sit amet augue id venenatis. Praesent libero velit, ullamcorper et metus in, pretium finibus justo. Aliquam nec dictum velit, et blandit metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nibh diam, pellentesque vitae varius in, suscipit a enim. Aenean lacinia sit amet augue id venenatis. Praesent libero velit, ullamcorper et metus in, pretium finibus justo. Aliquam nec dictum velit, et blandit metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
];

function Questions() {
  return (
    <div className={styles.containerQuestions}>
      <h1 className={styles.title}>PERGUNTAS FREQUENTES</h1>
      <div className={styles.containerAccordions}>
        <Accordion allowZeroExpanded>
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
      <Button backgroundColor="#efefef" color="#1b262c" text="COMPRAR" />
    </div>
  );
}

export default Questions;
