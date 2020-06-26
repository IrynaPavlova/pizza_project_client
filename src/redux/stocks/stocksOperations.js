import stocksActions from './stocksActions';
import {
  fetchAllStocks,
  sendUserFile,
  sendNewStock,
  updateExistingStock,
  deleteExistingStock,
  getExistingStockById,
} from '../../services/api';

const fetchStocks = () => (dispatch) => {
  dispatch(stocksActions.getStocksRequest());

  fetchAllStocks()
    .then(({ data }) => dispatch(stocksActions.getStocksSuccess(data.promo)))
    .catch((error) => dispatch(stocksActions.getStocksError(error)));
};

const sendFile = (file) => (dispatch) => {
  dispatch(stocksActions.sendFileRequest());

  sendUserFile(file)
    .then(({ data }) =>
      dispatch(stocksActions.sendFileSuccess(data.image.file))
    )
    .catch((error) => dispatch(stocksActions.sendFileError(error)));
};

const sendStock = (stock) => (dispatch) => {
  dispatch(stocksActions.sendStockRequest());

  sendNewStock(stock)
    .then(({ data }) => dispatch(stocksActions.sendStockSuccess(data.newPromo)))
    .catch((error) => dispatch(stocksActions.sendStockError(error)));
};

const updateStock = (stockId, newStock) => (dispatch) => {
  dispatch(stocksActions.updateStockRequest());

  updateExistingStock(stockId, newStock)
    .then(({ data }) =>
      dispatch(stocksActions.updateStockSuccess(data.updatedPromo))
    )
    .catch((error) => dispatch(stocksActions.updateStockError(error)));
};

const deleteStock = (stockId) => (dispatch) => {
  dispatch(stocksActions.deleteStockRequest());

  deleteExistingStock(stockId)
    .then(({ data }) =>
      dispatch(stocksActions.deleteStockSuccess(data.deletedPromo._id))
    )
    .catch((error) => dispatch(stocksActions.deleteStockError(error)));
};

const getStockById = (stockId) => (dispatch) => {
  dispatch(stocksActions.getStockByIdRequest());

  getExistingStockById(stockId)
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
