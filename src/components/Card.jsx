// React
import React from "react";
// CSS
import styles from "./Card.module.css";

export default function Card(props) {
  const { clickCard, imageSrc, imageAlt } = props;
  return (
    <div className={styles.card} onClick={clickCard}>
      <img src={imageSrc} alt={imageAlt} />
    </div>
  );
}
