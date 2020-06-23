import React from "react";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";

import { routes } from "../../services/routes";
import styles from "./MainMenu.module.css";

export default function MainMenu() {
  const isAdmin = useSelector(authSelectors.getUserRole) === "admin";

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
      </ul>
      {/* <hr className={styles.line} /> */}
      {isAdmin && (
        <ul className={styles.adminMenuItems}>
          <li>
            <NavLink
              to={routes.ADMIN_ORDER_LISTS}
              className={styles.adminMenuItem}
              activeClassName={styles.adminMenuActiveItem}
            >
              <FormattedMessage id="orders.accepted" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routes.ADMIN_CREATE_PRODUCT}
              className={styles.adminMenuItem}
              activeClassName={styles.adminMenuActiveItem}
            >
              <FormattedMessage id="product.create" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routes.ADMIN_UPDATE_PRODUCT}
              className={styles.adminMenuItem}
              activeClassName={styles.adminMenuActiveItem}
            >
              <FormattedMessage id="product.edit" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routes.ADMIN_UPDATE_PROMO}
              className={styles.adminMenuItem}
              activeClassName={styles.adminMenuActiveItem}
            >
              <FormattedMessage id="promo.edit" />
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}
