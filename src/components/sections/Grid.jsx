// React
import React from "react";
// CSS
import styles from "./Grid.module.css";
// Components
import Card from "../elements/Card";

export default function Grid(props) {
  const { onClickCard } = props;
  const arrCard = [
    { imagePath: "/images/greeno.jpg", title: "Greeno" },
    { imagePath: "/images/fruise.jpg", title: "Fruise" },
    { imagePath: "/images/orgarden.jpg", title: "Orgarden" },
    { imagePath: "/images/coffeee.jpg", title: "Coffeee" },
    { imagePath: "/images/cutzone.jpg", title: "Cutzone" },
    { imagePath: "/images/eatveg.jpg", title: "Eatveg" },
  ];

  return (
    <div className={styles.gridContainer}>
      {arrCard.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imagePath}
          imageAlt={card.title}
          clickCard={() => {
            onClickCard(card);
          }}
        />
      ))}
    </div>
  );
}
