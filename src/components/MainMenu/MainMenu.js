import React from "react";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import { routes } from "../../services/routes";
import styles from "./MainMenu.module.css";

export default function MainMenu() {
  return (
    <nav>
      <ul className={styles.mainMenuItems}>
        <li>
          <NavLink
            to={routes.PROMO}
            className={styles.mainMenuItem}
            activeClassName={styles.mainMenuActiveItem}
          >
            <FormattedMessage id="promo" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.PIZZA}
            className={styles.mainMenuItem}
            activeClassName={styles.mainMenuActiveItem}
          >
            <FormattedMessage id="pizza" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.DRINKS}
            className={styles.mainMenuItem}
            activeClassName={styles.mainMenuActiveItem}
          >
            <FormattedMessage id="drinks" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.SIDES}
            className={styles.mainMenuItem}
            activeClassName={styles.mainMenuActiveItem}
          >
            <FormattedMessage id="sides" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.DESSERTS}
            className={styles.mainMenuItem}
            activeClassName={styles.mainMenuActiveItem}
          >
            <FormattedMessage id="desserts" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.ADMIN_PAGE}
            className={styles.mainMenuItem}
            activeClassName={styles.mainMenuActiveItem}
          >
            Admin Page
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
