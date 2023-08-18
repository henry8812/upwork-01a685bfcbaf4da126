// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar'; // Ajusta la ruta si es necesario
import Header from './components/Header';
import Trust from './components/Trust';
import GetStarted from './components/GetStarted';
import Services from './components/Services';

import './assets/styles/App.css'

function App() {
  return (
    <div>
      <Navbar />
      <div className="line"></div>
      <Header/>
      <Trust/>
      <div className="line"></div>
      <GetStarted />
      <Services/>
      

      
      {/* Otros componentes */}
    </div>
  );
}

export default App;
