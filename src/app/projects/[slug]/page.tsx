import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Server,
  Terminal,
  ShieldCheck,
  Cpu,
  CheckCircle,
  Database,
  BarChart3,
  LineChart,
  PieChart,
  Workflow,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import { projectsData, type ProjectData } from "@/lib/projectsData";

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
    title: `${project.title} — Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study | Muhammad Farid Fitriansyah`,
      description: project.description,
      images: project.imageUrl ? [{ url: project.imageUrl }] : undefined,
    },
  };
}

export default function ProjectCaseStudy({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const isDataAnalytics =
    project.domain === "data-analytics" || project.domain === "business-intelligence";
  const isMachineLearning = project.domain === "machine-learning";

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects Catalog
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
            Tier {project.tier} · {project.categoryLabel}
          </span>
          <span className="text-xs text-muted-foreground font-mono">{project.subtitle}</span>
        </div>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground font-light leading-relaxed">
          {project.description}
        </p>

        {/* Special Explicit Note for Live Commerce Intelligence distinguishing thesis vs app */}
        {project.slug === "live-commerce-intelligence" && (
          <div className="mt-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-4 text-xs text-muted-foreground leading-relaxed">
            <div className="flex items-center gap-2 font-semibold text-indigo-600 dark:text-indigo-400 font-mono mb-1">
              <BookOpen className="h-4 w-4" />
              <span>Research Foundation vs. Portfolio Implementation Distinction</span>
            </div>
            <p>
              <strong>1. Undergraduate Thesis Research:</strong> <em>&quot;Analisis dan Prediksi Penjualan Menggunakan SGD pada Live Commerce&quot;</em> conducted at Universitas Samudra (Advising by Dr. Ginda Maruli Andi Siregar), focusing on regression formulation, parameter clipping constraints, and comparative statistical validation.
            </p>
            <p className="mt-1.5">
              <strong>2. Portfolio Web Application:</strong> A full-stack Flask MVC web platform featuring interactive scenario simulation, real-time Server-Sent Events (SSE) telemetry, and 3D visual analysis, developed as a further evolution extending the original analytical research into an operational decision tool.
            </p>
          </div>
        )}
      </div>

      {/* Grid Layout: Main Case Study Body & Sidebar */}
      <div className="grid gap-12 md:grid-cols-3 items-start">
        {/* Main Content (2 cols) */}
        <div className="md:col-span-2 space-y-12">
          {/* VISUAL EVIDENCE SECTION */}
          {project.imageUrl && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Visual Evidence &amp; Dashboard Artifacts
              </h2>
              <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
                <div className="relative aspect-[16/10] w-full bg-slate-950">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} visual dashboard screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 650px"
                    className="object-contain"
                  />
                </div>
                <div className="p-4 bg-card border-t border-border text-xs text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Primary Artifact:</strong>{" "}
                    {project.visualEvidenceDesc}
                  </p>
                </div>
              </div>

              {/* Secondary Image if present (e.g., Cleaned Dataset table) */}
              {project.secondaryImageUrl && (
                <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm mt-4">
                  <div className="relative aspect-[16/9] w-full bg-slate-950">
                    <Image
                      src={project.secondaryImageUrl}
                      alt={`${project.title} dataset preparation screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 650px"
                      className="object-contain"
                    />
                  </div>
                  <div className="p-4 bg-card border-t border-border text-xs text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Supporting Evidence:</strong> Standardized, cleansed tabular dataset showing verified field transformations.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SECTION: Overview & Problem */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              The Business Problem &amp; Context
            </h2>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-3 font-light">
              <p>{project.longDescription}</p>
              <div className="rounded-xl border border-border bg-card p-4">
                <strong className="text-foreground block text-xs font-mono uppercase tracking-wider mb-1">
                  Core Challenge
                </strong>
                <p className="text-xs text-muted-foreground">{project.problem}</p>
              </div>
            </div>
          </div>

          {/* SECTION: Data Input & Preprocessing */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Data &amp; Input Structure
            </h2>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-3 font-light">
              <p>{project.dataInput}</p>
              <div className="rounded-xl border border-border bg-card p-4">
                <strong className="text-foreground block text-xs font-mono uppercase tracking-wider mb-1">
                  Preparation &amp; Cleansing Approach
                </strong>
                <p className="text-xs text-muted-foreground">{project.approach}</p>
              </div>
            </div>
          </div>

          {/* SECTION: Methodology & Analysis */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Analysis &amp; Methodology
            </h2>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-3 font-light">
              <p>{project.methodology}</p>
              <p>{project.businessValue}</p>
            </div>
          </div>

          {/* SECTION: Key Findings & Results */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Key Findings &amp; Verified Results
            </h2>
            <ul className="space-y-3">
              {project.keyFindings.map((finding, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 items-start text-xs text-muted-foreground rounded-xl border border-border bg-card/60 p-3.5"
                >
                  <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{finding}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION: What I Built & Implementation */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              What I Built
            </h2>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-3 font-light">
              <p>{project.whatIBuilt}</p>
              {project.features && project.features.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-xs font-mono font-bold text-foreground uppercase tracking-wider mb-3">
                    Key Solution Capabilities
                  </h3>
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex gap-2 items-start text-xs text-muted-foreground rounded-xl border border-border bg-card/40 p-3"
                      >
                        <span className="text-indigo-500 font-mono font-bold shrink-0">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* SECTION: Outcome & Takeaway */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Outcome &amp; Business Takeaway
            </h2>
            <div className="rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground leading-relaxed font-light">
              <p>{project.outcome}</p>
            </div>
          </div>
        </div>

        {/* Sidebar (1 col) */}
        <div className="space-y-6">
          {/* Key Metrics card */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-xs font-bold text-foreground font-mono uppercase tracking-wider border-b border-border pb-3 flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-indigo-500" />
              Verified Metrics
            </h3>
            <div className="divide-y divide-border pt-2">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="py-3 text-xs">
                  <span className="text-muted-foreground block uppercase font-mono text-[10px]">
                    {metric.label}
                  </span>
                  <span className="text-foreground font-semibold mt-0.5 block font-mono text-sm">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology stack card */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-xs font-bold text-foreground font-mono uppercase tracking-wider border-b border-border pb-3">
              Tools &amp; Technologies
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

          {/* Architecture / Design Blueprint */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-xs font-bold text-foreground font-mono uppercase tracking-wider border-b border-border pb-3">
              Solution Architecture
            </h3>
            <p className="mt-3 text-xs text-muted-foreground font-mono leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Repository / Demo CTA card */}
          {project.githubUrl ? (
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-3">
              <h3 className="text-xs font-bold text-foreground font-mono uppercase tracking-wider border-b border-border pb-3">
                Repository
              </h3>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full h-10 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-xs font-semibold text-primary-foreground shadow transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                Browse Codebase
              </a>
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="text-xs font-mono text-muted-foreground block">
                Portfolio Evidence Artifact
              </span>
              <p className="text-xs text-muted-foreground mt-1">
                Completed as part of verified coursework and organizational implementations.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
