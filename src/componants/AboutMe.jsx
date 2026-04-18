import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { motion } from "@motionone/react";
import '../styles/AboutMe.css';
import { color } from 'three/tsl';
const AboutMe = () => {
  const { t } = useTranslation();
  const skills = ["Devloper", "Maker","Designer"];
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


const developerData = {
    name: "Nabil Hriz",
    role: "Full Stack Developer",
    base: "Casablanca, Morocco",
    status: "Freelancer",
    since: 2022,
    webStack: ["WP","React", "Laravel", "Spring Boot"],
    languages: ["AR", "FR", "EN"]
  };


  return (
    <section className="about-section" id='a-propos'>
     
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

      

<div className='who-iam'>

  <p className="about-description">
    <Trans
      i18nKey="about.description"
      components={[
        <HighLight color="#7df4cc" type="underline" />,
        <HighLight color="violet" type="underline" />,
        <HighLight color="#4d94ff" type="underline" />
      ]}
    />
  </p>

  <div className="code-window">
      <div className="code-header">
        <div className="dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <span className="file-name">nabil.profile.js</span>
      </div>
      <div className="code-content">
        <pre>
          <code>
            <span className="keyword">const</span> <span className="variable">developer</span> = &#123; <br />
            &nbsp;&nbsp;name: <span className="string">"{developerData.name}"</span>,<br />
            &nbsp;&nbsp;role: <span className="string">"{developerData.role}"</span>,<br />
            &nbsp;&nbsp;base: <span className="string">"{developerData.base}"</span>,<br />
            &nbsp;&nbsp;status: <span className="string">"{developerData.status}"</span>,<br />
            &nbsp;&nbsp;since: <span className="number">{developerData.since}</span>,<br />
            &nbsp;&nbsp;webStack: [<span className="string">"{developerData.webStack.join('", "')}"</span>],<br />
            &nbsp;&nbsp;languages: [<span className="string">"{developerData.languages.join('", "')}"</span>]<br />
            &#125;;<br />
            <br />
            <span className="comment">// available for new projects</span><span className="cursor">|</span>
          </code>
        </pre>
      </div>
    </div>
</div>


    <div className="velocity-wrapper" style={{marginTop:"30px"}}>
        <div className="scroll-track track-right">
         <div className="scroll-content">
  FIGMA <span className="separatoor"></span> JAVASCRIPT <span className="separatoor"></span> REACT <span className="separatoor"></span> TAILWIND  <span className="separatoor"></span> WORDPRESS  
</div>
         
        </div>
        
        <div className="scroll-track track-left">
          <div className="scroll-content">
            PHP <span className="separatoor"></span> LARAVEL <span className="separatoor"></span> JAVA <span className="separatoor"></span> SPRINGBOOT  <span className="separatoor"></span> RESTAPI  

          </div>
          
        </div>
      </div>
</div>

    
    </section>
  );
};

export default AboutMe;