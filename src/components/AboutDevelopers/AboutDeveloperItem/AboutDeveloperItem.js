import React from "react";
import styles from "./AboutDeveloper.module.css";

export default function AboutDeveloperItem() {
  return (
    <div className={styles.card}>
      <div className={styles.cardImgContainer}>
        <img
          className={styles.cardImg}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Felis_silvestris_lybica_1.jpg/275px-Felis_silvestris_lybica_1.jpg"
          alt=''
        />
      </div>
      <div className={styles.description}>
        <h2 className={styles.name}>Ivan Sheva</h2>
        {/* <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >To social </a> */}
      </div>
    </div>
  );
}
