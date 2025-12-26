import React, { useState, useEffect } from 'react';
import { motion } from "@motionone/react";
import '../styles/AboutMe.css';
import my_pic from '../assets/my_pic.jpeg';
import { 
  FaGithub, FaEnvelope, FaLinkedin
} from 'react-icons/fa';
const AboutMe = () => {
  const skills = ["Nabil Hriz", "Full-Stack", "Devloper", "Maker"];
  const [index, setIndex] = useState(0);
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
    const handleScroll = () => {
    
      if (window.scrollY >500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

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
    <section className="about-section" id='a-propos'>
     
      
        <div className={`hero-left ${isVisible ? 'is-visible' : ''}`}>
     <div className="profile-card">
    <div className="content"> 
      <div className="modern-status-badge">
      <div className="inner-badge">
        <span className="pulse-ring"></span>
        <span className="status-dot"></span>
        <span className="status-text">DISPONIBLE</span>
      </div>
    </div>
      <div className="profile-image">
        <img src={my_pic} alt="NABIL HRIZ" className="profile-img" />
        <div className="image-overlay"></div>
      </div>
      
      <div className="profile-details">
        <h3 className="profile-card-name">NABIL HRIZ</h3>
<p className="profile-subtitle">Développeur Full Stack React & Laravel</p>
        <div className="social-icons">
          <a href="https://github.com/NABIL-HRIZ" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub className="social-icon" />
          </a>
          <a href="mailto:hariznabil663@gmail.com" className="social-link">
            <FaEnvelope className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/nabil-hriz-0937b1390/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin className="social-icon" />
          </a>
        </div>

        <div className="profile-actions">
          <a href="/nabil-hriz.pdf" download className="cssbuttons-io-button" style={{ textDecoration: "none" }}>
            <span style={{ color: "#000" }}>Télécharger CV</span>
            <div className="icon">
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
     </div>
  </div>
         

      
     <div className="about-bio-container">
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

  <p className="about-description">
    Maîtrisant le <HighLight color="#7df4cc" type="underline">Front et le Back</HighLight>, 
    je conçois des applications web modernes et performantes. 
    Spécailsé en  <HighLight color="violet" type="underline">PHP, Laravel et React</HighLight>, 
    j'optimise les structures de données pour des <HighLight color="#4d94ff" type="underline">résultats concrets</HighLight>.
  </p>
    <div className="velocity-wrapper" style={{marginTop:"30px"}}>
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
</div>

    
    </section>
  );
};

export default AboutMe;