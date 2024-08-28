import { Button } from 'primereact/button';
import './App.css';

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
          severity='danger'
        />
      </div>
    </div>
  );
}

export default App;
