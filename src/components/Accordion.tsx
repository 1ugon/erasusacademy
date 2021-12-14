import React from "react";
import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AccordionProps {
  icon: any;
  title: string;
  text: string;
  isLink?: boolean;
  link?: string;
}

function AccordionBenefits(props: AccordionProps) {
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>{props.title}</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        {props.isLink ? (
          <a href={props.link}>
            <FontAwesomeIcon icon={props.icon} size="2x" color="#efefef" />
          </a>
        ) : (
          <FontAwesomeIcon icon={props.icon} size="2x" color="#efefef" />
        )}

        <br />
        <br />
        <p>{props.text}</p>
      </AccordionItemPanel>
    </AccordionItem>
  );
}

AccordionBenefits.defaultProps = {
  soon: false,
  link: false,
};

export { AccordionBenefits };
