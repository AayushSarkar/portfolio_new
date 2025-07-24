import ClientLayout from "./client-layout";
import ParticlesBackground from "@/app/components/ParticlesBackground";
import HeroSection from "@/app/components/HeroSection";

// ⚠️ 'next/head' only works in pages directory. For app directory, use <title> & <meta> inside layout.js or page metadata.

export default function HomePage() {
  return (
    <ClientLayout>
      <div className="relative bg-black min-h-screen overflow-hidden">
        <ParticlesBackground />
        <HeroSection />
      </div>
    </ClientLayout>
  );
}
