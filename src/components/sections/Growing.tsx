"use client";

import React from "react";
import { Activity, Users, BookOpen, Globe } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";

export const Growing = () => (
  <section id="growing" className="grid md:grid-cols-2 gap-px bg-border border border-border">
    <div className="p-6 sm:p-10 lg:p-16 bg-card space-y-12 px-6 lg:px-20 xl:px-32 relative">
      <SectionHeader title="CURRENT SPRINT" subtitle="Momentum" number="7" icon={<Activity className="w-7 h-7 opacity-80" />} />

      {/* Subtle radial glow for visual anchoring */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 w-[70%] h-[60%] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Faint divider above list */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border/60 to-transparent" />

      <div className="space-y-8 relative">
        {[
          {
            title: "Platform Reliability",
            desc: "Reviewing and improving platform configurations to support consistent service availability and operational stability."
          },
          {
            title: "Deployment Safety",
            desc: "Applying staged rollout strategies, canary deployments, and automated rollback to reduce risk during releases."
          },
          {
            title: "Kubernetes Operations",
            desc: "Building deeper knowledge of cluster management, scheduling, and networking across Kubernetes environments."
          },
          {
            title: "CI/CD Feedback Loops",
            desc: "Improving build and test feedback cycles to detect issues earlier and speed up the delivery process."
          }
        ].map((item, i) => (
          <div key={i} className="flex gap-6 items-start group">
            <span className="font-mono text-primary font-black text-sm italic opacity-40 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
            <div className="space-y-1">
              <p className="text-sm font-bold uppercase tracking-tight text-foreground">{item.title}</p>
              <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-tighter">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="p-6 sm:p-10 lg:p-16 bg-muted/30 space-y-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8">
        <Activity className="w-32 h-32 text-primary/8 rotate-12" />
      </div>

      <div className="space-y-10 relative">
        <SectionHeader title="ECOSYSTEM" subtitle="Collaboration" number="8" icon={<Globe className="w-7 h-7 opacity-80" />} description="Professional Presence & Platforms" />
        <div className="space-y-6">
          <p className="text-lg font-medium text-muted-foreground/80 leading-relaxed italic">
            Participating in DevOps and cloud infrastructure communities, reviewing architectural decisions, and studying real-world production incidents and post-mortems.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="rounded-none px-4 py-1.5 border-border bg-background text-[9px] font-mono font-bold uppercase tracking-widest hover:border-primary/30 hover:bg-muted/50 transition-all duration-200 cursor-default">#DevOps_Community</Badge>
            <Badge variant="outline" className="rounded-none px-4 py-1.5 border-border bg-background text-[9px] font-mono font-bold uppercase tracking-widest hover:border-primary/30 hover:bg-muted/50 transition-all duration-200 cursor-default">#Architecture_Reviews</Badge>
            <Badge variant="outline" className="rounded-none px-4 py-1.5 border-border bg-background text-[9px] font-mono font-bold uppercase tracking-widest hover:border-primary/30 hover:bg-muted/50 transition-all duration-200 cursor-default">#Cloud_Native</Badge>
          </div>
        </div>
      </div>

      <div className="space-y-10 relative pt-16 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary text-primary-foreground">
            <BookOpen className="w-4 h-4" />
          </div>
          <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em]">Growth Strategy</h4>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {[
            "Learn, implement, review — applying concepts through direct practice before moving forward.",
            "Revisiting cloud networking and security fundamentals to build a stronger operational foundation.",
            "Testing infrastructure patterns in sandbox environments before applying them to larger systems."
          ].map((strategy, i) => (
            <div key={i} className="flex items-center gap-2 text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest">
              <div className="w-1 h-1 bg-accent" />
              {strategy}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
