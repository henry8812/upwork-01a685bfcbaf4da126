import React, { useEffect, useState } from 'react';
import '../assets/styles/Services.css'; // Asegúrate de usar el archivo correcto aquí
import apiService from '../services/apiService'; // Ajusta la ruta si es necesario

function Services() {
  const [services, setServices] = useState([]);
  
  useEffect(() => {
    // Simulamos la obtención de los datos de servicios desde el servicio
    apiService.getServices().then((data) => {
      setServices(data);
    });
  }, []);

  return (
    <section className="servicesContainer"> {/* Actualiza la clase según tu CSS */}
      <div className='main'>
        <h2>Our Services</h2>
        <p>We offer professional web design services at affordable rates to help your business attract more visitors and keep them on your site!</p>
      </div>

      <div className='services'>
        {services && services.map((service, index) => (
          <div className='service-card' key={index}>
            <img src={service.icon} alt={`Service Icon ${index + 1}`} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={service.url}>Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
