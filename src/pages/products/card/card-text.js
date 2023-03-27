import React from "react";
import styles from "./card.module.css";

export const CardText = ({ children }) => {
  return <div className={styles["card-text"]}>{children}</div>;
};
