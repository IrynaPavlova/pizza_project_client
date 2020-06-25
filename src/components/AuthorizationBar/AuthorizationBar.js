import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import { FormattedMessage } from "react-intl";
import { routes } from "../../services/routes";

import styles from "./AuthorizationBar.module.css";

export default function AuthorizationBar({
  darkStyle,
  setIsMobileMenuOpen,
  setIsModalActive,
}) {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(authOperations.logOut());
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);
  const name = useSelector(authSelectors.getUserName);

  return (
    <div>
      {isAuthenticated ? (
        <div className={styles.userWrapper}>
          <Link to={routes.CLIENT_PAGE}>
            <p className={styles.name}>{name}</p>
          </Link>
          <button
            type="button"
            className={darkStyle || styles.logoutButton}
            onClick={onLogout}
          >
            <FormattedMessage id="logout" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          className={darkStyle || styles.loginButton}
          onClick={() => {
            // setIsMobileMenuOpen(false);
            setIsModalActive(true);
          }}
        >
          <FormattedMessage id="login" />
        </button>
      )}
    </div>
  );
}
