import { BrowserRouter, Link } from "react-router-dom";
import { Button } from "primereact/button";
import AppRoutes from "./Routes"; // Caminho correto para o arquivo de rotas
import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center h-screen font-sans">
      {/* Container centrado */}
      <div className="flex flex-col items-center space-y-4">
        <h1 className="bg-orange-400 p-2 font-bold text-white border-solid border-black border-2 hover:text-orange-800 transition-all duration-300">
          Full Stack Developer / Final Project
        </h1>
        
          

        <Button
          label="Bienvenue"
          icon="pi pi-heart-fill"
          severity="danger"
        />
        {/* Rotas da aplicação */}
        <BrowserRouter>
          {/* Links de Navegação */}
          <nav className="p-4">
            <Link className="p-2 hover:underline" to="/">Home</Link>
            <Link className="p-2 hover:underline" to="/departamentos">Departamentos</Link>
          </nav>
          <div className="w-full max-w-[calc(100vw-16px)] md:max-w-[1280px] mx-auto mt-6"></div>
          <div className="grid grid-cols-12 gap-1"></div>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;