// src/Pages/Dashboard.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import exampleImage from '../assets/example-image.jpg'; // Certifique-se de ter uma imagem no diretório correto

// Configuração do gráfico
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
  datasets: [
    {
      label: 'Vendas',
      data: [50, 100, 75, 125, 150],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    tooltip: {
      callbacks: {
        label: function (context: any) {
          return `${context.dataset.label}: ${context.raw}`;
        },
      },
    },
  },
};

const Dashboard: React.FC = () => {
  return (
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
            to="/dashboard"
            className="text-white font-semibold hover:text-blue-600 transition-colors duration-300">
            Dashboard
          </Link>
        </nav>
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-800 p-10 rounded-lg shadow-2xl mt-16">
        <h2 className="text-3xl font-bold text-white mb-6">Dashboard</h2>
        <p className="text-white mb-6">
          Aqui você pode ver uma visão geral das métricas e informações importantes para a sua empresa.
        </p>
        <img
          src={exampleImage}
          alt="Dashboard Visual"
          className="w-full max-w-md object-cover rounded-lg shadow-lg mb-6"
        />
        <div className="w-full max-w-3xl">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
