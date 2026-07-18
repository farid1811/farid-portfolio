import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Server, Terminal, ShieldAlert, Cpu, CheckCircle } from "lucide-react";
import { projectsData } from "@/lib/projectsData";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — Farid Fitriansyah`,
      description: project.description,
    },
  };
}

export default function ProjectCaseStudy({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Visual helper mapping for icon
  const getDomainIcon = (domain: string) => {
    switch (domain) {
      case "ai-ml":
        return <Cpu className="h-5 w-5" />;
      case "bi-web":
        return <Terminal className="h-5 w-5" />;
      default:
        return <ShieldAlert className="h-5 w-5" />;
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Systems Catalog
        </Link>
      </div>

      {/* Header */}
      <div className="border-b border-border pb-8 mb-12">
        <div className="flex flex-wrap items-center gap-2">
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
          <span className="text-xs text-muted-foreground font-mono">{project.subtitle}</span>
        </div>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          {project.title} Case Study
        </h1>
        <p className="mt-4 text-lg text-muted-foreground font-light leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Grid Layout: Main info and Sidebar */}
      <div className="grid gap-12 md:grid-cols-3 items-start">
        {/* Main Content (2 cols) */}
        <div className="md:col-span-2 space-y-12">
          {/* Section 1: Background & Problem */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Background & Business Challenge
            </h2>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-4 font-light">
              <p>{project.longDescription}</p>
            </div>
          </div>

          {/* Section 2: Core Solution */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Algorithmic Implementation
            </h2>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-4 font-light">
              <p>{project.businessValue}</p>
            </div>
          </div>

          {/* Section 3: Architecture & System Design */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Architecture Specification
            </h2>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-4 font-light">
              <p>{project.systemDesign}</p>
              <div className="rounded-xl border border-border bg-card p-4 font-mono text-xs text-foreground mt-4">
                <span className="block text-[10px] uppercase font-bold text-muted-foreground mb-2">Architectural Blueprint</span>
                {project.architecture}
              </div>
            </div>
          </div>

          {/* Section 4: Key Platform Features */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Core Capabilities
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex gap-2.5 items-start text-xs text-muted-foreground rounded-xl border border-border bg-card/40 p-3"
                >
                  <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar (1 col) */}
        <div className="space-y-6">
          {/* Key Metrics card */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-xs font-bold text-foreground font-mono uppercase tracking-wider border-b border-border pb-3 flex items-center gap-2">
              {getDomainIcon(project.domain)}
              System Metrics
            </h3>
            <div className="divide-y divide-border pt-2">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="py-3 text-xs">
                  <span className="text-muted-foreground block uppercase font-mono">{metric.label}</span>
                  <span className="text-foreground font-semibold mt-0.5 block">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology stack card */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-xs font-bold text-foreground font-mono uppercase tracking-wider border-b border-border pb-3">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-1.5 pt-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-secondary px-2.5 py-1 text-xs font-semibold text-muted-foreground font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Repository CTA card */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-foreground font-mono uppercase tracking-wider border-b border-border pb-3">
              Code References
            </h3>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full h-10 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-xs font-semibold text-primary-foreground shadow transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              Browse Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
