import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "../services/routes";
import MainPage from "../pages/MainPage/MainPageContainer";
import OrderPage from "../pages/OrderPage/OrderPage";
import Header from "./Header";
import Spinner from "./Spinner";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={routes.MAIN_PAGE} exact component={MainPage} />
          <Route path={routes.ORDER_PAGE} component={OrderPage} />
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
