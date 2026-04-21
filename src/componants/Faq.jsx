import React, { useState, useEffect, useRef } from 'react';
import { animate } from "motion";
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Faq.css';

const AUTOPLAY_TIME = 6000;

const Faq = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const progressRef = useRef(null);
  
  const faqItems = t('faq.items', { returnObjects: true }) || [];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    if (!faqItems.length) return;

    if (progressRef.current) {
      progressRef.current.style.width = "0%";
      animate(
        progressRef.current, 
        { width: "100%" }, 
        { duration: AUTOPLAY_TIME / 1000, easing: "linear" }
      );
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % faqItems.length);
    }, AUTOPLAY_TIME);

    return () => clearInterval(interval);
  }, [activeIndex, faqItems.length]);

  if (!faqItems.length) return null;

  const active = faqItems[activeIndex];

  return (
    <section className="tm-section">
      <div className="tm-container">
        
        <div className="tm-left" data-aos="fade-right">
          <div className="srv-header">
            <div className="split-title">
              <span className="small-number">07</span>
              <h2 className="main-title">
                {t('faq.titre_part1')} <br />
                <span className="accent-color">{t('faq.titre_part2')}</span>
              </h2>
            </div>
          </div>
          <p className="tm-subtitle">
            {t('faq.subtitle')}
          </p>
          
          <div className="tm-progress-container">
            {faqItems.map((_, i) => (
              <div key={i} className="tm-progress-track">
                {i === activeIndex && (
                  <div ref={progressRef} className="tm-progress-fill" />
                )}
                {i < activeIndex && <div className="tm-progress-fill static" />}
              </div>
            ))}
          </div>
        </div>

        <div className="tm-right" data-aos="zoom-in-left">
          <div key={activeIndex} className="tm-card faq-card-reveal">
             <div className="tm-q-tag">Question 0{activeIndex + 1}</div>
             <h3 className="tm-question">{active.question}</h3>
             <div className="tm-divider"></div> 
             <p className="tm-answer">{active.answer}</p>
             
             <div className="tm-footer-brand">
                <span className="tm-author">NABIL HRIZ</span>
                <span className="tm-dev">Full-Stack Developer</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Faq;