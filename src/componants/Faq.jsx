import React, { useState } from 'react';
import { FaCode, FaRocket, FaUsers, FaTools, FaCalendarAlt } from 'react-icons/fa';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Faq.css';
import { motion } from "@motionone/react";
const Faq = () => {
  const [activeKey, setActiveKey] = useState('0');

  const faqItems = [
    {
      id: '0',
      question: "Quels services proposez-vous ?",
      answer: "Je propose plusieurs services, notamment la conception d'interfaces utilisateur (UI Design), le développement web (Frontend et Backend), la création d'applications web responsive, l'optimisation SEO, et l'intégration de bases de données. Je peux également vous accompagner dans la refonte de sites existants ou le développement de projets from scratch.",
      icon: <FaCode className="faq-icon" />
    },
    {
      id: '1',
      question: "Quelle est votre approche technique ?",
      answer: "Mon approche consiste à comprendre vos objectifs, analyser vos besoins, concevoir des maquettes et prototypes, puis développer des solutions efficaces en suivant des méthodologies agiles. J'utilise les technologies modernes comme React, Laravel, Node Js , et je m'assure que le code soit maintenable, scalable et bien documenté.",
      icon: <FaRocket className="faq-icon" />
    },
    {
      id: '2',
      question: "Comment gérez-vous les délais de projet ?",
      answer: "J'établis un calendrier clair comprenant des jalons précis et j'utilise des outils comme Trello pour suivre l'avancement. Je pratique le développement itératif avec des livraisons régulières pour vous permettre de suivre l'évolution et d'apporter des ajustements si nécessaire. La communication transparente est au cœur de ma méthode de travail.",
      icon: <FaCalendarAlt className="faq-icon" />
    },
    {
      id: '3',
      question: "Pouvez-vous collaborer avec une équipe existante ?",
      answer: "Absolument ! Je m'intègre facilement dans des équipes déjà en place pour renforcer les efforts de conception et de développement, tout en assurant une communication fluide. Je suis habitué à travailler avec Git en équipe, aux revues de code, et aux méthodologies Agile/Scrum.",
      icon: <FaUsers className="faq-icon" />
    },
    {
      id: '4',
      question: "Quels outils utilisez-vous ?",
      answer: "J'utilise des outils tels que Figma, Git, Docker, Postman, VS Code, ainsi que des technologies comme React, Laravel, Node.js et Tailwind CSS pour assurer la qualité et la performance de mes projets. Je maîtrise également les outils de testing (Jest, PHPUnit) et les plateformes de déploiement (Vercel, AWS, DigitalOcean).",
      icon: <FaTools className="faq-icon" />
    }
  ];

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