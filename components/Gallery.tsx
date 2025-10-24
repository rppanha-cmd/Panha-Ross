
import React from 'react';
import Section from './Section';

const images = [
    'https://picsum.photos/500/300?random=6',
    'https://picsum.photos/400/500?random=7',
    'https://picsum.photos/500/300?random=8',
    'https://picsum.photos/500/300?random=9',
    'https://picsum.photos/400/500?random=10',
    'https://picsum.photos/500/300?random=11',
];

const Gallery: React.FC = () => {
    return (
        <Section title="រូបភាពសកម្មភាព" subtitle="ពេលវេលាជាមួយប្រជាពលរដ្ឋ" className="bg-white">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((src, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-md">
                        <img 
                            src={src} 
                            alt={`Gallery image ${index + 1}`} 
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
                        />
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Gallery;
