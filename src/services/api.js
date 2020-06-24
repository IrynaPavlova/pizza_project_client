import axios from 'axios';

const baseURL = "https://evening-caverns-34846.herokuapp.com";


const getAllIngredients = async () => {
    const res = await axios.get(`${baseURL}/ingredients`);
    return res.data.ingredients;
};

const postNewProduct = (product) => {
    return axios.post(`${baseURL}/products`, product);
};

const postImage = (file) => {
    const data = new FormData();
    data.append('file', file);

    return axios.post(`${baseURL}/images`, data);
};

function fetchDevs() {
  return axios.get('/developers');
}

export { fetchDevs, getAllIngredients, postNewProduct, postImage };
