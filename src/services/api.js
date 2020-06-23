import axios from 'axios';

function fetchDevs() {
  return axios.get('/developers');
}

export { fetchDevs };
