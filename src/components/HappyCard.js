import { SmileIcon } from 'lucide-react';

export default function HappyCard() {
  return (
    <div className="bg-white border-5 border-red-400 rounded-3xl p-5 max-w-md mx-auto shadow-lg shadow-red-400/50 
                    transform -rotate-12 transition-all duration-300 ease-in-out
                    hover:scale-105 hover:shadow-2xl hover:shadow-red-400/70 hover:-translate-y-2 hover:rotate-0
                    cursor-pointer group">
      <div className="flex justify-center mb-2">
        <SmileIcon className="w-10 h-10 text-red-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
      </div>
      
      <p className="text-center text-gray-800 font-nats text-3xl transition-colors duration-300 group-hover:text-red-400">
        Muchas personas con Síndrome de Down tienen dificultades para expresar cómo se sienten.
      </p>
    </div>
  );
}