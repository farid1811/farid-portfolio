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
  BarChart3,
  Search,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Academic Work",
  description:
    "Analytical research, undergraduate thesis, and ML forecasting studies by Muhammad Farid Fitriansyah — Data Analyst specializing in SGD optimization, LSTM forecasting, text mining, and decision analytics.",
};

const researchInterests = [
  {
    title: "Constrained Regression & Sales Analytics",
    desc: "Formulating non-negative Stochastic Gradient Descent (SGD) solvers (θ ≥ 0, bias ≥ 0) to guarantee physical realism in commercial sales driver models.",
  },
  {
    title: "Time Series & Recurrent Forecasting",
    desc: "Recurrent neural network demand forecasting (LSTM), log-differencing variance stabilization, and strict MinMaxScaler data leakage split safeguards.",
  },
  {
    title: "Text Mining & Decision Support",
    desc: "Information retrieval math (TF-IDF, Cosine Similarity), pre-computed stemming indices, and contextual LLM Retrieval-Augmented Generation (RAG).",
  },
  {
    title: "Business Intelligence & Visualization",
    desc: "Interactive dashboards in Microsoft Excel, Streamlit, and Plotly, communicating multi-variable patterns for non-technical stakeholders.",
  },
];

const studies = [
  {
    id: "01",
    badge: { label: "Undergraduate Thesis (Skripsi)", icon: Award, colorClass: "bg-indigo-500/10 text-indigo-500" },
    headerColor: "text-indigo-500",
    Icon: BookOpen,
    iconBg: "bg-indigo-500/10 text-indigo-500",
    glowClass: "from-indigo-500/5",
    period: "01 — Undergraduate Thesis (March 2026)",
    title: "Analisis dan Prediksi Penjualan Menggunakan Stochastic Gradient Descent (SGD) pada Live Commerce",
    subtitle: "Universitas Samudra • Dosen Pembimbing: Dr. Ginda Maruli Andi Siregar • R² = 51.26% • MAE = 9.68 items",
    body: "This undergraduate thesis addresses mathematical anomalies in unconstrained regression modeling for live streaming commerce (where unconstrained OLS can produce negative duration slopes). By introducing a custom Stochastic Gradient Descent (SGD) solver that projects and clips parameter weights (θ ≥ 0, bias ≥ 0) at every optimization iteration, streaming duration and active viewership are locked as positive drivers of sales. The research evaluated linear, polynomial, and logarithmic formulations using MAE, RMSE, MAPE, and R² metrics, simulated via an interactive Streamlit prototype.",
    stats: [
      { label: "Best Model R²", value: "51.26%" },
      { label: "MAE Error", value: "9.68 items" },
      { label: "Constraint", value: "θ ≥ 0, bias ≥ 0" },
      { label: "Institution", value: "Universitas Samudra" },
    ],
    methodology: "StandardScaler + Non-Negative Constrained SGD Projection Solver",
    evolutionNote: "Official thesis research was formulated and tested via Python/Streamlit simulations. It was subsequently evolved into a full-scale Flask MVC web platform (Live Commerce Intelligence) featuring real-time Server-Sent Events (SSE) telemetry and 3D visual analysis.",
  },
  {
    id: "02",
    badge: { label: "Hibah Riset Mahasiswa Internal", icon: FileText, colorClass: "bg-violet-500/10 text-violet-500" },
    headerColor: "text-violet-500",
    Icon: Binary,
    iconBg: "bg-violet-500/10 text-violet-500",
    glowClass: "from-violet-500/5",
    period: "02 — Grant-Backed Research (2025)",
    title: "Foresight IQ — Time-Series Analytics & Commodity Demand Forecasting",
    subtitle: "Universitas Samudra Internal Research Grant • PyTorch LSTM • Test MAPE = 17.29% (Triplek)",
    body: "Funded by the Universitas Samudra Internal Student Research Grant (2025), this research investigated deep recurrent neural networks (LSTM) for industrial commodity demand prediction across 6 primary product categories (Besi, Semen, Cat, Pipa, Seng, Triplek). Implemented strict Clean Architecture layer isolation, log-differencing data transformations, and MinMaxScaler split lockout guards to guarantee zero train-to-test data leakage.",
    stats: [
      { label: "Best Test MAPE", value: "17.29% (Triplek)" },
      { label: "LSTM Nodes", value: "h = 50 / 64" },
      { label: "Commodities", value: "6 Product Lines" },
      { label: "Leakage Guard", value: "MinMaxScaler Lock" },
    ],
    methodology: "Clean Architecture + SOLID + PyTorch LSTM + Early Stopping",
    evolutionNote: "Original research model developed in Python/PyTorch. Evolved into a 10-page Clean Architecture Streamlit dashboard with Plotly visual controls.",
  },
  {
    id: "03",
    badge: { label: "Decision Support & RAG", icon: Cpu, colorClass: "bg-emerald-500/10 text-emerald-500" },
    headerColor: "text-emerald-500",
    Icon: Database,
    iconBg: "bg-emerald-500/10 text-emerald-500",
    glowClass: "from-emerald-500/5",
    period: "03 — Academic Decision Support (2024–2025)",
    title: "SPKJS AI — Text Mining & Semantic Proposal Decision Support",
    subtitle: "TF-IDF + Cosine Similarity + Gemini RAG • Sub-50ms Cache • 85% pytest Coverage",
    body: "Researched and built a Decision Support System combining mathematical text mining with Retrieval-Augmented Generation (RAG) for academic proposal analysis. Combines TF-IDF term weighting and Cosine Similarity calculations with Google Gemini 1.5 Flash contextual inference. Overcame API latency bottlenecks by designing a local SQLite vector cache (sub-50ms search) and pre-computing Indonesian Sastrawi stemming indices.",
    stats: [
      { label: "Vector Latency", value: "< 50ms Cache" },
      { label: "Stem Speedup", value: "1.8M× Pre-Indexed" },
      { label: "Unit Tests", value: "85% pytest" },
      { label: "Math Metric", value: "TF-IDF Cosine" },
    ],
    methodology: "TF-IDF Cosine + Gemini 1.5 Flash RAG + SQLite Embedding Cache",
    evolutionNote: "Maintains 85% pytest test coverage across service and repository layers, providing transparent similarity scores alongside AI guidance.",
  },
  {
    id: "04",
    badge: { label: "Applied Research Assistance", icon: LineChart, colorClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
    headerColor: "text-amber-600 dark:text-amber-400",
    Icon: BarChart3,
    iconBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    glowClass: "from-amber-500/5",
    period: "04 — Research Assistance & Analytics (2025–2026)",
    title: "Research & Data Analysis Assistant",
    subtitle: "Freelance & Academic Research Projects • Preprocessing, Modeling, Evaluation & Visualization",
    body: "Supporting multiple applied research initiatives across machine learning, time-series forecasting, and text mining. Conducted extensive exploratory data analysis, data cleansing, and model validation using Python (Jupyter, Google Colab) and Microsoft Excel. Assisted in deploying recurrent neural networks (LSTM), information retrieval algorithms (TF-IDF, Cosine Similarity), and developing interactive analytical dashboards to communicate scientific findings clearly.",
    stats: [
      { label: "Core Domains", value: "ML, Time-Series, NLP" },
      { label: "Data Stack", value: "Python, SQL, Excel" },
      { label: "Evaluation", value: "MAE, RMSE, MAPE, R²" },
      { label: "Deliverables", value: "Dashboards & Reports" },
    ],
    methodology: "Exploratory Data Analysis, Model Benchmarking, Dashboard Development & Scientific Reporting",
    evolutionNote: "Hands-on experience translating complex datasets into verified research models, statistical evaluations, and interactive dashboard artifacts.",
  },
];

export default function Research() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest font-mono">
          Academic Research
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Research &amp; Academic Work
        </h1>
        <p className="mt-4 text-lg text-muted-foreground font-light leading-relaxed">
          Undergraduate thesis research, internal grants, and applied studies in Machine Learning, Regression Optimization, Time-Series Forecasting, and Decision Analytics at Universitas Samudra.
        </p>
      </div>

      {/* Main Research Studies List (01 through 04) */}
      <div className="space-y-8 mb-24">
        {studies.map((study) => {
          const { Icon } = study;
          const BadgeIcon = study.badge.icon;
          return (
            <div
              key={study.id}
              className="relative rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${study.glowClass} via-transparent to-transparent pointer-events-none`}
              />

              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 hidden sm:block">
                <span
                  className={`inline-flex items-center gap-1 ${study.badge.colorClass} text-xs px-2.5 py-1 rounded-full font-mono font-semibold`}
                >
                  <BadgeIcon className="h-3 w-3" aria-hidden="true" />
                  {study.badge.label}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
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
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-1 leading-tight">
                      {study.title}
                    </h2>
                    <span className="text-xs text-muted-foreground font-mono block mt-1">
                      {study.subtitle}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{study.body}</p>

                  {study.stats && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-1">
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
                      <div className="rounded-lg bg-secondary/50 p-2.5 text-[11px] text-muted-foreground mt-2">
                        <strong className="text-foreground">Implementation &amp; Context:</strong> {study.evolutionNote}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Research Focus Grid */}
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
