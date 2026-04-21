import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {GitHubCalendar} from 'react-github-calendar'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

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
    <section className="portfolio-section" id="portfolio">
      <div className="bg-glow" data-aos="fade-in" data-aos-duration="2000"></div>

      <div className="split-title" data-aos="fade-right">
        <span className="small-number">02</span>
        <h2 className="main-title">
          {t('portfolio.titre_part1')} <br />
          <span className="accent-color">{t('portfolio.titre_part2')}</span>
        </h2>
      </div>

      <div className="github-calendar-wrapper">
        <div 
          className="calendar-card" 
          data-aos="fade-up-left" 
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="calendar-header">
            <div className="calendar-label">
            </div>
            <div 
              className="calendar-badge"
              data-aos="fade-down-left"
              data-aos-delay="600"
            >
              Live contribution heatmap
            </div>
          </div>

          <div className="calendar-content">
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
      </div>
    </section>
  );
};

export default Portfolio;