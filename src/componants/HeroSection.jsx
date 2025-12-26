import React from 'react';
import { useState,useEffect } from 'react';
import '../styles/HeroSection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FaGithub, FaEnvelope, FaLinkedin, FaReact, FaHtml5, FaCss3Alt, 
  FaJs, FaPhp, FaLaravel, FaDatabase, FaBootstrap, FaDocker 
} from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiGithubactions } from 'react-icons/si';
import '../styles/HeroSection.css';
import { motion } from "@motionone/react";
import hero_pic from '../assets/hero-pic.png'
const HeroSection = () => {

  const titles = [
    "Creative Mind"
   
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
         <div className="hero-leftt">
  <div className="abstract-art-container">
    <div className="shape-fragment fragment-1"></div>
    <div className="shape-fragment fragment-2"></div>
    
    <motion.div 
      className="picasso-image-frame"
      initial={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
      animate={{ clipPath: "polygon(0% 0%, 100% 15%, 100% 100%, 15% 85%)" }}
      transition={{ duration: 1, ease: "circOut" }}
    >
      <img src={hero_pic} alt="Creative Mind" className="hero-img-designer" />
    </motion.div>

    <div className="designer-title-wrap">
      <motion.div 
        className="vertical-label"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <span>CREATIVE FORCE</span>
        
      </motion.div>
      
      <motion.h1 
        className="abstract-dynamic-title"
        key={index}
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
      >
        {titles[index]}
      </motion.h1>
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
        <span className="text-bottom">DEV</span>
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