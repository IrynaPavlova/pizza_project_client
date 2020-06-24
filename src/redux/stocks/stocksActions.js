import { createAction } from '@reduxjs/toolkit';

const getStocksSuccess = createAction('stocks/getStocksSuccess');
const getStocksRequest = createAction('stocks/getStocksRequest');
const getStocksError = createAction('stocks/getStocksError');

const getStockByIdSuccess = createAction('stocks/getStockByIdSuccess');
const getStockByIdRequest = createAction('stocks/getStockByIdRequest');
const getStockByIdError = createAction('stocks/getStockByIdError');

const sendStockRequest = createAction('stocks/sendStockRequest');
const sendStockSuccess = createAction('stocks/sendStockSuccess');
const sendStockError = createAction('stocks/sendStockError');

const updateStockRequest = createAction('stocks/updateStockRequest');
const updateStockSuccess = createAction('stocks/updateStockSuccess');
const updateStockError = createAction('stocks/updateStockError');

const deleteStockRequest = createAction('stocks/deleteStockRequest');
const deleteStockSuccess = createAction('stocks/deleteStockSuccess');
const deleteStockError = createAction('stocks/deleteStockError');

const sendFileRequest = createAction('stocks/sendFileRequest');
const sendFileSuccess = createAction('stocks/sendFileSuccess');
const sendFileError = createAction('stocks/sendFileError');

const cancelInput = createAction('stocks/cancelInput');

export default {
  getStocksSuccess,
  getStocksRequest,
  getStocksError,
  getStockByIdSuccess,
  getStockByIdRequest,
  getStockByIdError,
  sendStockRequest,
  sendStockSuccess,
  sendStockError,
  updateStockRequest,
  updateStockSuccess,
  updateStockError,
  deleteStockRequest,
  deleteStockSuccess,
  deleteStockError,
  sendFileRequest,
  sendFileSuccess,
  sendFileError,
  cancelInput,
};
