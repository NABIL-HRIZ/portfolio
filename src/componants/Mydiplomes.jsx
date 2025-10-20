import React, { useEffect, useRef } from 'react';
import { FaGraduationCap, FaUniversity, FaFlask } from 'react-icons/fa';
import '../styles/Mydiplomes.css';

const Mydiplomes = () => {
  const sectionRef = useRef(null);

  const formations = [
    {
      id: 1,
      icon: <FaGraduationCap className="diplome-icon" />,
      etablissement: "SIMPLON ACADEMY",
      periode: "Juin 2025 – Présent",
      diplome: "Formation : Full Stack React & Laravel",
      description: "Formation intensive en développement web full stack avec les technologies modernes"
    },
    {
      id: 2,
      icon: <FaUniversity className="diplome-icon" />,
      etablissement: "UNIVERSITÉ BEN M'SIK",
      periode: "Juillet 2022",
      diplome: "Licence fondamentale en sciences mathématiques et informatiques",
      description: "Parcours académique approfondi en mathématiques et informatique fondamentale"
    },
    {
      id: 3,
      icon: <FaFlask className="diplome-icon" />,
      etablissement: "LYCÉE MOULAY ISMAIL",
      periode: "Juillet 2019",
      diplome: "Baccalauréat en sciences physiques et chimiques",
      description: "Diplôme de fin d'études secondaires avec spécialisation scientifique"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.diplome-card, .section-title, .section-subtitle');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="diplomes-section" id='diplomes'>
      <div className="diplomes-container">
        <h2 className="section-title fade-in">
          Formations & <span className="highlight">Diplômes</span>
        </h2>
        <p className="section-subtitle fade-in">
          
        </p>

        <div className="timeline">
          <div className="timeline-line"></div>
          
          <div className="diplomes-grid">
            {formations.map((formation, index) => (
              <div 
                key={formation.id} 
                className={`diplome-card slide-up ${index % 2 === 0 ? 'left' : 'right'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-content">
                  <div className="card-icon">
                    {formation.icon}
                  </div>
                  
                  <div className="card-header">
                    <h3 className="etablissement">{formation.etablissement}</h3>
                    <span className="periode">{formation.periode}</span>
                  </div>

                  <div className="card-body">
                    <h4 className="diplome">{formation.diplome}</h4>
                    <p className="description">{formation.description}</p>
                  </div>

                  <div className="card-decoration">
                    <div className="decoration-dot"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mydiplomes;