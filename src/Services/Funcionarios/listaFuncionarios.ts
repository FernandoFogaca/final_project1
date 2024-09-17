import api from '../api';

interface Funcionario {
  id: number;
  nome: string;
  cargo: string;
  email: string;
  telefone: string;
  id_departamento: number;
}

const listaFuncionarios = async (departamentoId: number): Promise<Funcionario[]> => {
  try {
    const response = await api.get<Funcionario[]>(`/departamentos/${departamentoId}/funcionarios`);
    return response.data;
  } catch (error) {
    console.error('Erro ao listar funcionários', error);
    return [];
  }
};

export default listaFuncionarios;
