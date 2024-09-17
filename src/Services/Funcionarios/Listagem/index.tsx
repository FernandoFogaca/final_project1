import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import listaFuncionarios from '../../../Services/Funcionarios/listaFuncionarios';
import { useParams } from 'react-router-dom';

const Funcionarios: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [funcionarios, setFuncionarios] = useState<any[]>([]);

  useEffect(() => {
    const fetchFuncionarios = async () => {
      if (id) {
        const data = await listaFuncionarios(Number(id));
        setFuncionarios(data);
      }
    };

    fetchFuncionarios();
  }, [id]);

  return (
    <div className="p-6 bg-gray-950 shadow-lg rounded-lg w-full max-w-4xl">
      <h1 className="text-3xl font-semibold mb-6 text-black-900">Funcionários do Departamento</h1>
      <DataTable value={funcionarios} paginator rows={10} className="datatable-custom">
        <Column field="nome" header="Nome" />
        <Column field="cargo" header="Cargo" />
        <Column field="email" header="Email" />
        <Column field="telefone" header="Telefone" />
      </DataTable>
    </div>
  );
};

export default Funcionarios;
