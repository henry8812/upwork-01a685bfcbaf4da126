import React, { useEffect, useState } from 'react';
import '../assets/styles/GetStarted.css';
import apiService from '../services/apiService'; // Ajusta la ruta si es necesario

function GetStarted() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Simulamos la obtención de los datos de inicio desde el servicio
    apiService.getStarted().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <section className="getStarted">
      <div className='main'>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>

      <div className='items'>
        {data.items && data.items.map((item) => (
          <div className='item' key={item.index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className='index'>{item.index}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GetStarted;
