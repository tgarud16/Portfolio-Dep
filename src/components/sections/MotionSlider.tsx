"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Play, Sparkles } from "lucide-react";

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
/*  Tactical label helper                                              */
/* ------------------------------------------------------------------ */
function TacLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.25em] text-accent bg-accent/10 border border-accent/30">
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-components for individual slides                               */
/* ------------------------------------------------------------------ */

/* Slide 1 – Cover */
function SlideCover() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  return (
    <div ref={ref} className="motion-slide relative flex flex-col justify-end h-full overflow-hidden bg-card border border-border">
      {/* grid pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      {/* scanline */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.1)_2px,rgba(255,255,255,0.1)_4px)]" />

      <div className={`relative z-10 p-6 sm:p-8 space-y-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <TacLabel>SYS_INTERFACE // ACTIVE</TacLabel>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight tracking-tight uppercase">
          Interface &<br />Motion Modules
        </h2>
        <p className="text-xs font-mono text-muted-foreground max-w-xs">
          Interactive interface modules for monitoring dashboards, workflow visualization, and platform control systems.
        </p>
        <div className="flex items-center gap-3 pt-2">
          <div className="w-8 h-8 bg-accent flex items-center justify-center text-[10px] font-bold text-accent-foreground font-mono">KG</div>
          <span className="text-[10px] text-muted-foreground font-mono tracking-widest">@DEVOPS_OPS</span>
        </div>
      </div>
      {/* arrow CTA */}
      <div className={`absolute top-6 right-6 w-10 h-10 border border-border flex items-center justify-center transition-all duration-500 delay-300 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
        <ArrowRight className="w-4 h-4 text-muted-foreground" />
      </div>
    </div>
  );
}

/* Slide 2 – Animate on View (skeleton loader) */
function SlideAnimateOnView() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  return (
    <div ref={ref} className="motion-slide flex flex-col h-full overflow-hidden bg-card border border-border p-6 sm:p-8">
      <TacLabel>MODULE_01</TacLabel>
      <h3 className="text-lg font-display font-bold text-foreground mt-4 mb-1 uppercase tracking-wide">Viewport State Loader</h3>
      <p className="text-[11px] font-mono text-muted-foreground mb-6">System metrics reveal progressively as deployment stages enter view.</p>
      <div className="flex-1 flex flex-col gap-3 justify-center">
        {[0, 1, 2, 3].map((i) => (
          <div key={i}
            className={`h-3 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
            style={{
              transitionDelay: `${i * 150}ms`,
              width: `${85 - i * 15}%`,
              background: `linear-gradient(90deg, hsl(var(--accent) / ${0.4 - i * 0.06}) 0%, hsl(var(--accent) / 0.05) 100%)`
            }} />
        ))}
      </div>
      <div className={`mt-4 self-start px-2 py-1 bg-muted border border-border text-[9px] font-mono text-muted-foreground transition-all duration-500 delay-700 ${visible ? "opacity-100" : "opacity-0"}`}>
        {"{ inView: true }"}
      </div>
    </div>
  );
}

/* Slide 3 – Clip-path columns */
function SlideClipPath() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  return (
    <div ref={ref} className="motion-slide flex flex-col h-full overflow-hidden bg-card border border-border p-6 sm:p-8">
      <TacLabel>MODULE_02</TacLabel>
      <h3 className="text-lg font-display font-bold text-foreground mt-4 mb-1 uppercase tracking-wide">Pipeline Stage Reveal</h3>
      <p className="text-[11px] font-mono text-muted-foreground mb-6">Deployment pipeline stages visualized through sequential column activation.</p>
      <div className="flex-1 flex gap-2 items-end">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="flex-1 overflow-hidden" style={{ height: `${50 + i * 10}%` }}>
            <div
              className="w-full h-full transition-all duration-700 ease-out"
              style={{
                transitionDelay: `${i * 120}ms`,
                clipPath: visible ? "inset(0 0 0 0)" : "inset(100% 0 0 0)",
                background: `linear-gradient(180deg, hsl(var(--accent) / ${0.4 + i * 0.08}) 0%, hsl(var(--accent) / 0.05) 100%)`
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* Slide 4 – Gradient beam button */
function SlideGradientBeam() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  return (
    <div ref={ref} className="motion-slide flex flex-col items-center justify-center h-full overflow-hidden bg-card border border-border p-6 sm:p-8 text-center">
      <TacLabel>INTERFACE_01</TacLabel>
      <h3 className="text-lg font-display font-bold text-foreground mt-4 mb-1 uppercase tracking-wide">Action Trigger</h3>
      <p className="text-[11px] font-mono text-muted-foreground mb-8 max-w-[220px]">Interactive deployment trigger with status feedback on system state change.</p>
      <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <button className="group relative px-8 py-3 bg-muted text-sm font-mono font-bold text-foreground uppercase tracking-widest overflow-hidden border border-border hover:border-accent/50 transition-colors duration-300 cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
          <span className="relative z-10 flex items-center gap-2">
            Explore Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 motion-beam-gradient" />
        </button>
      </div>
    </div>
  );
}

/* Slide 5 – Vertical text reveal */
function SlideTextReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const words = ["System", "State"];
  return (
    <div ref={ref} className="motion-slide flex flex-col items-center justify-center h-full overflow-hidden bg-card border border-border p-6 sm:p-8">
      <TacLabel>WORKFLOW_VIEW</TacLabel>
      <div className="space-y-2 mt-6">
        {words.map((word, wi) => (
          <div key={wi} className="overflow-hidden">
            <div
              className={`text-3xl sm:text-4xl font-display font-bold text-foreground uppercase tracking-wide transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
              style={{ transitionDelay: `${wi * 200}ms` }}
            >
              {word}
            </div>
          </div>
        ))}
      </div>
      <p className={`text-[11px] font-mono text-muted-foreground mt-6 transition-all duration-500 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}>
        System state transition display
      </p>
    </div>
  );
}

/* Slide 6 – Infinite logo marquee */
function SlideMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const logos = ["Docker", "K8s", "AWS", "GCP", "Azure", "Terraform", "Ansible", "Jenkins"];
  const row = [...logos, ...logos];
  return (
    <div ref={ref} className="motion-slide flex flex-col h-full overflow-hidden bg-card border border-border p-6 sm:p-8">
      <TacLabel>MODULE_03</TacLabel>
      <h3 className="text-lg font-display font-bold text-foreground mt-4 mb-1 uppercase tracking-wide">Stack Ticker</h3>
      <p className="text-[11px] font-mono text-muted-foreground mb-6">Live infrastructure stack feed for operational monitoring dashboards.</p>
      <div className={`flex-1 flex flex-col justify-center gap-4 transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
        {[false, true].map((reverse, ri) => (
          <div key={ri} className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-card to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-card to-transparent pointer-events-none" />
            <div className={`flex gap-3 ${reverse ? "motion-marquee-reverse" : "motion-marquee"}`}>
              {row.map((l, i) => (
                <div key={i} className="shrink-0 px-3 py-1.5 bg-muted border border-border text-[10px] font-mono text-muted-foreground whitespace-nowrap uppercase tracking-widest">
                  {l}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Slide 7 – Card stack with flashlight hover */
function SlideCardStack() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const cards = [
    { title: "PIPELINE", color: "hsl(var(--accent) / 0.15)" },
    { title: "DEPLOY", color: "hsl(var(--accent) / 0.1)" },
    { title: "MONITOR", color: "hsl(var(--accent) / 0.05)" },
  ];

  return (
    <div ref={ref} className="motion-slide flex flex-col h-full overflow-hidden bg-card border border-border p-6 sm:p-8">
      <TacLabel>SYSTEM_STATE</TacLabel>
      <h3 className="text-lg font-display font-bold text-foreground mt-4 mb-1 uppercase tracking-wide">Workflow Layers</h3>
      <p className="text-[11px] font-mono text-muted-foreground mb-6">Layered workflow visualization for pipeline, deploy, and monitor stages.</p>
      <div
        ref={containerRef}
        onMouseMove={handleMouse}
        className="flex-1 relative flex items-center justify-center"
      >
        {cards.map((card, i) => (
          <div
            key={card.title}
            className="absolute w-48 h-32 sm:w-56 sm:h-36 border border-border backdrop-blur-sm transition-all duration-700 motion-card-stack"
            style={{
              zIndex: cards.length - i,
              transitionDelay: `${i * 100}ms`,
              transform: visible
                ? `translateY(${i * -12}px) rotate(${(i - 1) * 4}deg) scale(${1 - i * 0.04})`
                : `translateY(40px) rotate(0deg) scale(0.9)`,
              opacity: visible ? 1 - i * 0.15 : 0,
              backgroundColor: card.color,
              boxShadow: `4px 4px 0px 0px rgba(0,0,0,0.15)`,
            }}
          >
            {/* flashlight */}
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: `radial-gradient(200px circle at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.06), transparent 60%)`
              }}
            />
            <div className="p-4">
              <span className="text-[10px] font-mono text-muted-foreground tracking-[0.25em]">{card.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Slide 8 – CTA */
function SlideCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  return (
    <div ref={ref} className="motion-slide flex flex-col items-center justify-center h-full overflow-hidden bg-card border border-border p-6 sm:p-8 text-center">
      <Sparkles className={`w-8 h-8 text-accent mb-4 transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`} />
      <h3 className={`text-2xl sm:text-3xl font-display font-bold text-foreground mb-3 uppercase tracking-wide transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        Precision Engineering<br />Refined Systems
      </h3>
      <p className={`text-[11px] font-mono text-muted-foreground mb-8 max-w-[240px] transition-all duration-500 delay-300 ${visible ? "opacity-100" : "opacity-0"}`}>
        Build. Deploy. Deliver polished platform interfaces.
      </p>
      <div className={`transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <button className="group relative px-8 py-3 bg-accent text-accent-foreground text-sm font-mono font-bold uppercase tracking-widest hover:bg-accent/90 transition-colors duration-300 cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
          <span className="flex items-center gap-2">
            Get Started <Play className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main MotionSlider component                                        */
/* ------------------------------------------------------------------ */
const slides = [SlideCover, SlideAnimateOnView, SlideClipPath, SlideGradientBeam, SlideTextReveal, SlideMarquee, SlideCardStack, SlideCTA];

export function MotionSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0 });

  /* ---- scroll tracking ---- */
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

  /* ---- navigation ---- */
  const scrollTo = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const child = el.children[index] as HTMLElement | undefined;
    if (child) {
      el.scrollTo({ left: child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2, behavior: "smooth" });
    }
  }, []);

  const prev = () => scrollTo(Math.max(0, active - 1));
  const next = () => scrollTo(Math.min(slides.length - 1, active + 1));

  /* ---- mouse drag ---- */
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

  /* ---- keyboard ---- */
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <section className="relative w-full py-16 sm:py-24 bg-background overflow-hidden" id="motion-slider">
      {/* top/bottom border */}
      <div className="absolute inset-x-0 top-0 h-px bg-border" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-border" />

      {/* heading */}
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-40 mb-10 sm:mb-14">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 bg-accent" />
          <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground font-bold">SYS_SPEC // INTERFACE_MODULE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight uppercase">Design & Motion System</h2>
        <p className="text-xs font-mono text-muted-foreground mt-2 max-w-md tracking-wide">Interactive interface modules for monitoring dashboards, workflow visualization, and platform control systems.</p>
      </div>

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

      {/* slider */}
      <div className="relative group" onKeyDown={onKeyDown} tabIndex={0}>
        <div
          ref={scrollRef}
          className={`flex gap-4 sm:gap-6 overflow-x-auto px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-40 pb-4 motion-slider-scroll snap-x snap-mandatory ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {slides.map((Slide, i) => (
            <div
              key={i}
              className="shrink-0 w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] h-[420px] sm:h-[460px] snap-center"
            >
              <Slide />
            </div>
          ))}
        </div>

        {/* desktop arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="hidden md:flex absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-card border border-border items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)]"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="hidden md:flex absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-card border border-border items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)]"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* mobile swipe indicator */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-4 text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
          <ChevronLeft className="w-3 h-3" /> SWIPE <ChevronRight className="w-3 h-3" />
        </div>
      </div>
    </section>
  );
}
