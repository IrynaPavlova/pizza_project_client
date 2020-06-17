import axios from 'axios';
import stocksActions from './stocksActions';

const BASE_URL = 'https://evening-caverns-34846.herokuapp.com';

axios.defaults.baseURL = BASE_URL;

const fetchStocks = () => (dispatch) => {
  dispatch(stocksActions.getStocksRequest());

  axios
    .get('/promo')
    .then(({ data }) => dispatch(stocksActions.getStocksSuccess(data.promo)))
    .catch((error) => dispatch(stocksActions.getStocksError(error)));
};

const sendStock = (stock) => (dispatch) => {
  dispatch(stocksActions.sendStockRequest());

  axios
    .post('/promo', stock)
    .then((res) => console.log(res))
    .catch((error) => dispatch(stocksActions.sendStockError(error)));
};

const updateStock = (stockId, newStock) => (dispatch) => {
  dispatch(stocksActions.updateStockRequest());

  axios
    .put(`/promo/:${stockId}`, newStock)
    .then((res) => dispatch(stocksActions.updateStockSuccess(res)))
    .catch((error) => dispatch(stocksActions.updateStockError(error)));
};

const deleteStock = (stockId) => (dispatch) => {
  dispatch(stocksActions.deleteStockRequest());

  axios
    .delete(`/promo/:${stockId}`, stockId)
    .then((res) => dispatch(stocksActions.deleteStockSuccess(res)))
    .catch((error) => dispatch(stocksActions.deleteStockError(error)));
};

export default { fetchStocks, sendStock, updateStock, deleteStock };
