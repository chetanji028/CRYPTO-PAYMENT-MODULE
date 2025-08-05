import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const mintTokens = (to, amount) => {
  return axios.post(`${API_URL}/mint`, { to, amount });
};

export const transferTokens = (to, amount) => {
  return axios.post(`${API_URL}/transfer`, { to, amount });
};

export const getBalance = (address) => {
  return axios.get(`${API_URL}/balance/${address}`);
};
