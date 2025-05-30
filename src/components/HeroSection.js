// src/app/components/HeroSection.js
import ArrowDownAnimated from './ArrowDownAnimated';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="text-black w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-end items-start relative"
      style={{
        backgroundImage: 'url("/Hero.png")',
      }}
    >
      <div className="mb-51 ml-74 flex gap-4">
        <button className="bg-orange-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-2xl transition-colors duration-200 cursor-pointer">
          PROBAR DEMO
        </button>
        <a
          href="#nosotros"
          className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-3 px-6 rounded-2xl transition-all duration-200"
        >
          CONOCENOS
        </a>
      </div>
      
      {/* Flecha animada */}
      <ArrowDownAnimated />
    </section>
  );
}