import { lazy } from "react";
import { routes } from "./routes";
import forExmCreateProd from "../pages/AdminPage/forExmCreateProd";

const AdminOrderList = lazy(() =>
  import("../components/AdminOrderList/AdminOrderList")
);
const AdminUpdateList = lazy(() => import("../components/AdminUpdateList"));
const AdminUpdateListIremEdit = lazy(() =>
  import("../components/AdminUpdateListItemEdit/AdminUpdateListItemEdit.js")
);
const AdminStocksPage = lazy(() => import("../pages/AdminStocksPage"));

export default [
  {
    path: routes.ADMIN_ORDER_LISTS,
    label: "ADMIN_ORDER_LISTS",
    exact: true,
    component: AdminOrderList,
    private: true,
    restricted: false,
  },
  {
    path: routes.ADMIN_CREATE_PRODUCT,
    label: "ADMIN_CREATE_PRODUCT",
    exact: true,
    component: forExmCreateProd,
    private: true,
    restricted: false,
  },
  {
    path: routes.ADMIN_UPDATE_PRODUCT,
    label: "ADMIN_UPDATE_PRODUCT",
    exact: true,
    component: AdminUpdateList,
    private: true,
    restricted: false,
  },
  {
    path: routes.ADMIN_UPDATE_PRODUCT_ITEM,
    label: "ADMIN_UPDATE_PRODUCT_ITEM",
    exact: true,
    component: AdminUpdateListIremEdit,
    private: true,
    restricted: false,
  },
  {
    path: routes.ADMIN_UPDATE_PROMO,
    label: "ADMIN_UPDATE_PROMO",
    exact: true,
    component: AdminStocksPage,
    private: true,
    restricted: false,
  },
];
