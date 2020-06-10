import React from "react";

import styles from "./AuthorizationBar.module.css";

export default function AuthorizationBar() {
  return (
    <button type="button" className={styles.enterButton}>
      Войти
    </button>
  );
}
