import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "../services/routes";
import MainPage from "../pages/MainPage/MainPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import PizzaList from '../components/PizzaList/PizzaList';
import Header from "./Header";
import Spinner from "./Spinner";

const DessertsList = lazy(() => import("../components/DessertsList"));

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={routes.MAIN_PAGE} exact component={MainPage} />
          <Route path={routes.DESSERTS} exact component={DessertsList} />
          <Route path={routes.PIZZA} component={PizzaList}/>
          <Route path={routes.ORDER_PAGE} component={OrderPage} />
          <Route path={routes.ADMIN_PAGE} component={AdminPage} />
          {/* <Redirect to="#" /> */}
        </Switch>
      </Suspense>
      {/* <Footer /> */}
    </BrowserRouter>
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
