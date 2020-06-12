import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import Authentication from "../Authentication";
import Spinner from "../Spinner";

import styles from "./AuthorizationBar.module.css";

export default function AuthorizationBar() {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(authOperations.logOut());
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);
  const name = useSelector(authSelectors.getUserName);
  const isLoading = useSelector(authSelectors.getLoading);
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <div>
      {isLoading && <Spinner />}
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
      <Authentication
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
      />
    </div>
  );
}
