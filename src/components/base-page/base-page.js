import React from "react";
import { Helmet } from "react-helmet-async";
import styles from "./base-page.module.css";

const BasePage = ({ title, description='This is a case study for react', children }) => {
  return (
    <>
        <Helmet>
            <title>React Case Study - {title}</title>
            <meta name="description" content={description} />
        </Helmet>
      <h2 className={styles["title"]}>
        <span>{title}</span>
      </h2>
      {children}
    </>
  );
};

export default BasePage;
