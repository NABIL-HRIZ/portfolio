import React, { useState, useEffect } from 'react';
import Navbar from './componants/Navbar';
import HeroSection from './componants/HeroSection';
import MyProjects from './componants/Myprojects';
import MyTools from './componants/Mytools';
import Mydiplomes from './componants/Mydiplomes';
import Faq from './componants/Faq';
import CollaborateUs from './componants/CollaborateUs';
import Footer from './componants/Footer';
import ContactMe from './componants/ContactMe';
import Portfolio from './componants/Portfolio';
import Intro3D from './componants/Intro3D';
import CanvasCursorWrapper from './componants/CanvasCursorWrapper';
import AboutMe from './componants/AboutMe';
import { Analytics } from '@vercel/analytics/react';
import PortfolioHero from './componants/PortfolioHero';
import ContactSection from './componants/ContactSection';
import Services from './componants/Services';
import ModernNavbar from './componants/ModernNavbar';
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
  if (!isLoading) {
    window.scrollTo({ top: 0, behavior: 'instant' }); 
    document.body.style.overflow = "auto";
  }
}, [isLoading]);

  return (
    <div className="main-container" style={{ backgroundColor: '#050505', minHeight: '100vh' }}>
     
     

      {isLoading ? (
        <Intro3D />
      ) : (
        <div className="fade-in-content">
          <ModernNavbar />
          <Analytics />
          <PortfolioHero />
          <AboutMe />
          <Portfolio />
          <MyProjects />
          <Services />
            <MyTools /> 
          <Mydiplomes />
          <Faq />
         <ContactSection />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
