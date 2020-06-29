import axios from "axios";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const baseURL = "https://evening-caverns-34846.herokuapp.com";

//for Products
const getAllProducts = () => {
  return axios.get("/products");
};

const getProductsByCategory = (category) => {
  return axios.get(`/products/?category="${category}"`, {
    cancelToken: source.token,
  });
};

const getProductById = (id) => {
  return axios.get(`/products/${id}`);
};

const getAllIngredients = async () => {
  return axios.get(`${baseURL}/ingredients`);
};
const createNewIngredients = async (ingredients) => {
  return axios.post(`${baseURL}/ingredients`, ingredients);
};

const postNewProduct = (product) => {
  return axios.post(`${baseURL}/products`, product);
};

const updateProductById = (productId, newProduct) => {
  return axios.put(`/products/${productId}`, newProduct);
};

const deleteProductById = (productId) => {
  return axios.delete(`/products/${productId}`);
};

//for Orders

// other
const postImage = async (file) => {
  const data = new FormData();
  data.append("file", file);

  return axios.post(`${baseURL}/images`, data);
};

// developers

const fetchDevs = () => axios.get("/developers");

// Stocks

const fetchAllStocks = () => axios.get("/promo");

const sendUserFile = (file) => axios.post("/images", file);

const sendNewStock = (stock) => axios.post("/promo", stock);

const updateExistingStock = (stockId, newStock) =>
  axios.put(`/promo/${stockId}`, newStock);

const deleteExistingStock = (stockId) => axios.delete(`/promo/${stockId}`);

const getExistingStockById = (stockId) => axios.get(`/promo/${stockId}`);

export {
  fetchDevs,
  getAllIngredients,
  createNewIngredients,
  postNewProduct,
  postImage,
  getAllProducts,
  getProductsByCategory,
  getProductById,
  updateProductById,
  deleteProductById,
  fetchAllStocks,
  sendUserFile,
  sendNewStock,
  updateExistingStock,
  deleteExistingStock,
  getExistingStockById,
};
