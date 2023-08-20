import React, { useEffect, useState } from 'react';
import '../assets/styles/OurWork.css';
import apiService from '../services/apiService';

function HomeOurWork() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    apiService.getJobs().then((data) => {
      // Shuffle the jobs array to get random images each time
      //const shuffledJobs = shuffleArray(data);
      const shuffledJobs = data
      setJobs(shuffledJobs.slice(0, 12)); // Display maximum of 12 random jobs
    });
  }, []);

  // Function to shuffle an array
  const shuffleArray = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  return (
    <section className="jobsContainer">
      <div className='mainJobs'>
        <h2>Our Work</h2>
        <p>A variety of creative capabilities under one roof</p>
      </div>

      <div className='jobs'>
        {jobs.map((job, index) => (
          <div className='job-card' key={index}>
            <img src={job.image} alt={`JOB ${index + 1}`} />
          </div>
        ))}
      </div>

      <button className='moreJobs'>View More Work</button>
      
    </section>
  );
}

export default HomeOurWork;
