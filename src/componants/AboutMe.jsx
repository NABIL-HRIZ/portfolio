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

<div className="split-title">
  <span className="small-number">01</span>
  <h2 className="main-title">
    {t('about.titre_part1')} <br />
    <span className="accent-color">{t('about.titre_part2')}</span>
  </h2>
</div>

        
    
      </div>

      

<div className='who-iam'>

  <div className='aout-left'>
<p className="about-description">
    <Trans
      i18nKey="about.description"
      components={[
        <HighLight color="#957C62" type="underline" />,
        <HighLight color="#C2A68C" type="underline" />,
        <HighLight color="#E6D8C3" type="underline" />
      ]}
    />
  </p>

  <motion.div 
  className="cv-download-wrapper"
  
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.8 }}
  inView={true} 
>
  <a href="/cv-nabil-hriz.pdf" download className="cv-download-link">
    <span className="cv-icon">↓</span>
    <span className="cv-text">{t('about.downloadCV')}</span>
    <div className="cv-underline"></div>
  </a>
</motion.div>

  </div>

  


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


   
</div>

    
    </section>
  );
};

export default AboutMe;