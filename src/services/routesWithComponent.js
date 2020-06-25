import { lazy } from "react";
import { routes } from "./routes";

const MainPage = lazy(() => import("../pages/MainPage"));
const PromoList = lazy(() => import("../components/PromoList"));
const PizzaList = lazy(() =>
  import("../components/PizzaList/PizzaListContainer")
);
const DrinkList = lazy(() => import("../components/DrinkList"));
const SidesList = lazy(() => import("../components/SidesList"));
const DessertsList = lazy(() => import("../components/DessertsList"));
const OrderPage = lazy(() => import("../pages/OrderPage/OrderPage"));

const AuthPage = lazy(() => import("../pages/AuthPage"));
const UserPage = lazy(() => import("../pages/UserPage/UserPage"));
const AboutDevelopersPage = lazy(() => import("../pages/AboutDevelopersPage"));

const AdminPage = lazy(() => import("../pages/AdminPage/AdminPage"));
const AdminOrderList = lazy(() =>
  import("../components/AdminOrderList/AdminOrderList")
);
const AdminUpdateList = lazy(() => import("../components/AdminUpdateList"));
const AdminUpdateListItemEdit = lazy(() =>
  import("../components/AdminUpdateListItemEdit/AdminUpdateListItemEdit.js")
);
const AdminStocksPage = lazy(() => import("../pages/AdminStocksPage"));
const CreateNewProductButton = lazy(() =>
  import("../components/CreateNewProduct")
);

export default [
  {
    path: routes.MAIN_PAGE,
    label: "MAIN_PAGE",
    exact: true,
    component: MainPage,
    private: false,
    restricted: false,
  },
  {
    path: routes.PROMO,
    label: "PROMO",
    exact: true,
    component: PromoList,
    private: false,
    restricted: false,
  },
  {
    path: routes.PIZZA,
    label: "PIZZA",
    exact: true,
    component: PizzaList,
    private: false,
    restricted: false,
  },
  {
    path: routes.DRINKS,
    label: "DRINKS",
    exact: true,
    component: DrinkList,
    private: false,
    restricted: false,
  },
  {
    path: routes.SIDES,
    label: "SIDES",
    exact: true,
    component: SidesList,
    private: false,
    restricted: false,
  },
  {
    path: routes.DESSERTS,
    label: "DESSERTS",
    exact: true,
    component: DessertsList,
    private: false,
    restricted: false,
  },
  {
    path: routes.ORDER_PAGE,
    label: "ORDER_PAGE",
    exact: true,
    component: OrderPage,
    private: false,
    restricted: false,
  },
  {
    path: routes.CLIENT_PAGE,
    label: "CLIENT_PAGE",
    exact: true,
    component: UserPage,
    private: false,
    restricted: false,
  },
  {
    path: routes.AUTH,
    label: "AUTH",
    exact: true,
    component: AuthPage,
    private: false,
    restricted: false,
  },
  {
    path: routes.DEVELOPERS,
    label: "DEVELOPERS",
    exact: true,
    component: AboutDevelopersPage,
    private: false,
    restricted: false,
  },
  {
    path: routes.ADMIN_PAGE,
    label: "ADMIN_PAGE",
    exact: true,
    component: AdminPage,
    private: true,
    restricted: false,
  },
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
    component: CreateNewProductButton,
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
    component: AdminUpdateListItemEdit,
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
