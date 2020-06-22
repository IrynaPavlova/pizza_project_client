import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => {
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated && routeProps.restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
