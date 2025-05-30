// src/app/components/Navbar.js
'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'importancia', 'tecnologia', 'nosotros'];
      let currentSection = '';

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClasses = (section) => {
    const isImportancia = activeSection === 'importancia';
    
    if (section === 'inicio') {
      return `font-medium transition-colors duration-200 ${
        isImportancia 
          ? 'text-white hover:text-orange-400' 
          : 'text-orange-300 hover:text-orange-500'
      }`;
    }
    if (section === 'importancia') {
      return `font-medium transition-colors duration-200 ${
        isImportancia 
          ? 'text-white hover:text-orange-400' 
          : 'text-sky-300 hover:text-sky-500'
      }`;
    }
    if (section === 'tecnologia') {
      return `font-medium transition-colors duration-200 ${
        isImportancia 
          ? 'text-white hover:text-orange-400' 
          : 'text-red-300 hover:text-red-500'
      }`;
    }
    if (section === 'nosotros') {
      return `font-medium transition-colors duration-200 ${
        isImportancia 
          ? 'text-white hover:text-orange-400' 
          : 'text-yellow-300 hover:text-yellow-500'
      }`;
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/20 backdrop-blur-md z-50 border-b border-white/30 font-nats text-2xl">
      <ul className="flex justify-center gap-8 p-2">
        <li><a href="#inicio" className={getLinkClasses('inicio')}>Inicio</a></li>
        <li><a href="#importancia" className={getLinkClasses('importancia')}>Importancia</a></li>
        <li><a href="#tecnologia" className={getLinkClasses('tecnologia')}>Tecnología</a></li>
        <li><a href="#nosotros" className={getLinkClasses('nosotros')}>Nosotros</a></li>
      </ul>
    </nav>
  );
}
