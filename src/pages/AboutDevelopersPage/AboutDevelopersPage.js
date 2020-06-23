import React from "react";
import { FormattedMessage } from "react-intl";

import AboutDevelopers from "../../components/AboutDevelopers";
import styles from "./AboutDevelopersPage.module.css";

const AboutDevelopersPage = () => (
  <div>
    <h1 className={styles.title}>
      <FormattedMessage id="site developed" />

      <span className={styles.secondaryColor}>
        <FormattedMessage id="goit students" />
      </span>
    </h1>
    <AboutDevelopers />
  </div>
);

export default AboutDevelopersPage;
