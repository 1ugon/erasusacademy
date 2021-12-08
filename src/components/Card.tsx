import React from "react";

import styles from "../styles/Card.module.css";

interface BenefitsCardProps {
  image: string;
  text: string;
}

function BenefitsCard(props: BenefitsCardProps) {
  return (
    <div className={styles.containerBenefitsCard}>
      <img
        className={styles.benefitsImage}
        src={props.image}
        alt={props.text}
      />
      <p className={styles.benefitsText}>{props.text}</p>
    </div>
  );
}

interface FeatCardProps {
  image: string;
  text: string;
  soon: boolean;
}

function FeatCard(props: FeatCardProps) {
  return (
    <div className={styles.containerBenefitsCard}>
      <img
        className={`${styles.featImage} ${props.soon && styles.hidden}`}
        src={props.image}
        alt={props.text}
      />
      <p className={styles.featText}>{props.text}</p>
    </div>
  );
}

FeatCard.defaultProps = {
  soon: false,
};

export { BenefitsCard, FeatCard };
