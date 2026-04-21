import React from "react";
import { motion } from "@motionone/react";
import { FaReact, FaArrowRight } from "react-icons/fa";
import "../styles/Footer.css";
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
   <footer className="modern-footer">
  <div className="footer-container">
   
  

    <div className="final-signature" data-aos="fade-left" >
      <p className="sig-text">Nabil Hriz</p>
      <div className="sig-line"></div>
      <p className="dev-tag">Full-Stack Developer</p>
    </div>

    <div className="footer-copyright" data-aos="fade-right" >
      <span>© {currentYear}</span>
    </div>
  </div>
</footer>
  );
};

export default Footer;