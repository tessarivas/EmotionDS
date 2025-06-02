'use client'
import { X, Heart, Frown, Zap } from 'lucide-react';

const emotionConfig = {
  FELICIDAD: {
    color: 'yellow',
    bgColor: 'bg-yellow-500',
    textColor: 'text-yellow-600',
    lightBg: 'bg-yellow-50',
    icon: Heart,
    message: "¡Excelente! Se ha detectado una expresión de alegría y bienestar."
  },
  TRISTEZA: {
    color: 'cyan',
    bgColor: 'bg-cyan-500',
    textColor: 'text-cyan-600',
    lightBg: 'bg-cyan-50',
    icon: Frown,
    message: "Se ha identificado una expresión de melancolía o tristeza."
  },
  SORPRESA: {
    color: 'orange',
    bgColor: 'bg-orange-500',
    textColor: 'text-orange-600',
    lightBg: 'bg-orange-50',
    icon: Zap,
    message: "Se ha detectado una expresión de asombro o sorpresa."
  }
};

export default function ResultModal({ isOpen, onClose, emotion, confidence }) {
  if (!isOpen || !emotion) return null;

  const config = emotionConfig[emotion];
  const IconComponent = config.icon;

  return (
    <>
      {/* Overlay con blur */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-all duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-40 p-4 font-nats">
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full transform transition-all duration-300 scale-100">
          
          {/* Header del modal */}
          <div className={`${config.lightBg} p-6 rounded-t-2xl border-b border-gray-200`}>
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-3">
                <div className={`${config.bgColor} p-3 rounded-full`}>
                  <IconComponent size={32} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Resultado del Análisis
                  </h2>
                  <p className="-mt-2 text-lg text-gray-600">
                    Emoción detectada con éxito
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/50 rounded-full transition-colors duration-200"
              >
                <X size={20} className="text-gray-600 cursor-pointer" />
              </button>
            </div>
          </div>

          {/* Contenido del modal */}
          <div className="p-8 text-center space-y-6">
            
            {/* Mensaje principal */}
            <div>
              <p className="text-2xl text-gray-700 mb-4">
                La emoción identificada es:
              </p>
              
              {/* Nombre de la emoción en grande */}
              <h1 className={`text-5xl font-bold ${config.textColor} mb-4`}>
                {emotion}
              </h1>
              
              {/* Mostrar confianza si está disponible */}
              {confidence && (
                <div className="mb-4">
                  <p className="text-lg text-gray-600 mb-2">Nivel de confianza:</p>
                  <p className={`text-3xl font-bold ${config.textColor}`}>
                    {confidence}%
                  </p>
                </div>
              )}
              
              {/* Descripción */}
              <p className="text-2xl text-gray-600">
                {config.message}
              </p>
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-md text-gray-500">
                <strong>Nota:</strong> Este es un sistema en desarrollo (demo). 
                Los resultados pueden no ser completamente precisos. 
                Este proyecto está diseñado para asistir en el reconocimiento 
                de emociones básicas.
              </p>
            </div>

          </div>

          {/* Footer del modal */}
          <div className="border-t border-gray-200 p-6 space-y-3">
            <button
              onClick={onClose}
              className={`w-full ${config.bgColor} hover:opacity-80 text-white py-3 px-6 rounded-lg transition-all duration-200 text-2xl cursor-pointer`}
            >
              ANALIZAR OTRA IMAGEN
            </button>
            <button
              onClick={onClose}
              className="w-full border-2 border-gray-300 hover:border-gray-400 text-gray-300 hover:text-gray-400 text-xl py-2 px-6 rounded-lg transition-colors duration-200 cursor-pointer"
            >
              CERRAR
            </button>
          </div>

        </div>
      </div>
    </>
  );
}