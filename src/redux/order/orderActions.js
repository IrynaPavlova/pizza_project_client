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

const postOrderStatusRequest = createAction("orders/postOrderStatusRequest");
const postOrderStatusSuccess = createAction("orders/postOrderStatusSuccess");
const postOrderStatusError = createAction("orders/postOrderStatusError");

//Создаем лист заказа пользователя
const addProdToOrderList = createAction("orders/addProdToOrderList");
const deleteProdToOrderList = createAction("orders/deleteProdToOrderList");
const incrementItemsCount = createAction("orders/incrementItemsCount");
const decrementItemsCount = createAction("orders/decrementItemsCount");
const clearOrderList = createAction("orders/clearOrderList");

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
  postOrderStatusRequest,
  postOrderStatusSuccess,
  postOrderStatusError,
  addProdToOrderList,
  deleteProdToOrderList,
  incrementItemsCount,
  decrementItemsCount,
  clearOrderList,
};
