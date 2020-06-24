import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import slideNoticeTransition from "./NotificationTransition.module.css";
import styles from "./Notification.module.css";

let animation;

function Notification({ message, confirm, forCard }) {
  const [apearNotice, setApearNotice] = useState(false);

  useEffect(() => {
    setApearNotice(true);
    animation = setTimeout(() => setApearNotice(false), 3500);
    return () => clearTimeout(animation);
  }, []);
  return (
    <CSSTransition
      timeout={250}
      classNames={slideNoticeTransition}
      in={apearNotice}
      unmountOnExit
    >
      <div
        className={`${forCard ? styles.card_container : styles.container} ${
          confirm ? styles.confirm : ""
        }`}
      >
        {message && <p className={styles.text}>{message}</p>}
      </div>
    </CSSTransition>
  );
}

export default Notification;
