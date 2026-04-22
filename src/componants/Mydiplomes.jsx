import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/Mydiplomes.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);


const Mydiplomes = () => {
  const { t } = useTranslation();
  const wrapperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const diplomaItems = t("diplomas.list", { returnObjects: true }) || [];
  const experienceItems = t("experiences.list", { returnObjects: true }) || [];


  
useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

const items = useMemo(() => {
  const diplomas = t("diplomas.list", { returnObjects: true }) || [];
  const experiences = t("experiences.list", { returnObjects: true }) || [];

  return [...diplomas, ...experiences]
    .filter(Boolean)
    .sort((a, b) => a.id - b.id);
}, [t]);

  const getYear = (periode) => {
  if (!periode) return "";
  
  const match = periode.match(/\d{4}/g);
  return match ? match[match.length - 1] : periode;
};

const getType = (item) => {
  return item.diplome.toLowerCase().includes("développeur")
    ? "experience"
    : "education";
};
 
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || !items.length) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;

      const progress =
        scrollable > 0 ? clamp(-rect.top / scrollable, 0, 1) : 0;

      const index = Math.round(progress * (items.length - 1));
      setActiveIndex(index);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [items.length]);

  if (!items.length) return null;

  const active = items[activeIndex];

  return (
    <section className="h-timeline" ref={wrapperRef} >
<div className="dip-header">
 <div className="srv-header" data-aos="fade-right" >
         <div className="split-title">
  <span className="small-number">06</span>
  <h2 className="main-title">
    {t('diplomas.titre_part1')} <br />
    <span className="accent-color">{t('diplomas.titre_part2')}</span>
  </h2>
</div>
        </div>
</div>


      <div className="h-sticky" >

        

    <div className="h-track" >
  

  {items.map((item, i) => {
    const isActive = i === activeIndex;
    
    const totalItems = items.length;
    const angle = (i / (totalItems - 1)) * 120 - 60; 
    
  
    const textRotation = angle * 0.2; 

    return (
      <div
        key={item.id}
        className={`h-item ${isActive ? "active" : ""} ${item.type}`}
        style={{
          position: 'absolute',
        
          transform: `rotate(${angle}deg) translateY(-580px)`,
          transformOrigin: 'bottom center',
          bottom: '-250px'
        }}
      >
        <div style={{ transform: `rotate(${textRotation}deg)` }} className="h-node-content">
          <div className="h-year">{getYear(item.periode)}</div>
          <div className="h-dot" />
        </div>
      </div>
    );
  })}
</div>

        <div className="h-card">
          <h3>{active.periode}</h3>
          <div className="h-labeel">
        {active.etablissement}
      </div>
          <p className="h-desc">
            {active.description ||
              `${active.diplome || active.poste} - ${
                active.etablissement || active.entreprise
              }`}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Mydiplomes;