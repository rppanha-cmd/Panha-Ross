
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  scrollToSection: (section: 'home' | 'about' | 'platform' | 'news' | 'gallery' | 'contact') => void;
  openDonationModal: () => void;
}

const NavLink: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="text-white hover:text-accent-gold transition-colors duration-300 px-3 py-2 rounded-md text-lg"
  >
    {children}
  </button>
);

const Header: React.FC<HeaderProps> = ({ scrollToSection, openDonationModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'ទំព័រដើម', section: 'home' as const },
    { label: 'អំពីខ្ញុំ', section: 'about' as const },
    { label: 'គោលនយោបាយ', section: 'platform' as const },
    { label: 'ព័ត៌មាន', section: 'news' as const },
    { label: 'រូបភាព', section: 'gallery' as const },
  ];

  const handleLinkClick = (section: 'home' | 'about' | 'platform' | 'news' | 'gallery' | 'contact') => {
    scrollToSection(section);
    setIsOpen(false);
  };

  const handleDonationClick = () => {
    openDonationModal();
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary-blue shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-white font-koulen text-3xl cursor-pointer" onClick={() => handleLinkClick('home')}>
            រស់ បញ្ញា
          </div>
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLink key={item.section} onClick={() => handleLinkClick(item.section)}>
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={openDonationModal}
              className="bg-accent-gold hover:bg-yellow-400 text-primary-blue font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              បរិច្ចាគ
            </button>
             <button
              onClick={() => handleLinkClick('contact')}
              className="bg-primary-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              ទំនាក់ទំនង
            </button>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-primary-blue/95 backdrop-blur-sm`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navItems.map((item) => (
              <NavLink key={item.section} onClick={() => handleLinkClick(item.section)}>
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={handleDonationClick}
              className="bg-accent-gold hover:bg-yellow-400 text-primary-blue font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 mt-4"
            >
              បរិច្ចាគ
            </button>
             <button
              onClick={() => handleLinkClick('contact')}
              className="bg-primary-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 mt-4"
            >
              ទំនាក់ទំនង
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
