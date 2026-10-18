import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectShowcaseSection from "@/components/sections/ProjectShowcaseSection";
import AboutSection from "@/components/sections/AboutSection";
import Footer from "@/components/layout/Footer";

function App() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="grow">
        <HeroSection />
        <ServicesSection />
        <ProjectShowcaseSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
