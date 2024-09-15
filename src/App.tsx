import { BrowserRouter, Link } from "react-router-dom";
import AppRoutes from "./Routes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* Barra superior fixa em azul escuro */}
      <div className="fixed top-0 left-0 w-full bg-blue-950 shadow-md flex justify-center items-center py-4">
        <div className="flex justify-between items-center w-full max-w-[1280px] px-6">
          <h1 className="text-2xl font-semibold text-white">
            Sistema de Gerenciamento
          </h1>
          {/* Links de Navegação */}
          <nav className="flex space-x-6">
            <Link
              to="/"
              className="text-white hover:text-blue-300 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/departamentos"
              className="text-white hover:text-blue-300 transition-colors duration-300"
            >
              Departamentos
            </Link>
            <Link
              to="/departamentos/new"
              className="text-white hover:text-blue-300 transition-colors duration-300"
            >
              Adicionar
            </Link>
          </nav>
        </div>
      </div>

      {/* Conteúdo abaixo da barra superior */}
      <div className="pt-20 min-h-screen bg-gray-100">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
