import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectShowcaseSection from "@/components/sections/ProjectShowcaseSection";
import AboutSection from "@/components/sections/AboutSection";
import Footer from "@/components/layout/Footer";

function App() {
  return (
    <div className="page-shell min-h-screen flex flex-col bg-slate-50 text-slate-900 transition-[background-color] duration-300 dark:bg-slate-950 dark:text-slate-100">
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
