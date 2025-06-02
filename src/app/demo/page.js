'use client'
import { useState, useCallback, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import ImageUpload from "@/components/ImageUpload";
import HelpModal from "@/components/HelpModal";
import ResultModal from "@/components/ResultModal";
import DisclaimerModal from "@/components/DisclaimerModal";
import { MessageCircleQuestion } from "lucide-react";
import useHealth from "@/hooks/useHealth";

export default function DemoPage() {
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [isDisclaimerModalOpen, setIsDisclaimerModalOpen] = useState(true); 
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
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

  const handleDisclaimerAccept = () => {
    setDisclaimerAccepted(true);
    setIsDisclaimerModalOpen(false);
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

        {disclaimerAccepted ? (
          <ImageUpload onEmotionDetected={handleEmotionDetected} />
        ) : (
          <div className="w-96 h-96 bg-gray-100 rounded-xl flex flex-col items-center justify-center p-8 opacity-50">
            <p className="text-gray-500 text-xl text-center">
              Acepta los términos para usar la demo
            </p>
          </div>
        )}

        <h2 className="font-passion text-white text-3xl text-center max-w-2xl mt-8 mb-2 drop-shadow-lg">
          EMOCIONES QUE PODEMOS IDENTIFICAR:
        </h2>

        <div className="flex flex-wrap justify-center gap-10 font-nats text-2xl">
          <div className={`py-2 px-6 rounded-lg shadow-md ${disclaimerAccepted ? 'bg-yellow-500 text-white shadow-yellow-600' : 'bg-gray-300 text-gray-500 shadow-gray-400'}`}>
            FELICIDAD
          </div>
          <div className={`py-2 px-6 rounded-lg shadow-md ${disclaimerAccepted ? 'bg-cyan-500 text-white shadow-cyan-600' : 'bg-gray-300 text-gray-500 shadow-gray-400'}`}>
            TRISTEZA
          </div>
          <div className={`py-2 px-6 rounded-lg shadow-md ${disclaimerAccepted ? 'bg-orange-500 text-white shadow-orange-600' : 'bg-gray-300 text-gray-500 shadow-gray-400'}`}>
            SORPRESA
          </div>
        </div>

        <div className="fixed bottom-8 right-8 z-20">
          <button 
            onClick={() => setIsHelpModalOpen(true)}
            disabled={!disclaimerAccepted}
            className={`group p-4 rounded-full shadow-lg transition-all duration-300 ${
              disclaimerAccepted 
                ? 'bg-cyan-500 hover:bg-cyan-600 text-white hover:shadow-xl hover:scale-110 active:scale-95 cursor-pointer'
                : 'bg-gray-400 text-gray-200 cursor-not-allowed'
            }`}
          >
            <MessageCircleQuestion 
              size={24} 
              className={disclaimerAccepted ? "group-hover:rotate-12 transition-transform duration-300" : ""}
            />
          </button>
        </div>
      </div>

      <DisclaimerModal 
        isOpen={isDisclaimerModalOpen}
        onClose={handleDisclaimerAccept} 
        onAccept={handleDisclaimerAccept}
      />

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
