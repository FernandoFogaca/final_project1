import api from "../api";

interface Departamento {
  id_departamento: number;
  nome: string;
  sigla: string;
}

const listaDepartamentos = async ({ setDepartamentos }: { setDepartamentos: (data: Departamento[]) => void }) => {
  try {
    const result = await api.get<Departamento[]>('/departamentos');
    setDepartamentos(result.data);
  } catch (error) {
    console.error('Erro ao listar departamentos', error);
  }
};

export default listaDepartamentos;
