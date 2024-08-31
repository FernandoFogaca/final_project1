import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const FormDepartamentos: React.FC = () => {
  const [nome, setNome] = useState('');
  const [sigla, setSigla] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // Hook para navegação

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (nome && sigla) { 
    
      console.log('Nome:', nome, 'Sigla:', sigla);
      // fazer a chamada à API ou outra ação necessária

      // Redirecionar para a página após o envio
      navigate('/departamentos');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Adicionar Novo Departamento</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="p-float-label">
            <InputText
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className={`w-full ${submitted && !nome ? 'p-invalid' : ''}`}
            />
            <label htmlFor="nome">Nome</label>
          </div>
          {submitted && !nome && <small className="p-error block text-center">Nome é obrigatório.</small>}

          <div className="p-float-label">
            <InputText
              id="sigla"
              value={sigla}
              onChange={(e) => setSigla(e.target.value)}
              className={`w-full ${submitted && !sigla ? 'p-invalid' : ''}`}
            />
            <label htmlFor="sigla">Sigla</label>
          </div>
          {submitted && !sigla && <small className="p-error block text-center">Sigla é obrigatória.</small>}

          <div className="flex justify-between space-x-2 mt-6">
            <Button
              label="Salvar"
              icon="pi pi-check"
              className="w-1/2 bg-green-500 text-white border border-green-700 hover:bg-green-700 hover:border-green-800 transition-colors duration-300 cursor-pointer transform active:scale-105"
              type="submit"
            />
            <Button
              label="Cancelar"
              icon="pi pi-times"
              className="w-1/2 bg-red-500 text-white border border-red-700 hover:bg-red-700 hover:border-red-800 transition-colors duration-300 cursor-pointer transform active:scale-105"
              onClick={() => navigate('/departamentos')}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormDepartamentos;
