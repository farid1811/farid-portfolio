"use client";

import React, { memo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, ArrowRight, Server, Terminal, ShieldAlert, Cpu } from "lucide-react";

export interface ProjectData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  domain: "ai-ml" | "bi-web" | "systems";
  techStack: string[];
  architecture: string;
  githubUrl: string;
  caseStudyUrl: string;
  // Unique UI decoration parameters for the CSS mockups
  accentColor: string;
  mockType: "lstm" | "sgd" | "rag" | "cbt";
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  // Renders a stylized, clean SaaS interface mockup based on project type
  const renderMockup = (type: string) => {
    switch (type) {
      case "lstm":
        return (
          <div className="relative h-48 w-full bg-slate-900 text-slate-100 flex flex-col font-mono text-[10px] overflow-hidden p-3 rounded-t-2xl border-b border-border">
            {/* Window bar */}
            <div className="flex items-center gap-1.5 pb-2 border-b border-slate-800 mb-2">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-[9px] text-slate-500 ml-2">Foresight IQ MLOps Console</span>
            </div>
            {/* Core view mock */}
            <div className="flex-1 grid grid-cols-3 gap-2">
              <div className="border border-slate-800 rounded p-1.5 bg-slate-950 flex flex-col justify-between">
                <span className="text-slate-500 text-[8px] uppercase">Train Status</span>
                <span className="text-emerald-400 font-semibold text-xs flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Converged
                </span>
                <span className="text-[7px] text-slate-600">Epoch 100/100</span>
              </div>
              <div className="border border-slate-800 rounded p-1.5 bg-slate-950 flex flex-col justify-between">
                <span className="text-slate-500 text-[8px] uppercase">LSTM Nodes</span>
                <span className="text-violet-400 font-semibold text-xs">h = 64 / 50</span>
                <span className="text-[7px] text-slate-600">early_stopping = active</span>
              </div>
              <div className="border border-slate-800 rounded p-1.5 bg-slate-950 flex flex-col justify-between col-span-1">
                <span className="text-slate-500 text-[8px] uppercase">Test MAPE</span>
                <span className="text-indigo-400 font-semibold text-xs">17.29% - 19.94%</span>
                <span className="text-[7px] text-slate-600">leakage_shield = TRUE</span>
              </div>
              <div className="col-span-3 border border-slate-800 rounded p-1.5 bg-slate-950 flex items-center justify-between">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[8px] text-slate-400">Log-Difference Inversion In-Sample</span>
                  <span className="text-[7px] text-slate-600">y_hat = (y_prev + sL) * e^d_hat - sL</span>
                </div>
                <div className="flex items-center gap-1 bg-indigo-500/10 border border-indigo-500/20 px-1.5 py-0.5 rounded text-[8px] text-indigo-400">
                  <Server className="h-3 w-3" />
                  PyTorch GPU
                </div>
              </div>
            </div>
          </div>
        );
      case "sgd":
        return (
          <div className="relative h-48 w-full bg-slate-950 text-slate-200 flex flex-col font-sans overflow-hidden p-3 rounded-t-2xl border-b border-border">
            {/* Window Header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-900 mb-2">
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-slate-800" />
                <span className="text-[9px] text-slate-400 font-mono">live-commerce-bi-solver</span>
              </div>
              <span className="text-[8px] bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-1 rounded font-mono">SGD Constrained</span>
            </div>
            {/* Regression mock surface/workspace */}
            <div className="flex-1 flex gap-2">
              <div className="w-1/3 flex flex-col gap-1.5 justify-center">
                <div className="bg-slate-900 border border-slate-850 p-1 rounded">
                  <span className="block text-[7px] text-slate-500 uppercase">Theta Constraint</span>
                  <span className="block text-[10px] font-semibold text-slate-200 font-mono">&theta; &ge; 0, bias &ge; 0</span>
                </div>
                <div className="bg-slate-900 border border-slate-850 p-1 rounded">
                  <span className="block text-[7px] text-slate-500 uppercase">Sales R² Fit</span>
                  <span className="block text-[10px] font-semibold text-indigo-400 font-mono">51.26%</span>
                </div>
              </div>
              <div className="flex-1 bg-slate-900/60 border border-slate-850 rounded p-1.5 flex flex-col justify-between overflow-hidden">
                <span className="text-[8px] text-slate-400 font-mono flex items-center gap-1 border-b border-slate-850 pb-1">
                  <Terminal className="h-2.5 w-2.5 text-slate-500" />
                  SSE Optimization Stream
                </span>
                <div className="flex-1 flex flex-col justify-end gap-1 font-mono text-[7px] text-slate-500 leading-none">
                  <div>[Epoch 042] Loss: 0.1245 | RMSE: 9.68 | Delta: 0.0003</div>
                  <div>[Epoch 043] Loss: 0.1241 | RMSE: 9.67 | Delta: 0.0004</div>
                  <div className="text-emerald-400">[Epoch 044] Convergence locked. System status idle.</div>
                </div>
              </div>
            </div>
          </div>
        );
      case "rag":
        return (
          <div className="relative h-48 w-full bg-zinc-950 text-zinc-100 flex flex-col font-sans overflow-hidden p-3 rounded-t-2xl border-b border-border">
            {/* Window bar */}
            <div className="flex items-center justify-between pb-2 border-b border-zinc-900 mb-2">
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-zinc-800" />
                <span className="text-[9px] text-zinc-400 font-mono">SPKJS AI Advisor</span>
              </div>
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            {/* Gemini RAG Context Engine Visual */}
            <div className="flex-1 flex flex-col justify-between gap-1.5">
              <div className="bg-zinc-900/80 border border-zinc-800 rounded p-1.5 flex items-center justify-between">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[8px] text-zinc-500">Retrieval Context Injector</span>
                  <span className="text-[9px] font-mono text-zinc-200">Local Vector Cache + IPK Form Inputs</span>
                </div>
                <span className="text-[8px] bg-emerald-500/20 text-emerald-400 px-1 rounded font-mono">&lt; 50ms</span>
              </div>
              <div className="flex-1 bg-zinc-900/40 border border-zinc-850 rounded p-1.5 flex items-center gap-2">
                <Cpu className="h-6 w-6 text-indigo-400 animate-pulse shrink-0" />
                <div className="flex-1 overflow-hidden">
                  <span className="block text-[7px] text-zinc-500">Gemini 1.5 Flash Proposal Inference</span>
                  <span className="block text-[8px] font-mono text-zinc-300 truncate">
                    &quot;Judul yang diajukan memiliki skor kesamaan 78.4% dengan database Karya Ilmiah...&quot;
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      case "cbt":
        return (
          <div className="relative h-48 w-full bg-slate-900 text-slate-100 flex flex-col font-sans overflow-hidden p-3 rounded-t-2xl border-b border-border">
            {/* Window bar */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2">
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded bg-rose-500 flex items-center justify-center text-[7px] font-bold text-white">!</div>
                <span className="text-[9px] text-slate-300 font-mono">Proctored Safeguards Active</span>
              </div>
              <span className="text-[8px] text-rose-400 font-mono flex items-center gap-1">
                <ShieldAlert className="h-3 w-3" />
                Audit Logs Enabled
              </span>
            </div>
            {/* Cheat detection monitoring */}
            <div className="flex-1 grid grid-cols-2 gap-2">
              <div className="bg-slate-950 border border-slate-850 rounded p-1.5 flex flex-col justify-between">
                <span className="text-[7px] text-slate-500 uppercase">Cheating Safeguards</span>
                <div className="space-y-1">
                  <div className="flex justify-between text-[8px] text-slate-300 font-mono">
                    <span>Fullscreen Exit:</span>
                    <span className="text-rose-400 font-bold">Tracked</span>
                  </div>
                  <div className="flex justify-between text-[8px] text-slate-300 font-mono">
                    <span>Tab switching:</span>
                    <span className="text-rose-400 font-bold">Block/Submit</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-950 border border-slate-850 rounded p-1.5 flex flex-col justify-between">
                <span className="text-[7px] text-slate-500 uppercase">Integrity Status</span>
                <div className="space-y-1">
                  <div className="flex justify-between text-[8px] text-slate-300 font-mono">
                    <span>SEB Signature:</span>
                    <span className="text-emerald-400 font-bold">Verified</span>
                  </div>
                  <div className="flex justify-between text-[8px] text-slate-300 font-mono">
                    <span>Violation Limit:</span>
                    <span className="text-amber-400 font-bold">Max 3x</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <div className="h-48 bg-secondary rounded-t-2xl border-b border-border" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-md hover:border-muted-foreground/30"
    >
      {/* Mockup visual representation */}
      {renderMockup(project.mockType)}

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex-1">
          {/* Subtitle / Category */}
          <div className="flex items-center gap-2">
            <span
              className="inline-block rounded-md px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider font-mono"
              style={{
                backgroundColor: `${project.accentColor}15`,
                color: project.accentColor,
              }}
            >
              {project.domain === "ai-ml"
                ? "AI / Machine Learning"
                : project.domain === "bi-web"
                ? "BI & Full Stack"
                : "Secure Systems"}
            </span>
            <span className="text-xs text-muted-foreground font-mono font-light">
              {project.subtitle}
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Architecture block */}
          <div className="mt-4 rounded-xl border border-border bg-background/50 p-3">
            <span className="block text-[10px] font-semibold text-muted-foreground uppercase tracking-wider font-mono">
              Architectural Pattern
            </span>
            <span className="mt-1 block text-xs font-mono text-foreground font-medium">
              {project.architecture}
            </span>
          </div>
        </div>

        {/* Tech Stack List */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons / Actions */}
        <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            GitHub Repository
          </a>
          <Link
            href={project.caseStudyUrl}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:underline group-hover:text-primary transition-colors"
          >
            Read Case Study
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// Memoize to prevent re-renders when Projects filter changes
export default memo(ProjectCard);
