import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

import { motion } from "@motionone/react";
import '../styles/Portfolio.css';

const Portfolio = () => {

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
      <div className="header-designer-container">
        <motion.h2
          className="projects-title-large"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, easing: "ease-out" }}
        >
          <span className="line-one">MON ACTIVITÉ</span>
          <span className="line-two highlight-large">OPEN SOURCE</span>
        </motion.h2>
      </div>

      <div className="github-calendar-container">
        <GitHubCalendar
          username="NABIL-HRIZ"
          transformData={selectLastSixMonths}
          blockSize={15}
          blockMargin={5}
          colorScheme="dark"
          fontSize={16}
          labels={{
            totalCount: "{{count}} contributions ces 6 derniers mois",
          }}
        />
      </div>
    </section>
  );
};

export default Portfolio;
