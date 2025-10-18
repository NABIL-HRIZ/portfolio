import React, { useState } from 'react';
import '../styles/MyProjects.css';
import eventify from '../assets/eventify.png'
import secure from '../assets/secure.png'
import movie from '../assets/movie-scope.png'
import food from '../assets/food.png'
import educaty from '../assets/educaty.png'
import booking from '../assets/booking.png'


const MyProjects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      name: "EVENTIFY - GESTION DES EVENEMENTS ",
      description: "Développeur Full Stack  - Réalisation d'une application web en Laravel (API REST, validation, cache, tests,intégration Stripe et webhook) et React.js (interface dynamique, gestion des états, formulaires validés). Conception, intégration et communication client–serveur complètes avec paiement en ligne sécurisé.",
      tags: ["Laravel" , "React ", "Bootsrap" , "Mysql" , "Stripe" , "Webhook", "Mailhog" ,  "Gsap"  ],
      image:eventify,
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      name: "SECUREBOARD – GESTION DES TACHES ",
      description: "Développeur Full Stack (Laravel + React) – Création d'une application de gestion de projets avec authentification, rôles & permissions, notifications temps réel (Pusher), emails asynchrones et documentation API (Swagger).",
      tags: ["Laravel", "React", "Orm" , "ChartJs" , "Pusher"  , "MailTrap" ,""],
      image:secure, 
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      name: "FOODIEAPP – COMMANDE EN LIGNE",
      description: "Développeur Front-End React – Développement d'une application web avec React et Redux  pour la gestion d'état, consommation d'une API externe, mise à jour du panier en temps réel, gestion des erreurs et optimisation des performances. Interface réactive et responsive.",
      tags: ["React","Tailwind","React Bits", "Gsap" ,"ThreeJs" , " Aos" ,  "Api"],
      image:food, 
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 4,
      name: "MovieScope",
      description: "Une application web moderne permettant de découvrir et explorer films et séries selon vos préférences, avec une interface épurée, des fonctionnalités interactives et une vidéo d'introduction immersive.",
      tags: ["React", "React Router DOM", "AOS (Animate On Scroll)", "API"],
      image:movie, 
      demoLink: "#",
      codeLink: "#"
    },
     {
      id: 5,
      name: "Sky 365",
      description: "Un site web pour le booking en ligne des hotels moderne et responsive .",
      tags: ["Figma","React", "Uiverse", "Materiel Ui"],
      image:booking, 
      demoLink: "#",
      codeLink: "#"
    },

     {
      id: 5,
      name: "Educaty",
      description:"Plateforme d’apprentissage innovante qui révolutionne la manière dont les étudiants accèdent aux ressources éducatives en ligne. ",
      tags: ["Figma","React", "WebLeb ", "Dribble Inspiration"],
      image:educaty, 
      demoLink: "#",
      codeLink: "#"
    },

    {
      id: 6,
      name: "BodyStore",
      description: "Notre site e-commerce propose une sélection variée de produits supplémentaires pour répondre à tous les besoins de nos clients.",
      tags: ["React", "BOOTSRAP", "EMAILJS", "SwaperJs"],
      image: "/images/hellopeter.jpg",
      demoLink: "#",
      codeLink: "#"
    },
      {
      id:7,
      name: "DARIShop",
      description: "Plateforme eCommerce dédiée à l'univers de la maison. Parcourez notre sélection variée de produits soigneusement sélectionnés pour embellir et optimiser votre espace de vie",
      tags: ["Lravel", "Blade", "Mysql", "Html" , "Css" , "Tailwind"],
      image: "/images/hellopeter.jpg", 
      demoLink: "#",
      codeLink: "#"
    },
      {
      id:8,
      name: "Pizza Dyalna ",
      description: "Plongez dans un monde de saveurs délicieuses où chaque bouchée est une explosion de goût.. Un site Web",
      tags: ["Lravel", "Blade", "Mysql", "Html" , "Css" , "Tailwind"],
      image: "/images/hellopeter.jpg", 
      demoLink: "#",
      codeLink: "#"
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="projects-section" id='projects-section'>
      <div className="projects-container">
        <h2 className="projects-title">
          Projets Récents Et  <span className="highlight">Réalisations</span>
          
        </h2>
        
        <div className="projects-grid">
          {displayedProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.name} />
                <div className="image-overlay"></div>
              </div>
              
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="project-buttons">
                  <a href={project.demoLink} className="btn btn-demo">
                    Live Demo
                  </a>
                  <a href={project.codeLink} className="btn btn-code">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
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