import { createAction } from "@reduxjs/toolkit";

const getStocksSuccess = createAction("stocks/getStocksSuccess");
const getStocksRequest = createAction("stocks/getStocksRequest");
const getStocksError = createAction("stocks/getStocksError");

const sendStockRequest = createAction("stocks/sendStockRequest");
const sendStockSuccess = createAction("stocks/sendStockSuccess");
const sendStockError = createAction("stocks/sendStockError");

const updateStockRequest = createAction("stocks/updateStockRequest");
const updateStockSuccess = createAction("stocks/updateStockSuccess");
const updateStockError = createAction("stocks/updateStockError");

const deleteStockRequest = createAction("stocks/deleteStockRequest");
const deleteStockSuccess = createAction("stocks/deleteStockSuccess");
const deleteStockError = createAction("stocks/deleteStockError");

export default {
  getStocksSuccess,
  getStocksRequest,
  getStocksError,
  sendStockRequest,
  sendStockSuccess,
  sendStockError,
  updateStockRequest,
  updateStockSuccess,
  updateStockError,
  deleteStockRequest,
  deleteStockSuccess,
  deleteStockError,
};
