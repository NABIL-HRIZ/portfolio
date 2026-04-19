

import { motion } from "@motionone/react";
import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';// IMPORT DIRECT (SANS ACCOLADES)
import { useTranslation } from 'react-i18next';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const { t } = useTranslation();

  // Fonction de filtrage simplifiée
  const selectLastSixMonths = (contributions) => {
    const today = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(today.getMonth() - 9);

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      return date >= sixMonthsAgo && date <= today;
    });
  };

  return (
    <section className="portfolio-section">
      <div className="bg-glow"></div>

      <div className="header-designer-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="projects-title-large"
        >
          <span className="line-one">{t('portfolio.header.lineOne')}</span>
          <span className="line-two highlight-large">{t('portfolio.header.lineTwo')}</span>
        </motion.h2>
      </div>

      <div className="github-calendar-wrapper">
        <div className="calendar-card">
          <div className="calendar-header">
            <div className="calendar-label">
              <span>GitHub Activity</span>
            </div>
            <div className="calendar-badge">Live contribution heatmap</div>
          </div>

          <GitHubCalendar 
            username="NABIL-HRIZ" 
            transformData={selectLastSixMonths}
            blockSize={18}
            blockMargin={4}
            fontSize={15}
            colorScheme="dark"
            theme={{
              dark: ['#0b1220', '#0f3b26', '#1f6b42', '#37a562', '#7ae582'],
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;