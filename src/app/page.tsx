import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ActivitySection from "@/components/ActivitySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ActivitySection />
      <Footer />
    </main>
  );
}
