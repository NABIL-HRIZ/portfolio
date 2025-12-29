import React from "react";
import { motion } from "@motionone/react";
import { FaCode, FaReact } from "react-icons/fa";
import "../styles/Footer.css";
import { useTranslation } from 'react-i18next';
import { FaArrowRight} from "react-icons/fa"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
   <footer className="modern-footer">
  <div className="footer-container">
    <div className="huge-title-wrapper">
  <h2 className="huge-title">
    {t('footer.madeBy').split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 + i * 0.05, duration: 0.8 }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}

   
    <motion.div 
      className="title-icon-wrapper"
      initial={{ scale: 0, opacity: 0, rotate: -45 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
    >
     <a 
  href="https://wa.me/212609153426?text=Salut%20!%20Je%20viens%20de%20découvrir%20ton%20portfolio%20et%20j’aimerais%20en%20savoir%20plus%20sur%20tes%20projets.%20%F0%9F%91%8B" 
  target="_blank" 
  rel="noopener noreferrer"
  className="contact-flash-link"
>
  <FaArrowRight className="flash-icon" />
</a>

    </motion.div>
  </h2>
</div>

    <div className="footer-bottom">
      <div className="copyright">
        <span className="name">{t('footer.name')}</span>
        <span className="year">© {currentYear}</span>
        <span className="separator">/</span>
        <span className="made-with">
          {t('footer.buildWith')}
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ display: "inline-block", marginLeft: "8px" }}
          >
            <FaReact className="react-icon" />
          </motion.span>
        </span>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
