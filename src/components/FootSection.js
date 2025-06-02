"use client";
import { useState } from "react";
import { Info } from "lucide-react";
import DisclaimerModal from "./DisclaimerModal";

export default function FootSection() {
  const [isDisclaimerModalOpen, setIsDisclaimerModalOpen] = useState(false);

  return (
    <>
      <section
        id="nosotros"
        className="text-black w-full min-h-screen bg-gradient-to-b from-white via-sky-100 to-sky-300 flex flex-col justify-center items-center px-8 py-16 relative"
      >
        <div className="text-center mb-5 mt-10">
          <h2 className="font-passion text-cyan-900 text-4xl md:text-5xl text-center max-w-4xl mb-6">
            La inclusión comienza con la comprensión emocional. ¿Te sumas a
            construir un mundo más empático?
          </h2>
        </div>
        <div className="text-center text-cyan-700">
          <p className="text-sm mb-2">
            © 2025 Emotion-DS | Proyecto de Cómputo Bioinspirado
          </p>
          <p className="text-xs mb-2">
            Desarrollado con el 💙 para crear un mundo más inclusivo
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
          <p className="text-xs text-cyan-900">
            Brayan Ivan Perez Ventura, Antonio Ramos Gonzalez, Andrea y Teresa Rivas Gómez
          </p>
        </div>
        <div className="fixed bottom-8 right-8 z-20">
          <button
            onClick={() => setIsDisclaimerModalOpen(true)}
            className="group bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <Info
              size={24}
              className="group-hover:rotate-12 transition-transform duration-300"
            />
          </button>
        </div>
      </section>
      <DisclaimerModal
        isOpen={isDisclaimerModalOpen}
        onClose={() => setIsDisclaimerModalOpen(false)}
      />
    </>
  );
}
