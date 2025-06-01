'use client'
import { useState, useRef } from 'react';
import { ImageIcon } from 'lucide-react';

export default function ImageUpload() {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Por favor, sube solo archivos de imagen');
    }
  };

  const openFileDialog = () => {
    inputRef.current?.click();
  };

  return (
    <div className="w-96 h-96 bg-orange-100 shadow-xl rounded-xl flex flex-col items-center justify-center p-8 transition-all duration-200 font-nats">
      <div
        className={`w-full h-full flex flex-col items-center justify-center rounded-lg transition-all duration-200 ${
          dragActive ? 'bg-orange-100' : 'hover:bg-orange-100'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {uploadedImage ? (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <img 
              src={uploadedImage} 
              alt="Imagen subida" 
              className="max-w-full max-h-64 object-contain rounded-xl mb-4"
            />
            <button
              onClick={() => setUploadedImage(null)}
              className="bg-red-500 hover:bg-red-600 text-white text-2xl px-4 py-2 rounded-3xl transition-colors duration-200 cursor-pointer"
            >
              ELIMINAR IMAGEN
            </button>
          </div>
        ) : (
          <>
            <ImageIcon 
              size={180} 
              className="text-orange-300 mb-10"
            />
            
            <button
              onClick={openFileDialog}
              className="bg-orange-300 hover:bg-orange-400 text-white text-3xl py-3 px-6 rounded-3xl transition-colors duration-200 cursor-pointer"
            >
              SUBIR IMAGEN
            </button>
            
            <p className="text-orange-400 text-xl text-center">
              o arrastra una imagen aquí
            </p>
            
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
          </>
        )}
      </div>
    </div>
  );
}