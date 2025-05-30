import { ComputerIcon } from 'lucide-react';

export default function TechCard() {
  return (
    <div className="bg-white border-5 border-sky-400 rounded-3xl p-5 max-w-md mx-auto shadow-lg shadow-sky-400/50 
                    transform -rotate-2 transition-all duration-300 ease-in-out
                    hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/70 hover:-translate-y-2 hover:rotate-0
                    cursor-pointer group">
      <div className="flex justify-center mb-2">
        <ComputerIcon className="w-10 h-10 text-sky-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
      </div>
      
      <p className="text-center text-gray-800 font-nats text-3xl transition-colors duration-300 group-hover:text-sky-600">
        La empatía también puede ser potenciada con herramientas tecnológicas accesibles.
      </p>
    </div>
  );
}