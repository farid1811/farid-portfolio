"use client";

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Sparkles,
  Database,
  GraduationCap,
  ShieldCheck,
  LineChart,
  PieChart,
  BarChart3,
  Workflow,
  Search,
  CheckCircle2,
} from "lucide-react";
import { projectsData } from "@/lib/projectsData";
import { useLanguage } from "@/context/LanguageContext";

// Dynamically import ProjectCard to optimize bundle performance
const ProjectCard = dynamic(() => import("@/components/ProjectCard"), {
  loading: () => (
    <div
      className="h-[460px] rounded-2xl border border-border bg-card animate-pulse"
      aria-hidden="true"
    />
  ),
  ssr: false,
});

const SkillGroup = memo(function SkillGroup({
  category,
  items,
  delay,
}: {
  category: string;
  items: string[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.35, delay }}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm"
    >
      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider font-mono border-b border-border pb-3">
        {category}
      </h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="inline-block rounded-lg border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-muted-foreground/30 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
});

export default function Home() {
  const { lang } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.07,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 120, damping: 16 },
    },
  };

  // Top 4 Featured Tier 1 Projects
  const featuredProjects = projectsData.filter((p) => p.tier === 1);

  const metricsData = [
    {
      value: "3.86 / 4.00",
      label: lang === "id" ? "IPK Akademik" : "Academic GPA",
    },
    {
      value: "4+",
      label:
        lang === "id"
          ? "Proyek Analisis Utama"
          : "Core Analytics Projects",
    },
    {
      value: "18 Months",
      label:
        lang === "id"
          ? "Operasional Bisnis"
          : "Business Operations",
    },
    {
      value: "51.26%",
      label: lang === "id" ? "Kesesuaian R² Riset" : "Best Model R²",
    },
  ];

  const analyticalWorkflow = [
    {
      step: "01",
      title: lang === "id" ? "PAHAMI" : "UNDERSTAND",
      desc:
        lang === "id"
          ? "Memahami masalah bisnis, batasan operasional, dan sasaran kuantitatif yang ingin dicapai."
          : "Understand the business problem, operational constraints, and quantitative objectives.",
    },
    {
      step: "02",
      title: lang === "id" ? "KUMPULKAN" : "COLLECT",
      desc:
        lang === "id"
          ? "Mengumpulkan data telemetri yang relevan dan mendefinisikan integritas sumber data."
          : "Gather relevant telemetry logs and establish robust data source integrity.",
    },
    {
      step: "03",
      title: lang === "id" ? "BERSIHKAN" : "PREPARE",
      desc:
        lang === "id"
          ? "Membersihkan inkonsistensi, menangani nilai hilang, dan memvalidasi tipe data."
          : "Clean inconsistencies, handle missing values, and validate schema integrity.",
    },
    {
      step: "04",
      title: lang === "id" ? "ANALISIS" : "ANALYZE",
      desc:
        lang === "id"
          ? "Mengeksplorasi korelasi, segmentasi demografi pelanggan, dan pola musiman."
          : "Explore feature correlations, demographic distributions, and temporal trends.",
    },
    {
      step: "05",
      title: lang === "id" ? "MODELKAN" : "MODEL",
      desc:
        lang === "id"
          ? "Menerapkan metode optimasi regresi atau peramalan time-series dengan batasan realistis."
          : "Apply constrained regression optimization or recurrent time-series architectures.",
    },
    {
      step: "06",
      title: lang === "id" ? "KOMUNIKASIKAN" : "COMMUNICATE",
      desc:
        lang === "id"
          ? "Menerjemahkan temuan menjadi dashboard KPI interaktif dan rekomendasi keputusan bisnis."
          : "Turn findings into interactive KPI dashboards and clear operational recommendations.",
    },
  ];

  const philosophyCards = [
    {
      Icon: LineChart,
      color: "bg-indigo-500/10 text-indigo-500",
      title:
        lang === "id"
          ? "Integritas & Ketelitian Data"
          : "Data Integrity & Rigor",
      desc:
        lang === "id"
          ? "Menerapkan pemisahan skala latih/uji yang ketat untuk meniadakan data leakage temporal, menghitung parameter MinMax strictly pada split data latih."
          : "Enforcing strict train/test scaling boundaries to eliminate temporal data leakage, fitting scaler parameters strictly on training splits.",
      footer:
        lang === "id"
          ? "Data Cleansing • Scaling Guard • Validasi"
          : "Data Cleansing • Scaling Guard • Validation",
    },
    {
      Icon: BarChart3,
      color: "bg-emerald-500/10 text-emerald-500",
      title:
        lang === "id"
          ? "Pemodelan Bisnis Realistis"
          : "Realistic Business Modeling",
      desc:
        lang === "id"
          ? "Mengembangkan solver Stochastic Gradient Descent terkendala (θ ≥ 0, bias ≥ 0) untuk mencegah koefisien negatif yang tidak realistis pada model penjualan komersial."
          : "Developing custom non-negative Stochastic Gradient Descent (θ ≥ 0, bias ≥ 0) solvers to prevent unrealistic negative driver coefficients in commercial sales models.",
      footer:
        lang === "id"
          ? "SGD Terkendala • R² 51,26% • Logika Komersial"
          : "Constrained SGD • R² 51.26% • Commercial Logic",
    },
    {
      Icon: PieChart,
      color: "bg-violet-500/10 text-violet-500",
      title:
        lang === "id"
          ? "Visualisasi Interaktif & BI"
          : "Interactive Visualization & BI",
      desc:
        lang === "id"
          ? "Merancang dashboard interaktif di Microsoft Excel, Streamlit, dan Plotly untuk menerjemahkan pola multi-variabel menjadi keputusan operasional yang jelas."
          : "Designing interactive dashboards in Microsoft Excel, Streamlit, and Plotly to translate multi-variable patterns into actionable operational decisions.",
      footer:
        lang === "id"
          ? "MS Excel • Streamlit • Plotly.js • Dashboard BI"
          : "MS Excel • Streamlit • Plotly.js • BI Dashboards",
    },
  ];

  const skillsData = [
    {
      category: lang === "id" ? "ANALISIS DATA" : "DATA ANALYTICS",
      items: [
        "Python",
        "SQL",
        "Microsoft Excel",
        "Google BigQuery",
        "Pandas",
        "NumPy",
        "Data Cleaning",
        "Exploratory Data Analysis",
        "Statistical Analysis",
      ],
    },
    {
      category: lang === "id" ? "BUSINESS INTELLIGENCE" : "BUSINESS INTELLIGENCE",
      items: [
        "Excel Dashboard",
        "Looker Studio",
        "Streamlit",
        "Data Visualization",
        "Dashboard Development",
        "Plotly.js",
        "Chart.js",
      ],
    },
    {
      category: lang === "id" ? "MACHINE LEARNING" : "MACHINE LEARNING",
      items: [
        "Scikit-learn",
        "Regression",
        "Time Series",
        "LSTM",
        "Model Evaluation",
        "PyTorch",
      ],
    },
    {
      category: lang === "id" ? "TEKNOLOGI PENDUKUNG" : "SUPPORTING TECHNOLOGIES",
      items: [
        "Flask",
        "Laravel",
        "MySQL",
        "SQLite",
        "WordPress",
        "REST API",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-20 lg:pb-24">
        <div
          className="absolute top-1/3 left-1/2 -z-10 h-96 w-[700px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, hsla(239,84%,67%,0.07) 0%, transparent 80%)",
          }}
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Positioning, Headline & CTAs (7 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Primary Positioning Label */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 text-xs text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase font-mono"
            >
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Data Analyst | Business Intelligence | Machine Learning
            </motion.div>

            {/* Approved Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-6xl leading-[1.15]"
            >
              {lang === "id" ? (
                <>
                  Mengubah Data Menjadi{" "}
                  <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Wawasan Bisnis Nyata.
                  </span>
                </>
              ) : (
                <>
                  Turning Data Into{" "}
                  <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Actionable Insights.
                  </span>
                </>
              )}
            </motion.h1>

            {/* Approved Supporting Description */}
            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed font-light mx-auto lg:mx-0"
            >
              {lang === "id"
                ? "Lulusan Informatika (IPK 3,86 / 4,00) dengan pengalaman praktis dalam analisis data eksploratif, rekayasa dashboard KPI di Excel & Looker Studio, kueri SQL/BigQuery, serta pemodelan analitik prediktif berbasis machine learning."
                : "Informatics graduate (GPA 3.86 / 4.00) with hands-on experience in exploratory data analysis, KPI dashboard engineering in Excel & Looker Studio, SQL querying, and constrained machine learning optimization."}
            </motion.p>

            {/* Action buttons */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex flex-wrap justify-center lg:justify-start gap-3.5"
            >
              <Link
                href="/projects"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow transition-transform hover:scale-[1.02] active:scale-[0.98] gap-1.5"
              >
                {lang === "id" ? "Lihat Proyek" : "View Projects"}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="/Muhammad-Farid-Fitriansyah-CV.docx"
                download
                className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-card px-5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-transform hover:scale-[1.02] active:scale-[0.98] gap-1.5"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                {lang === "id" ? "Unduh CV" : "Download CV"}
              </a>
              <div className="flex gap-2">
                <a
                  href="https://github.com/farid1811"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  aria-label="GitHub Profile"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-farid-fitriansyah-53527a249"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  aria-label="LinkedIn Profile"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Personal Portrait PHOTO (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-70 pointer-events-none" />

              <div className="relative rounded-3xl border border-border bg-card/80 p-2.5 shadow-2xl backdrop-blur-md overflow-hidden group">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-secondary/40">
                  <Image
                    src="/images/farid-hero-blazer.webp"
                    alt="Muhammad Farid Fitriansyah — Data Analyst"
                    width={800}
                    height={800}
                    priority
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                <div className="p-3.5 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500 shrink-0">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground font-mono leading-none">
                        Universitas Samudra
                      </p>
                      <span className="text-[10px] text-indigo-500 font-mono">
                        GPA 3.86 / 4.00
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-0.5 text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold font-mono">
                    <ShieldCheck className="h-3 w-3" />
                    <span>Data Analyst</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* APPROVED METRICS BAR */}
      <section
        className="w-full border-y border-border bg-card/30 py-8"
        aria-label="Key metrics"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            {metricsData.map(({ value, label }) => (
              <div key={label}>
                <span className="block text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  {value}
                </span>
                <span className="mt-1 block text-xs font-semibold text-muted-foreground uppercase tracking-wider font-mono">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED DATA & ANALYTICS PROJECTS */}
      <section
        className="w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
        aria-label="Featured projects"
      >
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-end mb-12">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest font-mono">
              Tier 1 — Core Portfolio
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {lang === "id"
                ? "Studi Kasus Analisis & Bisnis Unggulan"
                : "Featured Data & Analytics Projects"}
            </h2>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed font-light">
              {lang === "id"
                ? "Mendemonstrasikan regresi penjualan terkendala, peramalan deret waktu multi-komoditas dengan LSTM, dan dashboard business intelligence autentik di Microsoft Excel."
                : "Demonstrating constrained sales regression modeling, recurrent time-series commodity forecasting, and authentic Microsoft Excel business intelligence dashboards."}
            </p>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1 text-sm font-semibold text-indigo-500 hover:text-indigo-600 transition-colors"
          >
            {lang === "id" ? "Lihat semua 9 proyek" : "View all 9 projects"}
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </section>

      {/* APPROVED ANALYTICS WORKFLOW */}
      <section
        className="w-full bg-secondary/35 py-24 border-y border-border"
        aria-label="Analytical workflow"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest font-mono">
              {lang === "id"
                ? "Metodologi Data Analyst"
                : "Data Analyst Methodology"}
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {lang === "id"
                ? "Alur Kerja Analisis End-to-End"
                : "End-to-End Analytics Workflow"}
            </h2>
            <p className="mt-3 text-base text-muted-foreground font-light leading-relaxed">
              {lang === "id"
                ? "Bagaimana data ditransformasikan secara sistematis dari tantangan bisnis menjadi model tervalidasi dan dashboard siap pakai."
                : "How data is systematically transformed from business challenge into validated models and decision-ready dashboards."}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {analyticalWorkflow.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="inline-block text-xs font-mono font-bold text-indigo-500 bg-indigo-500/10 px-2.5 py-1 rounded-md">
                    {item.step}
                  </span>
                  <h3 className="text-base font-bold text-foreground tracking-wide font-mono">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANALYTICAL & ENGINEERING PHILOSOPHY */}
      <section
        className="w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
        aria-label="Analytical focus"
      >
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest font-mono">
            {lang === "id" ? "Ketelitian Analitik" : "Analytical Rigor"}
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {lang === "id"
              ? "Prinsip Analisis Utama"
              : "Core Analytical Principles"}
          </h2>
          <p className="mt-4 text-base text-muted-foreground font-light">
            {lang === "id"
              ? "Memadukan pembersihan data yang teliti, pemodelan berbasis logika domain bisnis, dan implementasi solutif."
              : "Combining rigorous data preparation, domain-aware modeling, and functional implementation."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {philosophyCards.map(({ Icon, color, title, desc, footer }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-8 flex flex-col justify-between h-80 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="space-y-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${color}`}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
              <div className="border-t border-border pt-4 text-xs font-mono text-muted-foreground">
                {footer}
              </div>
            </div>
          ))}

          {/* Applied Data Solution Differentiator */}
          <div className="rounded-2xl border border-border bg-card p-8 flex flex-col justify-between h-80 md:col-span-3 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="space-y-4 max-w-3xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
                <Workflow className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {lang === "id"
                  ? "Pengembangan Solusi Siklus Lengkap"
                  : "Full-Lifecycle Solution Development"}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {lang === "id"
                  ? "Saya memahami masalah bisnis, mengolah data, menganalisisnya, mengomunikasikan wawasan, membangun model prediktif saat dibutuhkan, dan mengubah hasilnya menjadi solusi fungsional. Dengan latar belakang Informatika, saya menjembatani analisis statis dengan instrumen pengambilan keputusan (Flask, Streamlit, Laravel)."
                  : "I can understand a business problem, work with data, analyze it, communicate insights, build predictive models when appropriate, and turn the result into a usable solution. With an Informatics background, I bridge the gap between static analysis and functional decision-making tools (Flask, Streamlit, Laravel)."}
              </p>
            </div>
            <div className="border-t border-border pt-4 text-xs font-mono text-muted-foreground flex flex-wrap gap-4">
              <span>{lang === "id" ? "Perumusan Masalah" : "Problem Framing"}</span>
              <span>•</span>
              <span>{lang === "id" ? "Pembersihan Data" : "Data Preparation"}</span>
              <span>•</span>
              <span>{lang === "id" ? "Pemodelan & Evaluasi" : "Modeling & Evaluation"}</span>
              <span>•</span>
              <span>{lang === "id" ? "Dashboard & Platform Web" : "Dashboards & Web Platforms"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* REORGANIZED SKILLS GRID */}
      <section
        className="w-full bg-secondary/35 py-24 border-y border-border"
        aria-label="Core capabilities"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest font-mono">
              {lang === "id" ? "Kompilasi Keahlian" : "Capabilities"}
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {lang === "id" ? "Keahlian Teknis" : "Technical Skills"}
            </h2>
            <p className="mt-4 text-base text-muted-foreground font-light">
              {lang === "id"
                ? "Terstruktur ke dalam Analisis Data, Business Intelligence, Machine Learning, dan Teknologi Pendukung."
                : "Structured into Data Analytics, Business Intelligence, Machine Learning, and Supporting Technologies."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skillsData.map((skillGroup, idx) => (
              <SkillGroup
                key={skillGroup.category}
                category={skillGroup.category}
                items={skillGroup.items}
                delay={idx * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* RECRUITER CTA SECTION */}
      <section className="relative w-full max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-border bg-card overflow-hidden p-8 sm:p-12 md:p-16 text-center shadow-lg">
          <div
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, hsla(239,84%,67%,0.05) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {lang === "id"
              ? "Tertarik dengan analitik data atau solusi berbasis data?"
              : "Interested in data analytics or data-driven solutions?"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            {lang === "id"
              ? "Saya terbuka untuk peluang Data Analyst, Business Intelligence, dan Machine Learning. Mari terhubung untuk mendiskusikan bagaimana data dapat memajukan bisnis Anda."
              : "I am available for Data Analyst, Business Intelligence, and Machine Learning opportunities. Let's connect to discuss how data can drive your business forward."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {lang === "id" ? "Hubungi Saya" : "Let's Connect"}
            </Link>
            <a
              href="/Muhammad-Farid-Fitriansyah-CV.docx"
              download
              className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-card px-6 text-sm font-semibold text-muted-foreground hover:text-foreground transition-transform hover:scale-[1.02] active:scale-[0.98] gap-1.5"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              {lang === "id" ? "Unduh CV" : "Download CV"}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
