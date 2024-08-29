import { Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="flex justify-center items-center h-1/2 mt-[76px]">
            <h1 className="text-2xl font-bold">Home</h1>
          </div>
        }
      />
      <Route
        path="/departamentos"
        element={
          <div className="flex justify-center items-center h-1/2 mt-[76px]">
            <h1 className="text-2xl font-bold">Departamentos</h1>
          </div>
        }
      />
      <Route
        path="/departamentos/new"
        element={
          <div className="flex justify-center items-center h-1/2 mt-[76px]">
            <h1 className="text-2xl font-bold">Novo Departamento</h1>
          </div>
        }
      />
      <Route
        path="/departamentos/edit/:id"
        element={
          <div className="flex justify-center items-center h-1/2 mt-[76px]">
            <h1 className="text-2xl font-bold">Editar Departamento</h1>
          </div>
        }
      />
      <Route
        path="*"
        element={
          <div className="flex justify-center items-center h-1/2 mt-[76px]">
            <h1 className="text-2xl font-bold">404 - Not Found</h1>
          </div>
        }
      />
    </Routes>
  );
};

export default AppRoutes;