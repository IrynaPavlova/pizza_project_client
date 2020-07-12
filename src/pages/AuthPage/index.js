import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import { useHistory, useLocation } from "react-router-dom";
import Spinner from "../../components/Spinner";

const AuthPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);
  useEffect(() => {
    if (isAuthenticated) {
      return history.replace("/");
    }
    const params = new URLSearchParams(location.search);
    const username = params.get("name");
    const token = params.get("token");
    const email = params.get("email");
    const id = params.get("id");
    if (!username || !token || !id) {
      return history.replace("/");
    }
    const user = {
      username,
      email,
      token,
      id,
    };
    dispatch(authOperations.logInSocial(user));
    history.replace("/");
  });

  return <Spinner />;
};

export default AuthPage;
