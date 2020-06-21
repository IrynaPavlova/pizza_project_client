import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import stocksActions from "./stocksActions";

const stocksReducer = createReducer([], {
  [stocksActions.getStocksSuccess]: (state, { payload }) => payload,
  [stocksActions.sendStockSuccess]: (state, { payload }) => [...state, payload],
  [stocksActions.updateStockSuccess]: (state, { payload }) => payload,
  [stocksActions.deleteStockSuccess]: (state, { payload }) =>
    state.filter((element) => element._id !== payload),
});

const linkReducer = createReducer(null, {
  [stocksActions.sendFileSuccess]: (state, { payload }) => payload,
  [stocksActions.sendStockSuccess]: (state, { payload }) => null,
});

export default combineReducers({ items: stocksReducer, fileLink: linkReducer });
