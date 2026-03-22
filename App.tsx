import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProjectShowcaseSection from "./components/ProjectShowcaseSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page-shell min-h-screen flex flex-col bg-slate-50 text-slate-900 transition-[background-color] duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <main className="grow">
        <HeroSection />
        <ServicesSection />
        <ProjectShowcaseSection />
        {/*<NavigationSection />*/}
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
