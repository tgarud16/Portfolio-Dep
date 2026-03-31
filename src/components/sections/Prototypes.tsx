"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  Code, Zap, GitBranch, Server, Package,
  ChevronLeft, ChevronRight, ExternalLink, Terminal, Cpu, Database, Globe, Layers, FlaskConical
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

/* ------------------------------------------------------------------ */
/*  Utility: Intersection Observer hook                                */
/* ------------------------------------------------------------------ */
function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.3) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

/* ------------------------------------------------------------------ */
/*  Lab experiment data                                                */
/* ------------------------------------------------------------------ */
const iconMap: Record<string, React.ElementType> = {
  "Learning Hub": Globe,
  "Interior Designer": Layers,
  "Restaurant Site": ExternalLink,
  "SaaS Prototype": Database,
  "Portfolio v1": Code,
  "Portfolio v2": Cpu,
};

const prototypes = [
  {
    name: "Learning Hub",
    stack: "React / Node",
    infra: "Docker + Nginx",
    desc: "Full-stack containerized application with microservices architecture and reverse proxy routing via Nginx.",
    tags: ["Docker", "Nginx", "Reverse Proxy", "Node.js"],
    screenshot: "/Labs/learning-sphere/Screenshot (438).png",
  },
  {
    name: "Interior Designer",
    stack: "Next.js",
    infra: "Vercel CI/CD",
    desc: "Server-side rendered application with automated preview deployments triggered on each pull request via Vercel.",
    tags: ["Vercel", "CI/CD", "SSR", "Next.js"],
    screenshot: "/Labs/interior-designer/Screenshot (500).png",
  },
  {
    name: "Restaurant Site",
    stack: "HTML / JS",
    infra: "S3 + CloudFront",
    desc: "Static site hosted on S3 with CloudFront distribution, custom domain, and SSL certificate configured.",
    tags: ["AWS S3", "CloudFront", "SSL", "CDN"],
    screenshot: "/Labs/restaurant/screen.png",
  },
  {
    name: "SaaS Prototype",
    stack: "Next.js / Postgres",
    infra: "ECS Fargate",
    desc: "Serverless container deployment using ECS Fargate with a managed RDS backend, ALB routing, and auto-scaling.",
    tags: ["ECS", "Fargate", "RDS", "ALB"],
    screenshot: "/Labs/saas-prototype/screen.png",
  },
  {
    name: "Portfolio v1",
    stack: "Gatsby",
    infra: "GitHub Pages",
    desc: "JAMstack site with an automated GitHub Actions pipeline handling builds and deployments on each commit.",
    tags: ["GitHub Actions", "CI/CD", "JAMstack"],
    screenshot: "/Labs/portfolio-v1/screenshot.png",
  },
  {
    name: "Portfolio v2",
    stack: "Next.js / Tailwind",
    infra: "Vercel Edge",
    desc: "Edge-deployed Next.js site using incremental static regeneration and image optimization for fast global delivery.",
    tags: ["Vercel", "Edge", "ISR", "Next.js"],
    screenshot: "/Labs/portfolio-v2/screenshot.png",
  },
];

/* ------------------------------------------------------------------ */
/*  Slide components for the Lab slider                                */
/* ------------------------------------------------------------------ */

/* Slide: Lab Cover */
function SlideLabCover() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  return (
    <div ref={ref} className="h-full flex flex-col justify-end overflow-hidden bg-card border border-border relative">
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.1)_2px,rgba(255,255,255,0.1)_4px)]" />
      <div className={`relative z-10 p-6 sm:p-8 space-y-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <span className="inline-block px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.25em] text-accent bg-accent/10 border border-accent/30">
          LAB_EXPERIMENTS // OVERVIEW
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground leading-tight tracking-tight uppercase">
          Build. Deploy.<br />Learn. Repeat.
        </h2>
        <p className="text-xs font-mono text-muted-foreground max-w-xs">
          Hands-on deployment experience across different stacks, hosting environments, and CI/CD configurations.
        </p>
        <div className="flex items-center gap-4 pt-2 text-[9px] font-mono text-muted-foreground tracking-widest uppercase">
          <span className="flex items-center gap-1"><Terminal className="w-3 h-3" /> 6 PROJECTS</span>
          <span className="flex items-center gap-1"><Layers className="w-3 h-3" /> 5 INFRA PATTERNS</span>
        </div>
      </div>
    </div>
  );
}

/* Deployment Preview: Real screenshot or CSS-based architecture minimap */
function DeploymentPreview({ project, index }: { project: typeof prototypes[0]; index: number }) {
  // If project has a real screenshot, render it
  if (project.screenshot) {
    return (
      <div className="relative w-full aspect-[16/9] bg-background/80 border-b border-border/80 overflow-hidden group/preview shadow-[0_0_1px_rgba(255,255,255,0.08)]">
        <img
          src={project.screenshot}
          alt={`${project.name} deployment screenshot`}
          className="w-full h-full object-cover object-top opacity-90 group-hover/preview:opacity-100 transition-opacity duration-300"
        />
        {/* Overlay with ID */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30 pointer-events-none" />
        <div className="absolute top-2 left-3 text-[8px] font-mono text-white/50 tracking-[0.3em] uppercase">
          SYS_{String(index + 1).padStart(2, "0")} // {project.stack}
        </div>
        <div className="absolute bottom-2 right-3 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full" />
          <span className="text-[7px] font-mono text-muted-foreground/40 uppercase tracking-widest">Screenshot</span>
        </div>
      </div>
    );
  }

  // Fallback: CSS-based infrastructure flow diagram
  const nodes = project.infra.split(/\s*\+\s*|\s*\/\s*/).map(s => s.trim());
  return (
    <div className="relative w-full aspect-[16/9] bg-background/80 border-b border-border/80 overflow-hidden shadow-[0_0_1px_rgba(255,255,255,0.08)]">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />

      {/* Experiment ID watermark */}
      <div className="absolute top-2 left-3 text-[8px] font-mono text-muted-foreground/30 tracking-[0.3em] uppercase">
        SYS_{String(index + 1).padStart(2, "0")} // {project.stack}
      </div>

      {/* Infrastructure flow visualization */}
      <div className="absolute inset-0 flex items-center justify-center gap-3 px-6">
        {/* Client node */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-8 h-8 border border-accent/40 bg-accent/5 flex items-center justify-center">
            <Globe className="w-4 h-4 text-accent/60" />
          </div>
          <span className="text-[7px] font-mono text-muted-foreground/50 uppercase">Client</span>
        </div>

        {/* Connection line with animated dot */}
        <div className="relative flex-1 h-px bg-border/40 max-w-[40px]">
          <div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent/60 rounded-full animate-pulse" />
        </div>

        {/* Infrastructure nodes */}
        {nodes.map((node, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 border border-primary/30 bg-primary/5 flex items-center justify-center">
                <Server className="w-4 h-4 text-primary/50" />
              </div>
              <span className="text-[7px] font-mono text-muted-foreground/60 uppercase tracking-wider whitespace-nowrap">{node}</span>
            </div>
            {i < nodes.length - 1 && (
              <div className="relative flex-1 h-px bg-border/40 max-w-[30px]">
                <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1 h-1 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: `${i * 300}ms` }} />
              </div>
            )}
          </React.Fragment>
        ))}

        {/* Connection to app */}
        <div className="relative flex-1 h-px bg-border/40 max-w-[40px]">
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1.5 h-1.5 bg-green-500/60 rounded-full animate-pulse" style={{ animationDelay: "600ms" }} />
        </div>

        {/* App node */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-8 h-8 border border-green-500/30 bg-green-500/5 flex items-center justify-center">
            <Code className="w-4 h-4 text-green-500/50" />
          </div>
          <span className="text-[7px] font-mono text-green-500/50 uppercase">App</span>
        </div>
      </div>

      {/* Status indicator */}
      <div className="absolute bottom-2 right-3 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 bg-green-500/70 rounded-full animate-pulse" />
        <span className="text-[7px] font-mono text-green-500/50 uppercase tracking-widest">Deployed</span>
      </div>
    </div>
  );
}

/* Slide: Individual project card — enhanced with preview */
function SlideProject({ project, index }: { project: typeof prototypes[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const Icon = iconMap[project.name] || Code;
  return (
    <div ref={ref} className="h-full flex flex-col overflow-hidden bg-card border border-border">
      {/* Screenshot / Deployment Preview */}
      <DeploymentPreview project={project} index={index} />

      {/* Content */}
      <div className="flex-1 flex flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.25em] text-accent bg-accent/10 border border-accent/30">
            EXP_{String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[9px] font-mono text-muted-foreground tracking-widest">{project.infra}</span>
        </div>

        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0">
              <Icon className="w-4 h-4 text-accent" />
            </div>
            <div>
              <h3 className="text-base font-display font-bold text-foreground uppercase tracking-wide">{project.name}</h3>
              <p className="text-[9px] font-mono text-accent tracking-widest uppercase">{project.stack}</p>
            </div>
          </div>
        </div>

        <p className={`text-[11px] font-mono text-muted-foreground leading-relaxed flex-1 mb-4 transition-all duration-700 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}>
          {project.desc}
        </p>

        {/* Infrastructure Tags */}
        <div className={`flex flex-wrap gap-1.5 mb-4 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-muted border border-border text-[8px] font-mono text-muted-foreground uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}

/* Slide: Reflection/learnings */
function SlideReflection() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const learnings = [
    { text: "Build & Deployment Lifecycles", icon: GitBranch },
    { text: "Frontend-Backend Delivery", icon: Server },
    { text: "Hosting & Env Configuration", icon: Package },
    { text: "CI/CD for Web Workloads", icon: Code },
    { text: "Speed vs Maintainability", icon: Zap },
  ];
  return (
    <div ref={ref} className="h-full flex flex-col overflow-hidden bg-card border border-border p-6 sm:p-8">
      <span className="inline-block px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.25em] text-accent bg-accent/10 border border-accent/30 self-start mb-4">
        REFLECTION_LOG
      </span>
      <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <h3 className="text-xl font-display font-bold text-foreground uppercase tracking-wide mb-1 flex items-center gap-3">
          <Zap className="w-5 h-5 text-accent" /> What I Learned
        </h3>
        <p className="text-xs font-mono text-muted-foreground leading-relaxed mt-3 mb-6">
          Built hands-on experience with deployment pipelines, container configurations, and cloud hosting across a range of stacks and infrastructure environments.
        </p>
      </div>
      <div className="flex-1 flex flex-col gap-2 justify-center">
        {learnings.map((l, i) => (
          <div
            key={i}
            className={`flex items-center justify-between p-3 border border-border bg-background transition-all duration-500 hover:border-accent/50 group ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
            style={{ transitionDelay: `${i * 100 + 200}ms` }}
          >
            <span className="flex items-center gap-2 text-[9px] font-mono font-bold text-muted-foreground uppercase tracking-widest group-hover:text-foreground transition-colors">
              <l.icon className="w-3 h-3" /> {l.text}
            </span>
            <div className="h-px w-6 bg-border group-hover:bg-accent group-hover:w-10 transition-all" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* Slide: Tech stack overview */
function SlideTechOverview() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const stacks = [
    { label: "Containers", items: ["Docker", "Nginx"], icon: Cpu },
    { label: "Cloud", items: ["AWS S3", "ECS", "CloudFront"], icon: Database },
    { label: "CI/CD", items: ["GitHub Actions", "Vercel"], icon: GitBranch },
    { label: "Frameworks", items: ["React", "Next.js", "Gatsby"], icon: Layers },
  ];
  return (
    <div ref={ref} className="h-full flex flex-col overflow-hidden bg-card border border-border p-6 sm:p-8">
      <span className="inline-block px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.25em] text-accent bg-accent/10 border border-accent/30 self-start mb-4">
        TECH_MATRIX
      </span>
      <h3 className={`text-xl font-display font-bold text-foreground uppercase tracking-wide mb-6 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
        Stacks Used
      </h3>
      <div className="flex-1 grid grid-cols-2 gap-3">
        {stacks.map((s, i) => (
          <div
            key={s.label}
            className={`p-3 border border-border bg-background flex flex-col transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: `${i * 120 + 200}ms` }}
          >
            <div className="flex items-center gap-2 mb-2">
              <s.icon className="w-3.5 h-3.5 text-accent" />
              <span className="text-[9px] font-mono font-bold text-foreground uppercase tracking-widest">{s.label}</span>
            </div>
            <div className="flex flex-wrap gap-1 mt-auto">
              {s.items.map((item) => (
                <span key={item} className="px-1.5 py-0.5 bg-muted text-[8px] font-mono text-muted-foreground uppercase tracking-wider">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Slider core                                                        */
/* ------------------------------------------------------------------ */
function getLabSlides(): React.ReactNode[] {
  return [
    <SlideLabCover key="cover" />,
    ...prototypes.map((p, i) => <SlideProject key={p.name} project={p} index={i} />),
    <SlideTechOverview key="tech" />,
    <SlideReflection key="reflection" />,
  ];
}
const TOTAL_LAB_SLIDES = prototypes.length + 3; // cover + projects + tech + reflection

function LabSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0 });

  const updateActive = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    const children = Array.from(el.children) as HTMLElement[];
    let closest = 0;
    let minDist = Infinity;
    children.forEach((child, i) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(center - childCenter);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActive(closest);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateActive, { passive: true });
    return () => el.removeEventListener("scroll", updateActive);
  }, [updateActive]);

  const scrollTo = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const child = el.children[index] as HTMLElement | undefined;
    if (child) {
      el.scrollTo({ left: child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2, behavior: "smooth" });
    }
  }, []);

  const prev = () => scrollTo(Math.max(0, active - 1));
  const slides = getLabSlides();
  const next = () => scrollTo(Math.min(TOTAL_LAB_SLIDES - 1, active + 1));

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragState.current = { startX: e.pageX - (scrollRef.current?.offsetLeft ?? 0), scrollLeft: scrollRef.current?.scrollLeft ?? 0 };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft ?? 0);
    scrollRef.current.scrollLeft = dragState.current.scrollLeft - (x - dragState.current.startX);
  };
  const onMouseUp = () => setIsDragging(false);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <div className="relative group mt-10" onKeyDown={onKeyDown} tabIndex={0}>
      {/* pagination dots */}
      <div className="flex items-center justify-center gap-1.5 mb-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1 transition-all duration-300 cursor-pointer ${i === active ? "w-6 bg-accent" : "w-1.5 bg-border hover:bg-muted-foreground"
              }`}
          />
        ))}
      </div>

      {/* slider track */}
      <div
        ref={scrollRef}
        className={`flex gap-4 sm:gap-6 overflow-x-auto pb-4 motion-slider-scroll snap-x snap-mandatory ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {slides.map((slide, i) => (
          <div key={i} className="shrink-0 w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] min-h-[560px] sm:min-h-[600px] h-[560px] sm:h-[600px] snap-center">
            {slide}
          </div>
        ))}
      </div>

      {/* desktop arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-card border border-border items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)]"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-card border border-border items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)]"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* mobile swipe indicator */}
      <div className="flex md:hidden items-center justify-center gap-2 mt-4 text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
        <ChevronLeft className="w-3 h-3" /> SWIPE <ChevronRight className="w-3 h-3" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */
export const Prototypes = () => (
  <section id="prototypes" className="space-y-10 px-6 lg:px-20 xl:px-32">
    <SectionHeader title="LAB EXPERIMENTS" subtitle="Web App Projects" number="6" icon={<FlaskConical className="w-7 h-7" />} description="Deployment Practice & Stack Exploration" />

    <div className="p-8 bg-muted/30 border border-border">
      <p className="text-sm text-muted-foreground/80 font-mono leading-relaxed uppercase tracking-tighter">
        Practical deployment experience across different stacks — covering build pipelines, container configuration, and cloud hosting environments.
      </p>
    </div>

    <LabSlider />
  </section>
);
