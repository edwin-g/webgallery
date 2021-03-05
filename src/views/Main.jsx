// React
import React, { useState } from "react";
// CSS
import styles from "./Main.module.css";
// Components
import Grid from "../components/sections/Grid";
import Preview from "../components/elements/Preview";

export default function Main() {
  const [imageData, setimageData] = useState(false);

  const handleClick = (params) => {
    setimageData(params);
  };

  return (
    <main className={styles.main}>
      {imageData ? (
        <Preview
          closePreview={handleClick}
          previewTitle={imageData.title}
          imageSrc={imageData.imagePath}
        />
      ) : (
        <Grid onClickCard={handleClick} />
      )}
    </main>
  );
}
