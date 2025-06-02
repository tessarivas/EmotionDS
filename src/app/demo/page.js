'use client'
import { useState, useCallback, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import ImageUpload from "@/components/ImageUpload";
import HelpModal from "@/components/HelpModal";
import ResultModal from "@/components/ResultModal";
import { MessageCircleQuestion } from "lucide-react";
import useHealth from "@/hooks/useHealth";

export default function DemoPage() {
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [detectedEmotion, setDetectedEmotion] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const { healthData, error: healthError, isLoading, checkApiHealth } = useHealth();

  useEffect(() => {
    checkApiHealth();
  }, []);

  const handleEmotionDetected = useCallback((emotion, confidencePercentage) => {
    setDetectedEmotion(emotion);
    setConfidence(confidencePercentage);
    setIsResultModalOpen(true);
  }, []);

  const handleModalClose = () => {
    setIsResultModalOpen(false);
    setDetectedEmotion(null);
    setConfidence(null);
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

        <div className="absolute top-7 right-8 z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
            <div className="text-sm font-semibold text-gray-700 mb-1">Estado de la API</div>
            {isLoading ? (
              <div className="text-xs text-gray-600">Verificando...</div>
            ) : healthError ? (
              <div className="text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-red-600">Desconectada</span>
                </div>
              </div>
            ) : healthData ? (
              <div className="text-xs space-y-1">
                <div className="flex items-center gap-1">
                  <div className={`w-2 h-2 rounded-full ${healthData.status === 'healthy' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span className={healthData.status === 'healthy' ? 'text-green-600' : 'text-red-600'}>
                    {healthData.statusMessage || (healthData.status === 'healthy' ? 'Saludable' : 'No saludable')}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className={`w-2 h-2 rounded-full ${healthData.model_loaded ? 'bg-blue-500' : 'bg-orange-500'}`}></div>
                  <span className={healthData.model_loaded ? 'text-blue-600' : 'text-orange-600'}>
                    {healthData.modelMessage || (healthData.model_loaded ? 'Modelo Cargado' : 'Modelo No Cargado')}
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <h2 className="font-passion text-cyan-900 text-4xl md:text-5xl text-center max-w-2xl px-4 mb-3 -mt-5">
          SUBE UNA IMAGEN PARA{" "}
          <span className="text-orange-400">IDENTIFICAR</span> UNA EMOCIÓN
        </h2>

        <ImageUpload onEmotionDetected={handleEmotionDetected} />

        <h2 className="font-passion text-white text-3xl text-center max-w-2xl mt-8 mb-2 drop-shadow-lg">
          EMOCIONES QUE PODEMOS IDENTIFICAR:
        </h2>

        <div className="flex flex-wrap justify-center gap-10 font-nats text-2xl">
          <div className="bg-yellow-500 text-white py-2 px-6 rounded-lg shadow-yellow-600 shadow-md">
            FELICIDAD
          </div>
          <div className="bg-cyan-500 text-white py-2 px-6 rounded-lg shadow-cyan-600 shadow-md">
            TRISTEZA
          </div>
          <div className="bg-orange-500 text-white py-2 px-6 rounded-lg shadow-orange-600 shadow-md">
            SORPRESA
          </div>
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
        onClose={handleModalClose}
        emotion={detectedEmotion}
        confidence={confidence}
      />
    </>
  );
}
