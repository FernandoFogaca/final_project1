import { BrowserRouter, Link } from "react-router-dom";
import AppRoutes from "./Routes"; // Caminho correto para o arquivo de rotas
import "./App.css";

function App() {
  return (
    <div className="fixed top-0 left-0 w-full bg-black bg-opacity-50 flex justify-center items-center py-2">
      {/* Barra superior */}
      <div className="flex flex-col items-center space-y-4">
        <h1 className="bg-orange-400 p-2 font-bold text-white border-solid border-black border-2">
          Full Stack Developer - React + TypeScript
        </h1>
        {/* Rotas da aplicação */}
        <BrowserRouter>
          {/* Links de Navegação */}
          <nav className="p-4 flex space-x-4">
            <Link
              to="/"
              className="bg-orange-400 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-800 transition-all duration-300">Home</Link>
            <Link to="/departamentos" className="bg-orange-400 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-800  transition-all duration-300">Lista </Link>
            <Link to="/departamentos/new"className="bg-orange-400 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-800  transition-all duration-300">Adicionar </Link>
          </nav>
          <div className="w-full max-w-[calc(100vw-16px)] md:max-w-[1280px] mx-auto mt-6">
            <AppRoutes />
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
