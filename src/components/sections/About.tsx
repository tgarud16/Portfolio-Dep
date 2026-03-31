"use client";

import React from "react";
import { ShieldCheck, Target, Zap, Terminal } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export const About = () => (
  <section id="about" className="relative px-6 lg:px-20 xl:px-32">
    <SectionHeader title="ENGINEERING IDENTITY" subtitle="Mindset & Intent" number="1" icon={<Terminal className="w-7 h-7" />} description="Professional Profile & Technical Background" />
    <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
      <div className="space-y-12">
        <div className="p-10 border border-border bg-card relative group overflow-hidden card-elevated-lg rounded-modern-lg">
          <div className="absolute inset-0 bg-blueprint opacity-[0.03] pointer-events-none" />
          <div className="absolute top-0 right-0 p-3 font-mono text-[9px] text-muted-foreground uppercase tracking-widest border-l border-b border-border bg-muted/50">
            SYS_SPEC: DEVOPS-PLATFORM
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent" />

          <p className="text-2xl leading-[1.4] font-medium tracking-tight">
            A <span className="text-primary font-bold">DevOps and Platform Engineer</span> focused on building reliable, automated cloud infrastructure and scalable deployment systems.
          </p>
        </div>

        <div className="space-y-5 text-muted-foreground leading-loose">
          <p>
            My technical foundation is built on hands-on infrastructure work, covering cloud architecture, container orchestration, deployment automation, and system monitoring across real environments.
          </p>
          <p>
            I build with a focus on cloud-native patterns, CI/CD integration, observability pipelines, and access security — with attention to how components behave together under load.
          </p>
          <p>
            I approach distributed systems by breaking down complexity, understanding how things fail, and learning to fix them to maintain consistent service availability.
          </p>
        </div>
        <div className="space-y-5 text-muted-foreground leading-loose pt-2">
          <p>
            Every deployment decision considers observability, scalability, and long-term maintainability — ensuring systems remain operable as workloads and requirements evolve.
          </p>
          <p>
            I reduce manual work by building reliable automation workflows that improve deployment consistency and reduce intervention across the infrastructure lifecycle.
          </p>
          <p>
            I apply the same engineering standards to development and test environments as to production — because system behavior in validation directly affects production outcomes.
          </p>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-6">
          <h3 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-accent flex items-center gap-2">
            <Target className="w-4 h-4" /> Engineering Philosophy
          </h3>
          <p className="text-xl sm:text-2xl leading-relaxed text-foreground font-display italic font-black uppercase">
            "Reliable systems are built through <span className="text-primary">infrastructure automation</span>, <span className="text-primary">continuous observability</span>, and <span className="text-primary">consistent operational discipline</span>."
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="p-8 bg-muted/30 border border-border relative group hover:border-primary/50 transition-colors card-elevated rounded-modern">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-background border border-border text-primary">
                <Zap className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest opacity-50">Operational_Bias</h4>
                <p className="text-sm font-medium leading-relaxed">
                  Focused on building platform systems that support service reliability, security controls, and consistent scalability — starting from strong fundamentals and growing from there.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-muted/50 border border-border relative card-elevated rounded-modern">
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-accent" />

            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold opacity-40">Journey_Mindset</span>
            </div>
            <p className="text-base font-mono leading-relaxed italic text-foreground/80">
              Technical skills develop through implementation, hands-on testing, and iterative refinement across varied infrastructure and deployment environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
