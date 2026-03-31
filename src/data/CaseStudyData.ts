export interface PipelineStep {
  step: string
  tool: string
}

export interface ArchitectureDecision {
  title: string
  reason: string
}

export interface Challenge {
  title: string
  solution: string
}

export interface Learning {
  title: string
  detail: string
}

export interface ServiceCategory {
  category: string
  services: string[]
}

export interface CaseStudy {
  id: string
  title: string
  subtitle: string
  role: string
  duration: string
  metrics: {
    label: string
    value: string
  }[]
  description: string
  githubUrl: string
  diagrams: {
    label: string
    image: string
  }[]
  pipeline: PipelineStep[]
  serviceCategories: ServiceCategory[]
  architectureDecisions: ArchitectureDecision[]
  challenges: Challenge[]
  learnings: Learning[]
  techStack: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: "learnsphere-testing",
    title: "LearnSphere",
    subtitle: "Foundation Infrastructure — Single-AZ AWS Setup",
    role: "Sole DevOps Engineer — designed, built, and deployed entire infrastructure",
    duration: "4 months local development, tested on AWS",
    metrics: [
      { label: "Microservices", value: "48" },
      { label: "Pods Running", value: "60+" },
      { label: "AWS Deploy", value: "1-AZ" },
      { label: "Dev Time", value: "4mo" }
    ],
    description: "LearnSphere is a self-hosted learning platform built to validate real infrastructure patterns in a controlled environment. The system runs 48 independent microservices across 60+ pods on a single-AZ EKS cluster — covering identity, media processing, payments, live streaming, and observability. All infrastructure provisioned with Terraform, deployed via GitOps using ArgoCD, monitored with Prometheus + Grafana.",
    githubUrl: "https://github.com/kirangarudofficial/Learning-Hub-Version-10.3.5.git",
    diagrams: [
      { label: "AWS Architecture", image: "/Projects/Project 1 testing/Diagrams/aws-architecture-1az-testing.png" },
      { label: "EKS Cluster", image: "/Projects/Project 1 testing/Diagrams/eks_cluster_architecture_1768754325534.jpg" },
      { label: "CI/CD Flow", image: "/Projects/Project 1 testing/Diagrams/CICD_Pipeline_Diagram.png" },
      { label: "Observability", image: "/Projects/Project 1 testing/Diagrams/monitoring_architecture_1768754417338.jpg" },
      { label: "Network Policy", image: "/Projects/Project 1 testing/Diagrams/vpc_network_architecture_1768754353596.jpg" }
    ],
    pipeline: [
      { step: "Code Push", tool: "GitHub" },
      { step: "Build & Test", tool: "Jenkins" },
      { step: "Image Build", tool: "Docker" },
      { step: "Push Registry", tool: "ECR" },
      { step: "GitOps Sync", tool: "ArgoCD" },
      { step: "Deploy", tool: "EKS" }
    ],
    serviceCategories: [
      {
        category: "Core Platform",
        services: ["api-gateway","auth-service","user-service","rbac-service","admin-service","organization-service"]
      },
      {
        category: "Learning & Content",
        services: ["course-service","content-service","enrollment-service","progress-service","assessment-service","assignment-service","certificate-service","review-service","gamification-service"]
      },
      {
        category: "Media & Streaming",
        services: ["media-service","video-streaming-service","video-processing-service","live-streaming-service","doc-mgmt-service"]
      },
      {
        category: "Communication",
        services: ["notification-service","email-service","chat-service","forum-service","support-service"]
      },
      {
        category: "Payments & Business",
        services: ["payment-service","billing-service","subscription-service","cart-service","coupon-service","affiliate-service","waitlist-service"]
      },
      {
        category: "Analytics & Intelligence",
        services: ["analytics-service","reporting-service","export-service","search-service","recommendation-service","ai-service","translation-service"]
      },
      {
        category: "Platform & Operations",
        services: ["moderation-service","audit-service","webhook-service","integration-service","feature-flag-service","marketing-service","calendar-service","survey-service","code-exec-service"]
      }
    ],
    architectureDecisions: [
      {
        title: "Single-AZ over Multi-AZ",
        reason: "Intentionally scoped to one availability zone to cover the full deployment lifecycle while managing AWS cost overhead. Multi-AZ adds complexity that wasn't needed for infrastructure validation."
      },
      {
        title: "GitOps with ArgoCD over manual kubectl",
        reason: "Every cluster change goes through Git. ArgoCD detects drift automatically and corrects it — no manual deployments, full audit trail, easy rollbacks."
      },
      {
        title: "Jenkins over GitHub Actions",
        reason: "Chose Jenkins for full pipeline control and self-hosted execution. Better for learning pipeline internals compared to managed CI/CD."
      },
      {
        title: "Terraform modules over single config",
        reason: "Modular Terraform for VPC, EKS, and IAM means infrastructure can be torn down and rebuilt cleanly every test cycle without starting from scratch."
      }
    ],
    challenges: [
      {
        title: "Managing 60+ pods without losing visibility",
        solution: "Set up centralized logging and per-namespace Grafana dashboards. Made it easy to isolate failing services without SSH-ing into pods one by one."
      },
      {
        title: "Keeping AWS costs under control",
        solution: "Scoped to single-AZ, used spot instances where possible, and tore down infrastructure after each test cycle to avoid unnecessary charges."
      },
      {
        title: "Inter-service communication failures",
        solution: "Debugged Kubernetes DNS resolution and network policy rules hands-on. Learned service discovery by fixing real failures, not reading docs."
      },
      {
        title: "ArgoCD sync conflicts with manual changes",
        solution: "Enforced strict GitOps-only policy. Nothing touches the cluster directly — everything goes through Git. Eliminated drift conflicts completely."
      }
    ],
    learnings: [
      {
        title: "Kubernetes is not just about deployment",
        detail: "Namespaces, RBAC, network policies, resource quotas, persistent volumes — each one matters when running 60+ pods. You learn this by breaking things."
      },
      {
        title: "GitOps changes how you think about infrastructure",
        detail: "Once ArgoCD was running, Git became the source of truth — not the cluster. Every change is traceable, reversible, and auditable."
      },
      {
        title: "Observability is not optional at scale",
        detail: "With 48 services, you cannot debug manually. Prometheus + Grafana made the difference between guessing and knowing what was wrong."
      },
      {
        title: "Terraform modularity saves hours",
        detail: "Reusable modules for VPC, EKS, and IAM meant infrastructure can be rebuilt cleanly every time without starting from scratch."
      }
    ],
    techStack: ["AWS","EKS","EC2","ECR","S3","IAM","VPC","Kubernetes","Terraform","Docker","Jenkins","ArgoCD","Helm","Prometheus","Grafana","CloudWatch","PostgreSQL","Redis","DynamoDB","RabbitMQ","NestJS","React","TypeScript","Prisma","Node.js"]
  }
];
