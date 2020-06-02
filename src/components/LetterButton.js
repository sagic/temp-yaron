import React from "react";
import styles from "./LetterButton.module.css";

export const LetterButton = ({ letter, ...otherProps }) => {
  return (
    <button type="button" className={styles.button} {...otherProps}>
      {letter}
    </button>
  );
};
