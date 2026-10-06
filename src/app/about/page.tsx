import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ShieldCheck,
  GraduationCap,
  MapPin,
  Calendar,
  Code2,
  Award,
  Briefcase,
  Building,
  BarChart3,
  LineChart,
  PieChart,
  Workflow,
  Sparkles,
  ArrowRight,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Muhammad Farid Fitriansyah — Informatics Graduate (S.Kom, GPA 3.86) from Universitas Samudra specializing in Data Analytics, Business Intelligence, and Machine Learning.",
};

const analyticalPillars = [
  {
    Icon: BarChart3,
    color: "text-indigo-500",
    title: "Data Analytics & Preprocessing",
    desc: "Rigorous exploratory data analysis, data cleansing, outlier detection, and split boundary isolation to prevent data leakage.",
  },
  {
    Icon: PieChart,
    color: "text-emerald-500",
    title: "Business Intelligence & Visualization",
    desc: "Interactive dashboards in Microsoft Excel (Pivot Tables, Slicers), Streamlit, and Plotly that translate multidimensional metrics into clear executive insights.",
  },
  {
    Icon: LineChart,
    color: "text-violet-500",
    title: "Predictive Analytics & Machine Learning",
    desc: "Developing constrained non-negative SGD regression (θ ≥ 0, bias ≥ 0) and PyTorch LSTM recurrent time-series forecasting models.",
  },
  {
    Icon: Workflow,
    color: "text-indigo-500",
    title: "Full-Lifecycle Solution Development",
    desc: "Informatics capability to bridge static analysis and functional software, implementing models into usable tools (Flask, Laravel, SQLite/MySQL).",
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest font-mono">
          Professional Biography
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          About Farid
        </h1>
        <p className="mt-4 text-lg text-muted-foreground font-light leading-relaxed">
          Turning data into actionable insights through data preparation, analysis, visualization, predictive modeling, and data-driven solution development.
        </p>
      </div>

      {/* AVATAR + BIO */}
      <div className="grid gap-12 md:grid-cols-3 items-start mb-24">
        {/* Left: Identity Card with Portrait */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative group w-full max-w-[280px]">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-md opacity-70 group-hover:opacity-100 transition-opacity" />

            <div className="relative rounded-2xl border border-border bg-card/80 p-2 shadow-xl backdrop-blur-sm overflow-hidden">
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-secondary/30">
                <Image
                  src="/images/farid-about-suit.webp"
                  alt="Muhammad Farid Fitriansyah — Data Analyst"
                  width={600}
                  height={900}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>

          <div className="w-full rounded-2xl border border-border bg-card p-5 shadow-sm space-y-3 text-sm">
            <div>
              <p className="text-base font-bold text-foreground">Muhammad Farid Fitriansyah</p>
              <p className="text-xs text-indigo-500 font-mono font-semibold mt-0.5">
                Data Analyst | BI &amp; Machine Learning
              </p>
            </div>
            <div className="space-y-2 text-xs text-muted-foreground font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-indigo-400" aria-hidden="true" />
                <span>P.Brandan, Sumatra Utara, Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-3.5 w-3.5 shrink-0 text-indigo-400" aria-hidden="true" />
                <span>Universitas Samudra (GPA 3.86)</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5 shrink-0 text-indigo-400" aria-hidden="true" />
                <span>Informatics Graduate (S.Kom, 2022–2026)</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="h-3.5 w-3.5 shrink-0 text-indigo-400" aria-hidden="true" />
                <a
                  href="https://github.com/farid1811"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  github.com/farid1811
                </a>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold font-mono">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              Open for Data Analyst Roles
            </div>
          </div>
        </div>

        {/* Right: Narrative Bio */}
        <div className="md:col-span-2 space-y-6">
          <div className="space-y-4 text-muted-foreground leading-relaxed text-base font-light">
            <p>
              I am <strong className="text-foreground font-semibold">Muhammad Farid Fitriansyah</strong> — a <strong className="text-foreground font-semibold">Data Analyst</strong> specializing in Business Intelligence, Machine Learning, and Predictive Analytics. I graduated with a Bachelor&apos;s degree in Informatics (<strong className="text-foreground font-semibold">S.Kom, GPA 3.86 / 4.00</strong>) from <strong className="text-foreground font-semibold">Universitas Samudra</strong> (2022–2026).
            </p>
            <p>
              My professional identity is rooted in turning data into actionable insights: <strong className="text-foreground font-semibold">I understand business problems, work with data, prepare and analyze it, communicate insights through intuitive visualizations, build predictive models when appropriate, and translate findings into usable solutions.</strong>
            </p>
            <p>
              My work spans from commercial sales telemetry in live commerce to industrial commodity time-series forecasting and multi-dimensional Microsoft Excel dashboards. Software engineering and web technologies remain valuable supporting capabilities, enabling me to deploy interactive analytical systems directly for stakeholders.
            </p>
          </div>

          {/* Core Analytical Pillars */}
          <div className="space-y-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-xs font-bold text-foreground font-mono uppercase tracking-wider border-b border-border pb-3">
              Analytical Capabilities &amp; Focus
            </h3>
            <ul className="space-y-3.5 pt-2">
              {analyticalPillars.map(({ Icon, color, title, desc }) => (
                <li key={title} className="flex gap-3 items-start text-sm text-muted-foreground">
                  <Icon className={`h-4 w-4 ${color} shrink-0 mt-0.5`} aria-hidden="true" />
                  <div>
                    <strong className="text-foreground block text-xs font-mono uppercase">{title}</strong>
                    <span className="text-xs leading-relaxed text-muted-foreground">{desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* AUTHENTIC EVIDENCE & DOCUMENTATION */}
      <section className="mb-24" aria-label="Authentic documentation">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest font-mono">
            Authentic Evidence
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Academic &amp; Professional Milestones
          </h2>
          <p className="mt-2 text-sm text-muted-foreground font-light">
            Verified local documentation providing real context for education, business operations, and analytics experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Item 1: Graduation / Education */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="relative aspect-[4/3] w-full bg-slate-950 overflow-hidden">
              <Image
                src="/images/about/foto-wisuda.jpeg"
                alt="Muhammad Farid Fitriansyah — Wisuda Sarjana Komputer Universitas Samudra"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-center"
              />
            </div>
            <div className="p-5 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-500 px-2.5 py-0.5 rounded-full">
                  Education &amp; Graduation
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">Class of 2026</span>
              </div>
              <h3 className="text-base font-bold text-foreground">
                Informatics Graduate (S.Kom) — Universitas Samudra
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Graduated with GPA 3.86 / 4.00 from Fakultas Sains dan Teknologi, Universitas Samudra. Completed undergraduate thesis in live commerce sales analytics and constrained regression modeling under Dr. Ginda Maruli Andi Siregar.
              </p>
            </div>
          </div>

          {/* Item 2: Professional Experience Live Commerce */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="relative aspect-[4/3] w-full bg-slate-950 overflow-hidden">
              <Image
                src="/images/about/kerja-1.jpeg"
                alt="Live Commerce Host and Operational Sales Analytics Telemetry"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-center"
              />
            </div>
            <div className="p-5 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2.5 py-0.5 rounded-full">
                  Professional Experience
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">Jan – Sep 2024</span>
              </div>
              <h3 className="text-base font-bold text-foreground">
                Live Commerce Host &amp; Operational Coordination
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Hands-on monitoring of real-time streaming telemetry at Jagoan Grup (tracking Rp 54M+ and Rp 19M+ broadcast sessions, viewer retention, and cart conversions). This operational foundation directly inspired the research problem addressed in Live Commerce Intelligence.
              </p>
            </div>
          </div>

          {/* Item 3: Entrepreneurship Achievement (USC 1) */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="relative aspect-[4/3] w-full bg-slate-950 overflow-hidden">
              <Image
                src="/images/about/usc-1.jpeg"
                alt="Unsam StartUp Competition 2024 Juara 1"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-top"
              />
            </div>
            <div className="p-5 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-violet-500/10 text-violet-500 px-2.5 py-0.5 rounded-full">
                  Venture Achievement
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">October 2024</span>
              </div>
              <h3 className="text-base font-bold text-foreground">
                1st Place Winner — Unsam StartUp Competition (USC)
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Awarded 1st place with institutional incubation funding (Rp 6.000.000), recognized for commercial feasibility and data-informed business strategy.
              </p>
            </div>
          </div>

          {/* Item 4: Business Innovation Workshop (P2MW BMC) */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="relative aspect-[4/3] w-full bg-slate-950 overflow-hidden">
              <Image
                src="/images/about/workshop-p2mw-bmc.jpeg"
                alt="Business Model Canvas Workshop P2MW"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-center"
              />
            </div>
            <div className="p-5 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2.5 py-0.5 rounded-full">
                  Business &amp; Innovation
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">2023 &amp; 2024</span>
              </div>
              <h3 className="text-base font-bold text-foreground">
                P2MW Business Model Canvas Workshop
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Formulating market validation, customer segment channels, and revenue stream modeling during Ministry/Belmawa funded student entrepreneurship development programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL & BUSINESS EXPERIENCE */}
      <section className="mb-24" aria-label="Experience">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
          Work &amp; Business Experience
        </h2>

        <div className="space-y-8">
          {/* Experience 1: Kawan Ngampus */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-border pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-indigo-500 uppercase">
                  Digital Venture Operations
                </span>
                <h3 className="text-xl font-bold text-foreground mt-0.5">
                  Business Owner — Kawan Ngampus
                </h3>
                <span className="text-xs text-muted-foreground font-mono">
                  Affiliate Digital Business &amp; Operations
                </span>
              </div>
              <div className="sm:text-right">
                <span className="inline-block text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-500 px-3 py-1 rounded-full border border-indigo-500/20">
                  October 2024 – March 2026 (18 Months)
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm text-foreground leading-relaxed">
              &quot;Managed an affiliate-based digital business by using sales performance and audience behavior data to support promotional strategies.&quot;
            </p>

            <div className="mt-4">
              <h4 className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider mb-2">
                Core Operational Responsibilities:
              </h4>
              <ul className="grid gap-2 sm:grid-cols-2 text-xs text-muted-foreground">
                <li className="flex gap-2 items-start">
                  <span className="text-indigo-500 font-bold shrink-0">▸</span>
                  <span>Monitored engagement and sales conversions</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-indigo-500 font-bold shrink-0">▸</span>
                  <span>Evaluated campaign performance across promotion channels</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-indigo-500 font-bold shrink-0">▸</span>
                  <span>Developed promotional strategies based on market trends</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-indigo-500 font-bold shrink-0">▸</span>
                  <span>Worked with partners and brands to coordinate offerings</span>
                </li>
                <li className="flex gap-2 items-start sm:col-span-2">
                  <span className="text-indigo-500 font-bold shrink-0">▸</span>
                  <span>Managed day-to-day operational activities and customer interactions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Experience 2: Live Commerce at Jagoan Grup */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-border pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-500 uppercase">
                  Professional Operations
                </span>
                <h3 className="text-xl font-bold text-foreground mt-0.5">
                  Live Commerce Host &amp; Operational Coordinator
                </h3>
                <span className="text-xs text-muted-foreground font-mono">
                  Jagoan Grup
                </span>
              </div>
              <div className="sm:text-right">
                <span className="inline-block text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20">
                  January 2024 – September 2024
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Managed live streaming operational sessions and promotional activities, monitoring audience interaction, engagement dynamics, and sales velocity in real time.
            </p>

            <div className="mt-4">
              <h4 className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider mb-2">
                Operational Activities:
              </h4>
              <ul className="grid gap-2 sm:grid-cols-2 text-xs text-muted-foreground">
                <li className="flex gap-2 items-start">
                  <span className="text-emerald-500 font-bold shrink-0">▸</span>
                  <span>Managed live streaming operations and executed promotional campaigns</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-emerald-500 font-bold shrink-0">▸</span>
                  <span>Analyzed broadcast performance, engagement, and sales trends</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-emerald-500 font-bold shrink-0">▸</span>
                  <span>Coordinated with the team on broadcast schedules and promotional strategies</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-emerald-500 font-bold shrink-0">▸</span>
                  <span>Enhanced audience engagement through effective product communication</span>
                </li>
              </ul>
            </div>

            {/* Contextual Pipeline Banner */}
            <div className="mt-6 rounded-xl border border-border bg-background/60 p-4">
              <span className="block text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-bold mb-2">
                Conceptual Pipeline &amp; Evolution
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground">
                <span className="text-foreground font-semibold">Real Business Context</span>
                <span>→</span>
                <span className="text-foreground font-semibold">Live Commerce Experience</span>
                <span>→</span>
                <span className="text-indigo-500 font-semibold">Academic Analytics Research</span>
                <span>→</span>
                <span className="text-indigo-500 font-semibold">Predictive Model (SGD)</span>
                <span>→</span>
                <span className="text-foreground font-semibold">Interactive Data Solution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="mb-24" aria-label="Education">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
          Education &amp; Academic Credentials
        </h2>
        <div className="relative border-l-2 border-border ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8">
          <div className="relative">
            <div className="absolute -left-[2.15rem] sm:-left-[2.75rem] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-foreground text-lg">Universitas Samudra</h3>
                  <p className="text-sm text-indigo-500 font-mono font-semibold mt-0.5">
                    Informatics Graduate (S.Kom) — Program Studi Informatika
                  </p>
                  <p className="text-xs text-muted-foreground font-mono mt-0.5">Aceh, Indonesia</p>
                </div>
                <div className="text-right">
                  <span className="inline-block text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20">
                    GPA: 3.86 / 4.00
                  </span>
                  <span className="block text-xs text-muted-foreground font-mono mt-1">2022 — 2026</span>
                </div>
              </div>

              <div className="mt-4 border-t border-border pt-4 text-xs space-y-2 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Undergraduate Thesis:</strong> <em>Analisis dan Prediksi Penjualan Menggunakan Stochastic Gradient Descent (SGD) pada Live Commerce</em>
                </p>
                <p>
                  <strong className="text-foreground">Thesis Advisor:</strong> Dr. Ginda Maruli Andi Siregar
                </p>
                <p>
                  <strong className="text-foreground">Academic Focus:</strong> Data Analytics, Machine Learning, Predictive Modeling, &amp; Business Intelligence Systems.
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {[
                  "Data Analytics",
                  "Data Preprocessing",
                  "SGD Regression",
                  "Time Series LSTM",
                  "SQL & MySQL",
                  "Python & Excel",
                  "BI Dashboards",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono bg-secondary text-muted-foreground px-2.5 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFIED ACHIEVEMENTS & GRANTS */}
      <section className="mb-16" aria-label="Achievements">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
          Grants &amp; Achievements
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Penerima Hibah Riset Mahasiswa Internal",
              org: "Universitas Samudra",
              year: "2025",
              desc: "Awarded internal student research grant funding for AI and commodity time-series forecasting research.",
            },
            {
              title: "Finalis Kompetisi Bisnis Regional II",
              org: "LPDP",
              year: "Februari 2025",
              desc: "Selected as regional finalist in LPDP Business Competition II based on commercial venture feasibility.",
            },
            {
              title: "Pemenang Unsam StartUp Competition (USC)",
              org: "Universitas Samudra",
              year: "Oktober 2024",
              desc: "1st Place Winner in university-wide startup competition with institutional incubation funding (Rp 6.000.000).",
            },
            {
              title: "Penerima Pendanaan P2MW",
              org: "Universitas Samudra / Belmawa",
              year: "2023 & 2024",
              desc: "Two-time recipient of student entrepreneurship development funding for digital business ventures.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-card p-5 shadow-sm flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500 shrink-0">
                <Award className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-bold text-foreground text-sm leading-snug">{item.title}</h3>
                  <span className="text-[10px] font-mono bg-secondary text-muted-foreground px-2 py-0.5 rounded shrink-0">{item.year}</span>
                </div>
                <p className="text-xs text-indigo-500 font-mono font-medium">{item.org}</p>
                <p className="text-xs text-muted-foreground leading-relaxed pt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
