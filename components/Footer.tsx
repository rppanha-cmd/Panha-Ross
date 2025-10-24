
import React from 'react';
import { FacebookIcon, TwitterIcon, YoutubeIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-blue text-white">
      <div className="container mx-auto py-8 px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-accent-gold transition-colors duration-300"><FacebookIcon /></a>
          <a href="#" className="hover:text-accent-gold transition-colors duration-300"><TwitterIcon /></a>
          <a href="#" className="hover:text-accent-gold transition-colors duration-300"><YoutubeIcon /></a>
        </div>
        <p className="font-battambang">
          &copy; {new Date().getFullYear()} រក្សាសិទ្ធិដោយ ក្រុមការងារ រស់ បញ្ញា។
        </p>
        <p className="text-sm mt-2 opacity-75">
          គេហទំព័រនេះបង្កើតឡើងសម្រាប់គោលបំណងនយោបាយ។
        </p>
      </div>
    </footer>
  );
};

export default Footer;
