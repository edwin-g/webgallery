// React
import React from "react";
// CSS
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        Copyright © 2020 Webgallery. All rights reserved.
      </div>
    </footer>
  );
}
