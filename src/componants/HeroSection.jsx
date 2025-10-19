import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import '../styles/HeroSection.css';
import my_pic from '../assets/my_pic.png';

const HeroSection = () => {
  return (
    <section className="hero-section" id='hero-section'>
      <div className="hero-container">
        <div className="hero-left">
          <div className="profile-card">
            <div className="profile-image">
              <img src={my_pic} alt="NABIL HRIZ" className="profile-img" />
              <div className="image-overlay"></div>
            </div>
            <div className="profile-details">
              <h3 className="profile-card-name">NABIL HRIZ</h3>
              <p className="profile-card-title">Développeur Full-Stack </p>

              <div className="social-icons">
                <a href="https://github.com/NABIL-HRIZ" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaGithub className="social-icon" />
                </a>
                <a href="hariznabil663@gmail.com" className="social-link">
                  <FaEnvelope className="social-icon" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaLinkedin className="social-icon" />
                </a>
              </div>

              <div className="profile-actions">
                <button class="cta">
                  <span>Télécharger CV</span>
                </button>

                <button class="cta-reverse">
                  <span>Contactez-moi</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <h1 className="hero-title">
          Faire passer vos idées du concept à  <span className="highlight">la réalité</span>
          </h1>
          <p className="hero-subtitle">
            Développeur Full Stack passionné par les technologies modernes et leur potentiel pour transformer les entreprises,
            je m'efforce de concevoir des solutions web innovantes, performantes et intuitives. J'aime transformer des idées en applications concrètes.
          </p>
          <div className="hero-buttons">
<a href='#projects-section' class="button" style={{textDecoration:"none"}}> Mes Projets</a>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;