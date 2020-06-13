import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import ordersActions from "./ordersActions";

const ordersReducer = createReducer([], {
  [ordersActions.ordersSuccess]: (state, { payload }) => payload,
  [ordersActions.ordersByIdSuccess]: (state, { payload }) => payload,
  [ordersActions.createOrderSuccess]: (state, { payload }) => payload,
  [ordersActions.updateOrderSuccess]: (state, { payload }) => payload,
});

const errorReducer = createReducer(null, {
  [ordersActions.ordersError]: (state, { payload }) => payload,
  [ordersActions.ordersByIdError]: (state, { payload }) => payload,
  [ordersActions.createOrderError]: (state, { payload }) => payload,
  [ordersActions.updateOrderError]: (state, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
  [ordersActions.ordersRequest]: () => true,
  [ordersActions.ordersSuccess]: () => false,
  [ordersActions.ordersError]: () => false,

  [ordersActions.ordersByIdRequest]: () => true,
  [ordersActions.ordersByIdSuccess]: () => false,
  [ordersActions.ordersByIdError]: () => false,

  [ordersActions.createOrderRequest]: () => true,
  [ordersActions.createOrderSuccess]: () => false,
  [ordersActions.createOrderError]: () => false,

  [ordersActions.updateOrderRequest]: () => true,
  [ordersActions.updateOrderSuccess]: () => false,
  [ordersActions.updateOrderError]: () => false,
});

export default combineReducers({
  ordersReducer,
  errorReducer,
  loadingReducer,
});
