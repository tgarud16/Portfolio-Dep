"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Terminal } from "@/components/Terminal";

export const Hero = () => (
  <header className="relative min-h-screen flex flex-col justify-center items-center px-6 lg:px-20 xl:px-32 text-center z-10 py-32 overflow-hidden">
    {/* Background Image — preloaded via layout, renders on first paint */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: "url('/abstract-black-futuristic-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        opacity: 0.22,
        zIndex: 0,
      }}
    />
    {/* Multi-layer overlay: vignette + bottom fade */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at center, transparent 20%, hsl(var(--background) / 0.65) 80%)," +
          "linear-gradient(to bottom, hsl(var(--background) / 0.3) 0%, transparent 30%, transparent 65%, hsl(var(--background) / 0.95) 100%)",
        zIndex: 1,
      }}
    />
    {/* Decorative Lines */}
    <div className="absolute top-1/4 -left-12 w-64 h-[1px] bg-primary/20 rotate-[30deg] pointer-events-none" style={{ zIndex: 2 }} />
    <div className="absolute bottom-1/4 -right-12 w-64 h-[1px] bg-accent/20 rotate-[30deg] pointer-events-none" style={{ zIndex: 2 }} />
    <div className="absolute top-0 right-[20%] w-[1px] h-full bg-border pointer-events-none hidden md:block" style={{ zIndex: 2 }} />

    {/*
      Content wrapper: NO opacity fade on mount — renders text immediately.
      Individual elements use fast, tight animations for polish without delay.
    */}
    <div className="space-y-16 w-full relative max-w-7xl mx-auto">
      <div className="space-y-6">
        {/* Status badge — instant render, subtle slide-in */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.05, ease: "easeOut" }}
          className="inline-flex items-center gap-4 bg-muted border border-border px-4 py-1.5"
        >
          <div className="w-2 h-2 bg-accent animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.3em] font-bold">
            Status: <span className="text-primary">Operational</span> // System: <span className="text-primary">KRN-01</span>
          </span>
        </motion.div>

        {/* Main heading — snappy slide-in, minimal delay */}
        <div className="relative">
          <h1 className="text-[12vw] md:text-[8rem] font-display tracking-tighter leading-[0.8] uppercase flex flex-col items-center">
            <motion.span
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Kiran
            </motion.span>
            <motion.span
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: 0.07 }}
              className="block text-primary relative"
            >
              Garud
              <span className="absolute -bottom-4 right-0 text-[12px] font-mono tracking-widest opacity-30 text-foreground">
                [DevOps &amp; Platform Engineer]
              </span>
            </motion.span>
          </h1>
        </div>

        {/* Tagline — appears almost immediately */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl font-mono text-muted-foreground max-w-4xl mx-auto uppercase tracking-tighter pt-8"
        >
          Building and operating <span className="text-accent italic">reliable, automated, and scalable</span> cloud infrastructure and deployment systems.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center text-left w-full pt-16 border-t border-border">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest opacity-50">Value Statement</h3>
            </div>
            <p className="text-base md:text-lg leading-relaxed opacity-90 space-y-3">
              <span className="block">Focused on platform engineering, automated deployment pipelines, and observability to maintain system reliability and operational stability.</span>
              <span className="block mt-3">I work with a production-first approach — prioritizing infrastructure automation, clear system boundaries, and service availability across all layers.</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="rounded-none px-8 font-bold text-[10px] tracking-[0.2em] bg-primary hover:bg-primary/90 text-primary-foreground h-14 relative group overflow-hidden" asChild>
              <a href="#work">
                <span className="relative z-10">VIEW_ENGINEERING_WORK</span>
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </Button>
            <div className="flex gap-2">
              <Button size="lg" variant="outline" className="rounded-none px-6 font-bold text-[10px] tracking-[0.2em] h-14 border-border hover:bg-muted" asChild>
                <a href="https://github.com/kirangarudofficial" target="_blank"><Github className="h-4 w-4" /></a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-none px-6 font-bold text-[10px] tracking-[0.2em] h-14 border-border hover:bg-muted" asChild>
                <a href="#contact"><Mail className="h-4 w-4" /></a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-none px-6 font-bold text-[10px] tracking-[0.2em] h-14 border-border hover:bg-muted" asChild>
                <a href="/AWS-DevOps-Kiran-Garud-00.pdf" target="_blank" rel="noopener noreferrer"><FileText className="h-4 w-4" /></a>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative group flex items-center justify-center">
          <div className="absolute -inset-4 bg-primary/5 border border-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <Terminal />
        </div>
      </div>
    </div>
  </header>
);
