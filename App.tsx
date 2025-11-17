import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProjectShowcaseSection from "./components/ProjectShowcaseSection";
import NavigationSection from "./components/NavigationSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <ProjectShowcaseSection />
        <NavigationSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
