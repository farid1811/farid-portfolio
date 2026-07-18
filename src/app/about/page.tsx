import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Cpu,
  Boxes,
  Award,
  GitBranch,
  CheckSquare,
  GraduationCap,
  MapPin,
  Calendar,
  Code2,
  Zap,
  BarChart3,
  LineChart,
  PieChart,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Muhammad Farid Fitriansyah — Data Analyst (GPA 3.86) from Universitas Samudra specializing in Business Intelligence, Machine Learning, Data Visualization, and Predictive Analytics.",
};

const skills = [
  { name: "Data Analytics & Preprocessing (Python / Pandas)", level: 92, color: "#6366f1" },
  { name: "Business Intelligence & MS Excel (Expert)", level: 94, color: "#10b981" },
  { name: "SQL & Relational Databases (MySQL / SQLite)", level: 88, color: "#8b5cf6" },
  { name: "Predictive Analytics (SGD & LSTM)", level: 86, color: "#f59e0b" },
  { name: "RAG & Semantic Analytics (Gemini / Vector)", level: 85, color: "#f43f5e" },
  { name: "Software Implementation (Flask / Laravel / Next.js)", level: 82, color: "#3b82f6" },
];

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16 about-fade-in">
        <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest font-mono">
          Professional Biography
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          About Farid
        </h1>
        <p className="mt-4 text-lg text-muted-foreground font-light leading-relaxed">
          Transforming raw data into actionable business intelligence, predictive models, and strategic decision support solutions.
        </p>
      </div>

      {/* AVATAR + BIO */}
      <div className="grid gap-12 md:grid-cols-3 items-start mb-24">
        {/* Left: Identity Card with PHOTO A */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative group w-full max-w-[280px]">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-md opacity-70 group-hover:opacity-100 transition-opacity" />

            <div className="relative rounded-2xl border border-border bg-card/80 p-2 shadow-xl backdrop-blur-sm overflow-hidden">
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-secondary/30">
                <Image
                  src="/images/farid-about-suit.webp"
                  alt="Muhammad Farid Fitriansyah"
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
                <span>Class of 2026 (S.Kom)</span>
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
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base">
            <p>
              I am <strong className="text-foreground">Muhammad Farid Fitriansyah</strong> — a <strong className="text-foreground">Data Analyst</strong> specializing in Business Intelligence, Machine Learning, Data Visualization, and Predictive Analytics. I hold a Computer Science degree (Sarjana Ilmu Komputer, GPA 3.86 / 4.00) from <strong className="text-foreground">Universitas Samudra</strong>.
            </p>
            <p>
              My analytical approach focuses on the full data lifecycle: <strong className="text-foreground font-semibold">DATA → ANALYSIS → INSIGHT → PREDICTION → DECISION</strong>. From developing constrained Stochastic Gradient Descent (SGD) regression models for live commerce sales to training PyTorch LSTM time-series forecasting engines for commodity supply chains, I turn raw datasets into clear operational intelligence.
            </p>
            <p>
              What differentiates my work is my Informatics background: beyond generating static reports, I have the technical capability to build, deploy, and maintain analytical applications (Flask, Streamlit, Laravel) that bring models and dashboards directly to end-users.
            </p>
          </div>

          {/* Core Technical Pillars */}
          <div className="space-y-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-sm font-bold text-foreground font-mono uppercase tracking-wider border-b border-border pb-3">
              Core Analytical Pillars
            </h3>
            <ul className="space-y-3 pt-2">
              {[
                { Icon: BarChart3, color: "text-indigo-500", title: "Data Analytics & Preprocessing", desc: "Data cleansing, exploratory analysis, handling missing values, statistical distributions, and MinMaxScaler split lockout guards." },
                { Icon: PieChart, color: "text-emerald-500", title: "Business Intelligence & Visualization", desc: "MS Excel (Expert level), interactive Plotly 3D mesh charts, Streamlit dashboards, and executive performance metrics." },
                { Icon: LineChart, color: "text-violet-500", title: "Predictive Analytics & Machine Learning", desc: "Constrained SGD non-negative regression (θ ≥ 0), PyTorch LSTM demand forecasting, and TF-IDF Cosine similarity scoring." },
                { Icon: Workflow, color: "text-indigo-500", title: "Software Implementation Differentiator", desc: "Implementing analytical workflows directly into web platforms (Flask, Laravel 10, Next.js, SQLite/MySQL) for real-world usage." },
              ].map(({ Icon, color, title, desc }) => (
                <li key={title} className="flex gap-2.5 items-start text-sm text-muted-foreground">
                  <Icon className={`h-4 w-4 ${color} shrink-0 mt-0.5`} aria-hidden="true" />
                  <span>
                    <strong className="text-foreground">{title}:</strong> {desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* SKILLS PROFICIENCY */}
      <div className="mb-24">
        <h2 className="text-2xl font-bold text-foreground mb-2 text-center">Technical Competencies</h2>
        <p className="text-sm text-muted-foreground text-center mb-10">
          Core analytical skills demonstrated across thesis research, data analyst projects, and software applications.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((skill, idx) => (
            <div key={skill.name} className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-foreground font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full skill-bar-fill"
                  style={
                    {
                      "--target-width": `${skill.level}%`,
                      backgroundColor: skill.color,
                      animationDelay: `${idx * 0.1}s`,
                    } as React.CSSProperties
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EDUCATION */}
      <div className="mb-24">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Education &amp; Academic Background</h2>
        <div className="relative border-l-2 border-border ml-6 space-y-8 pl-8">
          <div className="relative">
            <div className="absolute -left-[2.75rem] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-foreground text-lg">Universitas Samudra</h3>
                  <p className="text-sm text-indigo-500 font-mono font-semibold mt-0.5">
                    Sarjana Ilmu Komputer (S.Kom) — Program Studi Informatika
                  </p>
                  <p className="text-xs text-muted-foreground font-mono mt-0.5">Aceh, Indonesia</p>
                </div>
                <div className="text-right">
                  <span className="inline-block text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20">
                    IPK / GPA: 3.86 / 4.00
                  </span>
                  <span className="block text-xs text-muted-foreground font-mono mt-1">2022 — 2026</span>
                </div>
              </div>

              <div className="mt-4 border-t border-border pt-4 text-xs space-y-2 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Undergraduate Thesis:</strong> <em>Analisis dan Prediksi Penjualan Menggunakan Stochastic Gradient Descent (SGD) pada Live Commerce</em>
                </p>
                <p>
                  <strong className="text-foreground">Thesis Advisor / Dosen Pembimbing:</strong> Dr. Ginda Maruli Andi Siregar
                </p>
                <p>
                  <strong className="text-foreground">Focus Areas:</strong> Data Analytics, Machine Learning, Predictive Modeling, &amp; Business Intelligence Systems.
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
      </div>

      {/* VERIFIED ACHIEVEMENTS */}
      <div className="mb-24">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Grants &amp; Achievements</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Penerima Hibah Riset Mahasiswa Internal",
              org: "Universitas Samudra",
              year: "2025",
              desc: "Awarded internal student research grant funding for AI & predictive analytics modeling.",
            },
            {
              title: "Finalis Kompetisi Bisnis Regional II",
              org: "LPDP",
              year: "Februari 2025",
              desc: "Selected as regional finalist in LPDP Business Competition II.",
            },
            {
              title: "Pemenang Unsam StartUp Competition (USC)",
              org: "Universitas Samudra",
              year: "Oktober 2024",
              desc: "1st Place Winner in university-wide startup business competition.",
            },
            {
              title: "Penerima Pendanaan P2MW (Program Pengembangan Kewirausahaan Mahasiswa)",
              org: "Universitas Samudra / Belmawa",
              year: "2023 & 2024",
              desc: "Two-time recipient of student entrepreneurship funding for digital business initiatives.",
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
      </div>

      {/* ANALYTICAL PRINCIPLES */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Analytical Principles</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { Icon: BarChart3, color: "bg-indigo-500/10 text-indigo-500", title: "Rigor in Data Cleansing", desc: "Ensuring zero parameter leakage between training and testing sets, validating model accuracy using MAE, RMSE, MAPE, and R²." },
            { Icon: LineChart, color: "bg-emerald-500/10 text-emerald-500", title: "Business Realism in Modeling", desc: "Enforcing realistic physical constraints in regression algorithms (θ ≥ 0) so model outputs produce actionable commercial rules." },
            { Icon: PieChart, color: "bg-violet-500/10 text-violet-500", title: "Clear Data Communication", desc: "Translating complex statistical metrics into intuitive visual dashboards (MS Excel, Plotly, Streamlit) for non-technical stakeholders." },
            { Icon: Workflow, color: "bg-indigo-500/10 text-indigo-500", title: "Technical Deployment Capability", desc: "Building scalable web interfaces (Flask, Laravel, SQLite) to allow end-users to run analytical models directly in real-time." },
          ].map(({ Icon, color, title, desc }) => (
            <div key={title} className="flex gap-4 rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${color} shrink-0`}>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
