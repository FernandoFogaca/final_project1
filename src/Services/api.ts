import axios from 'axios';

const api = axios.create({
  baseURL: 'https://1606117-nodejs-tt.vercel.app', // Sua base URL da API
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;