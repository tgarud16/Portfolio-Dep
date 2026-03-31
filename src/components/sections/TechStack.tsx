"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cloud, Box, Workflow, Activity, ShieldCheck, Sparkles, Layers } from "lucide-react";

export const TechStack = () => (
  <section id="tech" className="relative px-6 lg:px-20 xl:px-32 py-20">
    {/* Grid Background — uses theme primary instead of hardcoded cyan */}
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(oklch(0.65 0.2 240 / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.65 0.2 240 / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>

    {/* Section Header */}
    <div className="relative mb-16 space-y-4">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[10px] text-primary font-bold tracking-widest">03</span>
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
            <Layers className="w-7 h-7 text-primary/60" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight uppercase text-foreground">
            TECHNOLOGY STACK
          </h2>
        </div>
      </div>
      {/* Glowing divider — primary theme */}
      <div className="relative h-[2px] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/30 to-transparent blur-md" />
      </div>
    </div>

    {/* Perfect Square Grid - 3×2 */}
    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {[
        {
          icon: <Cloud className="h-5 w-5" />,
          title: "CLOUD PLATFORMS",
          desc: "Working with AWS, GCP, and Azure to provision cloud environments, manage networking, and configure core platform services.",
          skills: ["AWS", "GCP", "Azure"]
        },
        {
          icon: <Box className="h-5 w-5" />,
          title: "CONTAINERS & ORCHESTRATION",
          desc: "Building and running containerized applications using Docker, managing workload deployment and scaling with Kubernetes.",
          skills: ["Docker", "Kubernetes", "Helm"]
        },
        {
          icon: <Workflow className="h-5 w-5" />,
          title: "CI/CD & AUTOMATION",
          desc: "Designing deployment pipelines and infrastructure automation workflows to support continuous integration and delivery.",
          skills: ["Jenkins", "GitHub Actions", "ArgoCD", "Terraform"]
        },
        {
          icon: <Activity className="h-5 w-5" />,
          title: "OBSERVABILITY",
          desc: "Setting up monitoring, logging, and alerting systems to track service health and investigate issues in distributed environments.",
          skills: ["Prometheus", "Grafana", "ELK", "CloudWatch"]
        },
        {
          icon: <ShieldCheck className="h-5 w-5" />,
          title: "SECURITY & ACCESS",
          desc: "Applying IAM policies, secret management, and security scanning to control access and maintain a secure infrastructure posture.",
          skills: ["IAM", "IRSA", "Secrets Manager", "Image Scanning"]
        },
        {
          icon: <Sparkles className="h-5 w-5" />,
          title: "AI & ENGINEERING TOOLS",
          desc: "Using AI-assisted tools to support infrastructure planning, code review, documentation, and development efficiency.",
          skills: ["ChatGPT", "Gemini", "Copilot", "Cursor"]
        }
      ].map((group, i) => (
        <motion.div
          key={i}
          whileHover={{
            scale: 1.03,
            borderColor: "oklch(0.65 0.2 240 / 0.8)",
            boxShadow: "0 0 20px oklch(0.65 0.2 240 / 0.25)"
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="group relative bg-background/40 backdrop-blur-md border border-primary/30 rounded-lg overflow-hidden"
        >
          {/* Glassmorphism overlay — primary theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Inner glow effect */}
          <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: "inset 0 0 15px oklch(0.65 0.2 240 / 0.08)" }} />

          {/* Card Content - Compact */}
          <div className="relative p-4 flex flex-col">
            {/* Card Number */}
            <div className="absolute top-2.5 right-2.5 font-mono text-[8px] text-primary/40 tracking-widest">
              {String(i + 1).padStart(2, '0')}
            </div>

            {/* Icon - Centered at top */}
            <div className="flex justify-center mb-2.5">
              <div className="p-2.5 bg-primary/10 border border-primary/30 rounded text-primary opacity-80 group-hover:opacity-100 group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:shadow-[0_0_12px_oklch(0.65_0.2_240_/_0.15)] transition-all duration-300">
                {group.icon}
              </div>
            </div>

            {/* Title - Centered */}
            <h3 className="text-sm lg:text-base font-bold tracking-tight uppercase text-foreground text-center leading-tight mb-1.5">
              {group.title}
            </h3>

            {/* Glowing divider under title */}
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mb-2.5" />

            {/* Description - Slightly larger for readability */}
            <p className="text-[11px] lg:text-xs leading-relaxed text-muted-foreground/60 text-center mb-2.5 px-1">
              {group.desc}
            </p>

            {/* Tool Tags - Directly below description */}
            <div className="flex flex-wrap gap-1.5 justify-center">
              {group.skills.map(skill => (
                <span
                  key={skill}
                  className="text-[9px] font-mono px-2 py-0.5 bg-primary/5 border border-primary/20 text-primary rounded-full uppercase tracking-tight font-bold hover:border-primary/40 hover:bg-primary/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      ))}
    </div>
  </section>
);
