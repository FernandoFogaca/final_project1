import { useParams } from 'react-router-dom';

const FormDepartamentos = () => {
  const { id } = useParams<{ id?: string }>();

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-950 shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">
        {id ? 'Editar Departamento' : 'Adicionar Departamento'}
      </h1>
      <form>
        <div className="mb-5">
          <label className="block text-white text-sm font-medium mb-2">Nome</label>
          <input
            type="text"
            placeholder="Nome do Departamento"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-5">
          <label className="block text-white  text-sm font-medium mb-2">Sigla</label>
          <input
            type="text"
            placeholder="Sigla do Departamento"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-gray-500 to-gray-900 text-white font-semibold text-lg rounded-lg shadow-md hover:from-gray-200 hover:to-gray-800 transition-all duration-300">
          {id ? 'Atualizar Departamento' : 'Adicionar Departamento'}
        </button>
      </form>
    </div>
  );
};

export default FormDepartamentos;
