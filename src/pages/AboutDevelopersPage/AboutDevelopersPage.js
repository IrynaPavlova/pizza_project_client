import React from "react";
import AboutDevelopers from "../../components/AboutDevelopers";
import styles from "./AboutDevelopersPage.module.css";

const AboutDevelopersPage = () => (
  <div>
    <h1 className={styles.title}>
      Сайт разработан
      <span className={styles.secondaryColor}> студентами GoIT</span>
    </h1>
    <AboutDevelopers />
  </div>
);

export default AboutDevelopersPage;
