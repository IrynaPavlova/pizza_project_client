import axios from "axios";
import productActions from "./productActions";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.defaults.baseURL = "https://evening-caverns-34846.herokuapp.com/";

const fetchProducts = () => (dispatch) => {
  dispatch(productActions.productsRequest());

  axios
    .get("/products")
    .then(({ data }) => dispatch(productActions.productsSuccess(data.products)))
    .catch((error) => dispatch(productActions.productsError(error)));
};

const fetchProductsByCategory = (category) => (dispatch) => {
  dispatch(productActions.byCategoryRequest());

  axios
    .get(`/products/?category="${category}"`, {
      cancelToken: source.token,
    })
    .then(({ data }) =>
      dispatch(productActions.byCategorySuccess(data.products))
    )
    .catch((error) => dispatch(productActions.byCategoryError(error)));
};

const fetchProductById = (id) => (dispatch) => {
  dispatch(productActions.byIdRequest());

  axios
    .get(`/products/${id}`)
    .then(({ data }) => dispatch(productActions.byIdSuccess(data.product)))
    .catch((error) => dispatch(productActions.byIdErrror(error)));
};

//for AdminPage
const sendFile = (file) => (dispatch) => {
  dispatch(productActions.sendFileRequest());
  // console.log(file);
  axios
    .post("/images", file)
    .then(({ data }) =>
      dispatch(productActions.sendFileSuccess(data.image.file))
    )
    .catch((error) => dispatch(productActions.sendFileError(error)));
};

const sendProduct = (product) => (dispatch) => {
  dispatch(productActions.sendProductRequest());

  axios
    .post("/products", product)
    .then(({ data }) => dispatch(productActions.sendProductSuccess(data)))
    //проверить что приходит в data
    .catch((error) => dispatch(productActions.sendProductError(error)));
};

const updateProduct = (productId, newProduct) => (dispatch) => {
  dispatch(productActions.updateProductRequest());

  axios
    .put(`/products/${productId}`, newProduct)
    .then((res) => dispatch(productActions.updateProductSuccess(res)))
    .catch((error) => dispatch(productActions.updateProductError(error)));
};

const deleteProduct = (productId) => (dispatch) => {
  dispatch(productActions.deleteProductRequest());
  // console.log(productId);

  axios
    .delete(`/products/${productId}`, productId)
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
  updateProduct,
  deleteProduct,
};
