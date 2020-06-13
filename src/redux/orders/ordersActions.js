import { createAction } from "@reduxjs/toolkit";

const ordersRequest = createAction("orders/fetchOrdersRequest");
const ordersSuccess = createAction("orders/fetchOrdersSuccess");
const ordersError = createAction("orders/fetchOrdersError");

const ordersByIdRequest = createAction("orders/fetchOrdersByIdRequest");
const ordersByIdSuccess = createAction("orders/fetchOrdersByIdSuccess");
const ordersByIdError = createAction("orders/fetchOrdersByIdError");

const createOrderRequest = createAction("orders/createOrderRequest");
const createOrderSuccess = createAction("orders/createOrderSuccess");
const createOrderError = createAction("orders/createOrderError");

const updateOrderRequest = createAction("orders/updateOrderRequest");
const updateOrderSuccess = createAction("orders/updateOrderSuccess");
const updateOrderError = createAction("orders/updateOrderError");

export default {
  ordersRequest,
  ordersSuccess,
  ordersError,
  ordersByIdRequest,
  ordersByIdSuccess,
  ordersByIdError,
  createOrderRequest,
  createOrderSuccess,
  createOrderError,
  updateOrderRequest,
  updateOrderSuccess,
  updateOrderError,
};
