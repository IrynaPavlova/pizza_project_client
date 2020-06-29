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
const byIdError = createAction("products/fetchProductsByIdError");

//for AdminPage

const sendProductRequest = createAction("products/sendProductRequest");
const sendProductSuccess = createAction("products/sendProductSuccess");
const sendProductError = createAction("products/sendProductError");

const getAllIngredientsRequest = createAction(
  "products/getAllIngredientsRequest"
);
const getAllIngredientsSuccess = createAction(
  "products/getAllIngredientsSuccess"
);
const getAllIngredientsError = createAction("products/getAllIngredientsError");

const createNewIngredientsRequest = createAction(
  "products/createNewIngredientsRequest"
);
const createNewIngredientsSuccess = createAction(
  "products/createNewIngredientsSuccess"
);
const createNewIngredientsError = createAction(
  "products/createNewIngredientsError"
);
const addIngredient = createAction("products/addIngredient");

const updateProductRequest = createAction("products/updateProductRequest");
const updateProductSuccess = createAction("products/updateProductSuccess");
const updateProductError = createAction("products/updateProductError");

const deleteProductRequest = createAction("products/deleteProductRequest");
const deleteProductSuccess = createAction("products/deleteProductSuccess");
const deleteProductError = createAction("products/deleteProductError");

const sendFileRequest = createAction("products/sendFileRequest");
const sendFileSuccess = createAction("products/sendFileSuccess");
const sendFileError = createAction("products/sendFileError");

const saveExistedImg = createAction("products/saveExistedImg");
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
  byIdError,

  // cancelInput,

  sendProductRequest,
  sendProductSuccess,
  sendProductError,

  getAllIngredientsRequest,
  getAllIngredientsSuccess,
  getAllIngredientsError,

  createNewIngredientsRequest,
  createNewIngredientsSuccess,
  createNewIngredientsError,

  updateProductRequest,
  updateProductSuccess,
  updateProductError,

  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,

  sendFileRequest,
  sendFileSuccess,
  sendFileError,

  saveExistedImg,
  addIngredient,
};
