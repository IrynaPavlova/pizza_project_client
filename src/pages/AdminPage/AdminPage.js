import React, { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Spinner from "../../components/Spinner";
import { routes } from "../../services/routes";

import styles from "./AdminPage.module.css";

export default function AdminPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <div className={styles.AdminPageContainer}>
        {/* <hr className={styles.line} /> */}
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
        <hr className={styles.line} />
      </div>
    </Suspense>
  );
}
