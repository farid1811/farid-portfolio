"use client";

import React, { useState } from "react";
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
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import EvidenceModal from "@/components/EvidenceModal";

export default function Research() {
  const { lang } = useLanguage();
  const [grantModalOpen, setGrantModalOpen] = useState(false);

  const researchInterests = [
    {
      title:
        lang === "id"
          ? "Regresi Terkendala & Analisis Penjualan"
          : "Constrained Regression & Sales Analytics",
      desc:
        lang === "id"
          ? "Merumuskan solver Stochastic Gradient Descent (SGD) non-negatif (θ ≥ 0, bias ≥ 0) untuk menjamin realitas fisik pada model faktor penentu penjualan komersial."
          : "Formulating non-negative Stochastic Gradient Descent (SGD) solvers (θ ≥ 0, bias ≥ 0) to guarantee physical realism in commercial sales driver models.",
    },
    {
      title:
        lang === "id"
          ? "Deret Waktu & Peramalan Rekuren"
          : "Time Series & Recurrent Forecasting",
      desc:
        lang === "id"
          ? "Peramalan permintaan jaringan saraf tiruan berulang (LSTM), stabilisasi variansi log-differencing, dan proteksi isolasi data leakage MinMaxScaler."
          : "Recurrent neural network demand forecasting (LSTM), log-differencing variance stabilization, and strict MinMaxScaler data leakage split safeguards.",
    },
    {
      title:
        lang === "id"
          ? "Text Mining & Sistem Pendukung Keputusan"
          : "Text Mining & Decision Support",
      desc:
        lang === "id"
          ? "Matematika penelusuran informasi (TF-IDF, Cosine Similarity), pra-indeks stemming Bahasa Indonesia, dan inferensi Retrieval-Augmented Generation (RAG)."
          : "Information retrieval math (TF-IDF, Cosine Similarity), pre-computed stemming indices, and contextual LLM Retrieval-Augmented Generation (RAG).",
    },
    {
      title:
        lang === "id"
          ? "Business Intelligence & Visualisasi"
          : "Business Intelligence & Visualization",
      desc:
        lang === "id"
          ? "Dashboard interaktif di Microsoft Excel, Looker Studio, Streamlit, dan Plotly yang mengomunikasikan pola multi-variabel untuk pengambil keputusan bisnis."
          : "Interactive dashboards in Microsoft Excel, Looker Studio, Streamlit, and Plotly, communicating multi-variable patterns for non-technical stakeholders.",
    },
  ];

  const studies = [
    {
      id: "01",
      badge: {
        label:
          lang === "id"
            ? "Skripsi Sarjana (S.Kom)"
            : "Undergraduate Thesis (Skripsi)",
        icon: Award,
        colorClass: "bg-indigo-500/10 text-indigo-500",
      },
      headerColor: "text-indigo-500",
      Icon: BookOpen,
      iconBg: "bg-indigo-500/10 text-indigo-500",
      glowClass: "from-indigo-500/5",
      period:
        lang === "id"
          ? "01 — Skripsi Sarjana (Maret 2026)"
          : "01 — Undergraduate Thesis (March 2026)",
      title:
        "Analisis dan Prediksi Penjualan Menggunakan Stochastic Gradient Descent (SGD) pada Live Commerce",
      subtitle:
        "Universitas Samudra • Dosen Pembimbing: Dr. Ginda Maruli Andi Siregar & Teuku Radillah • R² = 51.26% • MAE = 9.68 items",
      body:
        lang === "id"
          ? "Penelitian skripsi sarjana ini menyelesaikan anomali matematis dalam pemodelan regresi tanpa kendala pada perdagangan siaran langsung (di mana OLS biasa dapat menghasilkan lereng durasi negatif yang kontradiktif). Dengan merancang solver Stochastic Gradient Descent (SGD) khusus yang menerapkan proyeksi pemotongan parameter non-negatif (θ ≥ 0, bias ≥ 0) di setiap iterasi optimasi, durasi siaran dan jumlah penonton terkunci secara konsisten sebagai faktor pendorong positif penjualan. Model dievaluasi menggunakan metrik MAE, RMSE, MAPE, dan R²."
          : "This undergraduate thesis addresses mathematical anomalies in unconstrained regression modeling for live streaming commerce (where unconstrained OLS can produce negative duration slopes). By introducing a custom Stochastic Gradient Descent (SGD) solver that projects and clips parameter weights (θ ≥ 0, bias ≥ 0) at every optimization iteration, streaming duration and active viewership are locked as positive drivers of sales. The research evaluated linear, polynomial, and logarithmic formulations using MAE, RMSE, MAPE, and R² metrics.",
      stats: [
        { label: lang === "id" ? "R² Model Terbaik" : "Best Model R²", value: "51.26%" },
        { label: lang === "id" ? "Kesalahan MAE" : "MAE Error", value: "9.68 items" },
        { label: lang === "id" ? "Batasan Fisik" : "Constraint", value: "θ ≥ 0, bias ≥ 0" },
        { label: lang === "id" ? "Institusi" : "Institution", value: "Universitas Samudra" },
      ],
      methodology:
        "StandardScaler + Non-Negative Constrained SGD Projection Solver",
      evolutionNote:
        lang === "id"
          ? "Riset skripsi resmi diformulasikan dan diuji dengan data empiris di Universitas Samudra. Selanjutnya dievolusikan menjadi aplikasi web Flask MVC (Live Commerce Intelligence) yang dilengkapi simulasi skenario interaktif dan visualisasi 3D Plotly.js."
          : "Official thesis research was formulated and tested via Python simulations. It was subsequently evolved into a full-scale Flask MVC web platform (Live Commerce Intelligence) featuring real-time telemetry and 3D visual analysis.",
      hasGrantEvidence: true,
    },
    {
      id: "02",
      badge: {
        label:
          lang === "id"
            ? "Hibah Riset Mahasiswa LPPM 2025"
            : "LPPM Student Research Grant 2025",
        icon: FileText,
        colorClass: "bg-violet-500/10 text-violet-500",
      },
      headerColor: "text-violet-500",
      Icon: Binary,
      iconBg: "bg-violet-500/10 text-violet-500",
      glowClass: "from-violet-500/5",
      period:
        lang === "id"
          ? "02 — Riset Terdanai Hibah (2025)"
          : "02 — Grant-Backed Research (2025)",
      title:
        "Foresight IQ — Time-Series Analytics & Commodity Demand Forecasting",
      subtitle:
        "Universitas Samudra Internal Research Grant • PyTorch LSTM • Test MAPE = 17.29% (Triplek)",
      body:
        lang === "id"
          ? "Didukung oleh Hibah Internal Penelitian Mahasiswa Universitas Samudra (SK Rektor No. 330/UN54/P/2025, Pengumuman LPPM No. 406/UN54.6/PT.01.00/2025), penelitian ini mengeksplorasi deep recurrent neural networks (LSTM) untuk prediksi permintaan komoditas industri di 6 kategori produk utama (Besi, Semen, Cat, Pipa, Seng, Triplek). Menerapkan isolasi arsitektur bersih, transformasi log-differencing, serta pencegahan temporal data leakage."
          : "Funded by the Universitas Samudra Internal Student Research Grant (SK Rektor No. 330/UN54/P/2025, LPPM Decree No. 406/UN54.6/PT.01.00/2025), this research investigated deep recurrent neural networks (LSTM) for industrial commodity demand prediction across 6 primary product categories (Besi, Semen, Cat, Pipa, Seng, Triplek). Implemented strict layer isolation, log-differencing data transformations, and temporal split lockout guards to guarantee zero train-to-test data leakage.",
      stats: [
        { label: lang === "id" ? "MAPE Uji Terbaik" : "Best Test MAPE", value: "17.29% (Triplek)" },
        { label: lang === "id" ? "Sel LSTM" : "LSTM Nodes", value: "h = 50 / 64" },
        { label: lang === "id" ? "Kategori Komoditas" : "Commodities", value: "6 Product Lines" },
        { label: lang === "id" ? "Proteksi Leakage" : "Leakage Guard", value: "MinMaxScaler Lock" },
      ],
      methodology:
        "Clean Architecture + SOLID + PyTorch LSTM + Early Stopping",
      evolutionNote:
        lang === "id"
          ? "Model riset asli dikembangkan di Python/PyTorch dengan validasi walk-forward rolling-window untuk pengujian deret waktu yang kredibel."
          : "Original research model developed in Python/PyTorch with walk-forward rolling cross-validation for credible sequential demand estimation.",
    },
    {
      id: "03",
      badge: {
        label:
          lang === "id"
            ? "Sistem Keputusan & NLP"
            : "Decision Support & NLP",
        icon: Cpu,
        colorClass: "bg-emerald-500/10 text-emerald-500",
      },
      headerColor: "text-emerald-500",
      Icon: Database,
      iconBg: "bg-emerald-500/10 text-emerald-500",
      glowClass: "from-emerald-500/5",
      period:
        lang === "id"
          ? "03 — Sistem Pendukung Keputusan Akademik"
          : "03 — Academic Decision Support",
      title: "SPKJS AI — Text Mining & Semantic Proposal Decision Support",
      subtitle:
        lang === "id"
          ? "TF-IDF + Cosine Similarity • Ekstraksi Fitur Teks & Analisis Keselarasan"
          : "TF-IDF + Cosine Similarity • Text Feature Extraction & Alignment Engine",
      body:
        lang === "id"
          ? "Membangun Sistem Pendukung Keputusan yang memadukan penelusuran teks matematis dengan ekstraksi fitur NLP untuk analisis keselarasan proposal skripsi. Memadukan pembobotan kata TF-IDF dan kalkulasi Cosine Similarity terhadap repositori publikasi dosen prodi, didukung penyimpanan lokal SQLite untuk pencarian terstruktur."
          : "Researched and built a Decision Support System combining mathematical text mining with NLP feature extraction for academic proposal analysis. Combines TF-IDF term weighting and Cosine Similarity calculations against departmental publication archives, supported by local structured storage.",
      stats: [
        { label: lang === "id" ? "Metode Analisis" : "Analysis Method", value: "TF-IDF Cosine" },
        { label: lang === "id" ? "Ekstraksi Teks" : "Text Extraction", value: "NLP Bahasa ID" },
        { label: lang === "id" ? "Penyimpanan Data" : "Data Storage", value: "SQLite Engine" },
        { label: lang === "id" ? "Domain Sistem" : "System Domain", value: "Decision Support" },
      ],
      methodology: "TF-IDF Cosine + SQLite Structured Storage + Sastrawi Stemming",
      evolutionNote:
        lang === "id"
          ? "Mengimplementasikan arsitektur service layer modular, menyediakan skor kemiripan transparan bagi evaluasi proposal akademik."
          : "Implements a modular service layer architecture, providing transparent similarity scores for academic proposal evaluation.",
    },
    {
      id: "04",
      badge: {
        label:
          lang === "id"
            ? "Asisten Riset & Analisis Data"
            : "Research & Data Analysis Assistant",
        icon: LineChart,
        colorClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
      },
      headerColor: "text-amber-600 dark:text-amber-400",
      Icon: BarChart3,
      iconBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
      glowClass: "from-amber-500/5",
      period:
        lang === "id"
          ? "04 — Asistensi Riset Terapan"
          : "04 — Applied Research Assistance",
      title:
        lang === "id"
          ? "Asistensi Riset & Analisis Data Terapan"
          : "Research & Data Analysis Assistant",
      subtitle:
        "Proyek Akademik & Mandiri • Preprocessing, Pemodelan, Evaluasi & Visualisasi",
      body:
        lang === "id"
          ? "Mendukung berbagai inisiatif riset terapan di bidang machine learning, peramalan time-series, dan text mining. Melakukan analisis data eksploratif (EDA), pembersihan data tabular, dan validasi model menggunakan Python (Jupyter, Google Colab) dan Microsoft Excel. Membantu penyusunan dashboard analitik interaktif untuk mengomunikasikan temuan kuantitatif secara lugas."
          : "Supporting multiple applied research initiatives across machine learning, time-series forecasting, and text mining. Conducted extensive exploratory data analysis, data cleansing, and model validation using Python (Jupyter, Google Colab) and Microsoft Excel. Assisted in developing interactive analytical dashboards to communicate quantitative findings clearly.",
      stats: [
        { label: lang === "id" ? "Domain Inti" : "Core Domains", value: "ML, Time-Series, NLP" },
        { label: lang === "id" ? "Stack Data" : "Data Stack", value: "Python, SQL, Excel" },
        { label: lang === "id" ? "Evaluasi" : "Evaluation", value: "MAE, RMSE, MAPE, R²" },
        { label: lang === "id" ? "Artefak" : "Deliverables", value: "Dashboards & Reports" },
      ],
      methodology:
        "Exploratory Data Analysis, Model Benchmarking, Dashboard Development & Scientific Reporting",
      evolutionNote:
        lang === "id"
          ? "Pengalaman praktis menerjemahkan kumpulan data kompleks menjadi model riset terverifikasi, evaluasi statistik defensif, dan artefak dashboard."
          : "Hands-on experience translating complex datasets into verified research models, statistical evaluations, and interactive dashboard artifacts.",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest font-mono">
          {lang === "id" ? "Riset Akademik" : "Academic Research"}
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          {lang === "id"
            ? "Riset & Karya Akademik"
            : "Research & Academic Work"}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground font-light leading-relaxed">
          {lang === "id"
            ? "Penelitian skripsi sarjana, hibah internal universitas, dan studi terapan dalam Machine Learning, Optimasi Regresi, Peramalan Deret Waktu, dan Analitik Keputusan di Universitas Samudra."
            : "Undergraduate thesis research, internal grants, and applied studies in Machine Learning, Regression Optimization, Time-Series Forecasting, and Decision Analytics at Universitas Samudra."}
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

                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    {study.body}
                  </p>

                  {study.stats && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-1">
                      {study.stats.map((stat, sIdx) => (
                        <div
                          key={sIdx}
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

                  {/* Contextual Grant Evidence Trigger for Thesis & Grant Study */}
                  {study.hasGrantEvidence && (
                    <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span>
                          {lang === "id"
                            ? "Penelitian didanai oleh Hibah Internal Penelitian Mahasiswa LPPM Unsam 2025 (Baris 32)."
                            : "Research supported by LPPM Unsam Student Research Grant 2025 (Row 32)."}
                        </span>
                      </div>
                      <button
                        onClick={() => setGrantModalOpen(true)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold shadow-sm hover:opacity-90 active:scale-95 transition-all"
                      >
                        <FileText className="h-3.5 w-3.5" />
                        <span>
                          {lang === "id"
                            ? "Lihat Bukti Hibah (PDF)"
                            : "View Grant Award (PDF)"}
                        </span>
                      </button>
                    </div>
                  )}

                  <div className="space-y-2 border-t border-border pt-4 text-xs font-mono">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div>
                        <span className="text-muted-foreground block uppercase text-[10px]">
                          {lang === "id" ? "Metodologi" : "Methodology"}
                        </span>
                        <span className="text-foreground font-medium">
                          {study.methodology}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block uppercase text-[10px]">
                          {lang === "id" ? "Konteks Akademik" : "Academic Context"}
                        </span>
                        <span className="text-indigo-500 font-medium">
                          Universitas Samudra Research
                        </span>
                      </div>
                    </div>
                    {study.evolutionNote && (
                      <div className="rounded-lg bg-secondary/50 p-2.5 text-[11px] text-muted-foreground mt-2">
                        <strong className="text-foreground">
                          {lang === "id"
                            ? "Implementasi & Konteks:"
                            : "Implementation & Context:"}
                        </strong>{" "}
                        {study.evolutionNote}
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
        <h2 className="text-2xl font-bold text-foreground mb-3 text-center">
          {lang === "id"
            ? "Fokus Riset & Metodologi Analitik"
            : "Analytical Research Focus"}
        </h2>
        <p className="text-sm text-muted-foreground text-center mb-10 font-light">
          {lang === "id"
            ? "Metodologi inti yang dieksplorasi selama studi ilmu komputer dan praktik riset terapan."
            : "Core methodologies explored during undergraduate computer science studies and practical research."}
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
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  {interest.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grant Evidence Modal */}
      <EvidenceModal
        isOpen={grantModalOpen}
        onClose={() => setGrantModalOpen(false)}
        title={
          lang === "id"
            ? "SK Penerima Hibah Riset Skripsi"
            : "University Research Grant Decree"
        }
        organization="LPPM Universitas Samudra (No. 406/UN54.6/PT.01.00/2025)"
        fileUrl="/evidence/research/lppm-unsam-grant-2025-excerpt.pdf"
        badge="Funded Grant"
      />
    </div>
  );
}
