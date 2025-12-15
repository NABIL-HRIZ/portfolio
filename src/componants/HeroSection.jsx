import React from 'react';
import { useEffect } from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import '../styles/HeroSection.css';
import my_pic from '../assets/my_pic.jpeg';
import TextType from './TextType';
import AOS from 'aos';
import 'aos/dist/aos.css';
const HeroSection = () => {

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
               <a href="public/my_CV.pdf" download>
  <button className="cta">
    <span>Télécharger CV</span>
  </button>
</a>

                <a class="cta-reverse" href='#contact' style={{textDecoration:"none"}}>
                  <span>Contactez-moi</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right" style={{marginTop:"15px"}}>
          <h1 className="hero-title">
         <TextType
    text="Faire passer vos idées du concept à la réalité "
    typingSpeed={50}
  />
          </h1>
          <p className="hero-subtitle" data-aos="fade-left" data-aos-delay="3000" style={{marginTop:"-10px"}}>
            Développeur Full Stack passionné par les technologies modernes et leur potentiel pour transformer les entreprises,
            je m'efforce de concevoir des solutions web innovantes, performantes et intuitives. J'aime transformer des idées en applications concrètes.
          </p>
          <div className="hero-buttons" data-aos="fade-left" data-aos-delay="3000">

            <a class="cta-reverse" href='#accueil' style={{textDecoration:"none"}}>
                  <span>Mes Projets</span>
                </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;