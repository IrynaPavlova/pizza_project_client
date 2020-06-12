import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import productActions from './productActions';

const productReducer = createReducer([], {
  [productActions.productsSuccess]: (state, { payload }) => payload,
  [productActions.byCategorySuccess]: (state, { payload }) => payload,
  [productActions.byIdSuccess]: (state, { payload }) => payload,
});

const errorReducer = createReducer(null, {
  [productActions.productsError]: (state, { payload }) => payload,
  [productActions.byCategoryError]: (state, { payload }) => payload,
  [productActions.byIdErrror]: (state, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
  [productActions.productsRequest]: () => true,
  [productActions.productsSuccess]: () => false,
  [productActions.productsError]: () => false,
  [productActions.byCategoryRequest]: () => true,
  [productActions.byCategorySuccess]: () => false,
  [productActions.byCategoryError]: () => false,
  [productActions.byIdRequest]: () => true,
  [productActions.byIdSuccess]: () => false,
  [productActions.byIdErrror]: () => false,
});

export default combineReducers({
  productReducer,
  errorReducer,
  loadingReducer,
});
