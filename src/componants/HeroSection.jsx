import React from 'react';
import { useState,useEffect } from 'react';
import '../styles/HeroSection.css';
import my_pic from '../assets/my_pic.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FaGithub, FaEnvelope, FaLinkedin, FaReact, FaHtml5, FaCss3Alt, 
  FaJs, FaPhp, FaLaravel, FaDatabase, FaBootstrap, FaDocker 
} from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiGithubactions } from 'react-icons/si'; // Extra icons
import '../styles/HeroSection.css';
import { motion } from "@motionone/react";
const HeroSection = () => {

  const titles = [
    "Développeur Full-Stack",
    "Architecte Solutions Web",
    "Concepteur de Solutions"
   
  ];

  const [index, setIndex] = useState(0);

 useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); 

    return () => clearInterval(timer);
  }, []);

  
    useEffect(() => {
    AOS.init({
      duration: 500,  
      once: false,     
    });
  }, []);


  return (
    <section className="hero-section" id='accueil'>
      <div className="hero-container">
       <div className="hero-left">
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

        <div className="hero-right">
  <div className="orbit-wrapper">
    <div className="hero-text-inside-orbit">
      <motion.h2 
        className="hero-title-designer"
        key={index}
        initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, easing: "ease-out" }}
      >
       
        <span className="text-top">FULL</span>
        <span className="text-middle">STACK</span>
        <span className="text-bottom">ARCH</span>
      </motion.h2>
    </div>

     <div className="orbit-track">
             
              <div className="orbiting-icon icon-1" title="React"><FaReact /></div>
              <div className="orbiting-icon icon-2" title="JavaScript"><FaJs /></div>
              <div className="orbiting-icon icon-3" title="HTML5"><FaHtml5 /></div>
              <div className="orbiting-icon icon-4" title="CSS3"><FaCss3Alt /></div>
              <div className="orbiting-icon icon-5" title="PHP"><FaPhp /></div>
              <div className="orbiting-icon icon-6" title="Laravel"><FaLaravel /></div>
              <div className="orbiting-icon icon-7" title="SQL"><FaDatabase /></div>
              <div className="orbiting-icon icon-8" title="Tailwind"><SiTailwindcss /></div>
              <div className="orbiting-icon icon-9" title="Bootstrap"><FaBootstrap /></div>
              <div className="orbiting-icon icon-10" title="Redux"><SiRedux /></div>
              <div className="orbiting-icon icon-11" title="Docker"><FaDocker /></div>
              <div className="orbiting-icon icon-12" title="CI/CD"><SiGithubactions /></div>
            </div>
  </div>
</div>


      </div>
    </section>
  );
};

export default HeroSection;