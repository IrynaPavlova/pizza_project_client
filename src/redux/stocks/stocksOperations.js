import axios from "axios";
import stocksActions from "./stocksActions";

const BASE_URL = "https://evening-caverns-34846.herokuapp.com";

axios.defaults.baseURL = BASE_URL;

const fetchStocks = () => (dispatch) => {
  dispatch(stocksActions.getStocksRequest());

  axios
    .get("/promo")
    .then(({ data }) => dispatch(stocksActions.getStocksSuccess(data.promo)))
    .catch((error) => dispatch(stocksActions.getStocksError(error)));
};

const sendFile = (file) => (dispatch) => {
  dispatch(stocksActions.sendFileRequest());

  axios
    .post("/images", file)
    .then(({ data }) =>
      dispatch(stocksActions.sendFileSuccess(data.image.file))
    )
    .catch((error) => dispatch(stocksActions.sendFileError(error)));
};

const sendStock = (stock) => (dispatch) => {
  dispatch(stocksActions.sendStockRequest());

  axios
    .post("/promo", stock)
    .then(({ data }) => dispatch(stocksActions.sendStockSuccess(data.newPromo)))
    .catch((error) => dispatch(stocksActions.sendStockError(error)));
};

const updateStock = (stockId, newStock) => (dispatch) => {
  dispatch(stocksActions.updateStockRequest());

  axios
    .put(`/promo/${stockId}`, newStock)
    .then(({ data }) =>
      dispatch(stocksActions.updateStockSuccess(data.updatedPromo))
    )
    .catch((error) => dispatch(stocksActions.updateStockError(error)));
};

const deleteStock = (stockId) => (dispatch) => {
  dispatch(stocksActions.deleteStockRequest());

  axios
    .delete(`/promo/${stockId}`, stockId)
    .then(({ data }) =>
      dispatch(stocksActions.deleteStockSuccess(data.deletedPromo._id))
    )
    .catch((error) => dispatch(stocksActions.deleteStockError(error)));
};

const getStockById = (stockId) => (dispatch) => {
  dispatch(stocksActions.getStockByIdRequest());

  axios
    .get(`/promo/${stockId}`)
    .then(({ data }) => dispatch(stocksActions.getStockByIdSuccess(data.promo)))
    .catch((error) => dispatch(stocksActions.getStockByIdError(error)));
};

export default {
  fetchStocks,
  sendStock,
  updateStock,
  deleteStock,
  sendFile,
  getStockById,
};
