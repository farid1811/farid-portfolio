"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  FileText,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  achievementGroups,
  achievementsData,
  type AchievementCategory,
} from "@/lib/achievementsData";
import EvidenceCard from "@/components/EvidenceCard";
import EvidenceModal from "@/components/EvidenceModal";

export default function About() {
  const { lang, t } = useLanguage();
  const [publicSpeakingModal, setPublicSpeakingModal] = useState(false);

  const analyticalPillars = [
    {
      Icon: BarChart3,
      color: "text-indigo-500",
      title:
        lang === "id"
          ? "Analisis Data & Praproses"
          : "Data Analytics & Preprocessing",
      desc:
        lang === "id"
          ? "Analisis data eksploratif (EDA) yang ketat, pembersihan data, deteksi pencilan (outliers), dan isolasi batas latih/uji guna mencegah data leakage."
          : "Rigorous exploratory data analysis, data cleansing, outlier detection, and split boundary isolation to prevent data leakage.",
    },
    {
      Icon: PieChart,
      color: "text-emerald-500",
      title:
        lang === "id"
          ? "Business Intelligence & Visualisasi"
          : "Business Intelligence & Visualization",
      desc:
        lang === "id"
          ? "Dashboard interaktif di Microsoft Excel (Pivot Tables, Slicers), Looker Studio, dan Plotly yang menerjemahkan metrik multidimensi menjadi wawasan eksekutif."
          : "Interactive dashboards in Microsoft Excel (Pivot Tables, Slicers), Looker Studio, and Plotly that translate multidimensional metrics into clear executive insights.",
    },
    {
      Icon: LineChart,
      color: "text-violet-500",
      title:
        lang === "id"
          ? "Analitik Prediktif & Machine Learning"
          : "Predictive Analytics & Machine Learning",
      desc:
        lang === "id"
          ? "Mengembangkan regresi Stochastic Gradient Descent (SGD) terkendala non-negatif (θ ≥ 0, bias ≥ 0) dan peramalan sekuensial PyTorch LSTM."
          : "Developing constrained non-negative SGD regression (θ ≥ 0, bias ≥ 0) and PyTorch LSTM recurrent time-series forecasting models.",
    },
    {
      Icon: Workflow,
      color: "text-indigo-500",
      title:
        lang === "id"
          ? "Pengembangan Solusi Siklus Lengkap"
          : "Full-Lifecycle Solution Development",
      desc:
        lang === "id"
          ? "Kemampuan Informatika dalam menjembatani analisis teoritis dengan perangkat lunak fungsional (Flask, Laravel, SQLite/MySQL)."
          : "Informatics capability to bridge static analysis and functional software, implementing models into usable tools (Flask, Laravel, SQLite/MySQL).",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest font-mono">
          {lang === "id" ? "Biografi Profesional" : "Professional Biography"}
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          {lang === "id" ? "Tentang Farid" : "About Farid"}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground font-light leading-relaxed">
          {lang === "id"
            ? "Mengubah data menjadi wawasan bisnis nyata melalui pembersihan data, analisis kuantitatif, visualisasi, pemodelan prediktif, dan pengembangan solusi berbasis data."
            : "Turning data into actionable insights through data preparation, analysis, visualization, predictive modeling, and data-driven solution development."}
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
              <p className="text-base font-bold text-foreground">
                Muhammad Farid Fitriansyah
              </p>
              <p className="text-xs text-indigo-500 font-mono font-semibold mt-0.5">
                Data Analyst | BI &amp; Machine Learning
              </p>
            </div>
            <div className="space-y-2 text-xs text-muted-foreground font-mono">
              <div className="flex items-center gap-2">
                <MapPin
                  className="h-3.5 w-3.5 shrink-0 text-indigo-400"
                  aria-hidden="true"
                />
                <span>P.Brandan, Sumatra Utara, Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap
                  className="h-3.5 w-3.5 shrink-0 text-indigo-400"
                  aria-hidden="true"
                />
                <span>Universitas Samudra (GPA 3.86)</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar
                  className="h-3.5 w-3.5 shrink-0 text-indigo-400"
                  aria-hidden="true"
                />
                <span>
                  {lang === "id"
                    ? "Lulusan Informatika (S.Kom, 2022–2026)"
                    : "Informatics Graduate (S.Kom, 2022–2026)"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Code2
                  className="h-3.5 w-3.5 shrink-0 text-indigo-400"
                  aria-hidden="true"
                />
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
          </div>
        </div>

        {/* Right: Bio Narrative */}
        <div className="md:col-span-2 space-y-6 text-foreground font-light leading-relaxed">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-foreground">
              {lang === "id" ? "Profil Profesional" : "Professional Profile"}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {lang === "id"
                ? "Saya adalah seorang Data Analyst dengan latar belakang pendidikan Sarjana Komputer (IPK 3,86 / 4,00) dari Universitas Samudra. Fokus utama saya adalah menjembatani analisis data empiris dengan pemodelan bisnis dan solusi perangkat lunak yang dapat dioperasionalkan secara langsung."
                : "I am a Data Analyst with an Informatics degree (GPA 3.86 / 4.00) from Universitas Samudra. My focus centers on bridging empirical quantitative analysis with practical commercial modeling and operable software architectures."}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {lang === "id"
                ? "Pengalaman praktis saya mencakup pembersihan dan analisis eksploratif data telemetri penjualan, perancangan dashboard interaktif di Microsoft Excel dan Looker Studio, penulisan kueri SQL di Google BigQuery, serta pemodelan regresi Stochastic Gradient Descent (SGD) terkendala pada penelitian skripsi yang didanai hibah universitas."
                : "My hands-on experience spans exploratory telemetry analysis, interactive KPI dashboard engineering in Microsoft Excel and Looker Studio, SQL querying on Google BigQuery, and constrained Stochastic Gradient Descent (SGD) optimization formulated for institutional grant-funded thesis research."}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {lang === "id"
                ? "Selain keterampilan analitik dan komputasi, kepemilikan usaha Kawan Ngampus selama 18 bulan dan pengalaman koordinasi siaran di Jagoan Grup memberi saya pemahaman kuat tentang dinamika konversi konsumen, retensi audiens, dan efisiensi margin operasional."
                : "Beyond analytical and machine learning toolsets, managing Kawan Ngampus as a business owner for 18 months and coordinating live broadcasts at Jagoan Grup provided me with an authentic grounding in conversion economics, audience retention, and operating margin protection."}
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {analyticalPillars.map(({ Icon, color, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-5 space-y-2 shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`h-4 w-4 ${color}`} />
                  <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-foreground">
                    {title}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AUTHENTIC PHOTOGRAPHIC EVIDENCE GRID */}
      <section className="mb-24" aria-label="Visual Evidence Archive">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest font-mono">
            {lang === "id" ? "Arsip Dokumentasi" : "Documentation Archive"}
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
            {lang === "id"
              ? "Dokumentasi & Rekam Jejak Autentik"
              : "Authentic Photographic Records"}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground font-light">
            {lang === "id"
              ? "Dokumentasi riil yang membuktikan kelulusan akademik, operasional siaran live shopping, dan rekognisi kompetisi bisnis."
              : "Real-world documentation validating academic graduation, live broadcast operations, and competitive venture recognition."}
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
                  {lang === "id" ? "Pendidikan & Kelulusan" : "Education & Graduation"}
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">
                  Class of 2026
                </span>
              </div>
              <h3 className="text-base font-bold text-foreground">
                Informatics Graduate (S.Kom) — Universitas Samudra
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {lang === "id"
                  ? "Lulus dengan IPK 3,86 / 4,00 dari Fakultas Sains dan Teknologi, Universitas Samudra. Menyelesaikan skripsi analisis penjualan live commerce dan optimasi regresi SGD terkendala di bawah bimbingan Dr. Ginda Maruli Andi Siregar."
                  : "Graduated with GPA 3.86 / 4.00 from Fakultas Sains dan Teknologi, Universitas Samudra. Completed undergraduate thesis in live commerce sales analytics and constrained regression modeling under Dr. Ginda Maruli Andi Siregar."}
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
                  {lang === "id" ? "Pengalaman Operasional" : "Professional Experience"}
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">
                  Jan – Sep 2024
                </span>
              </div>
              <h3 className="text-base font-bold text-foreground">
                {lang === "id"
                  ? "Host Live Commerce & Koordinasi Operasional"
                  : "Live Commerce Host & Operational Coordination"}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {lang === "id"
                  ? "Memantau telemetri siaran langsung real-time di Jagoan Grup (mencatat sesi omzet Rp 54M+ dan Rp 19M+, retensi penonton, dan konversi keranjang). Pengalaman operasional ini menjadi inspirasi langsung perumusan masalah riset pada Live Commerce Intelligence."
                  : "Hands-on monitoring of real-time streaming telemetry at Jagoan Grup (tracking Rp 54M+ and Rp 19M+ broadcast sessions, viewer retention, and cart conversions). This operational foundation directly inspired the research problem addressed in Live Commerce Intelligence."}
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
                  {lang === "id" ? "Prestasi Wirausaha" : "Venture Achievement"}
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">
                  October 2024
                </span>
              </div>
              <h3 className="text-base font-bold text-foreground">
                {lang === "id"
                  ? "Juara 1 — Unsam StartUp Competition (USC 2024)"
                  : "1st Place Winner — Unsam StartUp Competition (USC)"}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {lang === "id"
                  ? "Meraih Juara 1 dengan pendanaan inkubasi institusional (Rp 6.000.000), diakui atas kelayakan komersial dan strategi bisnis terukur berbasis data."
                  : "Awarded 1st place with institutional incubation funding (Rp 6.000.000), recognized for commercial feasibility and data-informed business strategy."}
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
                  {lang === "id" ? "Bisnis & Inovasi" : "Business & Innovation"}
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">
                  2023 &amp; 2024
                </span>
              </div>
              <h3 className="text-base font-bold text-foreground">
                P2MW Business Model Canvas Workshop
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {lang === "id"
                  ? "Merumuskan validasi pasar, saluran segmen konsumen, dan pemodelan arus pendapatan dalam program pembinaan kewirausahaan mahasiswa Kemendikbudristek/Belmawa."
                  : "Formulating market validation, customer segment channels, and revenue stream modeling during Ministry/Belmawa funded student entrepreneurship development programs."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL & BUSINESS EXPERIENCE */}
      <section className="mb-24" aria-label="Experience">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
          {lang === "id"
            ? "Pengalaman Kerja & Bisnis"
            : "Work & Business Experience"}
        </h2>

        <div className="space-y-8">
          {/* Experience 1: Kawan Ngampus */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-border pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-indigo-500 uppercase">
                  {lang === "id"
                    ? "Operasional Usaha Digital"
                    : "Digital Venture Operations"}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-0.5">
                  Business Owner — Kawan Ngampus
                </h3>
                <span className="text-xs text-muted-foreground font-mono">
                  {lang === "id"
                    ? "Bisnis Digital Afiliasi & Operasional"
                    : "Affiliate Digital Business & Operations"}
                </span>
              </div>
              <div className="sm:text-right">
                <span className="inline-block text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-500 px-3 py-1 rounded-full border border-indigo-500/20">
                  October 2024 – March 2026 (18 Months)
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm text-foreground leading-relaxed">
              {lang === "id"
                ? "“Mengelola bisnis digital berbasis afiliasi dengan memanfaatkan data performa penjualan dan perilaku audiens guna mendukung strategi promosi.”"
                : "“Managed an affiliate-based digital business by using sales performance and audience behavior data to support promotional strategies.”"}
            </p>

            <div className="mt-4">
              <h4 className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider mb-2">
                {lang === "id"
                  ? "Tanggung Jawab Operasional Utama:"
                  : "Core Operational Responsibilities:"}
              </h4>
              <ul className="grid gap-2 sm:grid-cols-2 text-xs text-muted-foreground">
                <li className="flex gap-2 items-start">
                  <span className="text-indigo-500 font-bold shrink-0">▸</span>
                  <span>
                    {lang === "id"
                      ? "Memantau engagement audiens dan konversi transaksi"
                      : "Monitored engagement and sales conversions"}
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-indigo-500 font-bold shrink-0">▸</span>
                  <span>
                    {lang === "id"
                      ? "Mengevaluasi kinerja kampanye di berbagai kanal promosi"
                      : "Evaluated campaign performance across promotion channels"}
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-indigo-500 font-bold shrink-0">▸</span>
                  <span>
                    {lang === "id"
                      ? "Menyusun strategi promosi berdasarkan tren permintaan pasar"
                      : "Developed promotional strategies based on market trends"}
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-indigo-500 font-bold shrink-0">▸</span>
                  <span>
                    {lang === "id"
                      ? "Bekerja sama dengan mitra dan brand untuk koordinasi penawaran"
                      : "Worked with partners and brands to coordinate offerings"}
                  </span>
                </li>
                <li className="flex gap-2 items-start sm:col-span-2">
                  <span className="text-indigo-500 font-bold shrink-0">▸</span>
                  <span>
                    {lang === "id"
                      ? "Mengelola aktivitas operasional harian dan interaksi pelanggan"
                      : "Managed day-to-day operational activities and customer interactions"}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Experience 2: Live Commerce at Jagoan Grup */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-border pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-500 uppercase">
                  {lang === "id"
                    ? "Operasional Profesional"
                    : "Professional Operations"}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-0.5">
                  {lang === "id"
                    ? "Host Live Commerce & Koordinator Operasional"
                    : "Live Commerce Host & Operational Coordinator"}
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
              {lang === "id"
                ? "Mengelola sesi operasional siaran live streaming dan aktivitas promosi, memantau interaksi audiens, dinamika engagement, dan kecepatan penjualan secara langsung (real-time)."
                : "Managed live streaming operational sessions and promotional activities, monitoring audience interaction, engagement dynamics, and sales velocity in real time."}
            </p>

            <div className="mt-4">
              <h4 className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider mb-2">
                {lang === "id" ? "Aktivitas Operasional:" : "Operational Activities:"}
              </h4>
              <ul className="grid gap-2 sm:grid-cols-2 text-xs text-muted-foreground">
                <li className="flex gap-2 items-start">
                  <span className="text-emerald-500 font-bold shrink-0">▸</span>
                  <span>
                    {lang === "id"
                      ? "Mengelola operasional siaran live streaming dan eksekusi kampanye"
                      : "Managed live streaming operations and executed promotional campaigns"}
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-emerald-500 font-bold shrink-0">▸</span>
                  <span>
                    {lang === "id"
                      ? "Menganalisis performa siaran, engagement, dan tren penjualan"
                      : "Analyzed broadcast performance, engagement, and sales trends"}
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-emerald-500 font-bold shrink-0">▸</span>
                  <span>
                    {lang === "id"
                      ? "Mengkoordinasikan jadwal siaran dan strategi promosi tim"
                      : "Coordinated with the team on broadcast schedules and promotional strategies"}
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-emerald-500 font-bold shrink-0">▸</span>
                  <span>
                    {lang === "id"
                      ? "Meningkatkan engagement penonton melalui komunikasi produk yang persuasif"
                      : "Enhanced audience engagement through effective product communication"}
                  </span>
                </li>
              </ul>
            </div>

            {/* Supporting Public Speaking Credential Callout (PART 9) */}
            <div className="mt-6 pt-4 border-t border-border/80 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>
                  {lang === "id"
                    ? "Didukung dokumentasi kursus Public Speaking (LKP One Speaking Course, 2022)."
                    : "Supported by Public Speaking Course documentation (LKP One Speaking Course, 2022)."}
                </span>
              </div>
              <button
                onClick={() => setPublicSpeakingModal(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-secondary text-foreground text-xs font-medium transition-colors"
              >
                <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                <span>
                  {lang === "id"
                    ? "Lihat Sertifikat Public Speaking (PDF)"
                    : "View Public Speaking Certificate (PDF)"}
                </span>
              </button>
            </div>

            {/* Contextual Pipeline Banner */}
            <div className="mt-4 rounded-xl border border-border bg-background/60 p-4">
              <span className="block text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-bold mb-2">
                {lang === "id"
                  ? "Pipeline Konseptual & Evolusi Riset"
                  : "Conceptual Pipeline & Evolution"}
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground">
                <span className="text-foreground font-semibold">
                  {lang === "id" ? "Konteks Bisnis Nyata" : "Real Business Context"}
                </span>
                <span>→</span>
                <span className="text-foreground font-semibold">
                  {lang === "id"
                    ? "Pengalaman Live Commerce"
                    : "Live Commerce Experience"}
                </span>
                <span>→</span>
                <span className="text-indigo-500 font-semibold">
                  {lang === "id"
                    ? "Riset Skripsi Analitik"
                    : "Academic Analytics Research"}
                </span>
                <span>→</span>
                <span className="text-indigo-500 font-semibold">
                  {lang === "id"
                    ? "Model Prediktif (SGD)"
                    : "Predictive Model (SGD)"}
                </span>
                <span>→</span>
                <span className="text-foreground font-semibold">
                  {lang === "id"
                    ? "Solusi Data Interaktif"
                    : "Interactive Data Solution"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="mb-24" aria-label="Education">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
          {lang === "id"
            ? "Pendidikan & Kualifikasi Akademik"
            : "Education & Academic Credentials"}
        </h2>
        <div className="relative border-l-2 border-border ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8">
          <div className="relative">
            <div className="absolute -left-[2.15rem] sm:-left-[2.75rem] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-foreground text-lg">
                    Universitas Samudra
                  </h3>
                  <p className="text-sm text-indigo-500 font-mono font-semibold mt-0.5">
                    {lang === "id"
                      ? "Sarjana Komputer (S.Kom) — Program Studi Informatika"
                      : "Informatics Graduate (S.Kom) — Program Studi Informatika"}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono mt-0.5">
                    Aceh, Indonesia
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20">
                    GPA: 3.86 / 4.00
                  </span>
                  <span className="block text-xs text-muted-foreground font-mono mt-1">
                    2022 — 2026
                  </span>
                </div>
              </div>

              <div className="mt-4 border-t border-border pt-4 text-xs space-y-2 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">
                    {lang === "id" ? "Judul Skripsi:" : "Undergraduate Thesis:"}
                  </strong>{" "}
                  <em>
                    Analisis dan Prediksi Penjualan Menggunakan Stochastic
                    Gradient Descent (SGD) pada Live Commerce
                  </em>
                </p>
                <p>
                  <strong className="text-foreground">
                    {lang === "id"
                      ? "Dosen Pembimbing:"
                      : "Thesis Advisor:"}
                  </strong>{" "}
                  Dr. Ginda Maruli Andi Siregar, S.T., M.T. &amp; Teuku Radillah,
                  S.T., M.Cs.
                </p>
                <p>
                  <strong className="text-foreground">
                    {lang === "id"
                      ? "Fokus Akademik:"
                      : "Academic Focus:"}
                  </strong>{" "}
                  Data Analytics, Machine Learning, Predictive Modeling, &amp;
                  Business Intelligence Systems.
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

      {/* CERTIFICATIONS & ACHIEVEMENTS SECTION (PART 8: 4 THEMATIC CLUSTERS) */}
      <section className="mb-16" aria-label="Certifications and Achievements">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest font-mono">
            {lang === "id" ? "Kredensial Terverifikasi" : "Verified Credentials"}
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {lang === "id"
              ? "Sertifikasi & Rekam Jejak Pencapaian"
              : "Certifications & Achievements"}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground font-light leading-relaxed">
            {lang === "id"
              ? "Kumpulan bukti resmi yang dikelompokkan secara tematik: kompetensi analitik teknis, pendanaan hibah penelitian, rekognisi kompetisi bisnis, dan inkubasi wirausaha."
              : "Thematic clusters of authentic official credentials: technical analytics competencies, academic research grants, business competitions, and enterprise incubation."}
          </p>
        </div>

        <div className="space-y-16">
          {achievementGroups.map((group) => {
            const items = achievementsData.filter(
              (item) => item.category === group.category && !item.isSecondary
            );
            if (items.length === 0) return null;

            return (
              <div key={group.category} className="space-y-6">
                <div className="border-b border-border pb-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {group.title[lang]}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 font-light">
                    {group.subtitle[lang]}
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {items.map((item) => (
                    <EvidenceCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Public Speaking Modal for Jagoan Grup Secondary Evidence */}
      <EvidenceModal
        isOpen={publicSpeakingModal}
        onClose={() => setPublicSpeakingModal(false)}
        title={
          lang === "id"
            ? "Sertifikat Kursus Public Speaking"
            : "Public Speaking Certification"
        }
        organization="LKP One Speaking Course, Langsa"
        fileUrl="/evidence/supporting/public-speaking-certificate.pdf"
        badge="Supporting Credential"
      />
    </div>
  );
}
