import axios from "axios";
import stocksActions from "./stocksActions";

const fetchStocks = () => (dispatch) => {
  dispatch(stocksActions.getStocksRequest());

  axios
    .get("")
    .then((res) => dispatch(stocksActions.getStocksSuccess(res)))
    .catch((error) => dispatch(stocksActions.getStocksError(error)));
};

const sendStock = (stock) => (dispatch) => {
  dispatch(stocksActions.sendStockRequest());

  axios
    .post("", stock)
    .then((res) => dispatch(stocksActions.sendStockSuccess(res)))
    .catch((error) => dispatch(stocksActions.sendStockError(error)));
};

const updateStock = (stockId, newStock) => (dispatch) => {
  dispatch(stocksActions.updateStockRequest());

  axios
    .patch(`/???/:${stockId}`, newStock)
    .then((res) => dispatch(stocksActions.updateStockSuccess(res)))
    .catch((error) => dispatch(stocksActions.updateStockError(error)));
};

const deleteStock = (stockId) => (dispatch) => {
  dispatch(stocksActions.deleteStockRequest());

  axios
    .delete("", stockId)
    .then((res) => dispatch(stocksActions.deleteStockSuccess(res)))
    .catch((error) => dispatch(stocksActions.deleteStockError(error)));
};

export default { fetchStocks, sendStock, updateStock, deleteStock };
