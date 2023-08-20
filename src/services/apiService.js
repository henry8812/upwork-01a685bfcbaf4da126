// src/services/apiService.js
import partners from '../db/partners'; // Ajusta la ruta si es necesario
import intro from   '../db/intro';
import services from '../db/services';
import statistics from '../db/statistics';
import jobs from '../db/jobs'
import testimonials from '../db/testimonials';
import servicesOffered from '../db/servicesOffered'

const apiService = {
  getTrustLogos: () => {
    // Simulamos la obtención de los datos de logotipos de confianza desde el archivo mockData
    return new Promise((resolve) => {
      resolve(partners);
    });
    
  },
  getStarted : () => {
    return new Promise( (resolve) => {
        console.log("intro")
        console.log(intro)
        resolve(intro)
    })

  },
  getServices : () => {
    
    return new Promise( (resolve) => {
        console.log("services")
        console.log(services)
        resolve(services)
    })

  },
  getStatistics : () => {
    return new Promise( (resolve) => {
        resolve(statistics)
    })
  },
  getJobs : () => {
    return new Promise( (resolve) => {
      resolve(jobs)
    })
  },
  getTestimonials : () => {
    return new Promise( (resolve) => {
      resolve(testimonials)
    })
  },
  getServicesOffered:()=>{
    return new Promise( (resolve) => {
      resolve(servicesOffered)
    }) 

  }
  

  // Agrega aquí más métodos para otras peticiones
};

export default apiService;
