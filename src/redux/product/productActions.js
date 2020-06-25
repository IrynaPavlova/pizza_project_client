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

//for AdminPage

const sendProductRequest = createAction("products/sendProductRequest");
const sendProductSuccess = createAction("products/sendProductSuccess");
const sendProductError = createAction("products/sendProductError");

const getAllIngradientsRequest = createAction(
  "products/getAllIngradientsRequest"
);
const getAllIngradientsSuccess = createAction(
  "products/getAllIngradientsSuccess"
);
const getAllIngradientsError = createAction("products/getAllIngradientsError");

const updateProductRequest = createAction("products/updateProductRequest");
const updateProductSuccess = createAction("products/updateProductSuccess");
const updateProductError = createAction("products/updateProductError");

const deleteProductRequest = createAction("products/deleteProductRequest");
const deleteProductSuccess = createAction("products/deleteProductSuccess");
const deleteProductError = createAction("products/deleteProductError");

const sendFileRequest = createAction("products/sendFileRequest");
const sendFileSuccess = createAction("products/sendFileSuccess");
const sendFileError = createAction("products/sendFileError");

// const cancelInput = createAction("products/cancelInput");

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

  // cancelInput,

  sendProductRequest,
  sendProductSuccess,
  sendProductError,

  getAllIngradientsRequest,
  getAllIngradientsSuccess,
  getAllIngradientsError,

  updateProductRequest,
  updateProductSuccess,
  updateProductError,

  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,

  sendFileRequest,
  sendFileSuccess,
  sendFileError,
};
