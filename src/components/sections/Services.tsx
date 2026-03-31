"use client";

import React from "react";
import { Cloud, Bot, Rocket, Server, GitBranch, Shield, Sparkles, Terminal, Globe, Layers, Zap, Lock, Activity, Brain, Box, Database, Network } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const services = [
  {
    id: "01",
    title: "AWS Cloud Infrastructure & DevOps Engineering",
    icon: Cloud,
    color: "primary",
    items: [
      { label: "Cloud Architecture: Designing and provisioning VPC environments, EKS clusters, and cloud networking on AWS.", icon: Brain },
      { label: "Kubernetes Orchestration: Deploying and managing containerized workloads and microservices across Kubernetes clusters.", icon: Box },
      { label: "CI/CD Automation: Building GitOps-based deployment pipelines to automate the software delivery process.", icon: Zap },
      { label: "Infrastructure as Code: Provisioning and managing cloud resources using version-controlled IaC with Terraform.", icon: Terminal },
      { label: "Architectural Validation: Applying AWS architecture best practices as an AWS Certified Solutions Architect – Associate.", icon: Shield },
    ],
  },
  {
    id: "02",
    title: "AI Systems & LLM Infrastructure",
    icon: Bot,
    color: "accent",
    items: [
      { label: "Private AI Deployment: Hosting and running self-managed LLM platforms on Kubernetes with optimized compute configurations.", icon: Server },
      { label: "Resource-Optimized Infrastructure: Designing compute environments suited to resource-constrained and bare-metal deployments.", icon: Brain },
      { label: "Workflow Automation: Building custom tooling and AI-assisted workflows to support software development processes.", icon: Zap },
      { label: "System Analysis: Using AI-assisted approaches to document, review, and improve complex system designs.", icon: Bot },
    ],
  },
  {
    id: "03",
    title: "Distributed Systems & Application Development",
    icon: Rocket,
    color: "primary",
    items: [
      { label: "Platform Interfaces: Building responsive frontends using Next.js to interact with cloud service backends.", icon: Globe },
      { label: "Backend Services: Developing API layers and service communication using NestJS and Node.js.", icon: Network },
      { label: "Data Layer: Configuring relational and NoSQL databases with caching strategies for persistent, scalable storage.", icon: Database },
      { label: "End-to-End Reliability: Connecting application layers with infrastructure to maintain consistent system behavior and user experience.", icon: Rocket },
    ],
  },
  {
    id: "04",
    title: "Cloud Security & DevSecOps",
    icon: Shield,
    color: "accent",
    items: [
      { label: "Network Security: Configuring network segmentation, security groups, and encrypted communication between services.", icon: Lock },
      { label: "Identity & Access Management: Applying IAM policies and role-based access controls across cloud environments.", icon: Shield },
      { label: "Compliance & Governance: Structuring infrastructure to meet security standards and operational requirements.", icon: Lock },
    ],
  },
  {
    id: "05",
    title: "Observability & Site Reliability Engineering",
    icon: Terminal,
    color: "primary",
    items: [
      { label: "System Monitoring: Implementing metrics, dashboards, and health checks for distributed service environments.", icon: Activity },
      { label: "Centralized Logging: Configuring log aggregation pipelines for visibility into application and infrastructure behavior.", icon: Database },
      { label: "Reliability Operations: Monitoring system performance, identifying bottlenecks, and contributing to service availability.", icon: Activity },
    ],
  },
];

export const Services = () => (
  <section id="services" className="relative px-6 lg:px-20 xl:px-32">
    <SectionHeader title="OPERATIONAL SCOPE" subtitle="Engineering Capabilities" number="2" icon={<Layers className="w-7 h-7" />} description="Core Skills & Technical Expertise" />

    <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
      {services.map((service) => {
        const IconComponent = service.icon;
        return (
          <div
            key={service.id}
            className="group relative bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300 card-elevated rounded-modern hover:shadow-lg"
          >
            <div className="absolute inset-0 bg-blueprint opacity-[0.02] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="absolute top-4 right-4 font-mono text-[10px] text-muted-foreground tracking-widest">
              {service.id}
            </div>

            <div className={`inline-flex p-4 border border-border bg-muted/30 mb-6 text-${service.color}`}>
              <IconComponent className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold tracking-tight mb-6 pr-8 leading-tight">
              {service.title}
            </h3>

            <ul className="space-y-3">
              {service.items.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    <ItemIcon className="w-4 h-4 mt-0.5 text-primary/60 flex-shrink-0" />
                    <span>{item.label}</span>
                  </li>
                );
              })}
            </ul>

            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </div>
        );
      })}
    </div>

    <div className="mt-12 p-6 border border-dashed border-border bg-muted/20 relative">
      <div className="absolute -top-3 left-6 px-3 bg-background font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        SYS_NOTE
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        These areas reflect a consistent focus on infrastructure automation, deployment reliability, and platform operations. The goal is building systems that are observable, maintainable, and built to scale.
      </p>
    </div>
  </section>
);
