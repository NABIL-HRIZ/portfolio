import React, { useState } from 'react';
import '../styles/MyProjects.css';
import eventify from '../assets/eventify.png'
import secure from '../assets/secure.png'
import movie from '../assets/movie-scope.png'
import food from '../assets/food.png'
import educaty from '../assets/educaty.png'
import booking from '../assets/booking.png'
import pizza from '../assets/pizza.png'
import dari from '../assets/dari.png'
import jardinage from '../assets/jardinage.png'
import honey from '../assets/honey.png'
import weather from '../assets/weather.png'




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
      codeLink: "https://github.com/NABIL-HRIZ/Eventify.git"
    },
    {
      id: 2,
      name: "SECUREBOARD – GESTION DES TACHES ",
      description: "Développeur Full Stack (Laravel + React) – Création d'une application de gestion de projets avec authentification, rôles & permissions, notifications temps réel (Pusher), emails asynchrones et documentation API (Swagger).",
      tags: ["Laravel", "React","SweetAlert","ChartJs" , "Pusher" , "MailTrap" ,""],
      image:secure, 
      demoLink: "#",
      codeLink:'https://github.com/NABIL-HRIZ/SecureBoard.git'
    },
    {
      id: 3,
      name: "FOODIEAPP – COMMANDE EN LIGNE",
      description: "Développeur Front-End React – Développement d'une application web avec React et Redux  pour la gestion d'état, consommation d'une API externe, mise à jour du panier en temps réel, gestion des erreurs et optimisation des performances. Interface réactive et responsive.",
      tags: ["React","Tailwind","React Bits", "Gsap" ,"ThreeJs" , " Aos" ,  "Api"],
      image:food, 
      demoLink: "#",
      codeLink: "https://github.com/NABIL-HRIZ/FoodlyApp.git"
    },
    {
      id: 4,
      name: "MOVIESCOPE",
      description: "Une application web moderne permettant de découvrir et explorer films et séries selon vos préférences, avec une interface épurée, des fonctionnalités interactives et une vidéo d'introduction immersive.",
      tags: ["React", "React Router DOM", "AOS (Animate On Scroll)", "API"],
      image:movie, 
      demoLink: "#",
      codeLink: "https://github.com/NABIL-HRIZ/-MovieScope.git"
    },
    {
      id: 4,
      name: "HITRADIO_WEATHER",
      description: "HitRadio, une station de radio dynamique et populaire, souhaite enrichir l'expérience de ses auditeurs en intégrant des fonctionnalités météorologiques avancées sur leur site web officiel ",
      tags: ["React","","Splite 3D ", "Gsap", "API"],
      image:weather, 
      demoLink: "https://nabil-hriz.github.io/HitRadio-Weather/",
      codeLink: "https://github.com/NABIL-HRIZ/HitRadio-Weather.git"
    },
     {
      id: 5,
      name: "Sky 365",
      description: "Un site web pour le booking en ligne des hotels moderne et responsive .",
      tags: ["Figma","React", "Uiverse", "Materiel Ui"],
      image:booking, 
      demoLink: "#",
      codeLink: "https://github.com/NABIL-HRIZ/Sky365.git"
    },

     {
      id: 6,
      name: "Educaty",
      description:"Plateforme d’apprentissage innovante qui révolutionne la manière dont les étudiants accèdent aux ressources éducatives en ligne. ",
      tags: ["Figma","React", "WebLeb ", "Dribble Inspiration"],
      image:educaty, 
      demoLink: "#",
      codeLink: "https://github.com/NABIL-HRIZ/Educaty-app.git"
    },

    {
      id: 7,
      name: "SERVICE_JARDINAGE",
      description: "Notre site propose une gamme complète de services professionnels pour prendre soin de votre jardin et de votre espace extérieur, demander un devis en ligne",
      tags: ["React", "BOOTSRAP", "EMAILJS", "SwaperJs"],
      image:jardinage,
      demoLink: "#",
      codeLink: "https://github.com/NABIL-HRIZ/ServiceJardinage.git"
    },
     {
      id: 8,
      name: "HONEY WEB",
      description: "Notre site propose une sélection variée de miels artisanaux provenant de sources locales et durables. Que vous recherchiez du miel cru, du miel biologique ou des variétés spéciales comme le miel de lavande ou de trèfle",
      tags: ["React", "BOOTSRAP", "EMAILJS"],
      image:honey,
      demoLink: "#",
      codeLink: "https://github.com/NABIL-HRIZ/Honey.git"
    },
      {
      id:9,
      name: "DARIShop",
      description: "Plateforme eCommerce dédiée à l'univers de la maison. Parcourez notre sélection variée de produits soigneusement sélectionnés pour embellir et optimiser votre espace de vie",
      tags: ["Laravel", "Blade", "Mysql", "Html" , "Css" ,"js" ,  "Tailwind"],
      image:dari, 
      demoLink: "#",
      codeLink: "https://github.com/NABIL-HRIZ/Dari_shop.git"
    },
      {
      id:19,
      name: "Pizza Dyalna ",
      description: "Plongez dans un monde de saveurs délicieuses où chaque bouchée est une explosion de goût.. Un site Web",
      tags: ["Laravel", "Blade", "Mysql", "Html" , "Css" ,"js", "Tailwind"],
      image:pizza,
      demoLink: "#",
      codeLink: "https://github.com/NABIL-HRIZ/PizzaDyalna.git"
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