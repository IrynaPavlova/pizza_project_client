const getLoading = (state) => state.products.loading;

const getError = (state) => state.products.errorReducer;

const getProducts = (state) => state.products.items;

const getFileLink = (state) => state.products.fileLink;

const getIngradients = (state) => state.products.ingradients;

const fileLink = (state) => state.products.fileLink;

export default {
  getLoading,
  getError,
  getProducts,
  getFileLink,
  getIngradients,
  fileLink,
};
