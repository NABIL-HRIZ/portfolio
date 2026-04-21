import React, { useState, useEffect } from 'react';
import { animate } from "motion";
import { useTranslation } from 'react-i18next';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import '../styles/ContactMe.css';

const ContactSection = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ email: '', name: '', message: '' });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = (currentStep) => {
    if (currentStep === 0 && formData.email) setStep(1);
    if (currentStep === 1 && formData.name) setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Données envoyées :", formData);
    setShowToast(true);
    
   
    setTimeout(() => {
      setShowToast(false);
      setStep(0);
      setFormData({ email: '', name: '', message: '' });
    }, 4000);
  };

  return (
    <section className="wow-contact-section" id='contactMe'>
      <div className="virtual-text-bg">CONTACT</div>

      {/* NOTIFICATION MODERNE (TOAST) */}
      {showToast && (
        <div className="modern-toast">
          <FaCheckCircle className="toast-icon" />
          <div className="toast-content">
            <p className="toast-msg">Message envoyé avec succès !</p>
            <p className="toast-sub">Merci {formData.name}, je reviens vers toi vite.</p>
          </div>
        </div>
      )}

      <div className="wow-container">
        <div className="wow-terminal-side">
          <div className="modern-terminal">
            <div className="term-header">
              <div className="term-dots">
                <span className="t-dot red"></span>
                <span className="t-dot yellow"></span>
                <span className="t-dot green"></span>
              </div>
              <span className="term-user">hariznabil663@gmail.com</span>
            </div>
            
            <form className="term-body" onSubmit={handleSubmit}>
              <p className="term-intro"># Initializing contact sequence...</p>
              
              {/* ETAPE 1: EMAIL */}
              <div className={`term-field active`}>
                <span className="term-label">01. Email:</span>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter email..."
                  value={formData.email}
                  onChange={handleChange}
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleNextStep(0))}
                  autoFocus
                  className="term-input-field"
                />
              </div>

              {/* ETAPE 2: NOM */}
              {step >= 1 && (
                <div className="term-field active">
                  <span className="term-label">02. Name:</span>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Enter name..."
                    value={formData.name}
                    onChange={handleChange}
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleNextStep(1))}
                    autoFocus
                    className="term-input-field"
                  />
                </div>
              )}

              {/* ETAPE 3: MESSAGE */}
              {step >= 2 && (
                <div className="term-field active">
                  <span className="term-label">03. Message:</span>
                  <textarea 
                    name="message"
                    placeholder="Write your project details..."
                    value={formData.message}
                    onChange={handleChange}
                    className="term-textarea-field"
                    autoFocus
                  />
                  <button type="submit" className="term-submit-btn">
                    <FaPaperPlane /> Send Message
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="wow-info-side">
          <h2 className="wow-main-title">
            Let's build <br /> <span>something great.</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;