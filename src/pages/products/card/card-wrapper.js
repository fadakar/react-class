import React from "react";
import styles from "./card.module.css";

export const CardWrapper = ({ children }) => {
  return <div className={styles["card-wrapper"]}>{children}</div>;
};
