"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "#about", label: "ABOUT", num: "01" },
  { href: "#services", label: "OPERATIONAL SCOPE", num: "02" },
  { href: "#tech", label: "STACK", num: "03" },
  { href: "#work", label: "WORK", num: "04" },
  { href: "#contact", label: "CONTACT", num: "05" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 w-full z-50 px-6 lg:px-20 xl:px-32 py-4 flex justify-between items-center bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-primary flex items-center justify-center font-display text-primary-foreground text-xs">
            KG
          </div>
          <div className="hidden lg:block h-4 w-[1px] bg-border" />
          <div className="hidden lg:flex flex-col font-mono text-[8px] tracking-[0.2em] font-bold text-muted-foreground opacity-50">
            <span>LOC: 18.5204° N, 73.8567° E</span>
            <span>SYS_VER: 2.0.4-STABLE</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
          {navLinks.slice(0, 4).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-center gap-2 hover:text-primary transition-colors"
            >
              <span className="opacity-30 group-hover:opacity-100">{link.num}_</span>{link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 bg-accent text-accent-foreground hover:bg-accent/90 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]"
          >
            TRANSMIT_DATA
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-foreground block"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-foreground block"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-foreground block"
          />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[65px] z-40 bg-background/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 font-mono text-sm font-bold uppercase tracking-[0.3em]">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <span className="text-xs opacity-40 group-hover:opacity-100">{link.num}_</span>
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]"
              >
                TRANSMIT_DATA
              </motion.a>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <ThemeToggle />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
