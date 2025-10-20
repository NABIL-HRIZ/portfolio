import React from 'react';
import { FaLaravel, FaReact, FaDocker, FaGitAlt,FaCogs} from 'react-icons/fa';
import { SiMysql, SiHtml5 } from 'react-icons/si';
import '../styles/MyTools.css';

const MyTools = () => {
  const tools = [
    {
      id: 1,
      name: "Laravel",
      description: "Framework Backend (PHP)",
      icon: <FaLaravel className="tool-icon" />,
      color: "#FF2D20"
    },
    {
      id: 2,
      name: "React Js",
      description: "Framework Frontend (JS)",
      icon: <FaReact className="tool-icon" />,
      color: "#0b1c8aff"
    },
    {
      id: 3,
      name: "HTML/CSS",
      description: "Structure & Styling",
      icon: <SiHtml5 className="tool-icon" />,
      color: "#E34F26"
    },
    {
      id: 4,
      name: "MySQL",
      description: "Base de Données (SQL)",
      icon: <SiMysql className="tool-icon" />,
      color: "#8bb7d8ff"
    },
    {
      id: 5,
      name: "Docker",
      description: "Containerisation",
      icon: <FaDocker className="tool-icon" />,
      color: "#2496ED"
    },
      {
      id: 7,
      name: "CI CD ",
      description: "Git Hub actions",
      icon: <FaCogs className="tool-icon" />,
      color: "#0d6efd"
    },
   
    {
      id: 8,
      name: "Git",
      description: "Contrôle de Version",
      icon: <FaGitAlt className="tool-icon" />,
      color: "#F05032"
    },
  
  ];

  return (
    <section className="tools-section" id='tools'>
      <div className="tools-container">
        <h2 className="tools-title" style={{marginTop:"-20px"}}>
          Technologies de Pointe  pour Des Résultats  <span className="highlight">Exceptionnels</span>
        </h2>

        
        
        <div className="tools-grid">
          {tools.map(tool => (
            <div key={tool.id} className="tool-card">
              <div className="tool-icon-container" style={{ color: tool.color }}>
                {tool.icon}
              </div>
              <div className="tool-content">
                <h3 className="tool-name">{tool.name}</h3>
                <p className="tool-description">{tool.description}</p>
              </div>
              <div className="tool-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyTools;