import React, { useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import Swal from 'sweetalert2';
import '../styles/ContactMe.css';
import { motion } from "@motionone/react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      Swal.fire({
        title: 'Message Envoyé!',
        text: `Merci ${formData.name}, votre message a été envoyé avec succès.`,
        icon: 'success',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: '#1a1a1a',
        color: '#ffffff',
        iconColor: '#10b981',
        customClass: {
          popup: 'custom-swal-toast',
          title: 'custom-swal-title',
        }
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      // Show error toast notification
      Swal.fire({
        title: 'Erreur!',
        text: 'Erreur lors de l\'envoi du message.',
        icon: 'error',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: '#1a1a1a',
        color: '#ffffff',
        iconColor: '#ef4444'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id='contact'>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-header">
            <h2 className="contact-title">
               <span className="highlight"></span>
            </h2>
             <div className="header-designer-container">
                                                <motion.h2
                                                  className="projects-title-large"
                                                  initial={{ opacity: 0, x: 50 }}
                                                  animate={{ opacity: 1, x: 0 }}
                                                  transition={{ duration: 0.8, easing: "ease-out" }}
                                                >
                                                  <span className="line-one"> Créons Quelque Chose </span>
                                                  <span className="line-two highlight-large">d'Extraordinaire</span>
                                                </motion.h2>
                                              </div>
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
                    disabled={isSubmitting}
                  />
                  <div className="input-underline"></div>
                </div>
              </div>

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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                  ></textarea>
                  <div className="input-underline"></div>
                </div>
              </div>

              


<button class="animated-button"  type="submit" 
              
                disabled={isSubmitting}>
  <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span className="text">
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </span>
  <span class="circle"></span>
  <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
</button>

              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;