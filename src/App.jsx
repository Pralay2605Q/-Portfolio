import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'

import Home from './sections/Home.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Experience from './sections/Experience.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import IntroAnimation from './components/IntroAnimation.jsx'

export default function App() { 
  const [introDone, setIntroDone] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'testimonials', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.id;
            const capitalizedName = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
            setActiveSection(capitalizedName);
            document.title = `${capitalizedName} - Portfolio`;
          }
        });
      },
      { threshold: 0.1, rootMargin: '-10% 0px -10% 0px' }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [introDone]);
  return (

    
    <div className="bg-black" style={{ position: 'relative' }}>

    {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)}/>}
      {introDone && (
    <div className='relative gradient text-white' style={{ position: 'relative' }}>

      <CustomCursor/>
      

      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      
    </div>
      )}
    </div>
    
  )
}
