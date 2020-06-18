import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IntlProvider } from "react-intl";

import { authOperations } from "../redux/auth";
import { routes } from "../services/routes";
import MainPage from "../pages/MainPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import AboutDevelopersPage from "../pages/AboutDevelopersPage/AboutDevelopersPage";

import AdminPage from "../pages/AdminPage/AdminPageContainer";

import AuthPage from "../pages/AuthPage";

import PizzaList from "../components/PizzaList/PizzaListContainer";

import Header from "./Header";
import Spinner from "./Spinner";
import UserPage from "../pages/UserPage/UserPage";
import Footer from "./Footer/Footer";

import localMessages from "../languages";

const DessertsList = lazy(() => import("../components/DessertsList"));
const DrinkList = lazy(() => import("../components/DrinkList"));
const SidesList = lazy(() => import("../components/SidesList"));
const PromoList = lazy(() => import("../components/PromoList"));

const App = () => {
  const dispatch = useDispatch();

  const local = useSelector((state) => state.local);

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

// Rokkitt;
// bold 700

// Oswald;
// bold
// normal
// 500

// Roboto
// normal
// bold
// 500
