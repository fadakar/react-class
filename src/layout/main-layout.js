import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

import styles from "./main-layout.module.css";

const MainLayout = ({ children }) => {
  // console.log(styles);
  //   console.log(styles["main-layout"]);
  return (
    <>
      <Header />
      <main className={`${styles["main-layout"]} ${styles["primary-color"]} `}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
