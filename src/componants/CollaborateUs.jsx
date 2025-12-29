import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaHandshake, FaRocket, FaCode, FaHeart, FaPaperPlane } from 'react-icons/fa';
import '../styles/CollaborateUs.css';
import { motion } from "@motionone/react";

const CollaborateUs = () => {
  const { t } = useTranslation();

  return (
    <section className="collaborate-section">
      <div className="collaborate-container">
        <div className="collaborate-card">
          <div className="collaborate-icon">
            <FaPaperPlane className="main-icon" />
          </div>
        
          <div className="collaborate-content">
          
             <div className="header-designer-container">
                                    <motion.h2
                                      className="projects-title-large"
                                      initial={{ opacity: 0, x: 50 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.8, easing: "ease-out" }}
                                    >
                                      <span className="line-one">{t('collaborate.header.lineOne')}</span>
                                      <span className="line-two highlight-large">{t('collaborate.header.lineTwo')}</span>
                                    </motion.h2>
                                  </div>
            <p className="collaborate-subtitle">
              {t('collaborate.subtitle')}
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <FaRocket className="icon" />
              </div>
                <div className="feature-content">
                <h4>{t('collaborate.features.innovation')}</h4>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <FaCode className="icon" />
              </div>
              <div className="feature-content">
                <h4>{t('collaborate.features.quality')}</h4>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <FaHeart className="icon" />
              </div>
              <div className="feature-content">
                <h4>{t('collaborate.features.passion')}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborateUs;