import productActions from "./productActions";
import {
  getAllIngredients,
  postNewProduct,
  postImage,
  getAllProducts,
  getProductsByCategory,
  getProductById,
  updateProductById,
  deleteProductById,
} from "../../services/api";

const fetchProducts = () => (dispatch) => {
  dispatch(productActions.productsRequest());

  getAllProducts()
    .then(({ data }) => dispatch(productActions.productsSuccess(data.products)))
    .catch((error) => dispatch(productActions.productsError(error)));
};

const fetchProductsByCategory = (category) => (dispatch) => {
  dispatch(productActions.byCategoryRequest());

  getProductsByCategory(category)
    .then(({ data }) =>
      dispatch(productActions.byCategorySuccess(data.products))
    )
    .catch((error) => dispatch(productActions.byCategoryError(error)));
};

const fetchProductById = (id) => (dispatch) => {
  dispatch(productActions.byIdRequest());

  getProductById(id)
    .then(({ data }) => dispatch(productActions.byIdSuccess(data.product)))
    .catch((error) => dispatch(productActions.byIdErrror(error)));
};

//for AdminPage
const sendFile = (file) => (dispatch) => {
  dispatch(productActions.sendFileRequest());
  // console.log(file);

  postImage(file)
    .then(({ data }) =>
      dispatch(productActions.sendFileSuccess(data.image.file))
    )
    .catch((error) => dispatch(productActions.sendFileError(error)));
};

const sendProduct = (product) => (dispatch) => {
  dispatch(productActions.sendProductRequest());

  postNewProduct(product)
    .then(({ data }) =>
      dispatch(productActions.sendProductSuccess(data.product))
    )
    //проверить что приходит в data
    .catch((error) => dispatch(productActions.sendProductError(error)));
};

const getIngredients = () => (dispatch) => {
  dispatch(productActions.getAllIngradientsRequest());

  getAllIngredients()
    .then(({ data }) =>
      dispatch(productActions.getAllIngradientsSuccess(data.ingredients))
    )
    .catch((error) => dispatch(productActions.getAllIngradientsError(error)));
};

const updateProduct = (productId, newProduct) => (dispatch) => {
  dispatch(productActions.updateProductRequest());

  updateProductById(productId, newProduct)
    .then((res) => dispatch(productActions.updateProductSuccess(res)))
    .catch((error) => dispatch(productActions.updateProductError(error)));
};

const deleteProduct = (productId) => (dispatch) => {
  dispatch(productActions.deleteProductRequest());

  deleteProductById(productId)
    .then(
      ({ data }) => dispatch(productActions.deleteProductSuccess(data))
      //проверить что приходит в data
    )
    .catch((error) => dispatch(productActions.deleteProductError(error)));
};

export default {
  fetchProducts,
  fetchProductsByCategory,
  fetchProductById,

  sendFile,
  sendProduct,
  getIngredients,
  updateProduct,
  deleteProduct,
};
