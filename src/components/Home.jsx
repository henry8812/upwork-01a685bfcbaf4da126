import React from 'react';
import HomeHeader from './HomeHeader'; // Ajusta la ruta si es necesario
import HomeServices from './HomeServices';
import HomeStatistics from './HomeStatistics';
import HomeTrust from './HomeTrust';
import GetStarted from './HomeGetStarted'
import HomeOurWork from './HomeOurWork';
import HomeTestimonials from './HomeTestimonials';
import HomeServiceOffered from './HomeServiceOffered';
import '../assets/styles/Home.css'; // Ajusta la ruta si es necesario

function Home() {
  return (
    <div className="homeContainer">
      <HomeHeader />
      <HomeTrust />
      <GetStarted />
      <HomeServices />
      <HomeOurWork/>
      <HomeTestimonials />
      <HomeStatistics />
      <HomeServiceOffered />
      
      {/* Otros componentes específicos de la página Home */}
    </div>
  );
}

export default Home;
