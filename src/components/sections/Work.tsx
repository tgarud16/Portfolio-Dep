"use client";

import React, { useState } from "react";
import { Server, Sparkles, Brain, Zap, Lock, Activity, Rocket, Database, Network, Cloud, Box } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const getResponsibilityIcon = (text: string): LucideIcon => {
  const t = text.toLowerCase();
  if (t.includes('architecture') || t.includes('design') || t.includes('domain-driven')) return Brain;
  if (t.includes('ci/cd') || t.includes('pipeline') || t.includes('automation') || t.includes('gitops')) return Zap;
  if (t.includes('security') || t.includes('access') || t.includes('secret') || t.includes('policy')) return Lock;
  if (t.includes('monitoring') || t.includes('observability') || t.includes('logging') || t.includes('alert')) return Activity;
  if (t.includes('deployment') || t.includes('deploy') || t.includes('provisioning') || t.includes('scaling') || t.includes('scalable')) return Rocket;
  if (t.includes('database') || t.includes('data') || t.includes('backup') || t.includes('storage') || t.includes('stateful')) return Database;
  if (t.includes('network') || t.includes('subnet') || t.includes('gateway') || t.includes('communication') || t.includes('routing')) return Network;
  if (t.includes('kubernetes') || t.includes('namespace') || t.includes('container') || t.includes('cluster')) return Box;
  if (t.includes('cloud') || t.includes('aws') || t.includes('infrastructure')) return Cloud;
  return Zap;
};

import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";
import { ProjectCaseStudy } from "@/components/sections/ProjectCaseStudy";
import { caseStudies } from "@/data/CaseStudyData";

const projects = [
  {
    id: "learnsphere-testing",
    number: "01",
    role: "LEARNSPHERE",
    title: "Foundation Infrastructure",
    subtitle: "Foundation Infrastructure",
    proves: "Single-AZ Infrastructure Setup",
    github: "https://github.com/kirangarudofficial/Learning-Hub-Version-10.3.5.git",
    description: "LearnSphere Foundation is a self-hosted learning platform built to validate core infrastructure patterns in a controlled environment. The system uses a microservices architecture where each service runs in its own container, enabling focused testing of infrastructure components including identity management, media processing, and service observability.\n\nThe infrastructure is scoped to a single AWS Availability Zone to cover the full deployment lifecycle while managing resource overhead. This setup supported hands-on work with Kubernetes cluster configuration, VPC networking, CI/CD pipeline setup, and monitoring — without the added complexity of multi-AZ failover.\n\nA key focus was automating infrastructure provisioning and deployment workflows. The project includes an event-driven media processing pipeline using serverless functions, and all cloud resources are managed using Infrastructure as Code to maintain consistency across environments.\n\nThis project demonstrates practical skills in Kubernetes deployment, CI/CD pipeline configuration, infrastructure automation, and operating distributed services in a single-zone cloud environment.",
    tech: ["AWS", "Kubernetes", "Terraform", "React", "NestJS", "Node.js", "Prisma", "Docker", "Jenkins", "ArgoCD", "PostgreSQL", "Redis", "DynamoDB", "Prometheus", "Grafana", "CloudWatch"],
    responsibilities: [
      "Microservices Design — Structured independent services across functional domains to support isolated deployment and testing of individual system components.",
      "API Gateway & Service Routing — Configured centralized ingress and defined inter-service communication paths to manage request routing across containers.",
      "Media Processing Pipeline — Built a serverless pipeline to handle media ingestion, transcoding, and metadata updates using event-driven triggers.",
      "Single-AZ EKS Cluster — Configured an EKS cluster in one availability zone to test deployment workflows, namespace structure, and resource isolation.",
      "Infrastructure as Code — Provisioned VPC networking, compute resources, and IAM permissions using modular Terraform configurations.",
      "Namespace Isolation — Applied resource quotas, network policies, and namespace segmentation to separate workloads within the cluster.",
      "CI/CD Pipeline Setup — Built automated pipelines to handle container builds, image validation, and deployment to Kubernetes.",
      "GitOps with ArgoCD — Configured declarative continuous delivery using ArgoCD to keep deployment state in sync with version control.",
      "Stateful Services — Deployed relational databases and caching services as Kubernetes workloads with persistent storage configured.",
      "Observability Stack — Set up Prometheus and Grafana for metrics collection, log aggregation, and alerting across deployed services.",
      "Access Control & Secrets — Applied RBAC policies and configured secret management to secure access across cluster services.",
      "Backup Configuration — Set up automated backup workflows and data lifecycle policies to support recovery scenarios."
    ],
    diagrams: [
      { title: "AWS Architecture (1-AZ)", imagePath: "/Projects/Project 1 testing/Diagrams/aws-architecture-1az-testing.png" },
      { title: "EKS Cluster Architecture", imagePath: "/Projects/Project 1 testing/Diagrams/eks_cluster_architecture_1768754325534.jpg" },
      { title: "CI/CD Pipeline", imagePath: "/Projects/Project 1 testing/Diagrams/CICD_Pipeline_Diagram.png" },
      { title: "VPC Network Architecture", imagePath: "/Projects/Project 1 testing/Diagrams/vpc_network_architecture_1768754353596.jpg" },
      { title: "Lambda S3 Pipeline", imagePath: "/Projects/Project 1 testing/Diagrams/lambda_s3_pipeline_1768754388099.jpg" },
      { title: "Monitoring Architecture", imagePath: "/Projects/Project 1 testing/Diagrams/monitoring_architecture_1768754417338.jpg" },
      { title: "EKS Platform Blueprint", imagePath: "/Projects/Project 1 testing/Diagrams/eks-platform-engineering-blueprint.png" },
      { title: "Observability & Monitoring", imagePath: "/Projects/Project 1 testing/Diagrams/Observability_Monitoring_Diagram.png" },
      { title: "CI/CD Pipeline Architecture", imagePath: "/Projects/Project 1 testing/Diagrams/cicd_pipeline_architecture_1768754447584.jpg" }
    ],
    icon: <Server className="w-5 h-5" />
  },
  {
    id: "learnsphere-production",
    number: "02",
    role: "LEARNSPHERE",
    title: "Scalable Production Platform",
    subtitle: "Scalable Production Platform",
    proves: "High-Availability Multi-AZ Architecture",
    github: "https://github.com/kirangarudofficial/Learning-Hub-Version-10.3.5.git",
    description: "LearnSphere Production extends the foundation environment to a multi-AZ architecture designed to demonstrate scalability, availability, and operational readiness. The system uses a microservices topology across three availability zones, supporting services for authentication, adaptive video streaming, and real-time system monitoring.\n\nA major focus of this project was full deployment automation. The system includes a distributed media processing pipeline and is provisioned using Infrastructure as Code, ensuring consistent deployments across environments. Observability is integrated at every layer to support monitoring and incident response.\n\nThis project demonstrates working knowledge of Kubernetes cluster management, GitOps-based delivery, multi-AZ cloud design, and operating distributed systems with availability as a primary constraint.",
    tech: ["AWS", "Kubernetes", "Terraform", "React", "NestJS", "Node.js", "Prisma", "Docker", "Jenkins", "ArgoCD", "PostgreSQL", "Redis", "DynamoDB", "Prometheus", "Grafana", "CloudWatch"],
    responsibilities: [
      "Microservices Architecture — Designed and deployed services across functional domains with clear separation of responsibilities and independent deployment cycles.",
      "API Gateway & Service Discovery — Configured centralized ingress and service discovery to manage request routing across distributed endpoints.",
      "Media Processing Pipeline — Built an event-driven pipeline to automate video ingestion, FFmpeg transcoding, and metadata updates.",
      "Adaptive Streaming Configuration — Configured storage and delivery for HLS/DASH video streaming across device types and network conditions.",
      "Multi-AZ Infrastructure as Code — Provisioned multi-AZ VPC environments, EKS clusters, and IAM configurations using modular Terraform.",
      "Kubernetes Workload Management — Deployed services across namespaces with resource quotas, network policies, and disruption budgets configured.",
      "CI/CD Pipeline Automation — Built reusable GitOps workflows to automate builds, container publishing, and deployment across environments.",
      "Continuous Delivery with ArgoCD — Configured declarative CD to automate environment synchronization and support rollback on failure.",
      "Stateful Data Services — Deployed and managed relational databases and caching services with persistent storage and automated backup policies.",
      "Observability Integration — Deployed Prometheus and Grafana to collect metrics, configure dashboards, and set alerting thresholds.",
      "Cloud Security & IAM — Applied IAM policies, configured secret management, and enforced access controls across platform services.",
      "Cross-Region Backup Strategy — Configured backup schedules and storage lifecycle policies to support data recovery across availability zones."
    ],
    diagrams: [
      { title: "AWS Architecture (3-AZ Production)", imagePath: "/Projects/Project 2 Production Style/Diagrams/aws-architecture-3az-production.png" },
      { title: "EKS Cluster Architecture", imagePath: "/Projects/Project 2 Production Style/Diagrams/eks_cluster_architecture_1768754325534.jpg" },
      { title: "CI/CD Pipeline", imagePath: "/Projects/Project 2 Production Style/Diagrams/CICD_Pipeline_Diagram.png" },
      { title: "Video Processing Pipeline", imagePath: "/Projects/Project 2 Production Style/Diagrams/learning_hub_video_pipeline.png" },
      { title: "VPC Network Architecture", imagePath: "/Projects/Project 2 Production Style/Diagrams/vpc_network_architecture_1768754353596.jpg" },
      { title: "Lambda S3 Pipeline", imagePath: "/Projects/Project 2 Production Style/Diagrams/lambda_s3_pipeline_1768754388099.jpg" },
      { title: "Monitoring Architecture", imagePath: "/Projects/Project 2 Production Style/Diagrams/monitoring_architecture_1768754417338.jpg" },
      { title: "EKS Platform Blueprint", imagePath: "/Projects/Project 2 Production Style/Diagrams/eks-platform-engineering-blueprint.png" },
      { title: "Observability & Monitoring", imagePath: "/Projects/Project 2 Production Style/Diagrams/Observability_Monitoring_Diagram.png" },
      { title: "CI/CD Pipeline Architecture", imagePath: "/Projects/Project 2 Production Style/Diagrams/cicd_pipeline_architecture_1768754447584.jpg" }
    ],
    icon: <Server className="w-5 h-5" />
  },
  {
    id: "codementor-ai",
    number: "03",
    role: "CODEMENTOR AI PLATFORM",
    title: "LLM Deployment Platform",
    subtitle: "LLM Deployment Platform",
    proves: "AI Workload Infrastructure",
    github: "https://github.com/kirangarudofficial/code-mentor-LLM-deployment.git",
    description: "CodeMentor AI is a self-hosted LLM infrastructure platform built on AWS and Kubernetes to support private AI model deployment and experimentation. The system is designed to isolate inference workloads from application services, using separate compute configurations for performance efficiency.\n\nThe platform is provisioned using Infrastructure as Code and integrates observability tooling to monitor compute utilization and model responsiveness. Security controls are applied at the network and access layer to keep inference workloads isolated from external traffic.\n\nThis project demonstrates practical experience with AI workload deployment on Kubernetes, infrastructure automation for model hosting, and applying reliability and observability practices to compute-intensive services.",
    tech: ["AWS", "Kubernetes", "Terraform", "Ollama", "Helm", "Bash", "CloudWatch", "Grafana", "IAM"],
    responsibilities: [
      "Compute Node Segmentation — Configured separate EKS node groups for AI inference and application workloads to manage resource allocation independently.",
      "Cost-Aware Platform Design — Designed infrastructure with resource efficiency in mind, using appropriately sized instances and VPC endpoint routing to reduce overhead.",
      "LLM Container Deployment — Deployed containerized AI inference services to run private language models in an air-gapped Kubernetes environment.",
      "Automated Provisioning — Used Terraform to automate deployment of EKS clusters, networking, and supporting infrastructure with repeatable configurations.",
      "Network Isolation — Applied subnet segmentation and security group policies to restrict access to AI workloads from untrusted sources.",
      "Workload Namespace Management — Configured Kubernetes namespaces with resource limits and scheduling rules to prevent contention between services.",
      "Compute Monitoring — Set up dashboards and alerts to track CPU and memory usage across inference and application pods.",
      "GitOps Deployment Workflow — Configured automated deployment pipelines for LLM updates and scaling events using declarative configuration.",
      "Centralized Logging — Aggregated logs from inference services to support debugging and performance analysis.",
      "Scalable Inference Configuration — Configured horizontal scaling for inference pods to handle variable request loads without manual intervention."
    ],
    diagrams: [
      { title: "AWS Architecture", imagePath: "/Projects/Code Mentor Ai-LLM Deploment-Porject 3/Diagrams/aws-architecture-diagram.png" }
    ],
    icon: <Sparkles className="w-5 h-5" />
  }
];

export const Work = () => {
  const [activeTab, setActiveTab] = useState(projects[0].id);

  const activeProject = projects.find(p => p.id === activeTab) || projects[0];
  const activeCaseStudy = caseStudies.find(c => c.id === activeTab);

  return (
    <section id="work" className="py-12 space-y-8 px-6 lg:px-20 xl:px-32">
      <SectionHeader
        title="ENGINEERING WORK"
        subtitle="Featured Projects"
        number="3"
        icon={<Server className="w-7 h-7" />}
        description="Projects & Hands-On Implementations"
      />

      <div className="max-w-6xl w-full mx-auto">
        <div className="grid lg:grid-cols-12 gap-6 items-start">

          {/* Navigation Sidebar — sticky, natural height, no stretch */}
          <div className="lg:col-span-3 flex flex-col gap-3 sticky top-24 self-start">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveTab(project.id)}
              className={cn(
                "w-full text-left p-4 border transition-all duration-300 group relative overflow-hidden rounded-sm",
                activeTab === project.id
                  ? "bg-primary border-primary text-primary-foreground"
                  : "bg-muted/30 border-border hover:border-primary/50"
              )}
            >
              {/* Project number + icon */}
              <div className="flex items-center justify-between mb-2">
                <span className={cn(
                  "font-mono text-[10px] font-bold tracking-widest uppercase",
                  activeTab === project.id ? "text-primary-foreground/70" : "text-primary"
                )}>
                  PROJECT {project.number}
                </span>
                <div className={cn(
                  "transition-transform duration-300",
                  activeTab === project.id ? "scale-110" : "opacity-40 group-hover:opacity-100"
                )}>
                  {project.icon}
                </div>
              </div>

              {/* Project role name */}
              <h3 className={cn(
                "text-xs font-black font-mono uppercase tracking-wider leading-tight mb-1",
                activeTab === project.id ? "text-primary-foreground" : "text-foreground"
              )}>
                {project.role}
              </h3>

              {/* Project title */}
              <p className={cn(
                "text-[10px] font-mono uppercase tracking-tight leading-tight",
                activeTab === project.id ? "text-primary-foreground/60" : "text-muted-foreground"
              )}>
                {project.title}
              </p>

              {/* Active indicator bar */}
              {activeTab === project.id && (
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-accent" />
              )}
            </button>
          ))}
        </div>

        {/* Content Area — natural height, no min-h */}
        <div className="lg:col-span-9 bg-muted/10 border border-border relative flex flex-col card-elevated-lg rounded-modern-lg overflow-hidden self-start">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary/20 z-10" />

          {activeCaseStudy ? (
            <div className="p-6 lg:p-10">
              <ProjectCaseStudy
                caseStudy={activeCaseStudy}
                onClose={() => {}}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-12 text-center">
              <p className="font-mono text-muted-foreground uppercase text-xs mb-4">
                ENGINEERING // DATA_NOT_FOUND
              </p>
              <p className="font-mono text-foreground text-sm">
                Full case study data not found for this project.
              </p>
            </div>
          )}
        </div>

      </div>
      </div>
    </section>
  );
};
