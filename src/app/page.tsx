"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { Certs } from "@/components/sections/Certs";
import { Work } from "@/components/sections/Work";
import { Prototypes } from "@/components/sections/Prototypes";
import { Growing } from "@/components/sections/Growing";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { NetworkLines } from "@/components/NetworkLines";

export default function PortfolioPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground relative overflow-x-hidden">

      {/* Background Decor */}
      <div className="noise hidden dark:block" />

      {/* Light Mode Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none dark:hidden">
        <div className="w-full h-full bg-blueprint-light" />
      </div>

      {/* Dark Mode Grid & Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none hidden dark:block">
        <div className="w-full h-full bg-blueprint opacity-60" />
      </div>
      <div className="fixed top-[5%] left-[5%] w-[40vw] h-[40vh] bg-[radial-gradient(ellipse_at_center,oklch(0.25_0.12_240/15%)_0%,transparent_70%)] pointer-events-none z-0 hidden dark:block" />
      <div className="fixed top-[5%] right-[5%] w-[35vw] h-[35vh] bg-[radial-gradient(ellipse_at_center,oklch(0.2_0.08_260/12%)_0%,transparent_70%)] pointer-events-none z-0 hidden dark:block" />
      <div className="fixed bottom-[10%] right-[10%] w-[30vw] h-[30vh] bg-[radial-gradient(ellipse_at_center,oklch(0.2_0.1_280/10%)_0%,transparent_70%)] pointer-events-none z-0 hidden dark:block" />
      <div className="fixed bottom-[10%] left-[10%] w-[30vw] h-[30vh] bg-[radial-gradient(ellipse_at_center,oklch(0.18_0.06_250/8%)_0%,transparent_70%)] pointer-events-none z-0 hidden dark:block" />
      <div className="fixed bottom-[10%] left-[10%] w-[30vw] h-[30vw] bg-[radial-gradient(ellipse_at_center,oklch(0.18_0.06_250/8%)_0%,transparent_70%)] pointer-events-none z-0 hidden dark:block" />

      {/* Network Lines Animation */}
      <NetworkLines />

      <Navbar />

      <Hero />

      <main className="w-full space-y-32 sm:space-y-40 py-24 relative z-10">
        <About />
        <Services />
        <TechStack />
        <Certs />
        <Work />
        <Prototypes />
        <Growing />
        <Contact />
      </main>

      <Footer />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:scale-110 ${showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  );
}
