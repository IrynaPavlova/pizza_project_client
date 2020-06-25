import axios from "axios";

const baseURL = "https://evening-caverns-34846.herokuapp.com";

//for Products
const getAllProducts = () => {
  return axios.get("/products");
};

const getProductsByCategory = (category) => {
  return axios.get(`/products/?category="${category}"`);
};

const getProductById = (id) => {
  return axios.get(`/products/${id}`);
};

const getAllIngredients = async () => {
  return axios.get(`${baseURL}/ingredients`);
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

function fetchDevs() {
  return axios.get("/developers");
}

export {
  fetchDevs,
  getAllIngredients,
  postNewProduct,
  postImage,
  getAllProducts,
  getProductsByCategory,
  getProductById,
  updateProductById,
  deleteProductById,
};
