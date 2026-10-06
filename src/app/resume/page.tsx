"use client";

import React from "react";
import Image from "next/image";
import {
  Printer,
  Mail,
  Briefcase,
  GraduationCap,
  Code,
  MapPin,
  Award,
  UserCheck,
  Building,
  Rocket,
  BarChart3,
  Phone,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Resume() {
  const { lang } = useLanguage();
  const isId = lang === "id";

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full bg-secondary/15 py-12 px-4 print:bg-white print:py-0 print:px-0">
      <div className="mx-auto max-w-4xl">
        {/* Actions bar (hidden during print) */}
        <div className="flex justify-between items-center mb-8 bg-card border border-border rounded-2xl p-4 shadow-sm print:hidden">
          <span className="text-sm font-semibold text-foreground">
            {isId
              ? "Resume Resmi — Muhammad Farid Fitriansyah"
              : "Official Resume — Muhammad Farid Fitriansyah"}
          </span>
          <div className="flex gap-2">
            <a
              href="/Muhammad-Farid-Fitriansyah-CV.docx"
              download
              className="inline-flex h-9 items-center justify-center rounded-xl border border-border bg-card px-4 text-xs font-semibold text-muted-foreground hover:text-foreground transition-all gap-1.5"
            >
              {isId ? "Unduh CV (.docx)" : "Download CV (.docx)"}
            </a>
            <button
              onClick={handlePrint}
              className="inline-flex h-9 items-center justify-center rounded-xl bg-primary text-primary-foreground px-4 text-xs font-semibold hover:opacity-90 transition-all gap-1.5"
            >
              <Printer className="h-4 w-4" />
              {isId ? "Cetak CV / Simpan PDF" : "Print CV / Save PDF"}
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-sm print:shadow-none print:border-0 print:p-0 print:rounded-none">
          {/* Header */}
          <div className="border-b border-border pb-8 text-center sm:text-left sm:flex sm:justify-between sm:items-end">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="relative h-20 w-20 shrink-0 rounded-2xl overflow-hidden border-2 border-indigo-500/20 shadow-md bg-secondary/50">
                <Image
                  src="/images/farid-about-suit.webp"
                  alt="Muhammad Farid Fitriansyah"
                  width={200}
                  height={200}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="space-y-1.5 text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                  Muhammad Farid Fitriansyah
                </h1>
                <p className="text-sm sm:text-base font-semibold text-indigo-500 font-mono uppercase tracking-wider">
                  Data Analyst | Business Intelligence | Machine Learning
                </p>
                <p className="text-xs text-muted-foreground max-w-lg leading-relaxed font-light">
                  {isId
                    ? "Lulusan Sarjana Komputer (S.Kom, IPK 3.86 / 4.00) Informatika Universitas Samudra (2022–2026) dengan pengalaman langsung dalam analisis data, dashboard business intelligence, pemodelan prediktif (SGD, LSTM), dan pengembangan solusi berbasis data."
                    : "Informatics graduate (S.Kom, GPA 3.86 / 4.00) from Universitas Samudra (2022–2026) with hands-on experience in data analysis, business intelligence dashboards, predictive modeling (SGD, LSTM), and data-driven solution development."}
                </p>
              </div>
            </div>

            <div className="mt-6 sm:mt-0 space-y-1.5 text-xs text-muted-foreground font-mono sm:text-right shrink-0">
              <div className="flex items-center justify-center sm:justify-end gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                <span>P.Brandan, Sumatra Utara, Indonesia</span>
              </div>
              <div className="flex items-center justify-center sm:justify-end gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <a href="mailto:mhdfarid1811@gmail.com" className="hover:text-foreground">
                  mhdfarid1811@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-end gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0" />
                <a href="https://wa.me/6281362015571" className="hover:text-foreground">
                  +62 813-6201-5571
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-end gap-2">
                <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                <a href="https://github.com/farid1811" target="_blank" rel="noreferrer" className="hover:text-foreground">
                  github.com/farid1811
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-end gap-2">
                <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                <a href="https://www.linkedin.com/in/muhammad-farid-fitriansyah-53527a249" target="_blank" rel="noreferrer" className="hover:text-foreground">
                  linkedin.com/in/farid-fitriansyah
                </a>
              </div>
            </div>
          </div>

          {/* Body Layout */}
          <div className="grid gap-8 md:grid-cols-3 mt-8">
            {/* Left Column: Education / Certs / Achievements / Skills */}
            <div className="space-y-8 md:col-span-1">
              {/* Education */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-foreground font-mono uppercase tracking-wider flex items-center gap-1.5 border-b border-border pb-2">
                  <GraduationCap className="h-4 w-4 text-indigo-500" />
                  {isId ? "Pendidikan" : "Education"}
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Universitas Samudra</h4>
                    <span className="block text-xs text-indigo-500 font-mono mt-0.5 font-semibold">
                      {isId ? "Sarjana Komputer (S.Kom)" : "Informatics Graduate (S.Kom)"}
                    </span>
                    <span className="block text-[11px] text-muted-foreground font-mono mt-0.5">
                      Program Studi Informatika
                    </span>
                    <span className="inline-block text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded mt-1">
                      {isId ? "IPK: 3.86 / 4.00" : "GPA: 3.86 / 4.00"}
                    </span>
                    <span className="block text-[11px] text-muted-foreground font-mono mt-0.5">
                      2022 — 2026
                    </span>
                    <p className="text-[11px] text-muted-foreground mt-1 leading-tight">
                      {isId ? "Skripsi: " : "Thesis: "}
                      <em>Analisis dan Prediksi Penjualan Menggunakan SGD pada Live Commerce</em>{" "}
                      ({isId ? "Pembimbing: Dr. Ginda Maruli Andi Siregar" : "Advisor: Dr. Ginda Maruli Andi Siregar"}).
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievements & Funding */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-foreground font-mono uppercase tracking-wider flex items-center gap-1.5 border-b border-border pb-2">
                  <Award className="h-4 w-4 text-indigo-500" />
                  {isId ? "Hibah & Penghargaan" : "Grants & Awards"}
                </h3>
                <div className="space-y-2 text-xs text-muted-foreground leading-relaxed font-mono">
                  <div className="flex gap-1.5 items-start">
                    <span className="text-indigo-500 shrink-0">▸</span>
                    <span>
                      {isId
                        ? "Penerima Hibah Riset Mahasiswa Internal — Universitas Samudra (2025)"
                        : "Internal Student Research Grant Recipient — Universitas Samudra (2025)"}
                    </span>
                  </div>
                  <div className="flex gap-1.5 items-start">
                    <span className="text-indigo-500 shrink-0">▸</span>
                    <span>
                      {isId
                        ? "Finalis Kompetisi Bisnis Regional II — LPDP (Feb 2025)"
                        : "Regional II Business Competition Finalist — LPDP (Feb 2025)"}
                    </span>
                  </div>
                  <div className="flex gap-1.5 items-start">
                    <span className="text-indigo-500 shrink-0">▸</span>
                    <span>
                      {isId
                        ? "Pemenang Unsam StartUp Competition (USC) — Juara 1 (Okt 2024)"
                        : "Unsam StartUp Competition (USC) Winner — 1st Place (Oct 2024)"}
                    </span>
                  </div>
                  <div className="flex gap-1.5 items-start">
                    <span className="text-indigo-500 shrink-0">▸</span>
                    <span>
                      {isId
                        ? "Penerima Pendanaan P2MW — Belmawa (2023 & 2024)"
                        : "P2MW Student Entrepreneurship Grant Recipient — Belmawa (2023 & 2024)"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Training & Certifications */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-foreground font-mono uppercase tracking-wider flex items-center gap-1.5 border-b border-border pb-2">
                  <UserCheck className="h-4 w-4 text-indigo-500" />
                  {isId ? "Pelatihan & Kredensial" : "Training & Credentials"}
                </h3>
                <div className="space-y-2.5 text-xs text-muted-foreground font-mono">
                  <div>
                    <strong className="text-foreground block">
                      {isId ? "Bootcamp Data Analyst (Tingkat Expert)" : "Bootcamp Data Analyst (Expert)"}
                    </strong>
                    <span>Karirnex by PT Ebiz Karisma ({isId ? "Mei" : "May"} 2026)</span>
                  </div>
                  <div>
                    <strong className="text-foreground block">
                      {isId ? "MS Excel untuk Analisis Data" : "MS Excel for Data Analysis"}
                    </strong>
                    <span>Edspert (Apr – {isId ? "Mei" : "May"} 2024)</span>
                  </div>
                  <div>
                    <strong className="text-foreground block">
                      {isId ? "Workshop Kewirausahaan P2MW" : "P2MW Entrepreneurship Workshop"}
                    </strong>
                    <span>Kiat Advisory (Nov 2024)</span>
                  </div>
                  <div>
                    <strong className="text-foreground block">Samsung Innovation Campus Batch 5</strong>
                    <span>Skillvul (Feb 2024)</span>
                  </div>
                </div>
              </div>

              {/* Technical Skills breakdown */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-foreground font-mono uppercase tracking-wider flex items-center gap-1.5 border-b border-border pb-2">
                  <Code className="h-4 w-4 text-indigo-500" />
                  {isId ? "Kompetensi Teknis" : "Technical Competencies"}
                </h3>
                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <span className="block font-bold text-foreground uppercase text-[10px] mb-1">
                      Data Analytics
                    </span>
                    <p className="text-muted-foreground leading-relaxed text-[11px]">
                      Python, SQL, Microsoft Excel, Pandas, NumPy, Data Cleaning, Exploratory Data Analysis, Statistical Analysis
                    </p>
                  </div>
                  <div>
                    <span className="block font-bold text-foreground uppercase text-[10px] mb-1">
                      Business Intelligence
                    </span>
                    <p className="text-muted-foreground leading-relaxed text-[11px]">
                      Excel Dashboards, Streamlit, Data Visualization, Dashboard Development, Plotly, Chart.js
                    </p>
                  </div>
                  <div>
                    <span className="block font-bold text-foreground uppercase text-[10px] mb-1">
                      Machine Learning
                    </span>
                    <p className="text-muted-foreground leading-relaxed text-[11px]">
                      Scikit-learn, Regression, Time Series, LSTM, Model Evaluation (MAE, MAPE, R²), PyTorch
                    </p>
                  </div>
                  <div>
                    <span className="block font-bold text-foreground uppercase text-[10px] mb-1">
                      {isId ? "Teknologi Pendukung" : "Supporting Technologies"}
                    </span>
                    <p className="text-muted-foreground leading-relaxed text-[11px]">
                      Flask, Laravel, MySQL, SQLite, WordPress, REST API
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Work Experience, Entrepreneurial, Projects */}
            <div className="space-y-8 md:col-span-2">
              {/* SECTION A: PROFESSIONAL / WORK EXPERIENCE */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-foreground font-mono uppercase tracking-wider flex items-center gap-1.5 border-b border-border pb-2">
                  <Briefcase className="h-4 w-4 text-indigo-500" />
                  {isId ? "Pengalaman Kerja Profesional" : "Professional / Work Experience"}
                </h3>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-bold text-foreground">
                          {isId
                            ? "Host Live Commerce & Koordinator Operasional"
                            : "Live Commerce Host & Operations Coordinator"}
                        </h4>
                        <span className="text-xs font-semibold text-indigo-500 font-mono">
                          Jagoan Grup
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground font-mono shrink-0 ml-2">
                        {isId ? "Jan 2024 — Sep 2024" : "Jan 2024 — Sep 2024"}
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-muted-foreground leading-relaxed space-y-1">
                      {isId ? (
                        <>
                          <li>Mengelola operasional kegiatan live commerce dan memastikan kelancaran promosi produk selama sesi berlangsung.</li>
                          <li>Menganalisis performa live, engagement audiens, dan tren penjualan untuk pengoptimuman strategi pemasaran.</li>
                          <li>Berkoordinasi dengan tim dalam penyusunan jadwal live, strategi promosi, dan evaluasi kinerja kampanye.</li>
                          <li>Meningkatkan interaksi audiens melalui komunikasi produk yang efektif pada sesi live streaming.</li>
                        </>
                      ) : (
                        <>
                          <li>Managed daily live commerce operations and ensured smooth product promotional execution throughout scheduled broadcasts.</li>
                          <li>Analyzed livestream performance metrics, viewer engagement dynamics, and sales conversion patterns to optimize marketing approaches.</li>
                          <li>Coordinated with teams on broadcast scheduling, promotional bundle designs, and post-campaign performance reviews.</li>
                          <li>Enhanced audience retention and conversion through structured, persuasive real-time product storytelling.</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* SECTION B: ENTREPRENEURIAL EXPERIENCE */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-foreground font-mono uppercase tracking-wider flex items-center gap-1.5 border-b border-border pb-2">
                  <Building className="h-4 w-4 text-indigo-500" />
                  {isId ? "Pengalaman Bisnis & Kewirausahaan" : "Business & Entrepreneurial Experience"}
                </h3>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-bold text-foreground">
                          {isId ? "Pemilik Bisnis (Owner)" : "Business Owner (Owner)"}
                        </h4>
                        <span className="text-xs font-semibold text-indigo-500 font-mono">
                          Kawan Ngampus
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground font-mono shrink-0 ml-2">
                        {isId ? "Okt 2024 — Mar 2026 (18 Bulan)" : "Oct 2024 — Mar 2026 (18 Months)"}
                      </span>
                    </div>
                    <p className="text-xs text-foreground font-medium pt-0.5">
                      &quot;{isId
                        ? "Mengelola bisnis digital berbasis afiliasi dengan memanfaatkan data performa penjualan dan perilaku audiens untuk mendukung strategi promosi."
                        : "Managed an affiliate-based digital business by using sales performance and audience behavior data to support promotional strategies."}&quot;
                    </p>
                    <ul className="list-disc list-inside text-xs text-muted-foreground leading-relaxed space-y-1 pt-1">
                      {isId ? (
                        <>
                          <li>Memantau performa keterlibatan (engagement) dan konversi penjualan dari kanal promosi digital.</li>
                          <li>Mengevaluasi efektivitas kampanye serta respons audiens sebagai dasar penyesuaian materi promosi.</li>
                          <li>Mengembangkan strategi promosi berdasarkan tren pasar dan data penjualan produk afiliasi.</li>
                          <li>Membangun kemitraan dan koordinasi dengan brand/rekanan dalam program promosi afiliasi.</li>
                          <li>Mengelola operasional harian serta interaksi pelanggan untuk menjaga retensi audiens.</li>
                        </>
                      ) : (
                        <>
                          <li>Monitored engagement and sales conversions across digital promotional channels.</li>
                          <li>Evaluated campaign performance and audience responses to refine content positioning.</li>
                          <li>Developed promotional strategies based on market trends and performance metrics.</li>
                          <li>Worked with partners and brands to coordinate affiliate campaigns.</li>
                          <li>Managed day-to-day operational activities and customer engagement.</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* SECTION C: FREELANCE & RESEARCH EXPERIENCE */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-foreground font-mono uppercase tracking-wider flex items-center gap-1.5 border-b border-border pb-2">
                  <Rocket className="h-4 w-4 text-indigo-500" />
                  {isId ? "Pengalaman Riset & Analisis Data" : "Research & Data Analytics Experience"}
                </h3>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-bold text-foreground">
                          {isId ? "Asisten Riset & Analisis Data" : "Research Assistant & Data Analyst"}
                        </h4>
                        <span className="text-xs font-semibold text-indigo-500 font-mono">
                          {isId ? "Proyek Riset Akademik & Mandiri" : "Freelance & Academic Research Projects"}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground font-mono shrink-0 ml-2">
                        2025 — 2026
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-muted-foreground leading-relaxed space-y-1">
                      {isId ? (
                        <>
                          <li>Mendukung pengembangan proyek riset berfokus pada Machine Learning, Time Series Forecasting, dan Text Mining.</li>
                          <li>Melakukan data preprocessing, data cleansing, dan evaluasi model menggunakan Python (Google Colab/Jupyter) dan Microsoft Excel.</li>
                          <li>Membantu implementasi algoritma Long Short-Term Memory (LSTM), TF-IDF, dan Cosine Similarity pada sistem berbasis data.</li>
                          <li>Mengembangkan visualisasi data interaktif dan dashboard analitik untuk pendukung interpretasi hasil penelitian.</li>
                        </>
                      ) : (
                        <>
                          <li>Supported research initiatives focusing on Machine Learning, Time Series Forecasting, and Text Mining.</li>
                          <li>Performed data preprocessing, data cleansing pipelines, and model evaluation using Python (Jupyter / Colab) and Microsoft Excel.</li>
                          <li>Assisted in implementing Long Short-Term Memory (LSTM), TF-IDF, and Cosine Similarity models in data-driven systems.</li>
                          <li>Engineered interactive data visualizations and analytical dashboards to support quantitative research analysis.</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* SECTION D: VERIFIED PROJECT HIGHLIGHTS */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-foreground font-mono uppercase tracking-wider border-b border-border pb-2 flex items-center gap-1.5">
                  <BarChart3 className="h-4 w-4 text-indigo-500" />
                  {isId ? "Sorotan Analisis & Proyek Unggulan" : "Key Analytics & Project Highlights"}
                </h3>

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex gap-2 items-start">
                    <span className="text-indigo-500 shrink-0 font-bold">01</span>
                    <div>
                      <strong className="text-foreground">
                        {isId
                          ? "Analisis Penjualan Live Commerce & Prediksi SGD"
                          : "Live Commerce Sales Analytics & SGD Prediction"}
                      </strong>
                      <span className="text-muted-foreground">
                        {isId
                          ? " — Formulasi regresi constrained Stochastic Gradient Descent (θ ≥ 0, bias ≥ 0). R² = 51.26%, MAE = 9.68 unit. Simulasi interaktif Streamlit & aplikasi Flask MVC. (Maret 2026)"
                          : " — Formulated constrained Stochastic Gradient Descent regression (θ ≥ 0, bias ≥ 0). R² = 51.26%, MAE = 9.68 items. Streamlit interactive simulation & Flask MVC application. (March 2026)"}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 items-start">
                    <span className="text-indigo-500 shrink-0 font-bold">02</span>
                    <div>
                      <strong className="text-foreground">
                        Foresight IQ — Time Series Commodity Forecasting
                      </strong>
                      <span className="text-muted-foreground">
                        {isId
                          ? " — Prediksi permintaan komoditas industri menggunakan PyTorch LSTM pada 6 lini produk (Besi, Semen, Cat, Pipa, Seng, Triplek). Test MAPE = 17.29% (Triplek). Dashboard Streamlit Clean Architecture. (2025)"
                          : " — Industrial commodity demand forecasting using PyTorch LSTM across 6 product lines (Iron, Cement, Paint, Pipe, Zinc, Plywood). Test MAPE = 17.29% (Plywood). Clean Architecture Streamlit dashboard. (2025)"}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 items-start">
                    <span className="text-indigo-500 shrink-0 font-bold">03</span>
                    <div>
                      <strong className="text-foreground">
                        {isId
                          ? "Bike Sales Dashboard — Analisis Konsumen Microsoft Excel"
                          : "Bike Sales Dashboard — Microsoft Excel Customer Analytics"}
                      </strong>
                      <span className="text-muted-foreground">
                        {isId
                          ? " — Dashboard interaktif Microsoft Excel menganalisis demografi pembeli sepeda. Mengidentifikasi pendapatan rata-rata pria pembeli ($92,857.14) vs wanita ($86,250.00), dominasi usia menengah, dan pengaruh jarak komuter dengan slicers dinamis. (Juni 2024)"
                          : " — Interactive Microsoft Excel dashboard analyzing bicycle purchaser demographics. Identified buyer male average income ($92,857.14) vs female ($86,250.00), middle-age bracket dominance, and commute distance impact with dynamic slicers. (June 2024)"}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 items-start">
                    <span className="text-indigo-500 shrink-0 font-bold">04</span>
                    <div>
                      <strong className="text-foreground">
                        {isId
                          ? "US Superstore Sales Dashboard — Analisis Keuangan Microsoft Excel"
                          : "US Superstore Sales Dashboard — Microsoft Excel Financial Analytics"}
                      </strong>
                      <span className="text-muted-foreground">
                        {isId
                          ? " — Dashboard eksekutif Microsoft Excel memproses transaksi ritel. Memvalidasi Total Revenue $169,213.71, Total Profit $1,158.26, kontributor utama California ($35,529.12), dan analisis margin drag akibat diskon tinggi. (Mei 2024)"
                          : " — Executive Microsoft Excel dashboard processing retail transactions. Validated Total Revenue $169,213.71, Total Profit $1,158.26, top contributor California ($35,529.12), and identified deep discount profit margin drags. (May 2024)"}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 items-start">
                    <span className="text-indigo-500 shrink-0 font-bold">05</span>
                    <div>
                      <strong className="text-foreground">
                        {isId
                          ? "SPKJS AI & Sistem Full-Stack (Solusi Pendukung)"
                          : "SPKJS AI & Full-Stack Systems (Supporting Solutions)"}
                      </strong>
                      <span className="text-muted-foreground">
                        {isId
                          ? " — Sistem Pendukung Keputusan TF-IDF Cosine, Laravel 10 Smart CBT, CodeIgniter 3 Sistem Informasi Puskesmas, dan Portal Web Fakultas Hukum Unsam."
                          : " — Decision Support System TF-IDF Cosine, Laravel 10 Smart CBT, CodeIgniter 3 Healthcare Information System, and Unsam Faculty of Law Web Portal."}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
