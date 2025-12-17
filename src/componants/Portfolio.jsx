import React from 'react'
import {GitHubCalendar} from 'react-github-calendar'; 
import '../styles/Portfolio.css'

const Portfolio = () => {
  
 
  const selectLastSixMonths = contributions => {
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
      <h2>Mon Activité <span className="highlight"> Open Source</span></h2>
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
}

export default Portfolio;