import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Importa el componente Home
import './assets/styles/App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="line"></div>
      <Home /> {/* Llama al componente Home */}
      {/* Otros componentes */}
    </div>
  );
}

export default App;
