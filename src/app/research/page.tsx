import React from "react";
import type { Metadata } from "next";
import {
  BookOpen,
  Award,
  FileText,
  ChevronRight,
  Binary,
  Cpu,
  Database,
  LineChart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Analytical research, undergraduate thesis, and ML forecasting studies by Muhammad Farid Fitriansyah — Data Analyst specializing in SGD optimization, LSTM forecasting, and decision analytics.",
};

const researchInterests = [
  {
    title: "Constrained Regression & Sales Analytics",
    desc: "Non-negative Stochastic Gradient Descent (SGD) solvers (θ ≥ 0, bias ≥ 0) ensuring physical realism in commercial driver coefficients.",
  },
  {
    title: "Time Series & Recurrent Forecasting",
    desc: "Recurrent time-series forecasting (LSTM, GRU), log-transformations, diff restorations, and MinMaxScaler data leakage split safeguards.",
  },
  {
    title: "Decision Support & Semantic Analytics",
    desc: "Multi-criteria similarity matching (TF-IDF, Cosine Similarity), semantic vector search, and Gemini LLM RAG architectures.",
  },
  {
    title: "Business Intelligence & Telemetry",
    desc: "Interactive BI dashboards (MS Excel Expert, Streamlit, Plotly), SSE training telemetry, and IQR outlier detection.",
  },
];

const studies = [
  {
    badge: { label: "Undergraduate Thesis (Skripsi)", icon: Award, colorClass: "bg-indigo-500/10 text-indigo-500" },
    headerColor: "text-indigo-500",
    Icon: BookOpen,
    iconBg: "bg-indigo-500/10 text-indigo-500",
    glowClass: "from-indigo-500/3",
    period: "Thesis Research — March 2026",
    title: "Analisis dan Prediksi Penjualan Menggunakan Stochastic Gradient Descent (SGD) pada Live Commerce",
    subtitle: "Universitas Samudra • Dosen Pembimbing: Dr. Ginda Maruli Andi Siregar • R² = 51.26% • MAE = 9.68 items",
    body: "This undergraduate thesis addresses mathematical anomalies in unconstrained regression modeling for live streaming commerce (such as negative duration slopes). By introducing a custom Stochastic Gradient Descent (SGD) solver that clips weights (θ ≥ 0, bias ≥ 0) at each optimization step, live stream duration and active viewers are locked as positive sales drivers. Evaluated using MAE, RMSE, MAPE, and R² across linear, polynomial, and logarithmic models, and simulated via an interactive Streamlit dashboard.",
    stats: [
      { label: "R² Accuracy", value: "51.26%" },
      { label: "MAE Error", value: "9.68 items" },
      { label: "Constraint", value: "θ ≥ 0, b ≥ 0" },
      { label: "Institution", value: "Universitas Samudra" },
    ],
    methodology: "StandardScaler + Non-Negative SGD Projection Solver",
    evolutionNote: "Original thesis implemented via Streamlit simulation dashboard. Evolved into full Flask MVC web platform (Live Commerce Intelligence) with SSE live telemetry streams.",
  },
  {
    badge: { label: "Hibah Riset Mahasiswa Internal", icon: FileText, colorClass: "bg-violet-500/10 text-violet-500" },
    headerColor: "text-violet-500",
    Icon: Binary,
    iconBg: "bg-violet-500/10 text-violet-500",
    glowClass: "from-violet-500/3",
    period: "Research Grant Project — 2025 (Penerima Hibah Riset Unsam)",
    title: "Time-Series Analytics & Recurrent Demand Forecasting (Foresight IQ)",
    subtitle: "Universitas Samudra Internal Research Grant • PyTorch LSTM • Test MAPE 17.29%–19.94%",
    body: "Supported by the Universitas Samudra Internal Student Research Grant (2025), this research investigated deep recurrent neural networks (LSTM) for industrial commodity demand prediction across 6 categories (Besi, Semen, Cat, Pipa, Seng, Triplek). Implemented strict Clean Architecture layer separation, log-differencing data transformations, and MinMaxScaler split lockouts to guarantee zero train/test data leakage.",
    stats: null,
    methodology: "Clean Architecture + SOLID + PyTorch LSTM + Early Stopping",
    evolutionNote: "Original research model developed in Python/PyTorch. Evolved into a 10-page Clean Architecture Streamlit dashboard with automated plot controls.",
  },
  {
    badge: { label: "Academic R&D Project", icon: Cpu, colorClass: "bg-emerald-500/10 text-emerald-500" },
    headerColor: "text-emerald-500",
    Icon: Database,
    iconBg: "bg-emerald-500/10 text-emerald-500",
    glowClass: "from-emerald-500/3",
    period: "Academic R&D — 2024/2025",
    title: "RAG-Augmented Decision Support System (SPKJS AI)",
    subtitle: "TF-IDF + Cosine Similarity + Gemini RAG • 85% pytest coverage • Sub-50ms Cache",
    body: "Researched and built a Retrieval-Augmented Generation (RAG) framework for academic title recommendation and plagiarism checking. Integrates TF-IDF cosine similarity scoring with contextual Gemini 1.5 Flash LLM inference. Solved high API latency by designing a local SQLite vector cache (sub-50ms search) and pre-computing Sastrawi stemming indices into database tables.",
    stats: null,
    methodology: "TF-IDF Cosine + Gemini 1.5 RAG + SQLite Embedding Cache",
    evolutionNote: "Developed as an academic decision support system, maintaining 85% pytest unit test coverage across service and repository layers.",
  },
];

export default function Research() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest font-mono">
          Analytical Research &amp; Grants
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Analytical Research &amp; Studies
        </h1>
        <p className="mt-4 text-lg text-muted-foreground font-light leading-relaxed">
          Undergraduate thesis research, internal grants, and applied studies in Machine Learning, Regression Optimization, Time-Series Forecasting, and Decision Analytics at Universitas Samudra.
        </p>
      </div>

      {/* Main Research Timeline */}
      <div className="space-y-8 mb-24">
        {studies.map((study) => {
          const { Icon } = study;
          const BadgeIcon = study.badge.icon;
          return (
            <div
              key={study.title}
              className="relative rounded-2xl border border-border bg-card p-8 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${study.glowClass} via-transparent to-transparent pointer-events-none`}
              />

              <div className="absolute top-8 right-8 hidden sm:block">
                <span
                  className={`inline-flex items-center gap-1 ${study.badge.colorClass} text-xs px-2.5 py-1 rounded-full font-mono font-semibold`}
                >
                  <BadgeIcon className="h-3 w-3" aria-hidden="true" />
                  {study.badge.label}
                </span>
              </div>

              <div className="flex gap-4 items-start">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${study.iconBg} shrink-0`}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="space-y-4 flex-1">
                  <div>
                    <span
                      className={`text-xs font-mono font-bold ${study.headerColor} uppercase tracking-wide`}
                    >
                      {study.period}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-1 leading-tight">
                      {study.title}
                    </h3>
                    <span className="text-xs text-muted-foreground font-mono block mt-1">
                      {study.subtitle}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{study.body}</p>

                  {study.stats && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {study.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-xl border border-border bg-background/50 p-3 text-center"
                        >
                          <span className="block text-sm font-bold text-foreground font-mono">
                            {stat.value}
                          </span>
                          <span className="block text-[10px] text-muted-foreground uppercase font-mono mt-0.5">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="space-y-2 border-t border-border pt-4 text-xs font-mono">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div>
                        <span className="text-muted-foreground block uppercase text-[10px]">Methodology</span>
                        <span className="text-foreground font-medium">{study.methodology}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block uppercase text-[10px]">Academic Context</span>
                        <span className="text-indigo-500 font-medium">Universitas Samudra Research</span>
                      </div>
                    </div>
                    {study.evolutionNote && (
                      <div className="rounded-lg bg-secondary/50 p-2.5 text-[11px] text-muted-foreground">
                        <strong className="text-foreground">Academic vs Portfolio Evolution:</strong> {study.evolutionNote}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Research Focus grid */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-3 text-center">Analytical Research Focus</h2>
        <p className="text-sm text-muted-foreground text-center mb-10">
          Core methodologies explored during undergraduate computer science studies and practical research.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {researchInterests.map((interest) => (
            <div
              key={interest.title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm flex gap-4 hover:border-indigo-500/30 hover:shadow-md transition-all duration-200"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded bg-indigo-500/10 text-indigo-500 shrink-0">
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{interest.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{interest.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
