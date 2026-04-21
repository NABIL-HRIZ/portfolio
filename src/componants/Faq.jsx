import React, { useState, useEffect, useRef } from 'react';
import { animate } from "motion";
import { useTranslation } from 'react-i18next';
import '../styles/Faq.css';

const AUTOPLAY_TIME = 6000; // 6 secondes pour laisser le temps de lire

const Faq = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const progressRef = useRef(null);
  
  // Récupération des données depuis i18n
  const header = t('faq.header', { returnObjects: true });
  const faqItems = t('faq.items', { returnObjects: true }) || [];

  useEffect(() => {
    if (!faqItems.length) return;

    // Animation de la barre de progression avec Motion One
    if (progressRef.current) {
      progressRef.current.style.width = "0%";
      animate(
        progressRef.current, 
        { width: "100%" }, 
        { duration: AUTOPLAY_TIME / 1000, easing: "linear" }
      );
    }

    // Timer pour changer de question
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
        
       
        <div className="tm-left">
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
                {/* La barre s'anime seulement pour l'index actif */}
                {i === activeIndex && (
                  <div ref={progressRef} className="tm-progress-fill" />
                )}
                {/* Les barres précédentes restent pleines */}
                {i < activeIndex && <div className="tm-progress-fill static" />}
              </div>
            ))}
          </div>
        </div>

        <div className="tm-right">
          <div key={activeIndex} className="tm-card">
             <div className="tm-q-tag">Question 0{activeIndex + 1}</div>
             <h3 className="tm-question">{active.question}</h3>
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