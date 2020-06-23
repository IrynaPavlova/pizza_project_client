import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IntlProvider } from "react-intl";

import { authOperations } from "../redux/auth";
import { routes } from "../services/routes";

import MainPage from "../pages/MainPage";
import AboutDevelopersPage from "../pages/AboutDevelopersPage/AboutDevelopersPage";
import AdminPage from "../pages/AdminPage/AdminPageContainer";
import AdminStocksPage from "../pages/AdminStocksPage";
import AuthPage from "../pages/AuthPage";
import UserPage from "../pages/UserPage/UserPage";

import Header from "./Header";
import Spinner from "./Spinner";
import Footer from "./Footer/Footer";

import localMessages from "../languages";

const OrderPage = lazy(() => import("../pages/OrderPage/OrderPage"));
const PizzaList = lazy(() => import("./PizzaList/PizzaListContainer"));
const DessertsList = lazy(() => import("./DessertsList"));
const DrinkList = lazy(() => import("./DrinkList"));
const SidesList = lazy(() => import("./SidesList"));
const PromoList = lazy(() => import("./PromoList"));

const App = () => {
  const dispatch = useDispatch();

  const local = useSelector((state) => state.local.lang);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <IntlProvider
      locale={local}
      defaultLocale="ru"
      messages={localMessages[local]}
    >
      <BrowserRouter>
        <Header />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path={routes.MAIN_PAGE} exact component={MainPage} />
            <Route path={routes.DESSERTS} exact component={DessertsList} />
            <Route path={routes.DRINKS} exact component={DrinkList} />
            <Route path={routes.SIDES} exact component={SidesList} />
            <Route path={routes.PIZZA} component={PizzaList} />
            <Route path={routes.PROMO} component={PromoList} />
            <Route path={routes.ORDER_PAGE} component={OrderPage} />
            <Route path={routes.ADMIN_PAGE} component={AdminPage} />
            <Route
              path={routes.ABOUT_DEV_PAGE}
              component={AboutDevelopersPage}
            />
            <Route path={routes.AUTH} component={AuthPage} />
            <Route path={routes.CLIENT_PAGE} component={UserPage} />
            {/* <Redirect to="#" /> */}
          </Switch>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </IntlProvider>
  );
};

export default App;
