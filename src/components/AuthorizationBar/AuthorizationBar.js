import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";

import styles from "./AuthorizationBar.module.css";

export default function AuthorizationBar({ setIsModalActive }) {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(authOperations.logOut());
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);
  const name = useSelector(authSelectors.getUserName);

  return (
    <div>
      {isAuthenticated ? (
        <div className={styles.userWrapper}>
          <p className={styles.name}>{name}</p>
          <button
            type="button"
            className={styles.logoutButton}
            onClick={onLogout}
          >
            Выйти
          </button>
        </div>
      ) : (
        <button
          type="button"
          className={styles.loginButton}
          onClick={() => setIsModalActive(true)}
        >
          Войти
        </button>
      )}
    </div>
  );
}
