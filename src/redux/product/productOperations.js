import axios from 'axios';
import productActions from './productActions';

axios.defaults.baseURL = 'https://evening-caverns-34846.herokuapp.com/';

const fetchProducts = () => (dispatch) => {
  dispatch(productActions.productsRequest());

  axios
    .get('/products')
    .then(({ data }) => dispatch(productActions.productsSuccess(data.products)))
    .catch((error) => dispatch(productActions.productsError(error)));
};

const fetchProductsByCategory = (category) => (dispatch) => {
  dispatch(productActions.byCategoryRequest());

  axios
    .get(`/products/?category="${category}"`)
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

export default { fetchProducts, fetchProductsByCategory, fetchProductById };
