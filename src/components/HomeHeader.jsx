import React from 'react';

import mockupImage from '../assets/images/mockup.png'; // Ajusta la ruta de la imagen si es necesario
import '../assets/styles/Header.css';

function Header() {


  return (
    <header className="header">
      <div className="header-content">
        <h1>Web Design And Development Company</h1>
        <p>We create clean and creative websites, that are professional and help you generate more visitors and revenue.</p>
        <button>Get Started</button>
      </div>
      <div className="header-image">
        <img src={mockupImage} alt="Mockup" className="header-background" />
      </div>
      
    </header>
    
  );
}

export default Header;
