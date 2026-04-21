import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import my8logo from "../assets/my-logo.png";
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedinIn, FaArrowRight } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "../styles/ModernNavbar.css";

const ModernNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  const menuItems = [
    { label: t('nav.accueil'), href: "#acceuil" },
    { label: t('nav.apropos'), href: "#a-propos" },
    { label: t('nav.projets'), href: "#projects-section" },
    { label: t('nav.outils'), href: "#tools" }
  ];

  const socials = [
    { icon: <FaGithub />, href: "https://github.com/nabil-hriz" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/nabil-hriz" },
    { icon: <SiGmail />, href: "#contactMe" },
  ];

  const itemVariants = {
    closed: { x: 80, opacity: 0 },
    open: (i) => ({ 
      x: 0, 
      opacity: 1, 
      transition: { delay: 0.2 + (i * 0.1), ease: "power2.out" } 
    })
  };

  return (
    <>
      <header className="modern-header">
        <img src={my8logo} alt="Nabil Logo" className="nav-logo-img" />
        
        <div className="nav-controls">
          <button 
            onClick={toggleLanguage}
            className="language-toggle-btn"
            aria-label="Change Language"
          >
            <span className="lang-text">{i18n.language.toUpperCase()}</span>
          </button>

          <button 
            className={`menu-trigger ${isOpen ? 'active' : ''}`} 
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="hamburger"></span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%", borderRadius: "100% 0 0 100%" }}
            animate={{ opacity: 1, x: 0, borderRadius: "0% 0 0 0%" }}
            exit={{ opacity: 0, x: "100%", borderRadius: "100% 0 0 100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="full-menu-overlay"
          >
            <div className="menu-main-content">
              <motion.div 
                className="social-icons"
                variants={itemVariants}
                initial="closed"
                animate="open"
                custom={menuItems.length}
              >
                {socials.map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                ))}
              </motion.div>

              <nav className="menu-nav-links">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    custom={i}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </div>

            <motion.a 
              href="#contactMe" 
              className="contact-btn"
              onClick={() => setIsOpen(false)}
              variants={itemVariants}
              initial="closed"
              animate="open"
              custom={menuItems.length + 1}
            >
              CONTACT US <FaArrowRight size={20} />
            </motion.a>

            <div className="menu-footer">NABIL HRIZ — 2026</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModernNavbar;