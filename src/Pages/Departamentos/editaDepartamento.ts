// src/Pages/Departamentos/editaDepartamento.ts
import api from '../../Services/api'; // Importa a instância do Axios configurada

// Função para obter um departamento via API pelo ID
export const getDepartamento = async (id: any) => {
  try {
    // Faz a requisição GET para obter o departamento pelo ID
    const result = await api.get(`/departamentos/${id}`);
    return result.data;
  } catch (error: any) {
    // Tratamento de erro
    throw new Error(error.response.data.message || 'Erro ao buscar o departamento');
  }
};

// Função para atualizar um departamento via API (precisa receber os parâmetros corretos)
export const atualizaDepartamento = async (id: any, nome: string, sigla: string) => {
  try {
    // Fazendo a requisição PUT para a API de departamentos
    const response = await api.put(`/departamentos/${id}`, { nome, sigla });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || 'Erro ao atualizar o departamento');
  }
};
