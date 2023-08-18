import React, { useEffect, useState } from 'react';
import '../assets/styles/Statistics.css'; // Asegúrate de usar el archivo correcto aquí
import apiService from '../services/apiService'; // Ajusta la ruta si es necesario

function Statistics() {
  const [stats, setStats] = useState([]);
  
  useEffect(() => {
    // Simulamos la obtención de los datos de estadísticas desde el servicio
    apiService.getStatistics().then((data) => {
      setStats(data);
    });
  }, []);

  return (
    <div>
    <section className="statsContainer"> {/* Actualiza la clase según tu CSS */}
      <div className='main'>
        <h2>Intelligent Websites That Work Overtime For Marketing Results</h2>
      </div>
      </section>

      <div className='statsValues'>
        {stats && stats.map((stat, index) => (
          <div className='stat-item' key={index}>
            <span className='value'>{stat.value}</span>
            <br />
            <span className='label'>{stat.label}</span>
          </div>
        ))}
      </div>
      </div>
    
  );
}

export default Statistics;
