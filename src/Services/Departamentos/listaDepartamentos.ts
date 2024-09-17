import api from '../api';

interface Departamento {
  id_departamento: number;
  nome: string;
  sigla: string;
}

const listaDepartamentos = async (): Promise<Departamento[]> => {
  try {
    const response = await api.get<Departamento[]>('/departamentos');
    return response.data;
  } catch (error) {
    console.error('Erro ao listar departamentos', error);
    return [];
  }
};

export default listaDepartamentos;
