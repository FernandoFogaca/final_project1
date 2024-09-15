import { Routes, Route, Link } from 'react-router-dom';
import Departamentos from '../Pages/Departamentos/Listagem';
import FormDepartamentos from '../Pages/Departamentos/Forms';
import image from '../image/image.jpg';
import Calendario from './calendario'; // Importa o componente Calendario

const AppRoutes = () => {
  return (
    <Routes>
      {/* Página principal / */}
      <Route
        path="/"
        element={
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 relative overflow-hidden">
            <div className="fixed top-0 left-0 w-full bg-gray-900 shadow-md flex justify-between items-center py-4 px-6">
              <h1 className="text-2xl font-semibold text-white">Sistema de Gerenciamento</h1>
            </div>
            <div className="relative flex flex-col items-center justify-center z-10 mt-24 mb-16">
              <h1 className="text-6xl font-extrabold text-white bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-6 text-center">
                Full Stack Developer
              </h1>
              <img
                src={image}
                alt="Welcome"
                className="w-[85%] max-w-[780px] object-cover rounded-xl shadow-2xl mb-6"
              />
              <Link
                to="/departamentos"
                className="px-12 py-4 bg-gradient-to-r from-gray-500 to-blue-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-green-600 hover:to-blue-700 transition-all text-center">
                Welcome |  Bem-vindo | Bienvenido | Bienvenue | Welkom
              </Link>
            </div>
          </div>
        }
      />

      {/* Página de Departamentos */}
      <Route
        path="/departamentos"
        element={
          <div className="flex flex-col min-h-screen bg-gray-900 items-center justify-center p-6">
            <div className="fixed top-0 left-0 w-full bg-gray-900 shadow-md flex justify-between items-center py-4 px-6">
              <h1 className="text-2xl font-semibold text-white">Sistema de Gerenciamento</h1>
              <nav className="flex space-x-6">
                <Link
                  to="/"
                  className="text-white hover:text-blue-300 transition-colors duration-300">
                  Home
                </Link>
                <Link
                  to="/departamentos"
                  className="text-white font-semibold hover:text-blue-600 transition-colors duration-300">
                  Departamentos
                </Link>
                <Link
                  to="/departamentos/new"
                  className="text-white font-semibold hover:text-blue-600 transition-colors duration-300">
                  Adicionar
                </Link>
                <Link
                  to="/calendario"
                  className="text-white font-semibold hover:text-blue-600 transition-colors duration-300">
                  Calendário
                </Link>
              </nav>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-800 p-10 rounded-lg shadow-2xl mt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Listagem de Departamentos</h2>
              <Departamentos />
            </div>
          </div>
        }
      />

      {/* Página de Adicionar Novo Departamento */}
      <Route
        path="/departamentos/new"
        element={
          <div className="flex flex-col min-h-screen bg-gray-900 items-center justify-center p-6">
            <div className="fixed top-0 left-0 w-full bg-gray-900 shadow-md flex justify-between items-center py-4 px-6">
              <h1 className="text-2xl font-semibold text-white">Sistema de Gerenciamento</h1>
              <nav className="flex space-x-6">
                <Link
                  to="/"
                  className="text-white hover:text-blue-300 transition-colors duration-300">
                  Home
                </Link>
                <Link
                  to="/departamentos"
                  className="text-white font-semibold hover:text-blue-600 transition-colors duration-300">
                  Lista
                </Link>
                <Link
                  to="/departamentos/new"
                  className="text-white font-semibold hover:text-blue-600 transition-colors duration-300">
                  Adicionar
                </Link>
                <Link
                  to="/calendario"
                  className="text-white font-semibold hover:text-blue-600 transition-colors duration-300">
                  Calendário
                </Link>
              </nav>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-800 p-10 rounded-lg shadow-2xl mt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Adicionar Novo Departamento</h2>
              <div className="w-full max-w-lg">
                <FormDepartamentos />
              </div>
            </div>
          </div>
        }
      />

      {/* Página de Editar Departamento */}
      <Route
        path="/departamentos/edit/:id"
        element={
          <div className="flex flex-col min-h-screen bg-gray-900 items-center justify-center p-6">
            <div className="fixed top-0 left-0 w-full bg-gray-900 shadow-md flex justify-between items-center py-4 px-6">
              <h1 className="text-2xl font-semibold text-white">Sistema de Gerenciamento</h1>
              <nav className="flex space-x-6">
                <Link
                  to="/"
                  className="text-white hover:text-blue-300 transition-colors duration-300">
                  Home
                </Link>
                <Link
                  to="/departamentos"
                  className="text-white font-semibold hover:text-blue-600 transition-colors duration-300">
                  Lista
                </Link>
                <Link
                  to="/departamentos/new"
                  className="text-white font-semibold hover:text-blue-600 transition-colors duration-300">
                  Adicionar
                </Link>
                <Link
                  to="/calendario"
                  className="text-white font-semibold hover:text-blue-600 transition-colors duration-300">
                  Calendário
                </Link>
              </nav>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-800 p-10 rounded-lg shadow-2xl mt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Editar Departamento</h2>
              <div className="w-full max-w-lg">
                <FormDepartamentos />
              </div>
            </div>
          </div>
        }
      />

      {/* Página 404 */}
      <Route
        path="*"
        element={
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="fixed top-0 left-0 w-full bg-gray-900 shadow-md flex justify-between items-center py-4 px-6">
              <h1 className="text-2xl font-semibold text-white">Sistema de Gerenciamento</h1>
              <nav className="flex space-x-6">
                <Link
                  to="/"
                  className="text-white hover:text-blue-300 transition-colors duration-300">
                  Home
                </Link>
                <Link
                  to="/departamentos"
                  className="text-white font-semibold hover:text-blue-600 transition-colors duration-300">
                  Lista
                </Link>
                <Link
                  to="/departamentos/new"
                  className="text-white font-semibold hover:text-blue-600 transition-colors duration-300">
                  Adicionar
                </Link>
                <Link
                  to="/calendario"
                  className="text-white font-semibold hover:text-blue-600 transition-colors duration-300">
                  Calendário
                </Link>
              </nav>
            </div>
            <div className="flex-grow flex items-center justify-center pt-16 px-4">
              <h1 className="text-2xl font-bold text-red-600">404 - Página não encontrada</h1>
            </div>
          </div>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
