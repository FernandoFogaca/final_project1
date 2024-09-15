import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import listaDepartamentos from '../../../Services/Departamentos/listaDepartamentos';

const Departamentos = () => {
  const navigate = useNavigate();

  // Lista de departamentos
  const [departamentos, setDepartamentos] = useState<any[]>([]);

  useEffect(() => {
    listaDepartamentos({ setDepartamentos });
  }, []);

  // Função para renderizar as ações
  const bodyAcao = (rowData: any) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          rounded
          className="mr-2 bg-yellow-500 text-white hover:bg-yellow-600"
          onClick={() => navigate(`/departamentos/edit/${rowData.id_departamento}`)} // Corrigi a interpolação aqui
        />
        <Button
          icon="pi pi-trash"
          rounded
          className="bg-red-500 text-white hover:bg-red-600"
          onClick={() => handleDelete(rowData.id_departamento)}
        />
      </>
    );
  };

  // Função para excluir um departamento
  const handleDelete = (id: number) => {
    // Implemente a lógica de exclusão aqui
    alert(`Departamento com ID ${id} excluído`); // Corrigi a interpolação aqui
  };

  return (
    <div className="p-6 bg-gray-950 shadow-lg rounded-lg w-full max-w-4xl">
      <h1 className="text-3xl font-semibold mb-6 text-black-900">Listagem de Departamentos</h1>
      <DataTable value={departamentos} paginator rows={10} className="datatable-custom">
        <Column field="sigla" header="Sigla" />
        <Column field="nome" header="Nome" />
        <Column header="Ação" body={bodyAcao} />
      </DataTable>
    </div>
  );
};

export default Departamentos;
