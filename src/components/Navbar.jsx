// src/components/Navbar.jsx
import React from 'react';
import '../assets/styles/Navbar.css';
import imagenSvg from '../assets/images/logo.svg'; // Ajusta la ruta al archivo SVG

function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <img src={imagenSvg} alt="Logo" className="logo" />
      </div>
      <ul className="menu">
        <li><a href="http://google.com">Services</a></li>
        <li><a href="http://google.com">About Us</a></li>
        <li><a href="http://google.com">Portfolio</a></li>
        <li><a href="http://google.com">Jobs</a></li>
        
        
      </ul>
      <button>Contact Us</button>
      
    </nav>
    
  );
}

export default Navbar;
