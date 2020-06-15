import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import orderActions from "./orderActions";

const ordersReducer = createReducer([], {
  [orderActions.ordersSuccess]: (state, { payload }) => payload,
  [orderActions.orderByIdSuccess]: (state, { payload }) => payload,
  [orderActions.addOrderSuccess]: (state, { payload }) => payload,
  [orderActions.updateOrderSuccess]: (state, { payload }) => payload,
});

const errorReducer = createReducer(null, {
  [orderActions.ordersError]: (state, { payload }) => payload,
  [orderActions.orderByIdError]: (state, { payload }) => payload,
  [orderActions.addOrderError]: (state, { payload }) => payload,
  [orderActions.updateOrderError]: (state, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
  [orderActions.ordersRequest]: () => true,
  [orderActions.ordersSuccess]: () => false,
  [orderActions.ordersError]: () => false,

  [orderActions.orderByIdRequest]: () => true,
  [orderActions.orderByIdSuccess]: () => false,
  [orderActions.orderByIdError]: () => false,

  [orderActions.addOrderRequest]: () => true,
  [orderActions.addOrderSuccess]: () => false,
  [orderActions.addOrderError]: () => false,

  [orderActions.updateOrderRequest]: () => true,
  [orderActions.updateOrderSuccess]: () => false,
  [orderActions.updateOrderError]: () => false,
});

export default combineReducers({
  items: ordersReducer,
  errorReducer,
  loadingReducer,
});
