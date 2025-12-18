"use client";

import React, { useState, useEffect } from "react";
import { motion } from "@motionone/react";
import { 
  FaLaravel, FaReact, FaDocker, FaGitAlt, FaCogs, FaNodeJs, 
  FaBootstrap, FaDatabase, FaBrain 
} from "react-icons/fa";
import { 
  SiMysql, SiHtml5, SiMongodb, SiExpress, SiTailwindcss, 
  SiFigma, SiOpenai, SiAnthropic 
} from "react-icons/si";
import "../styles/Mytools.css";

const toolsData = [

  { id: 1, name: "Laravel", description: "Framework Backend (PHP)", icon: <FaLaravel />, color: "#FF2D20", type: "Backend" },
  { id: 2, name: "Node.js", description: "Environnement d'exécution JS", icon: <FaNodeJs />, color: "#339933", type: "Backend" },
  { id: 4, name: "API REST", description: "Conception & Intégration", icon: <FaCogs />, color: "#2088FF", type: "API" },
  
  { id: 5, name: "React Js", description: "Interfaces réactives (Redux)", icon: <FaReact />, color: "#61DAFB", type: "Frontend" },
  { id: 6, name: "HTML/CSS", description: "Structure & Style Moderne", icon: <SiHtml5 />, color: "#E34F26", type: "Design" },
  { id: 7, name: "Tailwind ", description: "Framework CSS utilitaire", icon: <SiTailwindcss />, color: "#06B6D4", type: "Design" },
  { id: 8, name: "Bootstrap", description: "Framework CSS Responsive", icon: <FaBootstrap />, color: "#7952B3", type: "Design" },
  { id: 9, name: "Figma", description: "Prototypage & Design UI", icon: <SiFigma />, color: "#F24E1E", type: "UI/UX" },
  
  { id: 10, name: "MySQL", description: "Gestion de données SQL", icon: <SiMysql />, color: "#4479A1", type: "Database" },
  { id: 11, name: "MongoDB", description: "Base de données NoSQL", icon: <SiMongodb />, color: "#47A248", type: "Database" },
  
  { id: 12, name: "Docker", description: "Conteneurisation d'apps", icon: <FaDocker />, color: "#2496ED", type: "DevOps" },
  { id: 13, name: "CI/CD", description: "Pipelines automatisés", icon: <FaCogs />, color: "#0d6efd", type: "DevOps" },
  { id: 14, name: "Git / GitHub", description: "Contrôle de version", icon: <FaGitAlt />, color: "#F05032", type: "Tools" },
  
  { id: 15, name: "Claude AI", description: "Optimisation & Documentation", icon: <SiAnthropic />, color: "#D97757", type: "IA Tool" },
  { id: 16, name: "ChatGPT", description: "Assistance au codage", icon: <SiOpenai />, color: "#10a37f", type: "IA Tool" },
];

const MyTools = () => {
  const [items, setItems] = useState([{ ...toolsData[0], key: 'init' }]);
  const [nextIndex, setNextIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const nextTool = toolsData[nextIndex % toolsData.length]; 
        return [{ ...nextTool, key: Date.now() }, ...prev].slice(0, 6); 
      });
      setNextIndex((prev) => (prev + 1) % toolsData.length);
    },3000);

    return () => clearInterval(interval);
  }, [nextIndex]);

  return (
    <section className="tools-section" id="tools">
      <div className="tools-container">
        <h2 className="tools-title">
          Technologies de <span className="highlight">Pointe</span>
        </h2>

        <div className="animated-list-wrapper">
          <div className="list-inner">
            {items.map((tool) => (
              <motion.figure
                key={tool.key}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, easing: [0.23, 1, 0.32, 1] }}
                className="tool-card"
              >
                <div className="tool-card-content">
                  <div className="tool-icon-box" style={{ backgroundColor: tool.color }}>
                    {tool.icon}
                  </div>
                  <div className="tool-text">
                    <div className="tool-header">
                      <figcaption className="tool-name">{tool.name}</figcaption>
                     
                      <span className="tool-type">{tool.type}</span>
                    </div>
                    <p className="tool-description">{tool.description}</p>
                  </div>
                </div>
              </motion.figure>
            ))}
          </div>
          <div className="list-fade-bottom"></div>
        </div>
      </div>
    </section>
  );
};

export default MyTools;