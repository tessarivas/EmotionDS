// src/app/page.js
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TechnologySection from '@/components/TechnologySection';
import AboutSection from '@/components/AboutSection';
import FootSection from '@/components/FootSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="scroll-smooth">
        <HeroSection />
        <AboutSection />
        <TechnologySection />
        <FootSection />
      </main>
    </>
  );
}
