// src/Services/api.ts
import axios from 'axios';

// Crie uma instância do Axios com a configuração da base URL da API
const api = axios.create({
  baseURL: 'https://1606117-nodejs-tt.vercel.app', // Sua base URL da API
  timeout: 10000, // Tempo limite para requisições
  headers: {
    'Content-Type': 'application/json', // Tipo de conteúdo das requisições
  },
});

export default api; // Exporta a instância configurada do Axios
