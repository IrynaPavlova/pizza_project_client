import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAdmin, ...routeProps }) => {
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAdmin ? <Component {...props} /> : <Redirect to={routeProps.path} />
      }
    />
  );
};
export default PrivateRoute;
