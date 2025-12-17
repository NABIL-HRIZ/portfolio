import React, { useState, useEffect } from 'react';
// Imports des composants (respect des noms de tes dossiers)
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

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   
  
   
    const timer = setTimeout(() => {
     
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main-container" style={{ backgroundColor: '#050505', minHeight: '100vh' }}>
      {isLoading ? (
      
        <Intro3D />
      ) : (
      
        <div className="fade-in-content">
          <Navbar />
          <HeroSection />
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