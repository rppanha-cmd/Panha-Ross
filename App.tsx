
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Platform from './components/Platform';
import News from './components/News';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DonationModal from './components/DonationModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sections = {
    home: React.useRef<HTMLDivElement>(null),
    about: React.useRef<HTMLDivElement>(null),
    platform: React.useRef<HTMLDivElement>(null),
    news: React.useRef<HTMLDivElement>(null),
    gallery: React.useRef<HTMLDivElement>(null),
    contact: React.useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: keyof typeof sections) => {
    sections[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-100 text-gray-800 font-battambang">
      <Header scrollToSection={scrollToSection} openDonationModal={() => setIsModalOpen(true)} />
      <main>
        <div ref={sections.home}>
          <Hero scrollToContact={() => scrollToSection('contact')} />
        </div>
        <div ref={sections.about}>
          <About />
        </div>
        <div ref={sections.platform}>
          <Platform />
        </div>
        <div ref={sections.news}>
          <News />
        </div>
        <div ref={sections.gallery}>
          <Gallery />
        </div>
        <div ref={sections.contact}>
          <Contact />
        </div>
      </main>
      <Footer />
      <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;
