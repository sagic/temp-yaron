import React from "react";
import styles from "./LetterButton.module.css";

export const LetterButton = ({ letter, active, ...otherProps }) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${active ? styles.toggled : ""}`}
      {...otherProps}
    >
      {letter}
    </button>
  );
};
