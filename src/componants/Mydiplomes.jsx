import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaUniversity, FaFlask, FaBriefcase } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Mydiplomes.css';
import { motion } from "@motionone/react";

const Mydiplomes = () => {
  const sectionRef = useRef(null);
    const { t, i18n } = useTranslation();

    const translations = t('diplomas.list', { returnObjects: true }) || [];
    const experienceTranslations = t('experiences.list', { returnObjects: true }) || [];

    const monthNames = {
      janvier: 1,
      fevrier: 2,
      février: 2,
      mars: 3,
      avril: 4,
      mai: 5,
      juin: 6,
      juillet: 7,
      aout: 8,
      août: 8,
      septembre: 9,
      octobre: 10,
      novembre: 11,
      decembre: 12,
      décembre: 12
    };

    const parseDate = (dateString) => {
      if (!dateString) return new Date(0);
      const parts = dateString.toLowerCase().split('–').map((part) => part.trim());
      const start = parts[0];
      const monthYearMatch = start.match(/([a-zéûô]+)\s+(\d{4})/i);
      if (monthYearMatch) {
        const month = monthNames[monthYearMatch[1].normalize('NFD').replace(/\p{Diacritic}/gu, '')] || 1;
        const year = parseInt(monthYearMatch[2], 10);
        return new Date(year, month - 1, 1);
      }
      const yearMatch = start.match(/(\d{4})/);
      if (yearMatch) {
        return new Date(parseInt(yearMatch[1], 10), 0, 1);
      }
      return new Date(0);
    };

    const iconMap = {
      1: <FaGraduationCap className="diplome-icon" />,
      2: <FaUniversity className="diplome-icon" />,
      3: <FaFlask className="diplome-icon" />
    };

    const formations = translations.map((f) => ({
      ...f,
      type: 'education',
      sortDate: parseDate(f.periode),
      icon: iconMap[f.id] || <FaGraduationCap className="diplome-icon" />
    }));

    const experiences = experienceTranslations.map((e) => ({
      ...e,
      type: 'experience',
      sortDate: parseDate(e.periode),
      icon: <FaBriefcase className="diplome-icon" />
    }));

    const timelineItems = [...formations, ...experiences].sort((a, b) => b.sortDate - a.sortDate);

 return (
    <section className="formations-section" id="parcours">
      
      
 <div className="header-designer-container">
                        <motion.h2
                          className="projects-title-large"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, easing: "ease-out" }}
                        >
                          <span className="line-one">{t('diplomas.header.lineOne')}</span>
                          <span className="line-two highlight-large">{t('diplomas.header.lineTwo')}</span>
                        </motion.h2>
                      </div>


      <VerticalTimeline>
        {timelineItems.map((item) => {
          const isExperience = item.type === 'experience';
          return (
            <VerticalTimelineElement
              key={item.id}
              className={`vertical-timeline-element--${item.type}`}
              contentStyle={{ 
                background: 'rgba(23, 23, 23, 0.85)', 
                color: '#fff',
                border: isExperience ? '1px solid rgba(125, 244, 204, 0.3)' : '1px solid rgba(74, 182, 119, 0.3)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                backdropFilter: 'blur(10px)',
                borderRadius: '15px'
              }}
              contentArrowStyle={{ borderRight: isExperience ? '7px solid rgba(125, 244, 204, 0.5)' : '7px solid rgba(74, 182, 119, 0.5)' }}
              date={item.periode}
              dateClassName="custom-date-style"
              iconStyle={{ background: '#171717', color: isExperience ? '#7df4cc' : '#4ab677', boxShadow: `0 0 0 4px ${isExperience ? '#7df4cc' : '#4ab677'}` }}
              icon={item.icon}
            >
              <h3 className="timeline-diplome">{item.diplome}</h3>
              <h4 className="timeline-etablissement">{item.etablissement}</h4>
              <p className="timeline-description">{item.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default Mydiplomes;