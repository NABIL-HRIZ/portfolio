import React, { useState } from 'react';
        import { motion } from "@motionone/react";

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

const MyProjects = () => {
  const [showAll, setShowAll] = useState(false);

const hoverColors = [
  "rgba(255, 77, 77, 0.75)",  
  "rgba(255, 179, 71, 0.75)",  
  "rgba(77, 148, 255, 0.75)",  
   "rgba(74, 182, 119, 0.75)", 
  "rgba(161, 77, 255, 0.75)",  
  "rgba(255, 77, 136, 0.75)"   
];

  const projects = [
    {
      id: 1,
      name: "FANZONE - DIGITALISATION DES FAN ZONES (CAN 2025)",
      description: "Conception et réalisation d'une plateforme web avancée Full-Stack (React.js/Laravel) pour la gestion digitalisée (réservation, e-tickets QR Code, scan, intégration Stripe et webhooks, statistiques) des 10+ Fan Zones. Projet conteneurisé avec Docker et optimisé par des pipelines de CI/CD",
      tags: ["Laravel" , "React", "Redux", "Mysql" , "PDF Simple" , "Scan QR" ,"Swagger" , "Stripe", "Mailhog" , "AOS Animation"],
      image: fanzone,
      demoLink: "#",
      codeLink: "https://github.com/NABIL-HRIZ/fanzone-frontend.git"
    },
    {
      id: 2,
      name: "EVENTIFY - GESTION DES EVENEMENTS",
      description: "Développeur Full Stack - Réalisation d'une application web en Laravel (API REST, validation, cache, tests, intégration Stripe et webhook) et React.js (interface dynamique, gestion des états, formulaires validés). Conception, intégration et communication client–serveur complètes avec paiement en ligne sécurisé.",
      tags: ["Laravel" , "React", "Redux","Bootstrap" , "Mysql" , "Stripe" , "Webhook", "Mailhog" ,  "Gsap"],
      image: eventify,
      demoLink: "#",
      codeLink: "https://github.com/NABIL-HRIZ/Eventify.git"
    },
    {
      id: 3,
      name: "SECUREBOARD – GESTION DES TACHES",
      description: "Développeur Full Stack (Laravel + React) – Création d'une application de gestion de projets avec authentification, rôles & permissions, notifications temps réel (Pusher), emails asynchrones et documentation API (Swagger).",
      tags: ["Laravel", "React","SweetAlert","ReChartJs" , "Pusher" ,"EchoJs","MailTrap"],
      image: secure, 
      demoLink: "#",
      codeLink:'https://github.com/NABIL-HRIZ/SecureBoard.git'
    },
    {
      id: 4,
      name: "FOODIEAPP – COMMANDE EN LIGNE",
      description: "Développeur Front-End React – Développement d'une application web avec React et Redux pour la gestion d'état, consommation d'une API externe, mise à jour du panier en temps réel, gestion des erreurs et optimisation des performances. Interface réactive et responsive.",
      tags: ["React","Redux","Tailwind","EmailJs","React Bits", "Gsap" ,"AtroposJs" , "Aos" ,  "Rest Api"],
      image: food, 
      demoLink: "#",
      codeLink: "https://github.com/NABIL-HRIZ/FoodlyApp.git"
    },
    {
      id: 5,
      name: "MOVIESCOPE",
      description: "Une application web moderne permettant de découvrir et explorer films et séries selon vos préférences, avec une interface épurée, des fonctionnalités interactives et une vidéo d'introduction immersive.",
      tags: ["React", "SwiperJs","Uiverse" ,"AOS (Animate On Scroll)", "Rest Api"],
      image: movie, 
      demoLink: "#",
      codeLink: "https://github.com/NABIL-HRIZ/-MovieScope.git"
    },
    {
      id: 6,
      name: "HITRADIO_WEATHER",
      description: "HitRadio, une station de radio dynamique et populaire, souhaite enrichir l'expérience de ses auditeurs en intégrant des fonctionnalités météorologiques avancées sur leur site web officiel",
      tags: ["React","Splite 3D ", "Gsap", "Rest Api"],
      image: weather, 
      demoLink: "https://nabil-hriz.github.io/HitRadio-Weather/",
      codeLink: "https://github.com/NABIL-HRIZ/HitRadio-Weather.git"
    },
    {
      id: 7,
      name: "Sky 365",
      description: "Un site web pour le booking en ligne des hotels moderne et responsive.",
      tags: ["Figma","React", "Uiverse", "Material UI"],
      image: booking, 
      demoLink: "#",
      codeLink: "https://github.com/NABIL-HRIZ/Sky365.git"
    },
    {
      id: 8,
      name: "Educaty",
      description:"Plateforme d’apprentissage innovante qui révolutionne la manière dont les étudiants accèdent aux ressources éducatives en ligne.",
      tags: ["Figma","React","Bootstrap","WebLeb", "Dribble Inspiration"],
      image: educaty, 
      demoLink: "#",
      codeLink: "https://github.com/NABIL-HRIZ/Educaty-app.git"
    },
    {
      id: 9,
      name: "SERVICE_JARDINAGE",
      description: "Notre site propose une gamme complète de services professionnels pour prendre soin de votre jardin et de votre espace extérieur, demander un devis en ligne",
      tags: ["React", "Bootstrap", "EmailJS", "SwiperJs"],
      image: jardinage,
      demoLink: "#",
      codeLink: "https://github.com/NABIL-HRIZ/ServiceJardinage.git"
    },
    {
      id: 10,
      name: "HONEY WEB",
      description: "Notre site propose une sélection variée de miels artisanaux provenant de sources locales et durables. Que vous recherchiez du miel cru, du miel biologique ou des variétés spéciales comme le miel de lavande ou de trèfle",
      tags: ["React", "Bootstrap", "EmailJS"],
      image: honey,
      demoLink: "#",
      codeLink: "https://github.com/NABIL-HRIZ/Honey.git"
    },
    {
      id:11,
      name: "DARIShop",
      description: "Plateforme eCommerce dédiée à l'univers de la maison. Parcourez notre sélection variée de produits soigneusement sélectionnés pour embellir et optimiser votre espace de vie",
      tags: ["Laravel", "Blade", "Mysql", "HTML", "CSS", "JS" ,"Tailwind"],
      image: dari, 
      demoLink: "#",
      codeLink: "https://github.com/NABIL-HRIZ/Dari_shop.git"
    },
    {
      id:12,
      name: "Pizza Dyalna",
      description: "Plongez dans un monde de saveurs délicieuses où chaque bouchée est une explosion de goût.. Un site Web",
      tags: ["Laravel", "Blade", "Mysql", "HTML", "CSS" ,"JS", "Tailwind"],
      image: pizza,
      demoLink: "#",
      codeLink: "https://github.com/NABIL-HRIZ/PizzaDyalna.git"
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

   return (
    <section className="projects-section" id='projects-section'>
      <div className="projects-container">
        
          <div className="header-designer-container">
                <motion.h2
                  className="projects-title-large"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, easing: "ease-out" }}
                >
                  <span className="line-one">Projets Récents & </span>
                  <span className="line-two highlight-large">Réalisations</span>
                </motion.h2>
              </div>

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
                <p className="project-description-short">{project.description.substring(0, 800)}...</p>
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
              {showAll ? 'Afficher moins' : 'Afficher plus'} 
               <span className="btn-arrow">{showAll ? '↑' : '↓'}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyProjects;
