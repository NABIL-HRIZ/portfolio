import React from 'react'
import Navbar from './componants/Navbar'
import HeroSection from './componants/HeroSection'
import MyProjects from './componants/Myprojects'
import MyTools from './componants/Mytools'
import Mydiplomes from './componants/Mydiplomes'
import Faq from './componants/Faq'
import CollaborateUs from './componants/CollaborateUs'
import Footer from './componants/Footer'
import ContactMe from './componants/ContactMe'
import Portfolio from './componants/Portfolio'

const App = () => {
  return (
    <>
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

    </>
   
  )
}

export default App
