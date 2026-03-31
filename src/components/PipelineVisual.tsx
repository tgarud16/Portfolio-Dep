import React from "react";

interface PipelineVisualProps {
  status?: "success" | "running" | "failed";
}

export const PipelineVisual = ({ status = "success" }: PipelineVisualProps) => (
  <div className="flex items-center gap-2 font-mono text-[10px] uppercase font-bold">
    <div className="px-2 py-0.5 border border-primary/20 bg-primary/5 text-primary">Build</div>
    <div className="w-4 h-[1px] bg-primary/20" />
    <div className="px-2 py-0.5 border border-primary/20 bg-primary/5 text-primary">Test</div>
    <div className="w-4 h-[1px] bg-primary/20" />
    <div className={`px-2 py-0.5 border border-primary ${status === "running" ? "animate-pulse bg-primary text-primary-foreground" : "bg-primary/20 text-primary"}`}>Deploy</div>
  </div>
);
