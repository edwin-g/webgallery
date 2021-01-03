// React
import React from "react";
// CSS
import styles from "./Preview.module.css";
// Icons
import { AiOutlineArrowLeft } from "react-icons/ai";

function Preview(props) {
  const { previewTitle, imageSrc, closePreview } = props;
  return (
    <div>
      <div className={styles.preview}>
        {/* Preview header */}
        <div className={styles.previewHeader}>
          <AiOutlineArrowLeft
            className={styles.arrowLeftBtn}
            onClick={() => {
              closePreview(false);
            }}
          />
          <div className={styles.previewTitle}>{previewTitle}</div>
        </div>
        {/* Preview image */}
        <div className={styles.previewImg}>
          <img src={imageSrc} alt="Fruise" />
        </div>
      </div>
    </div>
  );
}

export default Preview;
