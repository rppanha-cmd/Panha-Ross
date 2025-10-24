
import React from 'react';

interface SectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children, className = 'bg-gray-100' }) => {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-koulen text-4xl md:text-5xl text-primary-blue">{title}</h2>
          <p className="text-lg text-primary-red mt-2">{subtitle}</p>
          <div className="mt-4 w-24 h-1 bg-accent-gold mx-auto rounded"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
