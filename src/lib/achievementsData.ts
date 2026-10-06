export type AchievementCategory =
  | "technical"
  | "research"
  | "competitions"
  | "entrepreneurship"
  | "supporting";

export interface LocalizedText {
  en: string;
  id: string;
}

export interface AchievementItem {
  id: string;
  category: AchievementCategory;
  date: string;
  organization: string;
  title: LocalizedText;
  type: LocalizedText;
  description: LocalizedText;
  coverage?: string[];
  buttonLabel: LocalizedText;
  tooltip?: LocalizedText;
  evidenceFile?: string;
  secondaryFile?: string;
  secondaryButtonLabel?: LocalizedText;
  photos?: string[];
  relatedProjects?: string[];
  relatedSkills?: string[];
  badge?: string;
  isSecondary?: boolean;
}

export const achievementGroups: {
  category: AchievementCategory;
  title: LocalizedText;
  subtitle: LocalizedText;
}[] = [
  {
    category: "technical",
    title: {
      en: "Technical Certifications & Competencies",
      id: "Sertifikasi Teknis & Kompetensi",
    },
    subtitle: {
      en: "Verified credentials in Data Analytics pipelines, SQL querying, Python analytics, and advanced Business Intelligence modeling.",
      id: "Kredensial terverifikasi dalam pipeline Analisis Data, kueri SQL, pemrograman Python, dan pemodelan Business Intelligence lanjutan.",
    },
  },
  {
    category: "research",
    title: {
      en: "Academic Research & Grants",
      id: "Penelitian Akademik & Hibah",
    },
    subtitle: {
      en: "Institutional grants and competitive research validation supporting undergraduate thesis innovation.",
      id: "Pendanaan hibah institusional dan pengakuan riset kompetitif yang mendukung skripsi.",
    },
  },
  {
    category: "competitions",
    title: {
      en: "Competitions & Recognition",
      id: "Kompetisi & Penghargaan",
    },
    subtitle: {
      en: "Awards and recognition in university and regional business case and startup competitions.",
      id: "Penghargaan dan rekognisi dalam kompetisi bisnis, startup universitas, dan seleksi kewirausahaan regional.",
    },
  },
  {
    category: "entrepreneurship",
    title: {
      en: "Entrepreneurship & Business Incubation",
      id: "Kewirausahaan & Inkubasi Bisnis",
    },
    subtitle: {
      en: "Multi-year incubation journey under the national P2MW program, combining seed funding with rigorous business modeling.",
      id: "Perjalanan inkubasi multi-tahun di bawah program nasional P2MW, memadukan pendanaan usaha dengan pemodelan bisnis terstruktur.",
    },
  },
];

export const achievementsData: AchievementItem[] = [
  // -------------------------------------------------------------------------
  // GROUP 1: TECHNICAL CERTIFICATIONS & COMPETENCIES
  // -------------------------------------------------------------------------
  {
    id: "karirnex-data-analyst",
    category: "technical",
    date: "May 2026",
    organization: "Karirnex by PT Ebiz Karisma Internasional",
    title: {
      en: "Data Analyst Certification (Expert)",
      id: "Sertifikasi Data Analyst (Expert)",
    },
    type: {
      en: "Professional Certification",
      id: "Sertifikasi Profesional",
    },
    description: {
      en: "Completed an intensive Data Analyst Expert program covering end-to-end data pipeline operations: spreadsheet modeling, SQL querying on Google BigQuery, exploratory data analysis via Python, and interactive reporting dashboards in Looker Studio.",
      id: "Menyelesaikan program intensif Data Analyst Expert yang mencakup operasional pipeline data menyeluruh: pemodelan spreadsheet, penulisan kueri SQL di Google BigQuery, analisis data eksploratif (EDA) dengan Python, serta pembuatan dashboard analitik interaktif di Looker Studio.",
    },
    coverage: [
      "Microsoft Excel",
      "SQL",
      "Google BigQuery",
      "Python (Google Colab)",
      "Looker Studio",
    ],
    buttonLabel: {
      en: "View Certificate (PDF)",
      id: "Lihat Sertifikat (PDF)",
    },
    tooltip: {
      en: "Verified Data Analyst Expert — Karirnex",
      id: "Sertifikat Ahli Data Analyst — Karirnex",
    },
    evidenceFile: "/evidence/certifications/karirnex-data-analyst-expert.pdf",
    relatedSkills: ["Python", "SQL", "Google BigQuery", "Looker Studio", "Excel"],
    badge: "Expert Level",
  },
  {
    id: "edspert-excel-data-analysis",
    category: "technical",
    date: "May 2024",
    organization: "Edspert.id / PT Widya Kreasi Bangsa",
    title: {
      en: "Microsoft Excel for Data Analysis",
      id: "MS Excel untuk Analisis Data",
    },
    type: {
      en: "Competency Certification (SKKNI J.63OPR00.005.2)",
      id: "Sertifikasi Kompetensi (SKKNI J.63OPR00.005.2)",
    },
    description: {
      en: "Completed a Microsoft Excel for Data Analysis program (Batch 21) mapped to Indonesian National Work Readiness Standards (SKKNI J.63OPR00.005.2), covering automated cleaning, dynamic lookups, multi-table Pivot models, and executive KPI dashboard engineering.",
      id: "Menyelesaikan program Microsoft Excel untuk Analisis Data (Batch 21) berdurasi 960 menit yang terpetakan ke Standar Kompetensi Kerja Nasional Indonesia (SKKNI J.63OPR00.005.2), mencakup data cleaning, formula lanjutan, pemodelan Pivot Table, dan pengembangan dashboard KPI eksekutif.",
    },
    coverage: [
      "Data Cleaning",
      "Advanced Formulas",
      "Logic Functions",
      "LOOKUP / INDEX-MATCH",
      "Pivot Tables",
      "Dashboard Engineering",
    ],
    buttonLabel: {
      en: "View Certificate (PDF)",
      id: "Lihat Sertifikat (PDF)",
    },
    tooltip: {
      en: "Certificate of Excellence — Edspert",
      id: "Sertifikat Keunggulan — Edspert",
    },
    evidenceFile: "/evidence/certifications/edspert-excel-data-analysis.pdf",
    relatedProjects: ["bike-sales-dashboard", "us-superstore-sales-dashboard"],
    badge: "Excellence",
  },

  // -------------------------------------------------------------------------
  // GROUP 2: ACADEMIC RESEARCH & GRANTS
  // -------------------------------------------------------------------------
  {
    id: "lppm-unsam-grant-2025",
    category: "research",
    date: "July 2025",
    organization: "Lembaga Penelitian dan Pengabdian kepada Masyarakat (LPPM) Universitas Samudra",
    title: {
      en: "University Research Grant Decree",
      id: "SK Penerima Hibah Riset Skripsi",
    },
    type: {
      en: "Institutional Research Grant (Funding Rp 2.000.000)",
      id: "Hibah Riset Institusional (Pendanaan Rp 2.000.000)",
    },
    description: {
      en: "Awarded institutional undergraduate thesis research funding for pioneering Stochastic Gradient Descent (SGD) optimization with non-negative parameter constraints on live commerce telemetry data. Note: The grant confirms competitive institutional funding and research validation; model evaluation metrics (R² 51.26%, MAE 9.68 items) are reported separately in the research findings.",
      id: "Menerima pendanaan hibah riset skripsi tingkat universitas untuk penelitian optimasi Stochastic Gradient Descent (SGD) dengan penalti parameter non-negatif pada data telemetri live commerce. Catatan: Hibah membuktikan seleksi pendanaan institusional; metrik evaluasi model (R² 51,26%, MAE 9,68 item) dilaporkan terpisah secara ilmiah.",
    },
    buttonLabel: {
      en: "View Grant Award (PDF)",
      id: "Lihat Bukti Hibah (PDF)",
    },
    tooltip: {
      en: "Verified Undergraduate Research Grant — LPPM Unsam",
      id: "Penerima Hibah Riset Internal — LPPM Unsam",
    },
    evidenceFile: "/evidence/research/lppm-unsam-grant-2025-excerpt.pdf",
    relatedProjects: ["live-commerce-intelligence"],
    badge: "Funded Research",
  },

  // -------------------------------------------------------------------------
  // GROUP 3: VENTURE COMPETITIONS & RECOGNITION
  // -------------------------------------------------------------------------
  {
    id: "5me2045-lpdp-mata-garuda",
    category: "competitions",
    date: "February 2025",
    organization: "Yayasan Mata Garuda & LPDP Kementerian Keuangan RI",
    title: {
      en: "5ME2045 Regional Business Award",
      id: "Piagam Penghargaan Bisnis 5ME2045",
    },
    type: {
      en: "Regional Competition Recognition",
      id: "Penghargaan Kompetisi Wilayah",
    },
    description: {
      en: "Recognized as a regional selection participant in the 5ME2045 Business Competition II (BIP Category: Mahasiswa/Umum, Region 5 covering Aceh, North Sumatra, West Sumatra, Riau, Riau Islands) organized by the LPDP Alumni Association (Yayasan Mata Garuda) together with LPDP Ministry of Finance RI.",
      id: "Menerima piagam penghargaan peserta seleksi tingkat wilayah pada 5ME2045 Business Competition II (Kategori BIP - Mahasiswa/Umum, Wilayah 5 mencakup Aceh, Sumut, Sumbar, Riau, Kepri) yang diselenggarakan oleh Yayasan Mata Garuda bersama LPDP Kementerian Keuangan RI.",
    },
    buttonLabel: {
      en: "View Award Certificate (PDF)",
      id: "Lihat Piagam (PDF)",
    },
    tooltip: {
      en: "Verified Regional Selection Certificate — LPDP Mata Garuda",
      id: "Piagam Terverifikasi — LPDP Mata Garuda",
    },
    evidenceFile: "/evidence/achievements/5me2045-lpdp-mata-garuda-award.pdf",
    badge: "Regional Selection",
  },
  {
    id: "usc-2024",
    category: "competitions",
    date: "October 2024",
    organization: "Universitas Samudra",
    title: {
      en: "Unsam StartUp Competition (USC 2024)",
      id: "Unsam StartUp Competition (USC 2024)",
    },
    type: {
      en: "1st Place Winner & Official Certificate",
      id: "Juara 1 & Sertifikat Resmi Institusi",
    },
    description: {
      en: "Achieved 1st place in the university-wide Unsam StartUp Competition 2024. Validated by official institutional certificate signed by the Vice Rector (Dr. Ir. Muhammad Zulfri) and authentic on-stage documentation.",
      id: "Meraih Juara 1 dalam Unsam StartUp Competition 2024 tingkat universitas. Divalidasi dengan sertifikat resmi pimpinan universitas yang ditandatangani Wakil Rektor (Dr. Ir. Muhammad Zulfri) dan dokumentasi panggung autentik.",
    },
    buttonLabel: {
      en: "View Certificate (PDF)",
      id: "Lihat Sertifikat (PDF)",
    },
    tooltip: {
      en: "1st Place Official Certificate — USC 2024",
      id: "Sertifikat Juara 1 — USC 2024",
    },
    evidenceFile: "/evidence/achievements/usc-2024-certificate.pdf",
    photos: ["/images/about/usc-1.jpeg", "/images/about/usc-2.jpeg"],
    badge: "1st Place",
  },

  // -------------------------------------------------------------------------
  // GROUP 4: ENTREPRENEURSHIP & BUSINESS INCUBATION
  // -------------------------------------------------------------------------
  {
    id: "p2mw-journey",
    category: "entrepreneurship",
    date: "2023–2024",
    organization: "Kemendikbudristek & Belmawa / Universitas Samudra",
    title: {
      en: "P2MW — Entrepreneurship Incubation Journey",
      id: "P2MW — Program Kewirausahaan & Inkubasi Bisnis",
    },
    type: {
      en: "National Incubation Program (2023 Funding & 2024 Certification)",
      id: "Program Pembinaan Nasional (Pendanaan 2023 & Sertifikat 2024)",
    },
    description: {
      en: "A continuous two-year venture journey under the national Program Pembinaan Mahasiswa Wirausaha (P2MW). In 2023, successfully secured institutional seed funding for a digital briquette transformation venture. In 2024, completed formal university and national business incubation modules covering BMC modeling, customer discovery, and financial tracking.",
      id: "Perjalanan wirausaha terintegrasi selama dua tahun di bawah Program Pembinaan Mahasiswa Wirausaha (P2MW). Pada 2023, berhasil meraih pendanaan awal usaha digitalisasi briket. Pada 2024, menyelesaikan program inkubasi formal tingkat universitas dengan sertifikat resmi rektor.",
    },
    buttonLabel: {
      en: "View 2023 Funding Certificate (PDF)",
      id: "Lihat Sertifikat Pendanaan 2023 (PDF)",
    },
    secondaryButtonLabel: {
      en: "View 2024 Program Certificate (PDF)",
      id: "Lihat Sertifikat Kepesertaan 2024 (PDF)",
    },
    evidenceFile: "/evidence/entrepreneurship/p2mw-2023-funding-certificate.pdf",
    secondaryFile: "/evidence/entrepreneurship/p2mw-2024-program-certificate.pdf",
    photos: ["/images/about/workshop-p2mw-bmc.jpeg"],
    badge: "Funded & Certified",
  },

  // -------------------------------------------------------------------------
  // SUPPORTING CREDENTIALS (SECONDARY WEIGHT)
  // -------------------------------------------------------------------------
  {
    id: "public-speaking-cert",
    category: "supporting",
    date: "2022",
    organization: "LKP One Speaking Course, Langsa",
    title: {
      en: "Public Speaking Certification",
      id: "Sertifikat Kursus Public Speaking",
    },
    type: {
      en: "Secondary Supporting Credential",
      id: "Kredensial Pendukung Sekunder",
    },
    description: {
      en: "Completed public speaking training, serving as supporting foundational documentation for live commerce broadcasting and operational communication at Jagoan Grup.",
      id: "Menyelesaikan kursus public speaking yang menjadi dokumentasi pendukung untuk peran siaran langsung (live commerce host) dan koordinasi operasional di Jagoan Grup.",
    },
    buttonLabel: {
      en: "View Documentation (PDF)",
      id: "Lihat Dokumentasi (PDF)",
    },
    evidenceFile: "/evidence/supporting/public-speaking-certificate.pdf",
    isSecondary: true,
  },
];
