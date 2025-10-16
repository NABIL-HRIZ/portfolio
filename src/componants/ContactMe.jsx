import React, { useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import '../styles/ContactMe.css';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-section" id='contact'>
      <div className="contact-container">
        <div className="contact-content">
          {/* Header */}
          <div className="contact-header">
            <h2 className="contact-title">
              Créons Quelque Chose <span className="highlight">d'Extraordinaire</span>
            </h2>
            
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-container">
                  <div className="input-icon">
                    <FaUser className="icon" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom complet"
                    className="form-input"
                    required
                  />
                  <div className="input-underline"></div>
                </div>
              </div>

              {/* Email Field */}
              <div className="form-group">
                <div className="input-container">
                  <div className="input-icon">
                    <FaEnvelope className="icon" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Votre adresse email"
                    className="form-input"
                    required
                  />
                  <div className="input-underline"></div>
                </div>
              </div>

              <div className="form-group">
                <div className="input-container">
                  <div className="input-icon">
                    <FaComment className="icon" />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Parlez-moi de votre projet..."
                    className="form-textarea"
                    rows="5"
                    required
                  ></textarea>
                  <div className="input-underline"></div>
                </div>
              </div>

              <button type="submit" className="submit-btn">
                <span className="btn-text">Envoyer le message</span>
                <div className="btn-icon">
                  <FaPaperPlane className="send-icon" />
                </div>
              </button>
            </form>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default ContactMe;