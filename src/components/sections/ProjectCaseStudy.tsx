"use client";

import React, { useState } from "react";
import { CaseStudy } from "@/data/CaseStudyData";
import { Github, ExternalLink, ArrowRight, ChevronRight, Terminal as TerminalIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCaseStudyProps {
  caseStudy: CaseStudy;
  onClose: () => void;
}

export function ProjectCaseStudy({ caseStudy, onClose }: ProjectCaseStudyProps) {
  const [activeDiagramIndex, setActiveDiagramIndex] = useState(0);

  return (
    <div className="flex flex-col space-y-6">
      {/* 1. HEADER */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">
          <span>KG</span> <ChevronRight className="w-3 h-3" /> <span>WORK</span> <ChevronRight className="w-3 h-3" /> <span className="text-primary">{caseStudy.title}</span>
        </div>
        
        <div>
          <h1 className="text-3xl md:text-5xl font-black font-display uppercase italic text-foreground tracking-tight leading-none mb-4">
            {caseStudy.title}
          </h1>
          <h2 className="text-lg md:text-xl font-mono text-muted-foreground border-l-2 border-primary pl-4 tracking-tight">
            {caseStudy.subtitle}
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="px-3 py-1.5 bg-muted/30 border border-border rounded-modern-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono text-foreground font-semibold">{caseStudy.role}</span>
          </div>
          <div className="px-3 py-1.5 border border-border/50 rounded-modern-sm text-xs font-mono text-muted-foreground">
            {caseStudy.duration}
          </div>
          {caseStudy.githubUrl && (
            <a 
              href={caseStudy.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary transition-colors flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest rounded-modern-sm ml-auto sm:ml-0"
            >
              <Github className="w-4 h-4" /> View Source
            </a>
          )}
        </div>
      </div>

      {/* 2. METRICS BAR */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        {caseStudy.metrics.map((metric, idx) => (
          <div key={idx} className="border border-border bg-card p-4 rounded-modern flex flex-col items-center justify-center text-center h-full">
            <span className="text-2xl md:text-3xl font-mono font-bold text-foreground leading-none">{metric.value}</span>
            <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-2 leading-tight">{metric.label}</span>
          </div>
        ))}
      </div>

      {/* 3. PROJECT DESCRIPTION */}
      <div className="mt-6 border-l border-primary/30 pl-6 py-1">
        <p className="text-sm lg:text-base text-muted-foreground leading-relaxed font-medium">
          {caseStudy.description}
        </p>
      </div>

      {/* 4. ARCHITECTURE VIEWER */}
      <div className="mt-8 max-w-5xl space-y-4">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
          <TerminalIcon className="w-4 h-4" /> ARCHITECTURE VISUALIZATION
        </h3>
        <div className="border border-border bg-card rounded-modern p-2">
          <div className="aspect-video relative rounded-modern-sm overflow-hidden bg-muted/20 border border-border/50 flex items-center justify-center group">
            {/* Fallback pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentcolor 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            
            {caseStudy.diagrams.length > 0 && (
              <img 
                src={caseStudy.diagrams[activeDiagramIndex].image} 
                alt={caseStudy.diagrams[activeDiagramIndex].label}
                className="w-full h-full object-scale-down z-10 transition-opacity duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48cmVjdCBmaWxsPSIjMWYyOTM3IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIvPjx0ZXh0IGZpbGw9IiM2YjcyODAiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTBweCIgeD0iNTAiIHk9IjUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSI+SW1hZ2UgTm90IEZvdW5kPC90ZXh0Pjwvc3ZnPg==';
                }}
              />
            )}
            {/* Label overlay on hover */}
            <div className="absolute bottom-4 right-4 z-20 bg-background/90 border border-border backdrop-blur-sm px-3 py-1.5 rounded textxs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              {caseStudy.diagrams[activeDiagramIndex]?.label}
            </div>
          </div>
          
          <div className="flex gap-2 p-2 overflow-x-auto mt-2 pb-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
            {caseStudy.diagrams.map((diag, idx) => (
              <button
                key={idx}
                onClick={() => setActiveDiagramIndex(idx)}
                className={cn(
                  "px-4 py-2 text-xs font-mono whitespace-nowrap border rounded transition-colors",
                  activeDiagramIndex === idx 
                    ? "bg-primary border-primary text-primary-foreground" 
                    : "bg-muted/30 border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                )}
              >
                {diag.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 5. DEPLOYMENT PIPELINE */}
      <div className="space-y-4">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
          <TerminalIcon className="w-4 h-4" /> DEPLOYMENT PIPELINE
        </h3>
        <div className="border border-border bg-card p-6 rounded-modern overflow-x-auto">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 min-w-max md:min-w-0">
            {caseStudy.pipeline.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center justify-center p-4 border border-border bg-muted/20 w-40 text-center rounded relative group hover:border-primary/50 transition-colors">
                  <span className="text-xs font-bold text-foreground mb-1">{step.step}</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary px-2 py-0.5 bg-primary/10 rounded">{step.tool}</span>
                </div>
                {idx < caseStudy.pipeline.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block flex-shrink-0" />
                )}
                {idx < caseStudy.pipeline.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground md:hidden flex-shrink-0 rotate-90 my-2" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* 6. MICROSERVICES BY CATEGORY */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            <TerminalIcon className="w-4 h-4" /> MICROSERVICES ARCHITECTURE
          </h3>
          <span className="text-[10px] font-mono border border-border px-2 py-1 bg-muted/30 uppercase text-primary">
            48 Services Defined
          </span>
        </div>
        
        <div className="grid gap-4">
          {caseStudy.serviceCategories.map((cat, idx) => (
            <div key={idx} className="border border-border bg-card p-4 rounded-modern space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground border-b border-border/50 pb-2">
                {cat.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.services.map((service, sIdx) => (
                  <span key={sIdx} className="font-mono text-[10px] border border-border bg-muted/20 px-2 py-1 text-muted-foreground rounded-sm hover:text-foreground hover:border-primary/30 transition-colors cursor-default">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. ARCHITECTURE DECISIONS */}
      <div className="space-y-4">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
          <TerminalIcon className="w-4 h-4" /> ARCHITECTURE DECISIONS
        </h3>
        <div className="grid gap-3">
          {caseStudy.architectureDecisions.map((decision, idx) => (
            <div key={idx} className="p-4 border border-border bg-muted/10 border-l-2 border-l-primary rounded-r-modern">
              <h4 className="font-bold text-sm text-foreground mb-1">{decision.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{decision.reason}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 8. CHALLENGES & SOLUTIONS */}
      <div className="space-y-4">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
          <TerminalIcon className="w-4 h-4" /> CHALLENGES & SOLUTIONS
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {caseStudy.challenges.map((challenge, idx) => (
            <div key={idx} className="p-5 border border-border bg-card rounded-modern flex flex-col h-full hover:border-primary/40 transition-colors">
              <h4 className="font-bold text-sm text-foreground mb-3">{challenge.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed mt-auto">{challenge.solution}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 9. WHAT I LEARNED */}
      <div className="space-y-4">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
          <TerminalIcon className="w-4 h-4" /> KEY LEARNINGS
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {caseStudy.learnings.map((learning, idx) => (
            <div key={idx} className="flex gap-3 items-start border border-border/50 p-4 rounded bg-muted/5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-sm text-foreground mb-1">{learning.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{learning.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 10. FULL TECH STACK */}
      <div className="space-y-4 pt-4 border-t border-border">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
          <TerminalIcon className="w-4 h-4" /> FULL TECH STACK
        </h3>
        <div className="flex flex-wrap gap-2 p-4 bg-background border border-border rounded-modern">
          {caseStudy.techStack.map((tech, idx) => (
            <span key={idx} className="font-mono text-[10px] font-bold uppercase tracking-wider border border-border bg-muted/30 px-2 py-1 text-foreground opacity-80 hover:opacity-100 transition-opacity">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 11. FOOTER NAVIGATION */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border mt-8">
        <button 
          onClick={onClose}
          className="w-full sm:w-auto px-6 py-3 border border-border bg-muted/20 hover:bg-muted/50 text-foreground font-mono text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 rounded-modern-sm"
        >
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Work
        </button>
        
        <div className="flex gap-3 w-full sm:w-auto">
          {caseStudy.githubUrl && (
            <a 
              href={caseStudy.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-6 py-3 border border-border hover:border-primary/50 text-foreground font-mono text-xs opacity-70 hover:opacity-100 uppercase tracking-widest transition-all flex items-center justify-center gap-2 rounded-modern-sm"
            >
              <Github className="w-4 h-4" /> Repo
            </a>
          )}
          {/* Mock Next Project Button - For visual completeness of portfolio footer concept */}
          <button className="flex-1 sm:flex-none px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 rounded-modern-sm">
            Next Project <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
