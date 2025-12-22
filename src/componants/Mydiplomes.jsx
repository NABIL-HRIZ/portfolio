import React, { useEffect, useRef } from 'react';
import { FaGraduationCap, FaUniversity, FaFlask } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Mydiplomes.css';
import { motion } from "@motionone/react";

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



 return (
    <section className="formations-section" id="parcours">
      
      
 <div className="header-designer-container">
                        <motion.h2
                          className="projects-title-large"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, easing: "ease-out" }}
                        >
                          <span className="line-one"> Mon Parcours </span>
                          <span className="line-two highlight-large">Académique</span>
                        </motion.h2>
                      </div>


      <VerticalTimeline lineColor="#4ab677">
        {formations.map((item) => (
          <VerticalTimelineElement
            key={item.id}
            className="vertical-timeline-element--education"
            contentStyle={{ 
              background: 'rgba(23, 23, 23, 0.8)', 
              color: '#fff',
              border: '1px solid rgba(74, 182, 119, 0.3)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
              backdropFilter: 'blur(10px)',
              borderRadius: '15px'
            }}
            contentArrowStyle={{ borderRight: '7px solid rgba(74, 182, 119, 0.5)' }}
            date={item.periode}
            dateClassName="custom-date-style"
            iconStyle={{ background: '#171717', color: '#4ab677', boxShadow: '0 0 0 4px #4ab677' }}
            icon={item.icon}
          >
            <h3 className="timeline-diplome">{item.diplome}</h3>
            <h4 className="timeline-etablissement">{item.etablissement}</h4>
            <p className="timeline-description">{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Mydiplomes;