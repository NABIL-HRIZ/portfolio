

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

     <div className="split-title">
  <span className="small-number">02</span>
  <h2 className="main-title">
    {t('portfolio.titre_part1')} <br />
    <span className="accent-color">{t('portfolio.titre_part2')}</span>
  </h2>
</div>

      <div className="github-calendar-wrapper">
        <div className="calendar-card">
          <div className="calendar-header">
            <div className="calendar-label">
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