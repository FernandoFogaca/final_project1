import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import adicionarFuncionario from '../../../Services/Funcionarios/adicionarFuncionario';

const AdicionarFuncionario: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await adicionarFuncionario(Number(id), { nome, cargo, email, telefone });
        navigate(`/departamentos/${id}/funcionarios`);
      }
    } catch (error) {
      console.error('Erro ao adicionar funcionário', error);
    }
  };

  return (
    <div className="p-6 bg-gray-950 shadow-lg rounded-lg w-full max-w-4xl">
      <h1 className="text-3xl font-semibold mb-6 text-black-900">Adicionar Funcionário</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </label>
        <label>
          Cargo:
          <input type="text" value={cargo} onChange={(e) => setCargo(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Telefone:
          <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </label>
        <button type="submit">Adicionar Funcionário</button>
      </form>
    </div>
  );
};

export default AdicionarFuncionario;
