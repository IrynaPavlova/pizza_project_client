import React, { useState, useEffect } from "react";

import AboutDeveloperItem from "./AboutDeveloperItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { fetchDevs } from "../../services/api";
import styles from "./AboutDevelopers.module.css";
import animatedStyles from "./Animate.module.css";

export default function AboutDevelopers() {
  const [userCollection, setUserColection] = useState([]);
  useEffect(() => {
    fetchDevs().then(({ data }) =>
      setUserColection(
        data.developers.sort((a, b) => a.name.localeCompare(b.name))
      )
    );
  }, []);

  return (
    userCollection && (
      <TransitionGroup className={styles.container}>
        {userCollection.map(({ name, avatarLink, social, github }) => (
          <CSSTransition
            key={avatarLink}
            timeout={250}
            classNames={animatedStyles}
          >
            <AboutDeveloperItem
              name={name}
              avatarLink={avatarLink}
              social={social}
              github={github}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    )
  );
}
