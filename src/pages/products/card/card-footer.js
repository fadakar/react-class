import React from "react";
import styles from "./card.module.css";

export const CardFooter = ({ children }) => {
  return <div className={styles["card-footer"]}>{children}</div>;
};
