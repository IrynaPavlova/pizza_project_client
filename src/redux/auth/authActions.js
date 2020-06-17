import { createAction } from "@reduxjs/toolkit";

const registerRequest = createAction("auth/registerRequest");
const registerSuccess = createAction("auth/registerSuccess");
const registerError = createAction("auth/registerError");

const loginRequest = createAction("auth/loginRequest");
const loginSuccess = createAction("auth/loginSuccess");
const loginError = createAction("auth/loginError");

const loginSocial = createAction("auth/loginSocial");

const logoutRequest = createAction("auth/logoutRequest");
const logoutSuccess = createAction("auth/logoutSuccess");
const logoutError = createAction("auth/logoutError");

const getCurrentUserRequest = createAction("auth/getCurrentUserRequest");
const getCurrentUserSuccess = createAction("auth/getCurrentUserSuccess");
const getCurrentUserError = createAction("auth/getCurrentUserError");

const getUserOrdersRequest = createAction("user/getUserOrdersRequest");
const getUserOrdersSuccess = createAction("user/getUserOrdersSuccess");
const getUserOrdersError = createAction("user/getUserOrdersError");

export default {
  registerRequest,
  registerSuccess,
  registerError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  loginRequest,
  loginSuccess,
  loginError,
  loginSocial,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  getUserOrdersRequest,
  getUserOrdersSuccess,
  getUserOrdersError,
};
