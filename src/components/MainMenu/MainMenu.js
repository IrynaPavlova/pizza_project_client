import React from "react";
import { NavLink } from "react-router-dom";

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
            Акции
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.PIZZA}
            className={styles.mainMenuItem}
            activeClassName={styles.mainMenuActiveItem}
          >
            Пицца
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.DRINKS}
            className={styles.mainMenuItem}
            activeClassName={styles.mainMenuActiveItem}
          >
            Напитки
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.SIDES}
            className={styles.mainMenuItem}
            activeClassName={styles.mainMenuActiveItem}
          >
            Сайды
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.DESSERTS}
            className={styles.mainMenuItem}
            activeClassName={styles.mainMenuActiveItem}
          >
            Десерты
          </NavLink>
        </li>

        <li>
          <NavLink
            to={routes.ABOUT_DEV_PAGE}
            className={styles.mainMenuItem}
            activeClassName={styles.mainMenuActiveItem}
          >
            О разработчиках
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
