import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/AboutMe.css';

const AboutMe = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-back', 
      once: true,
    });
  }, []);

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
        
        <div className="about-hero" data-aos="fade-right">
          <div className="split-title">
            <span className="small-number">01</span>
            <h2 className="main-title">
              {t('about.titre_part1')} <br />
              <span className="accent-color">{t('about.titre_part2')}</span>
            </h2>
          </div>
        </div>

        <div className='who-iam'>
          <div className='aout-left' data-aos="fade-up" data-aos-delay="200">
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

            <div className="cv-download-wrapper" data-aos="fade-up" data-aos-delay="400">
              <a href="/cv-nabil-hriz.pdf" download className="cv-download-link">
                <span className="cv-icon">↓</span>
                <span className="cv-text">{t('about.downloadCV')}</span>
                <div className="cv-underline"></div>
              </a>
            </div>
          </div>

          <div 
            className="code-window" 
            data-aos="zoom-in-left" 
            data-aos-duration="1200"
            data-aos-delay="300"
          >
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