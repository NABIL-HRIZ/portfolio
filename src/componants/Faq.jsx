import React, { useState } from 'react';
import { FaCode, FaRocket, FaUsers, FaTools, FaCalendarAlt } from 'react-icons/fa';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Faq.css';
import { motion } from "@motionone/react";
import { useTranslation } from 'react-i18next';
const Faq = () => {
  const [activeKey, setActiveKey] = useState('0');
  const { t } = useTranslation();
  const faqData = t('faq.items', { returnObjects: true });
  const icons = [<FaCode className="faq-icon" />, <FaRocket className="faq-icon" />, <FaCalendarAlt className="faq-icon" />, <FaUsers className="faq-icon" />, <FaTools className="faq-icon" />];
  const faqItems = (faqData || []).map((item, idx) => ({ id: String(idx), question: item.question, answer: item.answer, icon: icons[idx] || <FaCode className="faq-icon" /> }));

  return (
    <section className="faq-section">
      <div className="faq-container">
        

         <div className="header-designer-container">
                        <motion.h2
                          className="projects-title-large"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, easing: "ease-out" }}
                        >
                          <span className="line-one">  Foire aux </span>
                          <span className="line-two highlight-large">Questions</span>
                        </motion.h2>
                      </div>
        
        <div className="faq-content">
          <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
            {faqItems.map((item) => (
              <Accordion.Item key={item.id} eventKey={item.id} className="faq-accordion-item">
                <Accordion.Header className="faq-accordion-header">
                  <div className="question-header">
                    <div className="question-icon">
                      {item.icon}
                    </div>
                    <span className="question-text">{item.question}</span>
                  </div>
                </Accordion.Header>
                <Accordion.Body className="faq-accordion-body">
                  <div className="answer-content">
                    <p>{item.answer}</p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;