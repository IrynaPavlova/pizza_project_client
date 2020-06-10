import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "../services/routes";
import MainPage from "../pages/MainPage/MainPageContainer";
import OrderPage from "../pages/OrderPage/OrderPage";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route path={routes.MAIN_PAGE} exact component={MainPage} />
        <Route path={routes.ORDER_PAGE} component={OrderPage} />
        {/* <Redirect to="#" /> */}
      </Switch>
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
