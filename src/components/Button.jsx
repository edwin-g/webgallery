// React
import React from "react";
// CSS
import styles from "./Button.module.css";

export default function Button(props) {
  const { btnText } = props;
  return <button className={styles.button}>{btnText}</button>;
}
