import React, { useState, useEffect } from 'react';
import { motion } from "@motionone/react";
import '../styles/AboutMe.css';

const AboutMe = () => {
  const skills = ["Nabil Hriz", "Full-Stack", "Devloper", "Maker"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [skills.length]);

  const HighLight = ({ children, color = "#4ab677", type = "highlight" }) => {
  return (
    <span className={`custom-highlighter ${type}`} style={{ "--accent-color": color }}>
      {children}
    </span>
  );
};

  return (
    <section className="about-section">
      <div className="about-hero">
        <div className="morph-container">
          <motion.h1 
            key={skills[index]}
            initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            className="morph-text"
          >
            {skills[index]}
          </motion.h1>
        </div>
      </div>

     <div className="about-bio-container">
  <p className="about-description">
    Maîtrisant le <HighLight color="#4ab677" type="underline">Front et le Back</HighLight>, 
    je conçois des applications web modernes et performantes. 
    Spécailsé en  <HighLight color="#ff4d4d" type="highlight">PHP, Laravel et React</HighLight>, 
    j'optimise les structures de données pour des <HighLight color="#4d94ff" type="underline">résultats concrets</HighLight>.
  </p>
</div>

      <div className="velocity-wrapper">
        <div className="scroll-track track-right">
          <div className="scroll-content">
            LARAVEL • REACT • NODE.JS • REDUX • DOCKER • GITHUB •
          </div>
          <div className="scroll-content">
            LARAVEL • REACT • NODE.JS • REDUX • DOCKER  • GITHUB •
          </div>
        </div>
        
        <div className="scroll-track track-left">
          <div className="scroll-content">
            MYSQL • MONGODB • CI/CD • FIGMA • TAILWIND • JS •
          </div>
          <div className="scroll-content">
            MYSQL • MONGODB • CI/CD • FIGMA • TAILWIND • JS •
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;