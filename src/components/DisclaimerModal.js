"use client";
import { X, Info } from "lucide-react";

export default function DisclaimerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-all duration-300"
        onClick={onClose}
      />
      <div className="fixed inset-0 flex items-center justify-center z-40 p-4 font-nats">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto transform transition-all duration-300 scale-100">
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500 p-3 rounded-full">
                <Info size={24} className="text-white" />
              </div>
              <h2 className="text-4xl font-bold text-blue-500">
                Aviso Importante
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">
                Propósito Educativo
              </h3>
              <p className="text-blue-700 text-xl">
                Este proyecto fue desarrollado con fines educativos como parte
                de una asignación escolar. El objetivo es explorar cómo la
                tecnología puede reconocer emociones humanas a través de
                expresiones faciales, incluyendo en personas con síndrome de
                Down.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="text-2xl font-semibold text-green-800 mb-3">
                Nuestro Compromiso
              </h3>
              <p className="text-green-700 text-xl">
                Respetamos profundamente a todas las personas y comunidades, y
                queremos enfatizar que este proyecto no tiene la intención de
                juzgar, etiquetar ni ofender a nadie de ninguna manera. Su
                propósito es puramente académico y exploratorio, y reconocemos
                la complejidad e individualidad de cada ser humano.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5">
              <h3 className="text-2xl font-semibold text-yellow-800 mb-3">
                Consideraciones Importantes
              </h3>
              <ul className="text-yellow-700 space-y-2 text-xl">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Este es un sistema experimental en desarrollo</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Los resultados pueden no ser completamente precisos
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    No debe usarse para diagnósticos o evaluaciones médicas
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Cada persona es única y valiosa independientemente de
                    cualquier tecnología
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 p-6">
            <button
              onClick={onClose}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white text-2xl py-3 px-6 rounded-lg transition-colors duration-200 cursor-pointer"
            >
              ENTIENDO Y ACEPTO
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
