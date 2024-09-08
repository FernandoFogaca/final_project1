import { Routes, Route, Link } from 'react-router-dom';
import Departamentos from '../Pages/Departamentos/Listagem';
import FormDepartamentos from '../Pages/Departamentos/Forms';
import image from '../image/image.jpg';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 relative overflow-hidden">
            <div className="fixed top-0 left-0 w-full bg-gray-900 shadow-md flex justify-between items-center py-4 px-6">
              <h1 className="text-2xl font-semibold text-white">Sistema de Gerenciamento</h1>
            </div>
            <div className="relative flex flex-col items-center justify-center z-10 mt-24 mb-16">
              <h1 className="text-4xl font-extrabold text-white bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
                Full Stack Developer - 2024
              </h1>
              <img
                src={image}
                alt="Welcome"
                className="w-[80%] max-w-[600px] object-cover rounded-xl shadow-2xl mb-6"
              />
              <Link
                to="/departamentos"
                className="px-12 py-4 bg-gradient-to-r from-gray-500 to-blue-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-green-600 hover:to-blue-700 transition-all duration-300">
                Welcome |  Bem-vindo | Bienvenido | Bienvenue | Welkom
              </Link>
            </div>
          </div>
        }
      />
      <Route
        path="/departamentos"
        element={
          <div className="flex flex-col min-h-screen bg-gray-100">
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
                  to="/departamentos/edit/:id"
                  className="text-white font-semibold hover:text-blue-600 transition-colors duration-300">
                  Editar
                </Link>
              </nav>
            </div>
            <div className="flex-grow flex items-center justify-center pt-16 px-4">
              <Departamentos />
            </div>
          </div>
        }
      />
      <Route
        path="/departamentos/new"
        element={
          <div className="flex flex-col min-h-screen bg-gray-100">
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
                  to="/departamentos/edit/:id"
                  className="text-white font-semibold hover:text-blue-600 transition-colors duration-300">
                  Editar
                </Link>
              </nav>
            </div>
            <div className="flex-grow flex items-center justify-center pt-16 px-4">
              <FormDepartamentos />
            </div>
          </div>
        }
      />
      <Route
        path="/departamentos/edit/:id"
        element={
          <div className="flex flex-col min-h-screen bg-gray-100">
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
                  to="/departamentos/edit/:id"
                  className="text-white font-semibold hover:text-blue-600 transition-colors duration-300">
                  Editar
                </Link>
              </nav>
            </div>
            <div className="flex-grow flex items-center justify-center pt-16 px-4">
              <FormDepartamentos />
            </div>
          </div>
        }
      />
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
                  to="/departamentos/edit/:id"
                  className="text-white font-semibold hover:text-blue-600 transition-colors duration-300">
                  Editar
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
