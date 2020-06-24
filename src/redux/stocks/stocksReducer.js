import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import stocksActions from "./stocksActions";

const stocksReducer = createReducer([], {
  [stocksActions.getStocksSuccess]: (state, { payload }) => payload,
  [stocksActions.sendStockSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [stocksActions.updateStockSuccess]: (state, { payload }) =>
    state.map((stock) => (stock._id === payload._id ? payload : stock)),
  [stocksActions.deleteStockSuccess]: (state, { payload }) =>
    state.filter((element) => element._id !== payload),
});

const stockReducer = createReducer(null, {
  [stocksActions.getStockByIdSuccess]: (state, { payload }) => payload,
});

const linkReducer = createReducer(null, {
  [stocksActions.sendFileSuccess]: (state, { payload }) => payload,
  [stocksActions.sendStockSuccess]: (state, { payload }) => null,
  [stocksActions.cancelInput]: (state, { payload }) => null,
});

const loadingReducer = createReducer(false, {
  [stocksActions.getStocksRequest]: (state, { payload }) => true,
  [stocksActions.getStocksSuccess]: (state, { payload }) => false,
  [stocksActions.getStocksError]: (state, { payload }) => false,
  [stocksActions.getStockByIdRequest]: (state, { payload }) => true,
  [stocksActions.getStockByIdSuccess]: (state, { payload }) => false,
  [stocksActions.getStockByIdError]: (state, { payload }) => false,
  [stocksActions.sendFileRequest]: (state, { payload }) => true,
  [stocksActions.sendFileSuccess]: (state, { payload }) => false,
  [stocksActions.sendFileError]: (state, { payload }) => false,
  [stocksActions.sendStockRequest]: (state, { payload }) => true,
  [stocksActions.sendStockSuccess]: (state, { payload }) => false,
  [stocksActions.sendStockError]: (state, { payload }) => false,
  [stocksActions.updateStockRequest]: (state, { payload }) => true,
  [stocksActions.updateStockSuccess]: (state, { payload }) => false,
  [stocksActions.updateStockError]: (state, { payload }) => false,
  [stocksActions.deleteStockRequest]: (state, { payload }) => true,
  [stocksActions.deleteStockSuccess]: (state, { payload }) => false,
  [stocksActions.deleteStockError]: (state, { payload }) => false,
});

const errorReducer = createReducer(null, {
  [stocksActions.getStocksError]: (state, { payload }) => payload.stack,
  [stocksActions.getStockByIdError]: (state, { payload }) => payload.stack,
  [stocksActions.sendFileError]: (state, { payload }) => payload.stack,
  [stocksActions.sendStockError]: (state, { payload }) => payload.stack,
  [stocksActions.updateStockError]: (state, { payload }) => payload.stack,
  [stocksActions.updateStockError]: (state, { payload }) => payload.stack,
});

export default combineReducers({
  items: stocksReducer,
  item: stockReducer,
  fileLink: linkReducer,
  isLoading: loadingReducer,
  error: errorReducer,
});
