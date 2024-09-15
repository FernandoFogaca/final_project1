// src/Services/Departamentos/insereDepartamento.ts
import api from '../../Services/api'; // Importa a instância do Axios configurada

// Função para inserir um novo departamento via API
export const insereDepartamento = async (nome: string, sigla: string) => {
  try {
    // Fazendo a requisição POST para a API de departamentos
    const response = await api.post('/departamentos', { nome, sigla });
    return response.data; // Retorna os dados da resposta se for bem-sucedido
  } catch (error: any) {
    // Caso ocorra um erro, lança uma exceção com a mensagem de erro
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || 'Erro ao criar o departamento');
    } else {
      throw new Error('Erro desconhecido ao criar o departamento');
    }
  }
};
