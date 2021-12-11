import React from "react";

import styles from "../styles/Card.module.css";

interface FeatCardProps {
  image: string;
  text: string;
  soon: boolean;
}

function FeatCard(props: FeatCardProps) {
  return (
    <div className={styles.containerFeaturingCard}>
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

export { FeatCard };
