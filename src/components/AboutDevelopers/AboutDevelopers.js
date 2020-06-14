import React, { useState, useEffect } from "react";
import AboutDeveloperItem from "./AboutDeveloperItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./AboutDevelopers.module.css";
import animatedStyles from "./Animate.module.css";
import userData from "./data.json";

export default function AboutDevelopers() {
  const [userCollection, setUserColection] = useState([]);
  useEffect(() => {
    setUserColection(userData); // Сделать фетч коллекции
  }, []);

  return (
    <TransitionGroup className={styles.container}>
      {userCollection.map(({ name, avatarLink, social }) => (
        <CSSTransition key={avatarLink} timeout={250} classNames={animatedStyles}>
          <AboutDeveloperItem
            name={name}
            avatarLink={avatarLink}
            social={social}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
