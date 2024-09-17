// src/Pages/Departamentos/excluirDepartamento.ts

import api from '../../Services/api'; // Certifique-se de que o caminho está correto

const excluirDepartamento = async (id: number) => {
  try {
    const response = await api.delete(`/departamentos/${id}`);

    // Verifica se a resposta foi bem-sucedida
    if (response.status !== 200) {
      throw new Error('Falha ao excluir o departamento');
    }
  } catch (error) {
    // Trata erros na requisição
    if (error instanceof Error) {
      throw new Error(`Falha ao excluir o departamento: ${error.message}`);
    } else {
      throw new Error('Falha ao excluir o departamento: Erro desconhecido');
    }
  }
};

export default excluirDepartamento;
