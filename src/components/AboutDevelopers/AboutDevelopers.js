import React, { useState, useEffect } from "react";
import axios from "axios";
import AboutDeveloperItem from "./AboutDeveloperItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./AboutDevelopers.module.css";
import animatedStyles from "./Animate.module.css";

export default function AboutDevelopers() {
  const [userCollection, setUserColection] = useState([]);
  useEffect(() => {
    axios
      .get("/developers")
      .then(({ data }) => setUserColection(data.developers));
  }, []);

  return (
    userCollection && (
      <TransitionGroup className={styles.container}>
        {userCollection.map(({ name, avatarLink, social }) => (
          <CSSTransition
            key={avatarLink}
            timeout={250}
            classNames={animatedStyles}
          >
            <AboutDeveloperItem
              name={name}
              avatarLink={avatarLink}
              social={social}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    )
  );
}
