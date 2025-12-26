import React from "react";
import { motion } from "@motionone/react";
import { FaCode, FaReact } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="modern-footer">
      <div className="footer-container">
        <h2 className="huge-title">
  {"Made by NABIL".split("").map((char, i) => (
    <motion.span
      key={i}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 + i * 0.05, duration: 0.8, easing: "ease-in-out" }}
    >
      {char === " " ? "\u00A0" : char} 
    </motion.span>
  ))}
</h2>

        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="brand-icon">
                <FaCode className="code-icon" />
              </div>
              <div className="brand-text">
                <span className="name">NABIL HRIZ</span>
                <span className="tagline">Vision digitale & Performance.</span>
              </div>
            </div>

            <div className="footer-info">
              <div className="copyright">
                <span className="year">© {currentYear}</span>
                <span className="separator">/</span>
                <span className="made-with">
                  BUILD WITH
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, easing: "linear" }}
                    style={{ display: "inline-block", marginLeft: "5px" }}
                  >
                    <FaReact className="react-icon" />
                  </motion.span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
