const getLoading = (state) => state.products.loading;

const getError = (state) => state.products.errorReducer;

const getProducts = (state) => state.products.items;

const getFileLink = (state) => state.products.fileLink;

const getIngredients = (state) => state.products.ingredients;

const createNewIngredient = (state) => state.products.newIngredient;

const addIngredient = (state) => state.products.ingredient;

export default {
  getLoading,
  getError,
  getProducts,
  getFileLink,
  getIngredients,
  createNewIngredient,
  addIngredient,
};
