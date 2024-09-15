import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Biblioteca de calendário
import 'react-calendar/dist/Calendar.css'; // CSS do calendário
import TimePicker from 'react-time-picker'; // Biblioteca para seleção de horário
import axios from 'axios';

// Tipo para a resposta da API de clima
interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
  }>;
  wind: {
    speed: number;
  };
}

const Calendario: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('10:00');
  const [commitment, setCommitment] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [city, setCity] = useState<string>('');

  // Função para buscar a previsão do tempo
  const fetchWeather = async (cityName: string) => {
    const apiKey = 'SUA_API_KEY'; // Insira aqui sua chave da API do OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
      const response = await axios.get<WeatherData>(url);
      setWeather(response.data);
    } catch (error) {
      console.error('Erro ao buscar previsão do tempo:', error);
      setWeather(null);
    }
  };

  // Função para lidar com o envio do formulário
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(`Compromisso: ${commitment} - Data: ${selectedDate.toDateString()} - Hora: ${selectedTime}`);
    // Aqui você pode adicionar lógica para salvar o compromisso, se necessário
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <h2 className="text-3xl font-bold text-white mb-6">Calendário de Agendamentos</h2>

      {/* Calendário */}
      <div className="mb-6">
        <Calendar
          onChange={(date) => setSelectedDate(date as Date)} // Corrigido para aceitar um valor de data
          value={selectedDate}
          className="shadow-lg rounded-lg bg-white p-4"
        />
      </div>

      {/* Selecionar horário */}
      <div className="mb-6">
        <label className="text-white mb-2 block">Escolha o horário:</label>
        <TimePicker
          onChange={(time) => {
            if (time !== null) {
              setSelectedTime(time as string); // Garantindo que o valor é do tipo string
            }
          }}
          value={selectedTime}
          className="shadow-lg rounded-lg p-2"
        />
      </div>

      {/* Input para compromisso */}
      <form onSubmit={handleFormSubmit} className="mb-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Digite o compromisso"
          value={commitment}
          onChange={(e) => setCommitment(e.target.value)}
          className="p-3 rounded-lg shadow-lg mb-4 w-full"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all">
          Agendar Compromisso
        </button>
      </form>

      {/* Input para previsão do tempo */}
      <div className="mb-6 w-full max-w-md">
        <label className="text-white mb-2 block">Digite a cidade para ver a previsão do tempo:</label>
        <input
          type="text"
          placeholder="Digite a cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-3 rounded-lg shadow-lg mb-4 w-full"
        />
        <button
          onClick={() => fetchWeather(city)}
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition-all">
          Ver Previsão do Tempo
        </button>
      </div>

      {/* Exibir previsão do tempo */}
      {weather && (
        <div className="text-white mt-6">
          <h3 className="text-xl font-semibold">Previsão do tempo em {weather.name}:</h3>
          <p>Temperatura: {weather.main.temp}°C</p>
          <p>Clima: {weather.weather[0].description}</p>
          <p>Umidade: {weather.main.humidity}%</p>
          <p>Vento: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Calendario;
