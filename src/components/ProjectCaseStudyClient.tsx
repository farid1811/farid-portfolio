"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Server,
  FileText,
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
  Award,
} from "lucide-react";
import {
  type ProjectData,
  getLocalized,
  getLocalizedArray,
} from "@/lib/projectsData";
import { useLanguage } from "@/context/LanguageContext";
import EvidenceModal from "./EvidenceModal";

interface ProjectCaseStudyClientProps {
  project: ProjectData;
}

export default function ProjectCaseStudyClient({
  project,
}: ProjectCaseStudyClientProps) {
  const { lang } = useLanguage();
  const [evidenceModalOpen, setEvidenceModalOpen] = useState(false);

  const isDataAnalytics =
    project.domain === "data-analytics" ||
    project.domain === "business-intelligence";
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
          {lang === "id" ? "Kembali ke Katalog Proyek" : "Back to Projects Catalog"}
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
            Tier {project.tier} · {getLocalized(project.categoryLabel, lang)}
          </span>
          <span className="text-xs text-muted-foreground font-mono">
            {getLocalized(project.subtitle, lang)}
          </span>
        </div>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground font-light leading-relaxed">
          {getLocalized(project.description, lang)}
        </p>

        {/* Special Explicit Note for Live Commerce Intelligence distinguishing thesis vs app */}
        {project.slug === "live-commerce-intelligence" && (
          <div className="mt-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-5 text-xs text-muted-foreground leading-relaxed">
            <div className="flex items-center gap-2 font-semibold text-indigo-600 dark:text-indigo-400 font-mono mb-2 text-sm">
              <BookOpen className="h-4 w-4" />
              <span>
                {lang === "id"
                  ? "Diferensiasi: Fondasi Riset Skripsi vs. Aplikasi Web Portofolio"
                  : "Research Foundation vs. Portfolio Implementation Distinction"}
              </span>
            </div>
            <p>
              <strong>
                {lang === "id"
                  ? "1. Riset Skripsi Ilmiah:"
                  : "1. Undergraduate Thesis Research:"}
              </strong>{" "}
              <em>
                &quot;Analisis dan Prediksi Penjualan Menggunakan Stochastic
                Gradient Descent (SGD) pada Live Commerce&quot;
              </em>{" "}
              {lang === "id"
                ? "dilaksanakan di Universitas Samudra (Pembimbing: Dr. Ginda Maruli Andi Siregar, S.T., M.T. & Teuku Radillah, S.T., M.Cs.), berfokus pada formulasi regresi, penalti batasan clipping parameter non-negatif (θ ≥ 0), serta validasi statistik komparatif terhadap model OLS standar."
                : "conducted at Universitas Samudra (Advising by Dr. Ginda Maruli Andi Siregar, S.T., M.T. & Teuku Radillah, S.T., M.Cs.), focusing on regression formulation, parameter clipping constraints (θ ≥ 0), and comparative statistical validation against unconstrained baselines."}
            </p>
            <p className="mt-2">
              <strong>
                {lang === "id"
                  ? "2. Aplikasi Web Portofolio:"
                  : "2. Portfolio Web Application:"}
              </strong>{" "}
              {lang === "id"
                ? "Platform web Flask MVC full-stack dengan antarmuka simulasi skenario interaktif, telemetri real-time, dan kanvas visualisasi Plotly.js 3D, dikembangkan sebagai evolusi praktis untuk mengubah hasil riset analitik menjadi instrumen keputusan operasional nyata."
                : "A full-stack Flask MVC platform featuring interactive scenario simulation, real-time telemetry, and 3D visual analysis via Plotly.js, developed as a functional evolution extending the original analytical research into an operational decision tool."}
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
                {lang === "id"
                  ? "Bukti Visual & Artefak Dashboard"
                  : "Visual Evidence & Dashboard Artifacts"}
              </h2>
              <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
                <div className="relative aspect-[16/10] w-full bg-slate-950 p-2">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 650px"
                    className="object-contain"
                  />
                </div>
                <div className="p-4 bg-card border-t border-border text-xs text-muted-foreground">
                  <p>
                    <strong className="text-foreground">
                      {lang === "id" ? "Artefak Utama:" : "Primary Artifact:"}
                    </strong>{" "}
                    {getLocalized(project.visualEvidenceDesc, lang)}
                  </p>
                </div>
              </div>

              {/* Secondary Image if present */}
              {project.secondaryImageUrl && (
                <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm mt-4">
                  <div className="relative aspect-[16/9] w-full bg-slate-950 p-2">
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
                      <strong className="text-foreground">
                        {lang === "id" ? "Bukti Pendukung:" : "Supporting Evidence:"}
                      </strong>{" "}
                      {lang === "id"
                        ? "Dataset tabular terstandardisasi dan bersih yang menunjukkan transformasi data terverifikasi."
                        : "Standardized, cleansed tabular dataset showing verified field transformations."}
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
              {lang === "id"
                ? "Konteks & Masalah Bisnis"
                : "The Business Problem & Context"}
            </h2>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-3 font-light">
              <p>{getLocalized(project.longDescription, lang)}</p>
              <div className="rounded-xl border border-border bg-card p-4">
                <strong className="text-foreground block text-xs font-mono uppercase tracking-wider mb-1">
                  {lang === "id" ? "Tantangan Utama" : "Core Challenge"}
                </strong>
                <p className="text-xs text-muted-foreground">
                  {getLocalized(project.problem, lang)}
                </p>
              </div>
            </div>
          </div>

          {/* SECTION: Data Input & Preprocessing */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              {lang === "id" ? "Struktur Data & Masukan" : "Data & Input Structure"}
            </h2>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-3 font-light">
              <p>{getLocalized(project.dataInput, lang)}</p>
              <div className="rounded-xl border border-border bg-card p-4">
                <strong className="text-foreground block text-xs font-mono uppercase tracking-wider mb-1">
                  {lang === "id"
                    ? "Pendekatan Pembersihan Data"
                    : "Preparation & Cleansing Approach"}
                </strong>
                <p className="text-xs text-muted-foreground">
                  {getLocalized(project.approach, lang)}
                </p>
              </div>
            </div>
          </div>

          {/* SECTION: Methodology & Analysis */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              {lang === "id"
                ? "Metodologi & Analisis Teknis"
                : "Analysis & Methodology"}
            </h2>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-3 font-light">
              <p>{getLocalized(project.methodology, lang)}</p>
              <p>{getLocalized(project.businessValue, lang)}</p>
            </div>
          </div>

          {/* SECTION: Key Findings & Results */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              {lang === "id"
                ? "Temuan Kunci & Hasil Terverifikasi"
                : "Key Findings & Verified Results"}
            </h2>
            <ul className="space-y-3">
              {getLocalizedArray(project.keyFindings, lang).map(
                (finding, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 items-start text-xs text-muted-foreground rounded-xl border border-border bg-card/60 p-3.5"
                  >
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{finding}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* SECTION: What I Built & Implementation */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              {lang === "id" ? "Implementasi Solusi" : "What I Built"}
            </h2>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-3 font-light">
              <p>{getLocalized(project.whatIBuilt, lang)}</p>
              {project.features && (
                <div className="mt-4">
                  <h3 className="text-xs font-mono font-bold text-foreground uppercase tracking-wider mb-3">
                    {lang === "id"
                      ? "Fitur & Kapabilitas Solusi"
                      : "Key Solution Capabilities"}
                  </h3>
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {getLocalizedArray(project.features, lang).map(
                      (feature, index) => (
                        <li
                          key={index}
                          className="flex gap-2 items-start text-xs text-muted-foreground rounded-xl border border-border bg-card/40 p-3"
                        >
                          <span className="text-indigo-500 font-mono font-bold shrink-0">
                            ▸
                          </span>
                          <span>{feature}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* CONTEXTUAL EVIDENCE & CERTIFICATION CALLOUT (PART 10 & PART 11) */}
          {project.evidenceRelation && (
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                      {getLocalized(project.evidenceRelation.type, lang)}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground">
                    {getLocalized(project.evidenceRelation.title, lang)}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed max-w-xl font-light">
                    {getLocalized(project.evidenceRelation.description, lang)}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-primary/20 flex items-center justify-between">
                <button
                  onClick={() => setEvidenceModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold shadow hover:opacity-90 active:scale-95 transition-all"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>
                    {getLocalized(project.evidenceRelation.buttonLabel, lang)}
                  </span>
                </button>

                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                  <span>
                    {lang === "id"
                      ? "Dokumen Resmi Terverifikasi"
                      : "Verified Official Record"}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* SECTION: Outcome & Takeaway */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              {lang === "id"
                ? "Hasil Akhir & Nilai Bisnis"
                : "Outcome & Business Takeaway"}
            </h2>
            <div className="rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground leading-relaxed font-light">
              <p>{getLocalized(project.outcome, lang)}</p>
            </div>
          </div>
        </div>

        {/* Sidebar (1 col) */}
        <div className="space-y-6">
          {/* Key Metrics card */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-xs font-bold text-foreground font-mono uppercase tracking-wider border-b border-border pb-3 flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-indigo-500" />
              {lang === "id" ? "Metrik Terverifikasi" : "Verified Metrics"}
            </h3>
            <div className="divide-y divide-border pt-2">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="py-3 text-xs">
                  <span className="text-muted-foreground block uppercase font-mono text-[10px]">
                    {getLocalized(metric.label, lang)}
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
              {lang === "id" ? "Alat & Teknologi" : "Tools & Technologies"}
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
              {lang === "id" ? "Arsitektur Solusi" : "Solution Architecture"}
            </h3>
            <p className="mt-3 text-xs text-muted-foreground font-mono leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Repository / Demo CTA card */}
          {project.githubUrl ? (
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-3">
              <h3 className="text-xs font-bold text-foreground font-mono uppercase tracking-wider border-b border-border pb-3">
                {lang === "id" ? "Repositori Kode" : "Repository"}
              </h3>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full h-10 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-xs font-semibold text-primary-foreground shadow transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                {lang === "id" ? "Buka Repositori GitHub" : "Browse Codebase"}
              </a>
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="text-xs font-mono text-muted-foreground block">
                {lang === "id"
                  ? "Artefak Pembuktian Portofolio"
                  : "Portfolio Evidence Artifact"}
              </span>
              <p className="text-xs text-muted-foreground mt-1">
                {lang === "id"
                  ? "Diselesaikan sebagai bagian dari luaran akademik dan implementasi institusi terverifikasi."
                  : "Completed as part of verified coursework and organizational implementations."}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Embedded Evidence Modal */}
      {project.evidenceRelation && (
        <EvidenceModal
          isOpen={evidenceModalOpen}
          onClose={() => setEvidenceModalOpen(false)}
          title={getLocalized(project.evidenceRelation.title, lang)}
          fileUrl={project.evidenceRelation.file}
          organization={project.title}
        />
      )}
    </div>
  );
}
