import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./authActions";

const socialLogin = (state, { payload }) => {
  return {
    ...state,
    username: payload.username,
    email: payload.email,
    id: payload._id,
    role: payload.role || "",
  };
};
const basicUserInfo = (state, { payload }) => ({
  ...state,
  username: payload.user.username,
  email: payload.user.email,
  id: payload.user._id,
  orders: payload.user.orders || [],
  role: payload.user.role,
});

const OrdersUserInfo = (state, { payload }) => ({
  ...state,
  orders: payload.user.orders,
});

const initialUserState = {
  username: null,
  email: null,
  id: null,
  role: "",
  orders: [],
};

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: basicUserInfo,
  [authActions.loginSuccess]: basicUserInfo,
  [authActions.loginSocial]: socialLogin,
  [authActions.getCurrentUserSuccess]: basicUserInfo,
  [authActions.getUserOrdersSuccess]: OrdersUserInfo,
  [authActions.logoutSuccess]: () => initialUserState,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSocial]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logoutError]: (_, { payload }) => payload,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
  [authActions.getUserOrdersError]: (_, { payload }) => payload,
  [authActions.registerRequest]: () => null,
  [authActions.loginRequest]: () => null,
  [authActions.logoutRequest]: () => null,
  [authActions.getCurrentUserRequest]: () => null,
  [authActions.getUserOrdersRequest]: () => null,
});

const loading = createReducer(false, {
  [authActions.registerRequest]: () => true,
  [authActions.registerSuccess]: () => false,
  [authActions.registerError]: () => false,
  [authActions.loginRequest]: () => true,
  [authActions.loginSuccess]: () => false,
  [authActions.loginError]: () => false,
  [authActions.logoutRequest]: () => true,
  [authActions.logoutSuccess]: () => false,
  [authActions.logoutError]: () => false,
  [authActions.getCurrentUserRequest]: () => true,
  [authActions.getCurrentUserSuccess]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.getUserOrdersRequest]: () => true,
  [authActions.getUserOrdersSuccess]: () => false,
  [authActions.getUserOrdersError]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  loading,
});
