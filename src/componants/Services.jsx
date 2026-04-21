import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Services.css';

const Services = () => {
  const { t } = useTranslation();
  
  const rawData = t('services.list', { returnObjects: true });
  const servicesList = Array.isArray(rawData) ? rawData : [];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-quart',
    });
  }, []);

  return (
    <section className="srv-section">
      <div className="srv-container">
        
        <div className="srv-header" data-aos="fade-down">
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
            servicesList.map((service, index) => (
              <div key={service.id} className="srv-item">
                
                <div 
                  className="srv-number" 
                  data-aos="fade-right" 
                  data-aos-delay={index * 200}
                >
                  [{service.id}]
                </div>

                <div className="srv-content">
                  <h3 
                    className="srv-item-title"
                    data-aos="fade-left"
                    data-aos-delay={(index * 200) + 200}
                  >
                    {service.title}
                  </h3>

                  <p 
                    className="srv-item-desc"
                    data-aos="fade-up"
                    data-aos-delay={(index * 200) + 400}
                  >
                    {service.desc}
                  </p>
                  
                  <div 
                    className="srv-line"
                    data-aos="zoom-in"
                    data-aos-delay={(index * 200) + 600}
                  ></div>
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