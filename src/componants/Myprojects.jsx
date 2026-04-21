import React, { useState ,useEffect} from 'react';
  import { motion } from "@motionone/react";
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
  "rgba(93, 64, 55, 0.8)",  // Tan / Muted Brown
  "rgba(121, 85, 72, 0.8)",   // Deep Coffee
  "rgb(92, 79, 74)", // Sand / Beige Brown
  "rgba(93, 64, 55, 0.8)",    // Dark Chocolate
  "rgba(210, 180, 140, 0.8)"  // Tan Light
];

  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


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
        
        <div className="split-title" data-aos="fade-right">
          <span className="small-number">03</span>
          <h2 className="main-title">
            {t('projects.titre_part1')} <br />
            <span className="accent-color">{t('projects.titre_part2')}</span>
          </h2>
        </div>

        <div className="projects-grid projects-grid-container">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
            >
              <div className="project-base-image">
                <img src={project.image} alt={project.name} />
              </div>

              <div 
                className="project-hover-overlay" 
                style={{ backgroundColor: hoverColors[index % hoverColors.length] }}
              >
                <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="hover-content">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description-short">{project.description.substring(0, 500)}...</p>
                  <div className="project-tags-hover">
                    {project.tags.slice(0, 10).map((tag, i) => (
                      <span key={i} className="mini-tag">{tag}</span>
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
            </div>
          ))}
        </div>

        {projects.length > 4 && (
          <div className="show-more-container" data-aos="zoom-in">
            <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
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
