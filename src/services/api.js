import axios from 'axios';

const baseURL = "https://evening-caverns-34846.herokuapp.com";

const headers = {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
}

const getAllIngredients = async () => {
    const res = await axios.get(`${baseURL}/ingredients`);
    return res.data.ingredients;
};

const postNewProduct = (product) => {
    axios.post(`${baseURL}/products`, JSON.stringify(product), {headers})
};

const postImage = async (file) => {
    return await axios.post(`${baseURL}/images`, file, {headers}).data;
};

export {getAllIngredients, postNewProduct, postImage}