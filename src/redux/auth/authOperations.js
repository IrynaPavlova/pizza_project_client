import axios from "axios";
import authActions from "./authActions";

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
    .catch(({ message }) => dispatch(authActions.registerError(message)));
};

const logIn = (credentials) => (dispatch) => {
  dispatch(authActions.loginRequest());

  axios
    .post("/auth/login", credentials)
    .then((response) => {
      token.set(response.data.token);
      dispatch(authActions.loginSuccess(response.data));
    })
    .catch(({ message }) => dispatch(authActions.loginError(message)));
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
    .then(({ data }) => {
      console.log(data.user);
      dispatch(authActions.getCurrentUserSuccess(data));
    })
    .catch(({ message }) => authActions.getCurrentUserError(message));
};

const getUserOrders = (id) => (dispatch) => {
  dispatch(authActions.getUserOrdersRequest());

  axios
    .get(`/users/${id}`)
    .then(({ data }) => dispatch(authActions.getUserOrdersSuccess(data)))
    .catch(({ message }) => authActions.getUserOrdersError(message));
};

const logOut = () => (dispatch) => {
  dispatch(authActions.logoutRequest());

  axios
    .post("/auth/logout")
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch(({ message }) => dispatch(authActions.logoutError(message)));
};

export default {
  register,
  logOut,
  logIn,
  logInSocial,
  getCurrentUser,
  getUserOrders,
};
