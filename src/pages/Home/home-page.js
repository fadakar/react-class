import React from "react";
import { BasePage } from "../../components/base-page";
import styles from "./home-page.module.css";

const HomePage = () => {
  return (
    <BasePage title={"Home"}>
      <div className={styles["main-layout"]}>
        <h1>Ract Case Study</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eum
          laudantium optio assumenda! Illo, veritatis non quidem veniam
          reiciendis facilis commodi libero placeat doloribus quo nihil. Dicta
          nostrum officia animi.
        </p>
        <div style={{height: '350px', background: 'url(/images/pic_trulli.jpg) center no-repeat'}}>

        </div>
      </div>
    </BasePage>
  );
};

export default HomePage;
