import React, { useState } from 'react';
  import { motion } from "@motionone/react";
import { useTranslation } from 'react-i18next';

import '../styles/Myprojects.css';


import eventify from '../assets/eventify.jpg'
import secure from '../assets/secure.jpg'
import movie from '../assets/movie-scope.jpg'
import food from '../assets/food.jpg'
import educaty from '../assets/educaty.jpg'
import booking from '../assets/booking.png'
import pizza from '../assets/pizza.jpg'
import dari from '../assets/dari.jpg'
import jardinage from '../assets/jardinage.jpg'
import honey from '../assets/honey.jpg'
import weather from '../assets/weather.png'
import fanzone from '../assets/fanzone.jpg'
import paws from '../assets/paws.png'
const MyProjects = () => {
  const [showAll, setShowAll] = useState(false);

const hoverColors = [
  "rgba(139, 94, 60, 0.8)",   // Brown (Cinnamon) - دافئ وقوي
  "rgb(194, 166, 140)",  // Tan / Muted Brown
  "rgba(121, 85, 72, 0.8)",   // Deep Coffee
  "rgb(92, 79, 74)", // Sand / Beige Brown
  "rgba(93, 64, 55, 0.8)",    // Dark Chocolate
  "rgba(210, 180, 140, 0.8)"  // Tan Light
];

  const { t } = useTranslation();

  const translations = t('projects.list', { returnObjects: true }) || [];

  const imageMap = {
    1: paws,
    2: fanzone,
    3: eventify,
    4: food,
    5: secure,
    6: movie,
    7: weather,
    8: booking,
    9: educaty,
    10: jardinage,
    11: honey,
    12: dari,
    13: pizza
  };

  const projects = translations.map((p) => ({
    ...p,
    image: imageMap[p.id] || null,
    demoLink: p.demoLink || '#',
    codeLink: p.codeLink || '#'
  }));

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="projects-section" id='projects-section'>
      <div className="projects-container">
        
         

    <div className="projects-grid">
        {displayedProjects.map((project, index) => (
        <motion.div
      key={project.id}
      className={`project-card ${index % 2 === 0 ? 'slide-from-left' : 'slide-from-right'}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
            <div className="project-base-image">
              <img src={project.image} alt={project.name} />
            </div>

            <div 
              className="project-hover-overlay" 
              style={{ backgroundColor: hoverColors[index % hoverColors.length] }}
            >
              <div className="project-number">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              <div className="hover-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description-short">{project.description.substring(0, 1000)}...</p>
             <div className="project-tags-hover">
  {project.tags.slice(0, 15).map((tag, i) => (
    <motion.span 
      key={i} 
      className="mini-tag"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 + (i * 0.1), duration: 0.4 }}
    >
      {tag}
    </motion.span>
  ))}
</div>
              
            
             <div className="project-buttons">

<a href={project.codeLink} alt="Code source" className='buttonn'>
  <i>C</i>
  <i>o</i>
  <i>d</i>
  <i>e</i>
  <i>&nbsp;</i>
  
  <i>s</i>
  <i>o</i>
  <i>u</i>
  <i>r</i>
  <i>c</i>
  <i>e</i>

</a>

                  
                  {/* <a href={project.codeLink} className="btn btn-code">
                    Code source
                  </a> */}
                </div>
            

              </div>
            </div>
          </motion.div>
        ))}
      </div>

        {projects.length > 4 && (
          <div className="show-more-container">
            <button
              className="show-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? t('projects.showLess') : t('projects.showMore')} 
               <span className="btn-arrow">{showAll ? '↑' : '↓'}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyProjects;
