import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "../services/routes";
import MainPage from "../pages/MainPage/MainPage";
import OrderPage from "../pages/OrderPage/OrderPage";

import Header from "./Header";
import Spinner from "./Spinner";
import OrdersListItem from "./OrdersListItem/OrdersListItem";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <OrdersListItem name={"Пепперони с томатами"} img={"url"} ingredients={[
  {
    _id: "5e85182d1c9d440000703883",
    name: "моцарелла",
  },
  {
    _id: "5e9f56511c9d4400008812cd",
    name: "пепперони",
  },
  {
    _id: "5e8517461c9d440000703881",
    name: "помидоры",
  }]} price={{
  M: "100",
  L: "120",
  XL: "140",
}} currency={"uhr"} amount={0}/>
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
