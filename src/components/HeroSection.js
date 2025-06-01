// src/app/components/HeroSection.js
import ArrowDownAnimated from './ArrowDownAnimated';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="text-black w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-end items-start relative"
      style={{
        backgroundImage: 'url("/Hero.png")',
      }}
    >
      <div className="absolute top-15 left-8 z-10">
        <Image
          src="/LOGO.svg"
          alt="EmotionDS Logo"
          width={80}
          height={100}
          className="w-20 h-auto"
        />
      </div>

      <div className="mb-56 ml-70 flex gap-4">
        <Link href="/demo">
          <button className="bg-orange-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-2xl transition-colors duration-200 cursor-pointer">
            PROBAR DEMO
          </button>
        </Link>
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