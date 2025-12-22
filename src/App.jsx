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

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main-container" style={{ backgroundColor: '#050505', minHeight: '100vh' }}>
     
      <CanvasCursorWrapper />

      {isLoading ? (
        <Intro3D />
      ) : (
        <div className="fade-in-content">
          <Navbar />
          <HeroSection />
          <AboutMe />
          <Portfolio />
          <MyProjects />
          <MyTools />
          <Mydiplomes />
          <Faq />
          <CollaborateUs />
          <ContactMe />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
