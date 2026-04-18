import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GitHubCalendar } from 'react-github-calendar';

import { motion } from "@motionone/react";
import '../styles/Portfolio.css';

const Portfolio = () => {
  const { t } = useTranslation();
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const hasCalendar = !!document.querySelector('.calendar-card .react-activity-calendar');
      setShowFallback(!hasCalendar);
    }, 1800);

    return () => window.clearTimeout(timeout);
  }, []);

  const selectLastSixMonths = (contributions) => {
    const today = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(today.getMonth() - 6);

    return contributions.filter(activity => {
      const date = new Date(activity.date);
      return date >= sixMonthsAgo && date <= today;
    });
  };

  return (
   <section className="portfolio-section">
  {/* Effet de lumière en arrière-plan */}
  <div className="bg-glow"></div>

  <div className="header-designer-container">
    <motion.h2
      className="projects-title-large"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="line-one">{t('portfolio.header.lineOne')}</span>
      <span className="line-two highlight-large">{t('portfolio.header.lineTwo')}</span>
    </motion.h2>
  </div>

  <motion.div 
    className="github-calendar-wrapper"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <div className="calendar-card">
      {showFallback ? (
        <div className="calendar-fallback">
          <h3>GitHub contributions unavailable</h3>
          <p>La source de données de calendrier GitHub est temporairement indisponible ou bloquée. Essayez de rafraîchir la page.</p>
          <a href="https://github.com/NABIL-HRIZ" target="_blank" rel="noreferrer">
            Voir mon profil GitHub
          </a>
        </div>
      ) : (
        <GitHubCalendar
          username="NABIL-HRIZ"
          apiUrl="https://github-contributions-api.jogruber.de/v4/"
          transformData={selectLastSixMonths}
          blockSize={18}
          blockMargin={4}
          fontSize={15}
          theme={{
            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
          }}
          labels={{
            totalCount: "{{count}} contributions ces derniers mois",
          }}
        />
      )}
    </div>
  </motion.div>
</section>
  );
};

export default Portfolio;
