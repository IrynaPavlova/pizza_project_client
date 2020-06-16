import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import stocksActions from "./stocksActions";

const stocksReducer = createReducer([], {
  [stocksActions.getStocksSuccess]: (state, { payload }) => payload,
  [stocksActions.sendStockSuccess]: (state, { payload }) => payload,
  [stocksActions.updateStockSuccess]: (state, { payload }) => payload,
  [stocksActions.deleteStockSuccess]: (state, { payload }) => payload,
});
