// src/app/components/AboutSection.js
import Particles from "./Particles/Particles";
import HappyCard from "./HappyCard";
import LinkCard from "./LinkCard";
import TechCard from "./TechCard";

export default function AboutSection() {
  return (
    <>
      <section
        id="importancia"
        className="w-full h-screen text-black bg-gradient-to-br from-yellow-300 to-orange-400 flex relative overflow-hidden"
      >
        <div className="mix-blend-lighten absolute inset-0 z-10">
          <div className="w-full h-full relative">
            <Particles
              particleColors={["#ffffff", "#ffffff", "#ffffff"]}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={false}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          <h2 className="font-passion text-white text-4xl md:text-5xl text-center max-w-3xl px-4">
            ¿Por qué identificar emociones en personas con Síndrome de Down?
          </h2>
        </div>

        <div className="absolute top-24 left-16 z-20">
          <HappyCard />
        </div>

        <div className="absolute top-22 right-16 z-20">
          <LinkCard />
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
          <TechCard />
        </div>
      </section>
    </>
  );
}
