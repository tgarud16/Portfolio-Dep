"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Command } from "lucide-react";

export const Terminal = () => {
  const [lines, setLines] = useState<string[]>(["Initializing platform...", "Establishing secure connection...", "Ready."]);
  const [input, setInput] = useState("");

    const commands: Record<string, string> = {
      help: "Available commands: help, status, projects, about, clear",
      status: "SYSTEM: ONLINE | CLOUD: AWS (ACTIVE) | K8S: STABLE",
      about: "KIRAN GARUD: DevOps / Platform Engineer focused on scalable infrastructure.",
      projects: "Flagship: Learning Hub (K8s), LLM Deployment Platform (AI Infra).",
      clear: "CLEAR",
    };

    const handleCommand = (e: React.FormEvent) => {
      e.preventDefault();
      const cmd = input.toLowerCase().trim();
      if (cmd === "clear") {
        setLines([]);
      } else if (commands[cmd]) {
        setLines([...lines, `> ${input}`, commands[cmd]]);
      } else if (cmd !== "") {
        setLines([...lines, `> ${input}`, `Command not found: ${cmd}. Type 'help' for options.`]);
      }
      setInput("");
    };

    return (
      <div className="w-full max-w-2xl mx-auto bg-card border border-border font-mono text-sm overflow-hidden shadow-[20px_20px_0px_0px_rgba(0,0,0,0.3)] dark:shadow-[20px_20px_0px_0px_rgba(0,0,0,0.5)] relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
      <div className="flex items-center justify-between px-4 py-2 bg-muted border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 bg-foreground/10 border border-foreground/20" />
          <div className="w-2.5 h-2.5 bg-foreground/10 border border-foreground/20" />
          <div className="w-2.5 h-2.5 bg-foreground/10 border border-foreground/20" />
        </div>
        <div className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-bold flex items-center gap-2">
          <div className="w-1 h-1 bg-accent animate-pulse" /> node_01 // status: active
        </div>
      </div>
      <div className="p-6 h-72 overflow-y-auto space-y-3 scrollbar-hide bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.02),transparent)]">
        {lines.map((line, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -5 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: i * 0.05 }}
            key={i} 
            className={line.startsWith(">") ? "text-accent font-bold" : "text-foreground/80"}
          >
            {line.startsWith(">") ? (
              <span className="flex items-center gap-2">
                <span className="text-[10px] opacity-30">INP_</span>
                {line}
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <span className="text-[10px] opacity-30">OUT_</span>
                {line}
              </span>
            )}
          </motion.div>
        ))}
        <form onSubmit={handleCommand} className="flex gap-2 text-accent">
          <span className="text-[10px] opacity-30 self-center">CMD_</span>
          <span className="font-bold">$</span>
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none flex-1 lowercase caret-accent"
            autoFocus
          />
        </form>
      </div>
      <div className="px-4 py-1.5 bg-muted/50 border-t border-border flex justify-between items-center">
        <div className="text-[8px] text-muted-foreground uppercase tracking-widest">protocol: ssh_secure</div>
        <div className="text-[8px] text-muted-foreground uppercase tracking-widest">latency: 12ms</div>
      </div>
    </div>
  );
};
