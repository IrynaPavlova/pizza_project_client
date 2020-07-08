import axios from "axios";
import authActions from "./authActions";
import orderActions from "../order/orderActions";

axios.defaults.baseURL = "https://evening-caverns-34846.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => (dispatch) => {
  dispatch(authActions.registerRequest());

  axios
    .post("/auth/register", credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.registerSuccess(data));
    })
    .catch(({ response: { data: { text } } }) =>
      dispatch(authActions.registerError(text))
    );
};

const logIn = (credentials) => (dispatch) => {
  dispatch(authActions.loginRequest());

  axios
    .post("/auth/login", credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.loginSuccess(data));
    })
    .catch(({ response: { data: { text } } }) =>
      dispatch(authActions.loginError(text))
    );
};

const logInSocial = (user) => (dispatch) => {
  token.set(user.token);

  dispatch(authActions.loginSocial(user));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  axios
    .get("/auth/current")
    .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch(({ response: { data: { text } } }) =>
      dispatch(authActions.getCurrentUserError(text))
    );
};

const getUserOrders = (id) => (dispatch) => {
  dispatch(authActions.getUserOrdersRequest());

  axios
    .get(`/users/${id}`)
    .then(({ data }) => dispatch(authActions.getUserOrdersSuccess(data)))
    .catch(({ response: { data: { text } } }) =>
      dispatch(authActions.getUserOrdersError(text))
    );
};

const logOut = () => (dispatch) => {
  dispatch(authActions.logoutRequest());

  axios
    .post("/auth/logout")
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .then(() => {
      dispatch(orderActions.clearOrderList());
    })
    .catch(({ response: { data: { text } } }) =>
      dispatch(authActions.logoutError(text))
    );
};

export default {
  register,
  logOut,
  logIn,
  logInSocial,
  getCurrentUser,
  getUserOrders,
};
