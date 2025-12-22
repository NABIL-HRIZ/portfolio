import React from 'react';
import { FaHandshake, FaRocket, FaCode, FaHeart, FaPaperPlane } from 'react-icons/fa';
import '../styles/CollaborateUs.css';
import { motion } from "@motionone/react";

const CollaborateUs = () => {
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
                                      <span className="line-one"> Travaillons </span>
                                      <span className="line-two highlight-large">Ensemble</span>
                                    </motion.h2>
                                  </div>
            <p className="collaborate-subtitle">
              Collaborons pour transformer vos idées en projets numériques performants et innovants. 
              Je m'engage à concrétiser vos projets avec efficacité, créativité et passion.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <FaRocket className="icon" />
              </div>
              <div className="feature-content">
                <h4>Innovation</h4>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <FaCode className="icon" />
              </div>
              <div className="feature-content">
                <h4>Qualité</h4>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <FaHeart className="icon" />
              </div>
              <div className="feature-content">
                <h4>Passion</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborateUs;