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

const getUserRequest = createAction("auth/getCurrentUserRequest");
const getUserSuccess = createAction("auth/getCurrentUserSuccess");
const getUserError = createAction("auth/getCurrentUserError");

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
  getUserRequest,
  getUserSuccess,
  getUserError,
};
