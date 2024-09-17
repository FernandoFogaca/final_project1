import api from '../api';

interface Funcionario {
  nome: string;
  cargo?: string;
  email?: string;
  telefone?: string;
}

const adicionarFuncionario = async (departamentoId: number, funcionario: Funcionario) => {
  try {
    await api.post(`/departamentos/${departamentoId}/funcionarios`, funcionario);
  } catch (error) {
    console.error('Erro ao adicionar funcionário', error);
    throw new Error('Falha ao adicionar funcionário');
  }
};

export default adicionarFuncionario;
