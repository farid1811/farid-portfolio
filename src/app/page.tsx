"use client";

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Layers,
  CheckCircle2,
  Sparkles,
  Database,
  ArrowUpRight,
  TrendingUp,
  Fingerprint,
  GraduationCap,
  ShieldCheck,
  LineChart,
  PieChart,
  Cpu,
  Workflow,
  Search,
  BarChart3,
  Lightbulb,
} from "lucide-react";
import { projectsData } from "@/lib/projectsData";

// Dynamically import ProjectCard — loaded on scroll to optimize bundle
const ProjectCard = dynamic(() => import("@/components/ProjectCard"), {
  loading: () => (
    <div className="h-[420px] rounded-2xl border border-border bg-card animate-pulse" aria-hidden="true" />
  ),
  ssr: false,
});

const skillsData = [
  {
    category: "1. Data Analytics",
    items: ["Python", "Pandas", "NumPy", "Data Cleansing", "Data Preprocessing", "Exploratory Data Analysis", "Statistical Analysis"],
  },
  {
    category: "2. Business Intelligence & Viz",
    items: ["MS Excel (Expert)", "Plotly", "Chart.js", "Looker Studio", "Interactive Dashboards", "Data Storytelling"],
  },
  {
    category: "3. Database & Management",
    items: ["SQL", "MySQL", "SQLite", "Google BigQuery", "Data Pipeline", "Relational Modeling"],
  },
  {
    category: "4. Machine Learning & Predictive",
    items: ["Scikit-Learn", "PyTorch", "Regression (SGD)", "Time Series (LSTM)", "RAG Systems", "Model Evaluation (MAE/MAPE/R²)"],
  },
  {
    category: "5. Software Development (Differentiator)",
    items: ["PHP (CodeIgniter / Laravel)", "Flask", "Next.js", "React", "TypeScript", "TailwindCSS", "REST API", "WordPress"],
  },
];

const metricsData = [
  { value: "3.86 / 4.00", label: "Universitas Samudra GPA" },
  { value: "51.26% R²", label: "SGD Sales Prediction Fit" },
  { value: "< 50ms", label: "Local Vector Search Cache" },
  { value: "4 Projects", label: "Analytics & Systems Showcase" },
];

const analyticalWorkflow = [
  { step: "01", title: "Understand Problem", desc: "Define operational challenges, business targets, and key analytical questions." },
  { step: "02", title: "Collect & Prepare Data", desc: "Clean raw data, handle outliers, and lock scaling split boundaries to guard against data leakage." },
  { step: "03", title: "Explore & Analyze", desc: "Uncover patterns, demographic distributions, and statistical relationships across variables." },
  { step: "04", title: "Visualize & Communicate", desc: "Build interactive dashboards in MS Excel, Streamlit, and Plotly to present actionable insights." },
  { step: "05", title: "Model & Predict", desc: "Train machine learning models (non-negative SGD, LSTM) to forecast future trends accurately." },
  { step: "06", title: "Support Decisions", desc: "Deliver intuitive applications and PDF reports that empower strategic business planning." },
];

const philosophyCards = [
  {
    Icon: LineChart,
    color: "bg-indigo-500/10 text-indigo-500",
    title: "Data Integrity & Rigor",
    desc: "Enforcing strict train/test scaling boundaries to eliminate data leakage, fitting MinMaxScaler parameters strictly on training splits.",
    footer: "Data Cleansing • Scaling Guard • Validation",
  },
  {
    Icon: TrendingUp,
    color: "bg-violet-500/10 text-violet-500",
    title: "Realistic Business Modeling",
    desc: "Developing custom non-negative Stochastic Gradient Descent (θ ≥ 0) solvers to prevent unrealistic negative driver coefficients in commercial sales models.",
    footer: "Constrained SGD • R² Accuracy • Business Logic",
  },
  {
    Icon: PieChart,
    color: "bg-emerald-500/10 text-emerald-500",
    title: "Interactive Visualization & BI",
    desc: "Designing interactive dashboards with 3D regression surface meshes, Plotly range sliders, and dynamic filtering to communicate insights clearly.",
    footer: "MS Excel • Streamlit • Plotly.js • BI Dashboards",
  },
];

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
    hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 120, damping: 16 },
    },
  };

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
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Eyebrow badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 text-xs text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase font-mono"
            >
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              DATA ANALYST · BUSINESS INTELLIGENCE · MACHINE LEARNING
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-6xl leading-[1.1]"
            >
              Engineering Intelligence.{" "}
              <br />
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Architecting Performance.
              </span>
            </motion.h1>

            {/* Core Value Statement */}
            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed font-light mx-auto lg:mx-0"
            >
              I am <strong className="text-foreground font-semibold">Muhammad Farid Fitriansyah</strong> — a <strong className="text-foreground font-semibold">Data Analyst</strong> specializing in Business Intelligence, Machine Learning, and Predictive Analytics. Computer Science graduate from <strong className="text-foreground font-semibold">Universitas Samudra (GPA 3.86)</strong> transforming complex data into actionable insights, visual dashboards, and intelligent decision support solutions.
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
                Explore Projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="/Muhammad-Farid-Fitriansyah-CV.docx"
                download
                className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-card px-5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-transform hover:scale-[1.02] active:scale-[0.98] gap-1.5"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
              <div className="flex gap-2">
                <a
                  href="https://github.com/farid1811"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  aria-label="GitHub Profile"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-farid-fitriansyah-53527a249"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Personal Portrait PHOTO B (5 cols) */}
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
                    alt="Muhammad Farid Fitriansyah"
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
                      <p className="text-xs font-bold text-foreground font-mono leading-none">Universitas Samudra</p>
                      <span className="text-[10px] text-indigo-500 font-mono">GPA 3.86 / 4.00</span>
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

      {/* METRICS BAR */}
      <section className="w-full border-y border-border bg-card/30 py-8" aria-label="Key metrics">
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

      {/* ANALYTICAL WORKFLOW SECTION */}
      <section className="w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8" aria-label="Analytical workflow">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest font-mono">
            Methodology &amp; Process
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            End-to-End Analytical Workflow
          </h2>
          <p className="mt-3 text-base text-muted-foreground font-light leading-relaxed">
            How raw data is transformed into actionable insights, predictive models, and decision support solutions.
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
                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-border">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-end mb-12">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Analytics &amp; Data Projects
            </h2>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              Explore key projects demonstrating live commerce sales prediction, PyTorch LSTM commodity forecasting, and Gemini RAG decision systems.
            </p>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1 text-sm font-semibold text-indigo-500 hover:text-indigo-600 transition-colors"
          >
            Browse all projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projectsData.slice(0, 2).map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </section>

      {/* ENGINEERING & ANALYTICS PHILOSOPHY */}
      <section className="w-full bg-secondary/35 py-24 border-y border-border" aria-label="Engineering philosophy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Analytical &amp; Engineering Focus
            </h2>
            <p className="mt-4 text-base text-muted-foreground font-light">
              Combining data analytics, statistical machine learning, and clean software implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophyCards.map(({ Icon, color, title, desc, footer }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-8 flex flex-col justify-between h-80 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="space-y-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${color}`}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
                <div className="border-t border-border pt-4 text-xs font-mono text-muted-foreground">
                  {footer}
                </div>
              </div>
            ))}

            {/* RAG & Vector optimization card */}
            <div className="rounded-2xl border border-border bg-card p-8 flex flex-col justify-between h-80 md:col-span-2 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
                  <Database className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Vector Search &amp; Semantic Analytics Optimization</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Innovative RAG backend optimization: caching 768-dimension vector embeddings in local SQLite tables to bypass API network roundtrips, and pre-computing stem maps to reduce runtime stem overhead.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-border pt-4 text-xs font-mono text-muted-foreground">
                <div>Vector cache: &lt;50ms latency</div>
                <div>Stemming speedup: 1.8M× pre-computed index</div>
              </div>
            </div>

            {/* Technical Differentiator Card */}
            <div className="rounded-2xl border border-border bg-card p-8 flex flex-col justify-between h-80 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
                  <Workflow className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Software Differentiator</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Unlike standard static analysis workflows, I can build, deploy, and maintain functional web applications (Flask, Laravel, Next.js) that turn models into usable tools.
                </p>
              </div>
              <div className="border-t border-border pt-4 text-xs font-mono text-muted-foreground">
                Data Analyst + Software Implementation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS GRID */}
      <section className="w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8" aria-label="Core capabilities">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Technical Skills</h2>
          <p className="mt-4 text-base text-muted-foreground font-light">
            Organized hierarchy: Data Analytics, Business Intelligence, Databases, Machine Learning, and Software Implementation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skillGroup, idx) => (
            <SkillGroup
              key={skillGroup.category}
              category={skillGroup.category}
              items={skillGroup.items}
              delay={idx * 0.06}
            />
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8 mb-20">
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
            Discuss a Data Analytics Opportunity?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            I am available for Data Analyst, Business Intelligence, and Machine Learning opportunities. Feel free to download my CV or get in touch.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact Me
            </Link>
            <a
              href="/Muhammad-Farid-Fitriansyah-CV.docx"
              download
              className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-card px-6 text-sm font-semibold text-muted-foreground hover:text-foreground transition-transform hover:scale-[1.02] active:scale-[0.98] gap-1.5"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              Download Official CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
