import { createAction } from "@reduxjs/toolkit";

const productsRequest = createAction("products/fetchProductsRequest");
const productsSuccess = createAction("products/fetchProductsSuccess");
const productsError = createAction("products/fetchProductsError");

const byCategoryRequest = createAction(
  "products/fetchProductsByCategoryRequest"
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
  "products/createNewIngredientRequest"
);
const createNewIngredientsSuccess = createAction(
  "products/createNewIngredientSuccess"
);
const createNewIngredientsError = createAction(
  "products/createNewIngredientError"
);

const addIngredient = createAction("products/addIngredient");
const addIngredientError = createAction("products/addIngredientError");

const updateProductRequest = createAction("products/updateProductRequest");
const updateProductSuccess = createAction("products/updateProductSuccess");
const updateProductError = createAction("products/updateProductError");

const deleteProductRequest = createAction("products/deleteProductRequest");
const deleteProductSuccess = createAction("products/deleteProductSuccess");
const deleteProductError = createAction("products/deleteProductError");

const sendFileRequest = createAction("products/sendFileRequest");
const sendFileSuccess = createAction("products/sendFileSuccess");
const sendFileError = createAction("products/sendFileError");

const clearFile = createAction("products/clearFile");

const imagesInit = createAction("products/imagesInit");

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

  clearFile,

  addIngredient,
  addIngredientError,
  imagesInit,
};
