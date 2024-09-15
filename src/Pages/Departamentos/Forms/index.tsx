import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { insereDepartamento } from '../.././Departamentos/insereDepartamento'; // Importação da função de inserção de departamento
import {getDepartamento} from '../.././Departamentos/editaDepartamento'; // Importação da função de edição de departamento


// Mock de dados de departamentos já registrados (pode ser removido se os dados vierem da API)
const departamentosExistentes = [
  { id: 1, nome: 'TI', sigla: 'TI' },
  { id: 2, nome: 'RH', sigla: 'RH' },
];

const FormDepartamentos = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [sigla, setSigla] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Carregar os dados do departamento se id estiver presente
    if (id) {
      const departamento = departamentosExistentes.find(dept => dept.id === parseInt(id));
      if (departamento) {
        setNome(departamento.nome);
        setSigla(departamento.sigla);
      }
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação dos campos obrigatórios
    if (!nome || !sigla) {
      setErrorMessage(`${!nome ? 'Nome' : ''} ${!sigla ? '/ Sigla' : ''} Required`);
      setMessage('');
      return;
    }

    try {
      // Chama a função de inserção de departamento (inclusão da lógica de chamada de API)
      await insereDepartamento(nome, sigla);

      setMessage('Departamento criado com sucesso!');
      setErrorMessage('');

      // Redireciona para a lista de departamentos após 2 segundos
      setTimeout(() => navigate('/departamentos'), 2000);
    } catch (error: any) {
      // Exibe a mensagem de erro caso a criação falhe
      setMessage('');
      setErrorMessage(error.message || 'Erro ao criar o departamento');
    }
  };

  const handleCancel = () => {
    navigate('/departamentos');
  };

  return (
    <div className="w-full max-w-[600px] mx-auto mt-10 p-6 rounded-lg shadow-lg">
      {/* Exibe a mensagem de sucesso ou erro */}
      <div className="flex justify-center items-center mb-4">
        {message && <div className="bg-green-900 text-white px-4 py-2 rounded">{message}</div>}
        {errorMessage && <div className="bg-red-500 text-white px-4 py-2 rounded">{errorMessage}</div>}
      </div>

      {/* Formulário de Adicionar/Editar Departamento */}
      <div className="bg-gray-950 shadow-md p-6 rounded-lg">
        <h1 className="text-2xl font-semibold text-blue-950 mb-4">{id ? 'Editar Departamento' : 'Adicionar Departamento'}</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nome" className="block text-white font-semibold">
              Nome do Departamento
            </label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full p-2 mt-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="sigla" className="block text-white font-semibold">
              Sigla
            </label>
            <input
              type="text"
              id="sigla"
              value={sigla}
              onChange={(e) => setSigla(e.target.value)}
              className="w-full p-2 mt-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="w-full   md:w-auto px-8 py-4 bg-green-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-green-600 hover:scale-105 hover:brightness-110 transition-all duration-300 mr-4">
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="w-full md:w-auto px-8 py-4 bg-red-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-red-600 hover:scale-105 hover:brightness-110 transition-all duration-300 ml-4">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormDepartamentos;
