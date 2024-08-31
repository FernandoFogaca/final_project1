import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const Departamentos = () => {
  // Lista de departamentos
  const departamentos = [
    {
      id_departamento: 1,
      nome: 'Recursos Humanos',
      sigla: 'RH'
    },
    {
      id_departamento: 2,
      nome: 'Tecnologia da Informação',
      sigla: 'TI'
    },
  ];

  // Função para renderizar as ações
  const bodyAcao = () => {
    return (
      <>
        <Button icon="pi pi-pencil" rounded severity="warning" className="mr-2" />
        <Button icon="pi pi-trash" rounded severity="danger" />
      </>
    );
  };

  return (
    <>
      <div className="col-span-12 p-4">
        <h1 className="text-2xl font-bold mb-4">Listagem de Departamentos</h1>
      </div>

      <div className="col-span-12 p-4">
        <DataTable value={departamentos} paginator rows={10} className="datatable-custom">
          <Column field="sigla" header="Sigla" />
          <Column field="nome" header="Nome" />
          <Column header="Ação" body={bodyAcao} />
        </DataTable>
      </div>
    </>
  );
};

export default Departamentos;
