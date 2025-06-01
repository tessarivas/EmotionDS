'use client'
import { X } from 'lucide-react';

export default function HelpModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay con blur */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-xl z-30 transition-all duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-40 p-4 font-nats">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto transform transition-all duration-300 scale-100">
          
          {/* Header del modal */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800">
              Ayuda
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>

          {/* Contenido del modal */}
          <div className="p-6 space-y-6">
            
            {/* Información general */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                ¿Cómo funciona?
              </h3>
              <p className="text-gray-600 text-xl">
                Nuestro sistema de inteligencia artificial puede identificar emociones básicas 
                en personas con Síndrome de Down mediante el análisis de expresiones faciales.
              </p>
            </div>

            {/* Pasos */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Pasos para usar la herramienta:
              </h3>
              <div className="space-y-4">
                
                <div className="flex items-start space-x-3">
                  <div className="bg-cyan-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-xl">Sube una imagen</h4>
                    <p className="text-gray-600 text-lg">
                      Arrastra una foto o haz clic en "Subir imagen". Asegúrate de que el rostro sea visible.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-orange-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-xl">Espera el análisis</h4>
                    <p className="text-gray-600 text-lg">
                      Nuestro sistema procesará la imagen y detectará las emociones presentes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-xl">Revisa los resultados</h4>
                    <p className="text-gray-600 text-lg">
                      Verás qué emocion fue identificada.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Consejos */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Consejos para mejores resultados:
              </h3>
              <ul className="space-y-2 text-gray-600 text-lg">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  <span>Usa fotos con buena iluminación</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  <span>Asegúrate de que el rostro esté claramente visible</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  <span>Evita fotos borrosas o con sombras excesivas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  <span>Usa imágenes en formato JPG, PNG o WebP</span>
                </li>
              </ul>
            </div>

            {/* Emociones detectables */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Emociones que podemos detectar:
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xl font-medium">
                  Felicidad
                </span>
                <span className="bg-cyan-100 text-cyan-600 px-3 py-1 rounded-full text-xl font-medium">
                  Tristeza
                </span>
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xl font-medium">
                  Sorpresa
                </span>
              </div>
            </div>

          </div>

          {/* Footer del modal */}
          <div className="border-t border-gray-200 p-6 text-2xl">
            <button
              onClick={onClose}
              className="w-full bg-cyan-500 hover:bg-cyan-600 cursor-pointer text-white font-bold py-3 px-6 rounded-2xl transition-colors duration-200"
            >
              ¡Entendido!
            </button>
          </div>

        </div>
      </div>
    </>
  );
}