// src/services/apiService.js
import partners from '../db/partners'; // Ajusta la ruta si es necesario
import intro from   '../db/intro';
import services from '../db/services';
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

  }
  

  // Agrega aquí más métodos para otras peticiones
};

export default apiService;
