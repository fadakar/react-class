import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BasePage } from "../../components/base-page";
import styles from "./tutorials-page.module.css";

const TutorialsPage = () => {
  return (
    <BasePage title={"Tutorrials"}>
      <div className={styles["tutorials-page"]}>
        <aside>
          <ul>
            <li>
              <NavLink to={"/tutorials"} end>
                Welcome
              </NavLink>
            </li>
            <li>
              <NavLink to={"/tutorials/react-components"}>
                React Component
              </NavLink>
            </li>
            <li>
              <NavLink to={"/tutorials/state-in-cc"}>
                State In CC
              </NavLink>
            </li>
            <li>
              <NavLink to={"/tutorials/state-in-fc"}>
                State In FC
              </NavLink>
            </li>
          </ul>
        </aside>
        <div className={styles["content"]}>
          <Outlet />
        </div>
      </div>
    </BasePage>
  );
};

export default TutorialsPage;
