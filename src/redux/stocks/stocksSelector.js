const getStocks = (state) => state.stocks.items;

const getFileLink = (state) => state.stocks.fileLink;

const getLoading = (state) => state.stocks.isLoading;

const getItem = (state) => state.stocks.item;

export default { getStocks, getFileLink, getLoading, getItem };
