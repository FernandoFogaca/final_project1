import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'primeicons/primeicons.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
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
                <h1 className="text-2xl font-bold">Not Found</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
);
