// src/app/components/TechnologySection.js
'use client';
import { useState, useEffect } from 'react';

export default function TechnologySection() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    "/Carousel/ImageBlue.png",
    "/Carousel/ImageRed.png", 
    "/Carousel/ImageYellow.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section 
      id="tecnologia" 
      className="w-full h-screen text-black bg-white flex flex-col justify-center items-center"
    >      
      {/* Carousel Container */}
      <div className="mt-10 relative w-190 h-130 overflow-hidden rounded-lg shadow-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentImage 
                ? 'transform translate-x-0' 
                : index < currentImage 
                  ? 'transform -translate-x-full' 
                  : 'transform translate-x-full'
            }`}
          >
            <img 
              src={image} 
              alt={`Tecnología ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="flex space-x-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentImage ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
