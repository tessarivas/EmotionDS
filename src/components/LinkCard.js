import { LinkIcon } from 'lucide-react';

export default function LinkCard() {
  return (
    <div className="bg-white border-5 border-yellow-400 rounded-3xl p-5 max-w-md mx-auto shadow-lg shadow-yellow-400/50 
                    transform rotate-8 transition-all duration-300 ease-in-out
                    hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/70 hover:-translate-y-2 hover:rotate-0
                    cursor-pointer group">
      <div className="flex justify-center mb-2">
        <LinkIcon className="w-10 h-10 text-yellow-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
      </div>
      
      <p className="text-center text-gray-800 font-nats text-3xl transition-colors duration-300 group-hover:text-yellow-600">
        Comprender sus emociones puede prevenir crisis, mejorar el cuidado y fortalecer vínculos.
      </p>
    </div>
  );
}