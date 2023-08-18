import React, { useEffect, useState } from 'react';
import '../assets/styles/Trust.css';
import apiService from '../services/apiService'; // Ajusta la ruta si es necesario

function Trust() {
  const [trustLogos, setTrustLogos] = useState([]);

  useEffect(() => {
    // Simulamos la obtención de los datos de logotipos de confianza desde el servicio
    apiService.getTrustLogos().then((logos) => {
      setTrustLogos(logos);
    });
  }, []);

  return (
    <section className="trust">
      <div className="trust-logos">
        {trustLogos.map((logo, index) => (
          <img className='partnerLogo' src={logo} alt={`Logo ${index + 1}`} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Trust;
