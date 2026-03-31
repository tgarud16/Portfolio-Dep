"use client";

import React from "react";
import { User, Layers, Server, Briefcase, Mail, Github, Linkedin } from "lucide-react";

const footerLinks = [
  { href: "#about", label: "ABOUT", icon: User },
  { href: "#services", label: "SERVICES", icon: Layers },
  { href: "#tech", label: "STACK", icon: Server },
  { href: "#work", label: "WORK", icon: Briefcase },
  { href: "#contact", label: "CONTACT", icon: Mail },
];

export const Footer = () => (
  <footer className="py-16 border-t border-border bg-card z-10 relative">
    <div className="px-6 lg:px-20 xl:px-32">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center font-display text-primary-foreground text-sm">
              KG
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">KIRAN_GARUD.SYS</span>
          </div>
          <p className="font-mono text-[10px] text-muted-foreground/80 max-w-xs leading-relaxed">
            DevOps &amp; Platform Engineer building scalable infrastructure, CI/CD pipelines, and cloud-native systems.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">QUICK_LINKS</span>
          <div className="flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-[0.2em]">
            {footerLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary hover:opacity-100 opacity-75 transition-all duration-200 flex items-center gap-2.5"
                >
                  <IconComponent className="w-[18px] h-[18px]" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">CONNECT</span>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/kirangarudofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 hover:text-primary transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/kiran-garud-ab4674205"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 hover:text-primary transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">STATUS</span>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
            <span className="font-mono text-[10px] text-muted-foreground">AVAILABLE FOR WORK</span>
          </div>
        </div>
      </div>

      <div className="pt-12 mt-2 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
          © 2026 KIRAN_GARUD.SYS // ALL RIGHTS RESERVED
        </div>

      </div>
    </div>
  </footer>
);
