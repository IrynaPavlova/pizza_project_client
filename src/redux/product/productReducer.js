import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import productActions from "./productActions";

const productReducer = createReducer([], {
  [productActions.productsSuccess]: (state, { payload }) => payload,
  [productActions.byCategorySuccess]: (state, { payload }) => [
    state,
    ...payload,
  ],
  [productActions.byIdSuccess]: (state, { payload }) => payload,

  [productActions.sendProductSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [productActions.updateProductSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [productActions.deleteProductSuccess]: (state, { payload }) =>
    state.filter((element) => element._id !== payload),
});

const errorReducer = createReducer(null, {
  [productActions.productsError]: (state, { payload }) => payload,
  [productActions.byCategoryError]: (state, { payload }) => payload,
  [productActions.byIdError]: (state, { payload }) => payload,

  [productActions.sendFileError]: (state, { payload }) => payload,
  [productActions.sendProductError]: (state, { payload }) => payload,
  [productActions.getAllIngredientsError]: (state, { payload }) => payload,
  [productActions.updateProductError]: (state, { payload }) => payload,
  [productActions.deleteProductError]: (state, { payload }) => payload,
  [productActions.createNewIngredientError]: (state, { payload }) => payload,
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
  [productActions.byIdError]: () => false,

  [productActions.sendFileRequest]: (state, { payload }) => true,
  [productActions.sendFileSuccess]: (state, { payload }) => false,
  [productActions.sendFileError]: (state, { payload }) => false,
  [productActions.sendProductRequest]: (state, { payload }) => true,
  [productActions.sendProductSuccess]: (state, { payload }) => false,
  [productActions.sendProductError]: (state, { payload }) => false,
  [productActions.getAllIngredientsRequest]: (state, { payload }) => true,
  [productActions.getAllIngredientsSuccess]: (state, { payload }) => false,
  [productActions.getAllIngredientsError]: (state, { payload }) => false,

  [productActions.createNewIngredientRequest]: (state, { payload }) => true,
  [productActions.createNewIngredientSuccess]: (state, { payload }) => false,
  [productActions.createNewIngredientError]: (state, { payload }) => false,

  [productActions.updateProductRequest]: (state, { payload }) => true,
  [productActions.updateProductSuccess]: (state, { payload }) => false,
  [productActions.updateProductError]: (state, { payload }) => false,
  [productActions.deleteProductRequest]: (state, { payload }) => true,
  [productActions.deleteProductSuccess]: (state, { payload }) => false,
  [productActions.deleteProductError]: (state, { payload }) => false,
});

const linkReducer = createReducer(null, {
  [productActions.sendFileSuccess]: (state, { payload }) => payload,
  [productActions.clearFile]: () => null,
  [productActions.deleteProductSuccess]: (state, { payload }) => null,
  [productActions.imagesInit]: (state, { payload }) => payload,
});

const ingredientsReducer = createReducer([], {
  [productActions.getAllIngredientsSuccess]: (state, { payload }) => payload,
});
const ingredientReducer = createReducer([], {
  [productActions.addIngredient]: (state, { payload }) => payload,
});
const newIngredientReducer = createReducer([], {
  [productActions.createNewIngredientSuccess]: (state, { payload }) => payload,
});

export default combineReducers({
  items: productReducer,
  errorReducer,
  loading: loadingReducer,
  fileLink: linkReducer,
  ingredients: ingredientsReducer,
  ingredient: ingredientReducer,
  newIngredient: newIngredientReducer,
});
