import React, { Suspense } from "react";
import { routes } from "../../services/routes";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import Spinner from "../../components/Spinner";
import AdminOrderList from "../../components/AdminOrderList/AdminOrderList";
import forExmCreateProd from "./forExmCreateProd";
import forExmEditPromo from "./forExmEditPromo";
import AdminUpdateList from "../../components/AdminUpdateList";
import styles from "./AdminPage.module.css";

export default function AdminPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <div className={styles.AdminPageContainer}>
        <hr className={styles.line} />
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
              Редактировать акции
            </NavLink>
          </li>
        </ul>
        <hr className={styles.line} />

        <Switch>
          <Route path={routes.ADMIN_ORDER_LISTS} component={AdminOrderList} />
          <Route
            path={routes.ADMIN_CREATE_PRODUCT}
            component={forExmCreateProd}
          />
          <Route
            path={routes.ADMIN_UPDATE_PRODUCT}
            component={AdminUpdateList}
          />
          <Route path={routes.ADMIN_UPDATE_PROMO} component={forExmEditPromo} />
          <Redirect to={routes.ADMIN_ORDER_LISTS} />
        </Switch>
      </div>
    </Suspense>
  );
}
