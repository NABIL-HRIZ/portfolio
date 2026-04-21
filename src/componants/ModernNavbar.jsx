import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import my8logo from "../assets/my-logo.png";
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedinIn, FaArrowRight, FaWhatsapp, FaTimes } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { HiMenuAlt3 } from "react-icons/hi";
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
    { icon: <FaGithub />, href: "https://github.com/NABIL-HRIZ" },
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/nabil-hriz-0937b1390/" },
    { icon: <SiGmail />, href: "mailto:hariznabil663@gmail.com" },
    { icon: <FaWhatsapp />, href: "https://wa.me/212609153426" }
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
        <a href="#acceuil" className="nav-logo-link">
          <img src={my8logo} alt="Nabil Logo" className="nav-logo-img" />
        </a>
        
       <div className="nav-controls">
          <button 
            onClick={toggleLanguage}
            className="language-toggle-btn"
          >
            <span className="lang-text">{i18n.language.toUpperCase()}</span>
          </button>

          <button 
            className="menu-trigger" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <FaTimes size={28} color="#a8836b" />
                </motion.div>
              ) : (
                <motion.div
                  key="burger"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <HiMenuAlt3 size={32} color="#f6f5f3" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="full-menu-overlay"
          >
            <div className="menu-main-content">
              <motion.div className="social-icons" variants={itemVariants} initial="closed" animate="open" custom={0}>
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
                    custom={i + 1}
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
              {t('nav.contact')} <FaArrowRight size={20} />
            </motion.a>

            <div className="menu-footer">NABIL HRIZ — 2026</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModernNavbar;