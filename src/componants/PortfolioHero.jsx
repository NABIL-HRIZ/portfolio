import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import "../styles/PortfolioHero.css";
import myPhoto from "../assets/image-hero.webp";
import sticker1 from "../assets/sticky1.png";
import sticker2 from "../assets/sticky2.png";
import sticker3 from "../assets/sticky3.png";

const PortfolioHero = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-quart',
      once: true,
    });
  }, []);

  return (
    <section className="hero-container" id="acceuil">
      <div className="hero-grid">
        
        <div className="hero-column column-left">
          <div className="identity-block">
            <img 
              src={sticker2} 
              alt="" 
              className="hero-sticker sticker-2" 
              data-aos="fade-down" 
              data-aos-delay="600"
            />
            <h1 
              className="main-name" 
              data-aos="fade-right" 
              data-aos-duration="1200"
            >
              NABIL<br />HRIZ
            </h1>
            <p 
              className="sub-role" 
              data-aos="fade-up" 
              data-aos-delay="300"
            >
              {t('portfolioHero.role', 'FULL-STACK DEVELOPER')}
            </p>

   <div className="hero-cta-container" >
              <a href="#projects" className="dev-cta">
                <span className="bracket">[</span>
                <span className="cta-text">{t('portfolioHero.cta')}</span>
                <span className="bracket">]</span>
                <span className="cta-arrow">→</span>
              </a>
            </div>
          </div>
          

        </div>

        <div className="hero-column column-center">
          <div className="image-frame">
            <img 
              src={myPhoto} 
              alt="NABIL HRIZ" 
              className="hero-main-img" 
              data-aos="zoom-out" 
              data-aos-duration="1500"
              data-aos-delay="100"
            />
            <img 
              src={sticker3} 
              alt="" 
              className="hero-sticker sticker-3" 
              data-aos="fade-up" 
              data-aos-delay="800"
            />
          </div>
        </div>

        <div className="hero-column column-right">
          <div className="info-box top-box" data-aos="fade-left" data-aos-delay="400">
            <img 
              src={sticker1} 
              alt="" 
              className="hero-sticker sticker-1" 
              data-aos="fade-down" 
              data-aos-delay="1000"
            />
            <h3 className="box-label">{t('portfolioHero.specialization', 'Specialization')}</h3>
            <p className="box-text">
              {t('portfolioHero.description', 'Building Modern & Innovative solutions with React, Laravel & Spring Boot.')}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default PortfolioHero;