"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  number: string;
  icon?: React.ReactNode;
  description?: string;
}

export const SectionHeader = ({ title, subtitle, number, icon, description }: SectionHeaderProps) => (
  <div className="mb-12 relative">
    <div className="absolute -left-16 top-0 h-full w-[1px] bg-border hidden lg:flex flex-col justify-between py-2 overflow-hidden">
      <div className="w-2 h-2 bg-primary -ml-[3.5px]" />
      <div className="w-1 h-1 bg-border -ml-[1.5px]" />
      <div className="w-1 h-1 bg-border -ml-[1.5px]" />
      <div className="w-2 h-2 bg-accent -ml-[3.5px]" />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <div className="flex items-center gap-4">
        <span className="font-mono text-[10px] text-accent font-bold tracking-[0.3em]">REF_00{number}</span>
        <div className="h-[1px] flex-1 bg-border" />
        <span className="font-mono text-[8px] text-muted-foreground uppercase tracking-widest opacity-40">COORD: {number} // 40.7128° N</span>
      </div>

      <div className="space-y-2">
        <p className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
          {subtitle}
        </p>
        <div className="flex items-center gap-3">
          {icon && (
            <div className="w-7 h-7 flex items-center justify-center text-primary/60 flex-shrink-0">
              {icon}
            </div>
          )}
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight uppercase leading-tight">
            {title}
          </h2>
        </div>
        {description && (
          <p className="text-sm text-muted-foreground/70 font-medium tracking-wide mt-1">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  </div>
);
