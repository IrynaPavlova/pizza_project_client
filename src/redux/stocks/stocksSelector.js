const getStocks = (state) => state.stocks.items;

const getFileLink = (state) => state.stocks.fileLink;

const getLoading = (state) => state.stocks.isLoading;

export default { getStocks, getFileLink, getLoading };
