import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IntlProvider } from "react-intl";

import { authOperations } from "../redux/auth";
import { authSelectors } from "../redux/auth";

import PrivatRoute from "./PrivatRoute";
import PublicRoute from "./PublicRoute";
import routes from "../services/routesWithComponent";

import Header from "./Header";
import Spinner from "./Spinner";
import Footer from "./Footer/Footer";

import localMessages from "../languages";
const App = () => {
  const dispatch = useDispatch();
  const local = useSelector((state) => state.local.lang);
  const isAdmin = useSelector(authSelectors.getUserRole) === "admin";
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);

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
            {routes.map((route) =>
              route.private ? (
                <PrivatRoute key={route.label} {...route} isAdmin={isAdmin} />
              ) : (
                <PublicRoute
                  key={route.label}
                  {...route}
                  isAuthenticated={isAuthenticated}
                  restricted={route.restricted}
                />
              )
            )}
          </Switch>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </IntlProvider>
  );
};

export default App;
