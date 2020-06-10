import React from "react";

import styles from "./MainMenu.module.css";

export default function MainMenu() {
  return (
    <ul className={styles.mainMenuItems}>
      <li className={styles.mainMenuItem}>Акции</li>
      <li className={styles.mainMenuItem}>Пицца</li>
      <li className={styles.mainMenuItem}>Напитки</li>
      <li className={styles.mainMenuItem}>Сайды</li>
      <li className={styles.mainMenuItem}>Десерты</li>
    </ul>
  );
}
