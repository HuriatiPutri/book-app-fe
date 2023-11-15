import axios from 'axios';

const fetch = axios.create({
  baseURL: 'https://legendary-melba-654dfb.netlify.app/.netlify/functions/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

fetch.interceptors.request.use(
  (config) => {
    return config;
  },
);

fetch.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default fetch;