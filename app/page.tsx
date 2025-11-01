import ParticlesBackground from "./components/ParticlesBackground";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>
      
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}
