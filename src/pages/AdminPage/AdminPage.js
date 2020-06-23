import React, { Suspense } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Spinner from "../../components/Spinner";
import { routes } from "../../services/routes";
// import AdminRoutes from "../../services/routesAdmin";
// import PrivatRoute from "../../components/PrivatRoute";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors } from "../../redux/auth";

// import AdminOrderList from "../../components/AdminOrderList/AdminOrderList";
// import forExmCreateProd from "./forExmCreateProd";
// import AdminUpdateList from "../../components/AdminUpdateList";
// import AdminStocksPage from "../../pages/AdminStocksPage";
import styles from "./AdminPage.module.css";

export default function AdminPage() {
  const isAdmin = useSelector(authSelectors.getUserRole) === "admin";
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

        {/* <Switch>
          {AdminRoutes.map((route) => (
            <PrivatRoute key={route.label} {...route} isAdmin={isAdmin} />
          ))}
        </Switch> */}

        {/* <Switch>
          <Route path={routes.ADMIN_ORDER_LISTS} component={AdminOrderList} />
          <Route
            path={routes.ADMIN_CREATE_PRODUCT}
            component={forExmCreateProd}
          />
          <Route
            path={routes.ADMIN_UPDATE_PRODUCT}
            component={AdminUpdateList}
          />
          <Route path={routes.ADMIN_UPDATE_PROMO} component={AdminStocksPage} />
          <Redirect to={routes.ADMIN_ORDER_LISTS} />
        </Switch> */}
      </div>
    </Suspense>
  );
}
