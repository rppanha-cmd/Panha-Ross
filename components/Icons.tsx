
import React from 'react';

const iconSize = "w-16 h-16";

export const EconomyIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={iconSize} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

export const EducationIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={iconSize} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" />
  </svg>
);

export const HealthIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={iconSize} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

export const AgricultureIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={iconSize} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0 1.172 1.953 1.172 5.119 0 7.072zM12 12a3 3 0 100-6 3 3 0 000 6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a3 3 0 100-6 3 3 0 000 6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.485 10.243c.24-.96.24-1.92.24-2.885 0-2.885-1.58-5.228-3.515-5.228-1.936 0-3.515 2.343-3.515 5.228 0 .965 0 1.925.24 2.885" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.515 10.243c-.24-.96-.24-1.92-.24-2.885 0-2.885 1.58-5.228 3.515-5.228 1.936 0 3.515 2.343 3.515 5.228 0 .965 0 1.925-.24 2.885" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-3.314 0-6-2.686-6-6h12c0 3.314-2.686 6-6 6z" />
  </svg>
);

const socialIconSize = "w-8 h-8";

export const FacebookIcon: React.FC = () => (
  <svg className={socialIconSize} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
  </svg>
);

export const TwitterIcon: React.FC = () => (
    <svg className={socialIconSize} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.72-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
    </svg>
);

export const YoutubeIcon: React.FC = () => (
    <svg className={socialIconSize} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.582 7.373c-.225-.84-.888-1.503-1.728-1.728C18.252 5.25 12 5.25 12 5.25s-6.252 0-7.854.395c-.84.225-1.503.888-1.728 1.728C2.025 9.04 2 12 2 12s.025 2.96.42 4.627c.225.84.888 1.503 1.728 1.728C5.748 18.75 12 18.75 12 18.75s6.252 0 7.854-.395c.84-.225 1.503-.888 1.728-1.728C21.975 14.96 22 12 22 12s-.025-2.96-.418-4.627zM9.75 14.85V9.15l5.25 2.85-5.25 2.85z"></path>
    </svg>
);
