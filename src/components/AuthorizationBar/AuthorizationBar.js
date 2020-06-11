import React from "react";

import styles from "./AuthorizationBar.module.css";

export default function AuthorizationBar() {
  let isAuthenticated = true;
  return (
    <>
      {isAuthenticated ? (
        <>
          <p className={styles.name}>name</p>
          <button type="button" className={styles.logoutButton}>
            Выйти
          </button>
        </>
      ) : (
        <button type="button" className={styles.loginButton}>
          Войти
        </button>
      )}
    </>
  );
}
