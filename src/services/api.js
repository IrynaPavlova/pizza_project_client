import axios from 'axios';
const baseURL = 'https://evening-caverns-34846.herokuapp.com/';

const fetchPizzaDetailsId = pizzaId  => {
    return fetch(`${baseURL}/products/${pizzaId}`)
    .then(res => res.json());
};

export default fetchPizzaDetailsId;