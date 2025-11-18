import React from "react";

function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-48 text-center overflow-hidden bg-white dark:bg-slate-900">
      <div
        className="absolute inset-0 bg-gradient-radial from-blue-100/50 to-transparent dark:from-blue-900/30 dark:to-transparent"
        style={{ transform: "scale(1.5)" }}
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Welcome to{" "}
          <span className="text-blue-600 dark:text-blue-400">crystelf</span>
        </h1>
        <p
          className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          An open-source organization dedicated to building innovative and
          accessible public services.
        </p>
        <div
          className="mt-8 flex justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#services"
            className="inline-block rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform hover:-translate-y-1"
          >
            Explore Services
          </a>
          <a
            href="https://github.com/crystelf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-slate-200 dark:bg-slate-800 px-6 py-3 text-base font-medium text-slate-700 dark:text-slate-200 shadow-lg hover:bg-slate-300 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-transform hover:-translate-y-1"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
