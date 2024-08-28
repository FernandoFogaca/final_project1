
import { Button } from 'primereact/button';
import './App.css'

function App() {

  return (
    <>
    <div className="flex justify-start p-5 font-sans">
      <h1 className="bg-orange-400 p-2  flex-row font-bold text-white border-solid border-black border-2 hover:text-orange-800 transition-all duration-300">
        Full Stack Developer / Final Project
      </h1>
      <Button 
        label="Like"
        icon="pi pi-heart-fill"
        severity='danger'

      />
    </div>
    

    
  

    </>
  )
}

export default App
