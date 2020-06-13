import { createAction } from "@reduxjs/toolkit";

const ordersRequest = createAction("orders/fetchOrdersRequest");
const ordersSuccess = createAction("orders/fetchOrdersSuccess");
const ordersError = createAction("orders/fetchOrdersError");

const orderByIdRequest = createAction("orders/fetchOrderByIdRequest");
const orderByIdSuccess = createAction("orders/fetchOrderByIdSuccess");
const orderByIdError = createAction("orders/fetchOrderByIdError");

const addOrderRequest = createAction("orders/addOrderRequest");
const addOrderSuccess = createAction("orders/addOrderSuccess");
const addOrderError = createAction("orders/addOrderError");

const updateOrderRequest = createAction("orders/updateOrderRequest");
const updateOrderSuccess = createAction("orders/updateOrderSuccess");
const updateOrderError = createAction("orders/updateOrderError");

export default {
  ordersRequest,
  ordersSuccess,
  ordersError,
  orderByIdRequest,
  orderByIdSuccess,
  orderByIdError,
  addOrderRequest,
  addOrderSuccess,
  addOrderError,
  updateOrderRequest,
  updateOrderSuccess,
  updateOrderError,
};
