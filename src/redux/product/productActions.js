import { createAction } from "@reduxjs/toolkit";

const productsRequest = createAction("products/fetchProductsRequest");
const productsSuccess = createAction("products/fetchProductsSuccess");
const productsError = createAction("products/fetchProductsError");

const byCategoryRequest = createAction(
  "products/fetchProductsByCategotyRequest"
);
const byCategorySuccess = createAction(
  "products/fetchProductsByCategorySucceess"
);
const byCategoryError = createAction("products/fetchProductsByCategoryError");

const byIdRequest = createAction("products/fetchProductsByIdRequest");
const byIdSuccess = createAction("products/fetchProductsByIdSuccess");
const byIdErrror = createAction("products/fetchProductsByIdError");

export default {
  productsError,
  productsSuccess,
  productsRequest,
  byCategoryRequest,
  byCategorySuccess,
  byCategoryError,
  byIdRequest,
  byIdSuccess,
  byIdErrror,
};
