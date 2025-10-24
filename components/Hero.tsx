
import React from 'react';

interface HeroProps {
  scrollToContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToContact }) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white text-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
      >
        <div className="absolute inset-0 bg-primary-blue/70"></div>
      </div>
      <div className="relative z-10 p-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-accent-gold shadow-2xl">
            <img src="https://picsum.photos/300/300?random=1" alt="រស់ បញ្ញា" className="w-full h-full object-cover" />
        </div>
        <div className="text-left">
            <h1 className="font-koulen text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">
            រស់ បញ្ញា
            </h1>
            <p className="font-battambang text-2xl md:text-4xl mt-2 md:mt-4 text-accent-gold drop-shadow-md">
            ដើម្បីអនាគតកម្ពុជា!
            </p>
            <button
            onClick={scrollToContact}
            className="mt-8 bg-primary-red hover:bg-red-700 text-white font-bold py-3 px-8 text-xl rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
            ចូលរួមជាមួយយើង
            </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
