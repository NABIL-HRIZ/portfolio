import React from "react";
import { useTranslation } from 'react-i18next';
import "../styles/PortfolioHero.css";
import myPhoto from "../assets/my-picc.png";
import sticker1 from "../assets/sticky1.png";
import sticker2 from "../assets/sticky2.png";
import sticker3 from "../assets/sticky3.png";

const PortfolioHero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-container" id="acceuil">
     
      <div className="hero-grid">
        <div className="hero-column column-left">
          <div className="identity-block">
            <img src={sticker2} alt="" className="hero-sticker sticker-2" />
            <h1 className="main-name">NABIL<br />HRIZ</h1>
            <p className="sub-role">{t('portfolioHero.role', 'FULL-STACK DEVELOPER')}</p>
          </div>
        </div>

        <div className="hero-column column-center">
          <div className="image-frame">
            <img src={myPhoto} alt="NABIL HRIZ" className="hero-main-img" />
            <img src={sticker3} alt="" className="hero-sticker sticker-3" />
          </div>
        </div>

        <div className="hero-column column-right">
          <div className="info-box top-box">
            <img src={sticker1} alt="" className="hero-sticker sticker-1" />
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