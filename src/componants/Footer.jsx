import React from 'react';
import { FaCode, FaHeart, FaReact } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="modern-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="brand-icon">
                <FaCode className="code-icon" />
              </div>
              <div className="brand-text">
                <span className="name">NABIL HRIZ</span>
                <span className="tagline">Code et design au service de vos projets.</span>
              </div>
            </div>
            
            <div className="footer-info">
              <div className="copyright">
                <span className="year">© {currentYear}</span>
                <span className="separator">|</span>
                <span className="made-with">
                 using React
                  <FaReact className="react-icon" />
                </span>
              </div>
            </div>
          </div>
          
          <div className="footer-decoration">
            <div className="gradient-line"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;