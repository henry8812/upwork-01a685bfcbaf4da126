import React, { useEffect, useState, useRef } from 'react';
import '../assets/styles/Testimonials.css'; // Asegúrate de usar el archivo correcto aquí
import apiService from '../services/apiService'; // Ajusta la ruta si es necesario

function HomeTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const wrapperRef = useRef(null); // Referencia al div que contiene los testimonios

  useEffect(() => {
    // Simulamos la obtención de los datos de testimonios desde el servicio
    apiService.getTestimonials().then((data) => {
      setTestimonials(data);
    });
  }, []);

  useEffect(() => {
    // Calculamos el ancho del testimonial-wrapper y lo aplicamos como altura del wrapper
    if (wrapperRef.current) {
      const testimonialWrapper = wrapperRef.current.querySelector('.testimonial-wrapper');
      if (testimonialWrapper) {
        const wrapperWidth = testimonialWrapper.offsetWidth;
        wrapperRef.current.style.height = `${wrapperWidth}px`;
      }
    }
  }, [testimonials]);

  const getRandomTestimonials = (count) => {
    const shuffled = testimonials.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomTestimonials = getRandomTestimonials(3); // Obtener 3 testimonios aleatorios

  return (
    <section className="testimonialsContainer">
      <div className='mainTestimonials'>
        <h2>Testimonials</h2>
        <p>What our Customers are Saying</p>
      </div>

      <div className='testimonials' ref={wrapperRef}>
        {randomTestimonials.map((testimonial, index) => (
          <div className='testimonial-wrapper' key={index}>
            <div className='testimonial-image'>
              <img src={testimonial.image} alt={`Testimonial ${index + 1}`} />
            </div>
            <div className='testimonial-card'>
              <h3>{testimonial.name}</h3>
              <p>{testimonial.company}</p>
              <p>{testimonial.testimony}</p>
              <div className='testimonial-rating'>
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i} className='star'>&#9733;</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeTestimonials;
