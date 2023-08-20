import React, { useEffect, useState } from 'react';
import '../assets/styles/WeOffer.css'; // Asegúrate de usar el archivo correcto aquí
import apiService from '../services/apiService'; // Ajusta la ruta si es necesario

function HomeServiceOffered() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Simulamos la obtención de los datos de servicios ofrecidos desde el servicio
    apiService.getServicesOffered().then((data) => {
      setServices(data);
    });
  }, []);

  const firstGroup = services.slice(0, Math.ceil(services.length / 2));
  const secondGroup = services.slice(Math.ceil(services.length / 2));

  return (
    <section className="servicesOfferedContainer">
      <div className='mainServicesOffered'>
        <h2>What We Offer</h2>
      </div>

      <div className='servicesOffered'>
        <div className='service-column'>
          {firstGroup.map((service, index) => (
            <div className='serviceOffered-card' key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className='service-center'>
          <img src="ruta-de-la-imagen.jpg" alt="Center Image" />
        </div>
        <div className='service-column'>
          {secondGroup.map((service, index) => (
            <div className='serviceOffered-card' key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeServiceOffered;
