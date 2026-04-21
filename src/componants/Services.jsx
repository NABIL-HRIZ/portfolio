import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { animate, inView, scroll } from "motion"; // Importation de Motion
import '../styles/Services.css';

const Services = () => {
  const { t } = useTranslation();
  const bgTextRef = useRef(null);
  
  const rawData = t('services.list', { returnObjects: true });
  const servicesList = Array.isArray(rawData) ? rawData : [];

  useEffect(() => {
    // 1. EFFET WOW : Parallaxe du texte de fond au scroll
    if (bgTextRef.current) {
      scroll(animate(bgTextRef.current, { x: [-100, 100] }), {
        target: bgTextRef.current,
        offset: ["start end", "end start"]
      });
    }

    // 2. EFFET WOW : Reveal progressif des items lors de l'entrée à l'écran
    inView(".srv-item", (info) => {
      animate(
        info.target,
        { opacity: [0, 1], y: [100, 0] },
        { duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
  }, [servicesList]);

  return (
    <section className="srv-section">
      
     
      <div className="srv-container">
        <div className="srv-header">
         <div className="split-title">
  <span className="small-number">04</span>
  <h2 className="main-title">
    {t('services.titre_part1')} <br />
    <span className="accent-color">{t('services.titre_part2')}</span>
  </h2>
</div>
        </div>

        <div className="srv-grid">
          {servicesList.length > 0 ? (
            servicesList.map((service) => (
              <div key={service.id} className="srv-item" >
                <div className="srv-number">[{service.id}]</div>
                <div className="srv-content">
                  <h3 className="srv-item-title">{service.title}</h3>
                  <p className="srv-item-desc">{service.desc}</p>
                  <div className="srv-line"></div>
                </div>
              </div>
            ))
          ) : (
            <p className="srv-empty">No services available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;