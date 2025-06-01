'use client'
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import ImageUpload from "@/components/ImageUpload";
import HelpModal from "@/components/HelpModal";
import ResultModal from "@/components/ResultModal";
import { MessageCircleQuestion } from "lucide-react";

export default function DemoPage() {
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [detectedEmotion, setDetectedEmotion] = useState(null);

  const handleEmotionClick = (emotion) => {
    setDetectedEmotion(emotion);
    setIsResultModalOpen(true);
  };

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat py-10 flex flex-col items-center justify-center"
        style={{
          backgroundImage: 'url("/DEMO.png")',
        }}
      >
        <div className="absolute top-7 left-8 z-10">
          <Link href="/">
            <Image
              src="/LOGO.svg"
              alt="EmotionDS Logo"
              width={80}
              height={100}
              className="w-20 h-auto cursor-pointer hover:scale-105 transition-transform duration-200"
            />
          </Link>
        </div>

        <h2 className="font-passion text-cyan-900 text-4xl md:text-5xl text-center max-w-2xl px-4 mb-3 -mt-5">
          SUBE UNA IMAGEN PARA{" "}
          <span className="text-orange-400">IDENTIFICAR</span> UNA EMOCIÓN
        </h2>

        <ImageUpload />

        <h2 className="font-passion text-white text-3xl text-center max-w-2xl mt-8 mb-2 drop-shadow-lg">
          EMOCIONES QUE PODEMOS IDENTIFICAR:
        </h2>

        <div className="flex flex-wrap justify-center gap-10 font-nats text-2xl">
          <button 
            onClick={() => handleEmotionClick('FELICIDAD')}
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-lg shadow-yellow-600 shadow-md cursor-pointer transition-all duration-200"
          >
            FELICIDAD
          </button>
          <button 
            onClick={() => handleEmotionClick('TRISTEZA')}
            className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-6 rounded-lg shadow-cyan-600 shadow-md cursor-pointer transition-all duration-200"
          >
            TRISTEZA
          </button>
          <button 
            onClick={() => handleEmotionClick('SORPRESA')}
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-lg shadow-orange-600 shadow-md cursor-pointer transition-all duration-200"
          >
            SORPRESA
          </button>
        </div>

        <div className="fixed bottom-8 right-8 z-20">
          <button 
            onClick={() => setIsHelpModalOpen(true)}
            className="group bg-cyan-500 hover:bg-cyan-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <MessageCircleQuestion 
              size={24} 
              className="group-hover:rotate-12 transition-transform duration-300"
            />
          </button>
        </div>
      </div>

      <HelpModal 
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
      />

      <ResultModal 
        isOpen={isResultModalOpen}
        onClose={() => setIsResultModalOpen(false)}
        emotion={detectedEmotion}
      />
    </>
  );
}
