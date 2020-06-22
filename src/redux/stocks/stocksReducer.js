import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import stocksActions from './stocksActions';

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
  [stocksActions.cancelInput]: (state, { payload }) => null,
});

const loadingReducer = createReducer(false, {
  [stocksActions.getStocksRequest]: (state, { payload }) => true,
  [stocksActions.getStocksSuccess]: (state, { payload }) => false,
  [stocksActions.getStocksError]: (state, { payload }) => false,
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
  [stocksActions.updateStockError]: (state, { payload }) => false,
});

export default combineReducers({
  items: stocksReducer,
  fileLink: linkReducer,
  isLoading: loadingReducer,
});
