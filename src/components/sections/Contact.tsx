"use client";

import React from "react";
import { Linkedin, Github, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => (
  <section id="contact" className="py-24 text-center space-y-16 px-6 lg:px-20 xl:px-32">
    <div className="space-y-4">
      <h2 className="text-4xl sm:text-7xl md:text-9xl font-black font-display uppercase italic tracking-[-0.05em] leading-none">
        INITIATE <br /> <span className="text-primary">CONTACT</span>
      </h2>
      <p className="text-muted-foreground font-mono text-xs font-bold uppercase tracking-[0.4em]">Open to DevOps and Infrastructure Engineering opportunities.</p>
      <p className="text-sm text-muted-foreground/70 font-medium tracking-wide leading-relaxed">
        Open to opportunities in DevOps, Platform Engineering, Cloud Infrastructure, and Site Reliability Engineering roles.
      </p>
    </div>

    <div className="flex flex-wrap justify-center gap-4">
      <Button size="lg" className="rounded-none px-6 sm:px-12 font-black text-xs tracking-widest bg-primary text-primary-foreground h-16 group relative overflow-hidden" asChild>
        <a href="mailto:kgarud30@gmail.com">
          <span className="relative z-10 flex items-center gap-2"><Mail className="w-5 h-5" /> SEND EMAIL</span>
          <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </a>
      </Button>
      <div className="flex gap-4">
        <Button size="lg" variant="outline" className="rounded-none px-8 font-black text-xs h-16 border-border hover:bg-muted" asChild>
          <a href="https://linkedin.com/in/kiran-garud-ab4674205" target="_blank"><Linkedin className="h-5 w-5" /> <span className="ml-2 hidden sm:inline">LINKEDIN</span></a>
        </Button>
        <Button size="lg" variant="outline" className="rounded-none px-8 font-black text-xs h-16 border-border hover:bg-muted" asChild>
          <a href="https://github.com/kirangarudofficial" target="_blank"><Github className="h-5 w-5" /> <span className="ml-2 hidden sm:inline">GITHUB</span></a>
        </Button>
        <Button size="lg" variant="outline" className="rounded-none px-8 font-black text-xs h-16 border-border hover:bg-muted" asChild>
          <a href="/AWS-DevOps-Kiran-Garud-00.pdf" target="_blank" rel="noopener noreferrer"><FileText className="h-5 w-5" /> <span className="ml-2 hidden sm:inline">RESUME</span></a>
        </Button>
      </div>
    </div>
  </section>
);
