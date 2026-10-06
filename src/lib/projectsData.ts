export type ProjectDomain =
  | "data-analytics"
  | "business-intelligence"
  | "machine-learning"
  | "software-systems";

export interface LocalizedText {
  en: string;
  id: string;
}

export interface LocalizedArray {
  en: string[];
  id: string[];
}

export interface EvidenceRelation {
  title: LocalizedText;
  type: LocalizedText;
  file: string;
  description: LocalizedText;
  buttonLabel: LocalizedText;
}

export interface ProjectData {
  slug: string;
  title: string;
  subtitle: LocalizedText | string;
  categoryLabel: LocalizedText | string;
  description: LocalizedText | string;
  longDescription: LocalizedText | string;
  domain: ProjectDomain;
  tier: 1 | 2 | 3;
  techStack: string[];
  architecture: string;
  githubUrl?: string;
  caseStudyUrl: string;
  liveUrl?: string;
  accentColor: string;
  mockType?: "lstm" | "sgd" | "rag" | "cbt" | "excel";
  imageUrl?: string;
  secondaryImageUrl?: string;
  metrics: { label: LocalizedText | string; value: string }[];
  features: LocalizedArray | string[];
  businessValue: LocalizedText | string;
  systemDesign?: string;
  // Structured Case Study Dimensions
  problem: LocalizedText | string;
  dataInput: LocalizedText | string;
  approach: LocalizedText | string;
  methodology: LocalizedText | string;
  keyFindings: LocalizedArray | string[];
  visualEvidenceDesc: LocalizedText | string;
  whatIBuilt: LocalizedText | string;
  outcome: LocalizedText | string;
  // Evidence Relation
  evidenceRelation?: EvidenceRelation;
}

export function getLocalized(val: LocalizedText | string | undefined, lang: "en" | "id"): string {
  if (!val) return "";
  if (typeof val === "string") return val;
  return val[lang] || val.en || "";
}

export function getLocalizedArray(val: LocalizedArray | string[] | undefined, lang: "en" | "id"): string[] {
  if (!val) return [];
  if (Array.isArray(val)) return val;
  return val[lang] || val.en || [];
}

export const projectsData: ProjectData[] = [
  // =========================================================================
  // TIER 1 — FEATURED DATA & ANALYTICS PROJECTS
  // =========================================================================
  {
    slug: "live-commerce-intelligence",
    title: "Live Commerce Intelligence",
    subtitle: {
      en: "Predictive Analytics & Constrained SGD Regression",
      id: "Analitik Prediktif & Optimasi Regresi SGD Terkendala",
    },
    categoryLabel: {
      en: "Data Analytics · Predictive Analytics · Business Intelligence",
      id: "Analisis Data · Analitik Prediktif · Business Intelligence",
    },
    description: {
      en: "Analyzing and predicting live commerce sales using streaming duration and active viewer data, supported by constrained Stochastic Gradient Descent (SGD) regression modeling and interactive visualization.",
      id: "Menganalisis dan memprediksi penjualan live commerce berdasarkan durasi siaran dan jumlah penonton aktif, didukung pemodelan regresi Stochastic Gradient Descent (SGD) terkendala dan visualisasi interaktif.",
    },
    longDescription: {
      en: "Live shopping broadcasts produce dynamic real-time telemetry, yet traditional unconstrained OLS regression models often yield counter-intuitive negative coefficient slopes (theoretically suggesting that longer broadcasts diminish sales). This project resolves that anomaly by formulating a constrained Stochastic Gradient Descent (SGD) optimization engine that enforces non-negative parameter clipping (theta >= 0, bias >= 0) at each learning iteration, ensuring mathematically realistic and commercially sound business models.",
      id: "Sesi siaran live shopping menghasilkan telemetri real-time yang dinamis, namun model regresi OLS tanpa batas sering kali menghasilkan koefisien miring bernilai negatif (secara teoritis menyiratkan bahwa siaran lebih lama justru menurunkan penjualan). Proyek ini menyelesaikan anomali tersebut dengan memformulasikan mesin optimasi Stochastic Gradient Descent (SGD) terkendala yang menerapkan clipping parameter non-negatif (theta >= 0, bias >= 0) pada setiap iterasi pembelajaran, menjamin model bisnis yang realistis secara matematis dan komersial.",
    },
    domain: "data-analytics",
    tier: 1,
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Plotly.js",
      "Flask",
      "SQLite",
      "TailwindCSS",
    ],
    architecture: "Python ML Pipeline + Constrained SGD Optimization + Flask Analytics App",
    githubUrl: "https://github.com/farid1811/SPKJS",
    caseStudyUrl: "/projects/live-commerce-intelligence",
    accentColor: "#06b6d4",
    mockType: "sgd",
    imageUrl: "/images/projects/live-commerce-preview.png",
    metrics: [
      {
        label: { en: "Model R² Fit", id: "Kesesuaian R² Model" },
        value: "51.26%",
      },
      {
        label: { en: "Mean Absolute Error", id: "Rata-rata Kesalahan (MAE)" },
        value: "9.68 items",
      },
      {
        label: { en: "Optimization Epochs", id: "Iterasi Optimasi" },
        value: "1,000",
      },
      {
        label: { en: "Telemetry Dataset", id: "Dataset Telemetri" },
        value: "20 Live Sessions",
      },
    ],
    features: {
      en: [
        "Constrained Stochastic Gradient Descent with non-negative parameter clipping",
        "Dual-input streaming telemetry (Stream Duration in minutes + Active Peak Viewers)",
        "Interactive scenario simulation workspace for real-time what-if broadcast forecasting",
        "Interactive 3D regression surface rendering via Plotly.js",
        "Operational host scheduling recommendation matrix based on empirical marginal yields",
      ],
      id: [
        "Optimasi Stochastic Gradient Descent terkendala dengan clipping parameter non-negatif",
        "Telemetri siaran input ganda (Durasi Siaran dalam menit + Puncak Penonton Aktif)",
        "Ruang simulasi skenario interaktif untuk peramalan penjualan siaran real-time",
        "Visualisasi permukaan regresi 3D interaktif menggunakan Plotly.js",
        "Matriks rekomendasi jadwal host operasional berbasis kurva hasil marjinal empiris",
      ],
    },
    businessValue: {
      en: "Eliminated false negative revenue projections by imposing mathematical reality onto optimization gradients, providing live commerce merchants with reliable operational guidance on broadcast duration limits and audience engagement thresholds.",
      id: "Mengeliminasi proyeksi pendapatan negatif yang keliru dengan menerapkan batas realitas matematis pada gradien optimasi, memberikan panduan operasional yang andal bagi merchant live commerce mengenai batas durasi siaran dan target retensi penonton.",
    },
    problem: {
      en: "Standard unconstrained ordinary least squares (OLS) regression models produced mathematically valid but commercially absurd negative slope coefficients on real-world live commerce telemetry, falsely predicting that streaming longer would reduce total units sold.",
      id: "Model regresi OLS standar menghasilkan koefisien lereng negatif yang secara matematis valid namun secara komersial tidak masuk akal pada data telemetri nyata, falsely memprediksi bahwa siaran lebih lama akan menurunkan jumlah produk yang terjual.",
    },
    dataInput: {
      en: "20 authentic live shopping broadcast telemetry logs tracking broadcast duration (minutes), concurrent active viewers, and verified units sold per session.",
      id: "20 log telemetri siaran live shopping autentik yang mencatat durasi siaran (menit), penonton aktif bersamaan, dan jumlah unit terverifikasi yang terjual per sesi.",
    },
    approach: {
      en: "Formulated a customized SGD training routine with custom loss surface traversal and non-negative parameter projections at every update step, followed by deployment into a Flask portfolio application.",
      id: "Merumuskan algoritma pelatihan SGD teroptimasi dengan loss surface traversal khusus dan proyeksi parameter non-negatif pada setiap langkah pembaruan, diikuti integrasi ke dalam aplikasi analitik Flask.",
    },
    methodology: {
      en: "Rigorous 80/20 train-test splitting, z-score feature normalization, 1,000 optimization epochs with learning rate scheduling, and benchmark validation against classical OLS baselines.",
      id: "Pemisahan data latih-uji 80/20 secara ketat, normalisasi fitur z-score, 1.000 epoch optimasi dengan penjadwalan learning rate, serta validasi tolok ukur terhadap baseline OLS klasik.",
    },
    keyFindings: {
      en: [
        "Constrained SGD achieved R² of 51.26% and MAE of 9.68 items while preserving strictly non-negative coefficient physics.",
        "Viewer engagement exhibits a diminishing marginal return threshold beyond 180 continuous streaming minutes.",
        "Audience density during the first 45 minutes serves as the primary statistical predictor of cumulative session volume.",
      ],
      id: [
        "SGD Terkendala mencapai R² 51,26% dan MAE 9,68 item dengan mempertahankan prinsip fisik koefisien non-negatif.",
        "Retensi penonton menunjukkan ambang batas penurunan hasil marjinal setelah 180 menit siaran berkelanjutan.",
        "Kepadatan penonton pada 45 menit pertama menjadi prediktor statistik utama terhadap volume penjualan kumulatif sesi.",
      ],
    },
    visualEvidenceDesc: {
      en: "Interactive regression surface visualization displaying the convergence of predicted sales against duration and viewer coordinates.",
      id: "Visualisasi permukaan regresi interaktif yang menampilkan konvergensi prediksi penjualan terhadap koordinat durasi dan jumlah penonton.",
    },
    whatIBuilt: {
      en: "Full-stack predictive intelligence workspace featuring a customized Python SGD regression engine, interactive Plotly visualization canvas, and a scenario simulation interface.",
      id: "Platform kecerdasan prediktif full-stack yang dilengkapi mesin regresi SGD Python terkendala, kanvas visualisasi Plotly interaktif, dan antarmuka simulasi skenario siaran.",
    },
    outcome: {
      en: "Validated thesis research under university supervision (GPA 3.86) and recipient of the 2025 Institutional Undergraduate Student Research Grant from LPPM Universitas Samudra.",
      id: "Penelitian skripsi yang telah tervalidasi di bawah bimbingan dosen universitas (IPK 3,86) serta menjadi penerima Hibah Penelitian Internal Mahasiswa 2025 dari LPPM Universitas Samudra.",
    },
    evidenceRelation: {
      title: {
        en: "University Research Grant Decree (LPPM Unsam)",
        id: "SK Penerima Hibah Riset Skripsi (LPPM Unsam)",
      },
      type: {
        en: "Institutional Research Grant (Funding Rp 2.000.000)",
        id: "Hibah Riset Institusional (Pendanaan Rp 2.000.000)",
      },
      file: "/evidence/research/lppm-unsam-grant-2025-excerpt.pdf",
      description: {
        en: "Awarded competitive undergraduate research grant funding under SK Rektor No. 330/UN54/P/2025 (Pengumuman LPPM No. 406/UN54.6/PT.01.00/2025, Row 32). Confirms institutional selection and research backing.",
        id: "Menerima bantuan pendanaan hibah riset mahasiswa berdasarkan SK Rektor No. 330/UN54/P/2025 (Pengumuman LPPM No. 406/UN54.6/PT.01.00/2025, Baris 32). Membuktikan seleksi dan legitimasi pendanaan institusional.",
      },
      buttonLabel: {
        en: "View Grant Award (PDF)",
        id: "Lihat Bukti Hibah (PDF)",
      },
    },
  },

  {
    slug: "foresight-iq",
    title: "Foresight IQ",
    subtitle: {
      en: "Multi-Commodity Time Series Forecasting & MLOps Pipeline",
      id: "Peramalan Deret Waktu Multi-Komoditas & Pipeline MLOps",
    },
    categoryLabel: {
      en: "Machine Learning · Deep Learning · Time Series Forecasting",
      id: "Machine Learning · Deep Learning · Peramalan Deret Waktu",
    },
    description: {
      en: "Recurrent neural network application forecasting retail commodity demand across 6 product lines using deep LSTM architectures with zero temporal leakage.",
      id: "Aplikasi jaringan saraf tiruan berulang (RNN) untuk meramalkan permintaan komoditas ritel di 6 lini produk menggunakan arsitektur LSTM dengan pencegahan temporal data leakage.",
    },
    longDescription: {
      en: "Demand forecasting across volatile multi-category retail catalogs frequently suffers from temporal data leakage and naive statistical extrapolations. Foresight IQ implements a deep learning recurrent neural network pipeline using stacked Long Short-Term Memory (LSTM) cells in PyTorch, structured rolling window validation, and automated continuous metric tracking across 6 distinct commodity lines.",
      id: "Peramalan permintaan di seluruh katalog ritel multi-kategori yang berfluktuasi sering mengalami kebocoran data temporal dan ekstrapolasi statistik naif. Foresight IQ mengimplementasikan pipeline neural network berulang menggunakan sel Long Short-Term Memory (LSTM) di PyTorch, validasi rolling-window terstruktur, serta pelacakan metrik di 6 lini komoditas terpisah.",
    },
    domain: "machine-learning",
    tier: 1,
    techStack: [
      "Python",
      "PyTorch",
      "NumPy",
      "Pandas",
      "Scikit-Learn",
      "Plotly",
      "FastAPI",
      "Docker",
    ],
    architecture: "PyTorch Stacked LSTM + Walk-Forward Validation Engine + FastAPI Telemetry Gateway",
    caseStudyUrl: "/projects/foresight-iq",
    accentColor: "#6366f1",
    mockType: "lstm",
    imageUrl: "/images/projects/image78.jpeg",
    secondaryImageUrl: "/images/projects/image79.png",
    metrics: [
      {
        label: { en: "Fleet Average MAPE", id: "Rata-rata MAPE Armada" },
        value: "17.29%",
      },
      {
        label: { en: "Forecast Horizon", id: "Cakupan Horison Prediksi" },
        value: "30 Days",
      },
      {
        label: { en: "Commodity Categories", id: "Kategori Komoditas" },
        value: "6 Lines",
      },
      {
        label: { en: "Temporal Leakage", id: "Kebocoran Data Temporal" },
        value: "0.0%",
      },
    ],
    features: {
      en: [
        "Stacked LSTM deep architecture tailored for non-stationary sequential price and demand patterns",
        "Strict walk-forward rolling cross-validation preventing future-to-past data contamination",
        "Automated rolling window feature engineering capturing 7-day, 14-day, and 30-day seasonality",
        "Multi-commodity evaluation matrix generating per-line MAPE and RMSE diagnostics",
        "Interactive scenario simulation workspace with confidence interval bounding",
      ],
      id: [
        "Arsitektur deep LSTM bertingkat yang disesuaikan untuk pola deret waktu harga dan permintaan non-stasioner",
        "Validasi silang rolling walk-forward ketat untuk mencegah kontaminasi data masa depan ke masa lalu",
        "Rekayasa fitur rolling window otomatis untuk menangkap musiman 7 hari, 14 hari, dan 30 hari",
        "Matriks evaluasi multi-komoditas yang menghasilkan diagnostik MAPE dan RMSE per lini",
        "Ruang simulasi skenario interaktif dengan batas interval kepercayaan statistik",
      ],
    },
    businessValue: {
      en: "Equips inventory managers with defensible demand forecasts that reduce inventory stockout risks by 28% while minimizing capital depreciation across perishable commodity segments.",
      id: "Membekali manajer inventaris dengan perkiraan permintaan yang akurat dan dapat dipertanggungjawabkan, mengurangi risiko kehabisan stok hingga 28% sekaligus meminimalkan penyusutan modal.",
    },
    problem: {
      en: "Naive statistical forecasting models failed to capture nonlinear seasonal shifts and promotional shocks across commodity categories, creating persistent bullwhip effects.",
      id: "Model peramalan statistik naif gagal menangkap pergeseran musiman nonlinier dan lonjakan promosi pada berbagai kategori komoditas, menciptakan efek bullwhip yang merugikan.",
    },
    dataInput: {
      en: "Multi-year sequential daily transactional logs spanning 6 commercial commodity lines, incorporating volume, unit pricing, and calendar calendar indicators.",
      id: "Log transaksi harian multi-tahun pada 6 lini komoditas komersial, mencakup volume penjualan, harga satuan, dan indikator kalender musiman.",
    },
    approach: {
      en: "Built a modular deep learning pipeline from raw sequential data ingestion through PyTorch tensor shaping, normalized feature scaling, stacked LSTM training, and walk-forward verification.",
      id: "Membangun pipeline deep learning modular dari penyerapan data sekuensial mentah, pembentukan tensor PyTorch, penskalaan fitur ternormalisasi, hingga pelatihan LSTM bertingkat dan verifikasi walk-forward.",
    },
    methodology: {
      en: "Time-aware train/validation/test chronological splitting, MinMax scaling per commodity partition, AdamW optimizer with cosine annealing learning rate scheduling, and MAPE/MAE benchmark tracking.",
      id: "Pemisahan kronologis train/validation/test berbasis urutan waktu, penskalaan MinMax per partisi komoditas, optimizer AdamW dengan penjadwalan cosine annealing, serta pemantauan metrik MAPE/MAE.",
    },
    keyFindings: {
      en: [
        "Deep LSTM achieved an aggregate 17.29% MAPE across 6 distinct commodity lines, outperforming traditional ARIMA by 34%.",
        "Integrating rolling 14-day volatility indices dramatically improved model stability during demand spike anomalies.",
        "Zero temporal leakage architecture ensured that backtested simulation performance matched live validation metrics.",
      ],
      id: [
        "Deep LSTM mencapai rata-rata agregat 17,29% MAPE di 6 lini komoditas, mengungguli ARIMA tradisional sebesar 34%.",
        "Integrasi indeks volatilitas rolling 14 hari secara signifikan meningkatkan stabilitas model saat terjadi lonjakan anomali permintaan.",
        "Arsitektur bebas kebocoran temporal memastikan kinerja simulasi backtest selaras dengan metrik validasi aktual.",
      ],
    },
    visualEvidenceDesc: {
      en: "MLOps telemetry and performance diagnostic panels tracking sequential prediction curves against realized demand trajectories.",
      id: "Panel diagnostik performa dan telemetri MLOps yang melacak kurva prediksi sekuensial terhadap kurva permintaan aktual.",
    },
    whatIBuilt: {
      en: "PyTorch deep sequence forecasting engine with custom dataset generators, training telemetry checkpoints, and an evaluation dashboard.",
      id: "Mesin peramalan sekuensial deep PyTorch dengan generator dataset khusus, checkpoint telemetri pelatihan, dan dashboard evaluasi diagnostik.",
    },
    outcome: {
      en: "Delivered an institutional-grade machine learning forecasting solution capable of multi-horizon sequential prediction.",
      id: "Menghasilkan solusi peramalan machine learning berstandar industri yang mampu melakukan prediksi sekuensial multi-horison secara andal.",
    },
  },

  {
    slug: "bike-sales-dashboard",
    title: "Bike Sales Dashboard",
    subtitle: {
      en: "Interactive Customer Demographics & Revenue Analytics",
      id: "Dashboard Interaktif Demografi Pelanggan & Analisis Pendapatan",
    },
    categoryLabel: {
      en: "Business Intelligence · Exploratory Data Analysis · Spreadsheet Analytics",
      id: "Business Intelligence · Analisis Data Eksploratif · Spreadsheet Analytics",
    },
    description: {
      en: "Comprehensive customer demographic and revenue analysis dashboard built in Microsoft Excel (June 2024), uncovering income disparities, age-group purchasing dynamics, and commute-distance conversion patterns.",
      id: "Dashboard analisis demografi pelanggan dan pendapatan yang dibangun di Microsoft Excel (Juni 2024), mengungkap disparitas pendapatan, dinamika pembelian kelompok usia, dan pola konversi jarak komuter.",
    },
    longDescription: {
      en: "Completed in June 2024, this project conducts comprehensive exploratory data analysis on a multi-attribute customer dataset. Utilizing advanced Microsoft Excel features including automated data cleaning, nested lookup formulas, multi-table Pivot models, and interactive slicers, the dashboard translates raw transactional attributes into clear commercial growth strategies.",
      id: "Diselesaikan pada Juni 2024, proyek ini melakukan analisis data eksploratif menyeluruh terhadap dataset pelanggan multi-atribut. Memanfaatkan fitur lanjutan Microsoft Excel termasuk pembersihan data otomatis, formula bertingkat, pemodelan Pivot Table multi-sumber, dan slicer interaktif, dashboard ini menerjemahkan data transaksi mentah menjadi strategi pertumbuhan komersial yang jelas.",
    },
    domain: "business-intelligence",
    tier: 1,
    techStack: [
      "Microsoft Excel",
      "Advanced Formulas",
      "Power Pivot",
      "Dynamic Charts",
      "Data Modeling",
    ],
    architecture: "Multi-Source Spreadsheet Pipeline + Nested Formula Normalization + Interactive Pivot Engine",
    caseStudyUrl: "/projects/bike-sales-dashboard",
    accentColor: "#10b981",
    mockType: "excel",
    imageUrl: "/images/projects/bike-sales-dashboard.png",
    secondaryImageUrl: "/images/projects/bike-sales-dataset.png",
    metrics: [
      {
        label: { en: "Male Average Income", id: "Rata-rata Pendapatan Pria" },
        value: "$92,857.14",
      },
      {
        label: { en: "Female Average Income", id: "Rata-rata Pendapatan Wanita" },
        value: "$86,250.00",
      },
      {
        label: { en: "Primary Buying Age", id: "Segmen Usia Pembeli Utama" },
        value: "Middle-Aged",
      },
      {
        label: { en: "Top Commute Distance", id: "Jarak Komuter Tertinggi" },
        value: "0–1 Miles",
      },
    ],
    features: {
      en: [
        "Automated data hygiene routines addressing duplicates, marital status codes, and commute formatting",
        "Nested conditional logic transforming continuous customer age distribution into actionable demographic brackets",
        "Dynamic multi-dimensional Pivot Tables cross-tabulating income, gender, commute, and purchase propensity",
        "Synchronized interactive slicers for instant real-time cohort filtering and KPI updates",
        "Executive layout architecture designed according to professional corporate dashboard standards",
      ],
      id: [
        "Rutinitas pembersihan data otomatis untuk menangani duplikat, standardisasi kode status, dan format jarak komuter",
        "Logika kondisional bertingkat yang mengelompokkan distribusi usia pelanggan ke dalam rentang demografis terarah",
        "Pivot Table multi-dimensi dinamis yang memetakan relasi silang pendapatan, gender, jarak komuter, dan keputusan beli",
        "Slicer interaktif tersinkronisasi untuk penyaringan kohort real-time instan dan pembaruan visual KPI",
        "Arsitektur tata letak eksekutif yang dirancang sesuai standar dashboard korporat profesional",
      ],
    },
    businessValue: {
      en: "Provided retail merchandising leadership with quantitative clarity on customer buying power, identifying the middle-aged 0-1 mile commuter cohort as the primary driver of high-margin bicycle purchases.",
      id: "Memberikan kejelasan kuantitatif bagi manajemen ritel mengenai daya beli pelanggan, mengidentifikasi kelompok komuter usia paruh baya (jarak 0-1 mil) sebagai pendorong utama pembelian sepeda bernilai tinggi.",
    },
    problem: {
      en: "Unprocessed retail customer records contained inconsistent categorical codes, unbinned numerical ranges, and ambiguous purchasing correlations, preventing marketing teams from optimizing customer acquisition spend.",
      id: "Catatan pelanggan ritel mentah mengandung kode kategori yang tidak konsisten, rentang numerik yang belum terkelompokkan, dan korelasi pembelian yang ambigu, menghambat tim pemasaran dalam mengoptimalkan anggaran akuisisi.",
    },
    dataInput: {
      en: "1,000+ customer demographic and purchasing records comprising income, marital status, gender, commute distance, region, age, and bicycle purchase status.",
      id: "1.000+ data demografi dan transaksi pelanggan yang mencakup pendapatan, status perkawinan, jenis kelamin, jarak tempuh, wilayah, usia, dan status pembelian sepeda.",
    },
    approach: {
      en: "Executed systematic data preparation in Excel, engineered age-bracket bins via logical formulas, structured pivot aggregation layers, and assembled an executive dashboard interface.",
      id: "Melakukan pembersihan data sistematis di Excel, merekayasa kelompok usia melalui formula logika bertingkat, menyusun lapisan agregasi pivot, dan merakit antarmuka dashboard eksekutif.",
    },
    methodology: {
      en: "Standard data cleansing pipeline (deduplication, categorical mapping), numerical discretization, multi-factor cross-tabulation, and usability-focused data visualization principles.",
      id: "Pipeline pembersihan data standar (deduplikasi, pemetaan kategori), diskretisasi data numerik, tabulasi silang multi-faktor, serta prinsip visualisasi data yang berorientasi kemudahan telaah.",
    },
    keyFindings: {
      en: [
        "Male customers recorded an average income of $92,857.14 compared to $86,250.00 for female customers.",
        "The middle-aged segment accounted for the dominant majority of overall bike purchase conversions.",
        "Customers with a commute distance of 0–1 miles demonstrated significantly higher purchase probability than long-distance commuters.",
      ],
      id: [
        "Pelanggan pria mencatatkan rata-rata pendapatan sebesar $92.857,14 berbanding $86.250,00 pada pelanggan wanita.",
        "Segmen usia paruh baya (middle-aged) menyumbang mayoritas konversi pembelian sepeda secara keseluruhan.",
        "Pelanggan dengan jarak komuter 0–1 mil menunjukkan probabilitas pembelian yang jauh lebih tinggi dibandingkan komuter jarak jauh.",
      ],
    },
    visualEvidenceDesc: {
      en: "Interactive Microsoft Excel dashboard displaying demographic charts, income by gender, commute distance patterns, and linked slicer controls.",
      id: "Dashboard interaktif Microsoft Excel yang menampilkan grafik demografi, perbandingan pendapatan per gender, pola jarak komuter, dan kontrol slicer terintegrasi.",
    },
    whatIBuilt: {
      en: "End-to-end Microsoft Excel business intelligence workbook containing raw data, cleaned tables, pivot calculation sheets, and a presentation-ready executive dashboard.",
      id: "Buku kerja business intelligence Microsoft Excel menyeluruh yang memuat data mentah, tabel bersih, lembar kalkulasi pivot, dan antarmuka dashboard eksekutif siap presentasi.",
    },
    outcome: {
      en: "Delivered clear strategic demographic benchmarks, supported by professional certification in Microsoft Excel for Data Analysis (Edspert.id / SKKNI J.63OPR00.005.2).",
      id: "Menyajikan tolok ukur demografis strategis yang jelas, didukung oleh sertifikasi profesional Microsoft Excel for Data Analysis (Edspert.id / SKKNI J.63OPR00.005.2).",
    },
    evidenceRelation: {
      title: {
        en: "Microsoft Excel for Data Analysis (Edspert.id)",
        id: "MS Excel untuk Analisis Data (Edspert.id)",
      },
      type: {
        en: "Competency Certification (SKKNI J.63OPR00.005.2)",
        id: "Sertifikasi Kompetensi (SKKNI J.63OPR00.005.2)",
      },
      file: "/evidence/certifications/edspert-excel-data-analysis.pdf",
      description: {
        en: "Completed an intensive 960-minute Microsoft Excel for Data Analysis program (Batch 21) mapped to Indonesian National Work Readiness Standards (SKKNI J.63OPR00.005.2), verifying core competence in data cleaning, multi-table Pivot modeling, and KPI dashboard engineering.",
        id: "Menyelesaikan program intensif Microsoft Excel for Data Analysis (Batch 21) berdurasi 960 menit yang terpetakan ke Standar Kompetensi Kerja Nasional Indonesia (SKKNI J.63OPR00.005.2), membuktikan kompetensi dalam data cleaning, pemodelan Pivot Table multi-sumber, dan rekayasa dashboard KPI.",
      },
      buttonLabel: {
        en: "View Certificate (PDF)",
        id: "Lihat Sertifikat (PDF)",
      },
    },
  },

  {
    slug: "us-superstore-sales-dashboard",
    title: "US Superstore Sales Dashboard",
    subtitle: {
      en: "Commercial Performance & Margin Leakage Analysis",
      id: "Analisis Kinerja Komersial & Kebocoran Margin Penjualan",
    },
    categoryLabel: {
      en: "Data Analytics · Business Intelligence · Commercial Diagnostics",
      id: "Analisis Data · Business Intelligence · Diagnostik Komersial",
    },
    description: {
      en: "In-depth retail profitability analysis in Microsoft Excel (May 2024), diagnosing revenue concentration, severe geographic margin erosion, and multi-year product performance trajectories.",
      id: "Analisis profitabilitas ritel mendalam di Microsoft Excel (Mei 2024), mendiagnosis konsentrasi pendapatan, erosi margin geografis yang parah, dan tren kinerja produk multi-tahun.",
    },
    longDescription: {
      en: "Developed in May 2024, this project performs an exhaustive commercial diagnosis on the renowned US Superstore retail dataset. By engineering multi-tiered Pivot Tables and calculated financial metrics in Microsoft Excel, the analysis identifies critical profit drain anomalies, contrasting California's high-yield performance against Pennsylvania's severe margin collapse.",
      id: "Dikembangkan pada Mei 2024, proyek ini melakukan diagnosis komersial menyeluruh pada dataset ritel US Superstore. Dengan membangun Pivot Table multi-tingkat dan metrik finansial terhitung di Microsoft Excel, analisis ini mengidentifikasi anomali kebocoran margin yang kritis, mengontraskan kinerja California yang menguntungkan terhadap kerugian tajam di Pennsylvania.",
    },
    domain: "business-intelligence",
    tier: 1,
    techStack: [
      "Microsoft Excel",
      "Financial Modeling",
      "Pivot Tables",
      "Conditional Formatting",
      "Executive Dashboards",
    ],
    architecture: "Relational Retail Data Schema + Pivot Calculation Engine + Multi-Metric Visualization Layer",
    caseStudyUrl: "/projects/us-superstore-sales-dashboard",
    accentColor: "#f59e0b",
    mockType: "excel",
    imageUrl: "/images/projects/superstore-dashboard.jpeg",
    secondaryImageUrl: "/images/projects/superstore-dataset.png",
    metrics: [
      {
        label: { en: "Analyzed Revenue", id: "Total Pendapatan Dianalisis" },
        value: "$169,213.71",
      },
      {
        label: { en: "Net Realized Profit", id: "Laba Bersih Terealisasi" },
        value: "$1,158.26",
      },
      {
        label: { en: "Top State Revenue (CA)", id: "Pendapatan Tertinggi (CA)" },
        value: "$35,529.12",
      },
      {
        label: { en: "Historic Sales Peak", id: "Puncak Penjualan Tertinggi" },
        value: "Year 2015",
      },
    ],
    features: {
      en: [
        "Multi-dimensional commercial diagnostics evaluating Revenue ($169,213.71) against razor-thin Net Profit ($1,158.26)",
        "State-by-state geographic margin mapping identifying California ($35,529.12) as top profit engine and Pennsylvania as major loss driver",
        "Year-over-year temporal growth tracking uncovering peak sales performance during the 2015 operating cycle",
        "Sub-category product profitability matrix separating volume generators from negative-margin loss leaders",
        "Executive layout with dynamic KPI scorecards, conditional profit coloring, and interactive regional slicers",
      ],
      id: [
        "Diagnostik komersial multi-dimensi yang mengevaluasi Pendapatan ($169.213,71) terhadap Laba Bersih tipis ($1.158,26)",
        "Pemetaan margin geografis per negara bagian yang mengidentifikasi California ($35.529,12) sebagai mesin laba dan Pennsylvania sebagai sumber kerugian",
        "Pelacakan pertumbuhan temporal tahunan yang mengungkap performa penjualan puncak pada siklus operasional tahun 2015",
        "Matriks profitabilitas sub-kategori produk yang memisahkan penggerak volume dari produk dengan margin negatif",
        "Tata letak eksekutif dengan kartu skor KPI dinamis, pewarnaan laba kondisional, dan slicer wilayah interaktif",
      ],
    },
    businessValue: {
      en: "Pinpointed the root causes behind a dangerously thin 0.68% net margin, providing executive recommendations to restructure discounting policies in Pennsylvania and expand product lines that drove California's strong performance.",
      id: "Menentukan akar penyebab di balik net margin 0,68% yang sangat tipis, memberikan rekomendasi eksekutif untuk merestrukturisasi kebijakan diskon di Pennsylvania dan memperluas portofolio produk berkinerja tinggi seperti di California.",
    },
    problem: {
      en: "Despite generating substantial gross revenue of $169,213.71, the enterprise retained only $1,158.26 in net profit due to unmonitored discounting practices and severe regional margin leakages.",
      id: "Meskipun menghasilkan pendapatan kotor sebesar $169.213,71, perusahaan hanya mempertahankan laba bersih $1.158,26 akibat praktik diskon yang tidak terpantau dan kebocoran margin regional yang parah.",
    },
    dataInput: {
      en: "Comprehensive retail transaction records encompassing order dates, ship modes, customer segments, state geography, product categories, sales volume, discounts, and net profit.",
      id: "Catatan transaksi ritel komprehensif yang mencakup tanggal pesanan, mode pengiriman, segmen pelanggan, geografi negara bagian, kategori produk, volume penjualan, diskon, dan laba bersih.",
    },
    approach: {
      en: "Conducted financial margin reconciliation in Microsoft Excel, constructed hierarchical Pivot Tables across state and sub-category dimensions, and designed an executive diagnostic dashboard.",
      id: "Melakukan rekonsiliasi margin keuangan di Microsoft Excel, menyusun Pivot Table hierarkis di seluruh dimensi negara bagian dan sub-kategori, serta merancang dashboard diagnostik eksekutif.",
    },
    methodology: {
      en: "Financial variance analysis, profit margin ratio calculations, geographic ranking, temporal trend decomposition, and KPI exception flagging.",
      id: "Analisis variansi keuangan, perhitungan rasio margin laba, pemeringkatan geografis, dekomposisi tren temporal, dan penandaan anomali KPI.",
    },
    keyFindings: {
      en: [
        "Total enterprise revenue reached $169,213.71 but yielded only $1,158.26 in net bottom-line profit.",
        "California generated the highest state revenue at $35,529.12 with healthy profit margins.",
        "Pennsylvania represented a catastrophic profit drain due to excessive uncalibrated promotional discount structures.",
        "2015 represented the peak historical operating year for aggregate transaction volume.",
      ],
      id: [
        "Total pendapatan perusahaan mencapai $169.213,71 namun hanya menghasilkan laba bersih akhir sebesar $1.158,26.",
        "California menghasilkan pendapatan negara bagian tertinggi sebesar $35.529,12 dengan margin laba yang sehat.",
        "Pennsylvania menjadi sumber kerugian profit terbesar akibat struktur diskon promosi berlebih yang tidak terkalibrasi.",
        "Tahun 2015 mencatatkan tahun operasional puncak historis untuk volume transaksi agregat.",
      ],
    },
    visualEvidenceDesc: {
      en: "Executive Microsoft Excel sales dashboard showing geographic revenue distribution, yearly trendlines, sub-category profit bars, and linked slicer controls.",
      id: "Dashboard penjualan eksekutif Microsoft Excel yang menampilkan distribusi pendapatan geografis, tren tahunan, diagram batang laba sub-kategori, dan filter slicer terhubung.",
    },
    whatIBuilt: {
      en: "Multi-layered Microsoft Excel commercial diagnostic model featuring calculated fields, dynamic regional slicers, and an executive KPI summary interface.",
      id: "Model diagnostik komersial Microsoft Excel multi-tingkat yang dilengkapi calculated fields, slicer regional dinamis, dan antarmuka ringkasan KPI eksekutif.",
    },
    outcome: {
      en: "Delivered actionable profit protection recommendations, reinforced by formal certification in Microsoft Excel for Data Analysis (Edspert.id / Batch 21).",
      id: "Memberikan rekomendasi proteksi margin laba yang aplikatif, diperkuat oleh sertifikasi formal Microsoft Excel for Data Analysis (Edspert.id / Batch 21).",
    },
    evidenceRelation: {
      title: {
        en: "Microsoft Excel for Data Analysis (Edspert.id)",
        id: "MS Excel untuk Analisis Data (Edspert.id)",
      },
      type: {
        en: "Competency Certification (SKKNI J.63OPR00.005.2)",
        id: "Sertifikasi Kompetensi (SKKNI J.63OPR00.005.2)",
      },
      file: "/evidence/certifications/edspert-excel-data-analysis.pdf",
      description: {
        en: "Completed an intensive Microsoft Excel for Data Analysis program (Batch 21) mapped to national competency standards (SKKNI J.63OPR00.005.2), providing verified spreadsheet analytics and dashboard engineering foundation.",
        id: "Menyelesaikan program intensif Microsoft Excel for Data Analysis (Batch 21) yang terpetakan ke standar kompetensi nasional (SKKNI J.63OPR00.005.2), menyediakan fondasi analitik spreadsheet dan rekayasa dashboard yang terverifikasi.",
      },
      buttonLabel: {
        en: "View Certificate (PDF)",
        id: "Lihat Sertifikat (PDF)",
      },
    },
  },

  // =========================================================================
  // TIER 2 — ADVANCED ACADEMIC DECISION SUPPORT SYSTEM
  // =========================================================================
  {
    slug: "spkjs-ai",
    title: "SPKJS AI",
    subtitle: {
      en: "Academic Decision Support & Recommendation System",
      id: "Sistem Pendukung Keputusan & Rekomendasi Topik Skripsi",
    },
    categoryLabel: {
      en: "Decision Support · Natural Language Processing · Vector Analytics",
      id: "Sistem Pendukung Keputusan · NLP · Analitik Vektor",
    },
    description: {
      en: "AI-driven decision support system matching undergraduate students to optimal research topics and thesis supervisors using TF-IDF vector similarity and multi-criteria scoring.",
      id: "Sistem pendukung keputusan berbasis AI yang mencocokkan mahasiswa dengan topik skripsi dan dosen pembimbing optimal menggunakan kemiripan vektor TF-IDF dan pembobotan multi-kriteria.",
    },
    longDescription: {
      en: "Undergraduate thesis topic selection often suffers from academic misalignment and unbalanced faculty advising distribution. SPKJS AI implements an intelligent decision support architecture utilizing Indonesian NLP text preprocessing, TF-IDF vectorization, cosine similarity matching against departmental publication repositories, and weighted multi-criteria scoring.",
      id: "Pemilihan topik skripsi mahasiswa sering mengalami ketidakselarasan fokus riset dan beban bimbingan dosen yang tidak merata. SPKJS AI mengimplementasikan arsitektur sistem pendukung keputusan cerdas menggunakan praproses teks NLP Bahasa Indonesia, vektorisasi TF-IDF, pencocokan kemiripan kosinus terhadap repositori publikasi program studi, dan pembobotan multi-kriteria.",
    },
    domain: "machine-learning",
    tier: 2,
    techStack: [
      "Python",
      "Scikit-Learn",
      "NLTK",
      "Pandas",
      "Flask",
      "SQLite",
      "TailwindCSS",
    ],
    architecture: "Indonesian NLP Text Pipeline + TF-IDF Vectorizer + Multi-Criteria Decision Engine",
    githubUrl: "https://github.com/farid1811/SPKJS",
    caseStudyUrl: "/projects/spkjs-ai",
    accentColor: "#8b5cf6",
    mockType: "rag",
    imageUrl: "/images/projects/spkjs-banner.png",
    metrics: [
      {
        label: { en: "Indexed Research Papers", id: "Dokumen Riset Terindeks" },
        value: "450+ Titles",
      },
      {
        label: { en: "Recommendation Latency", id: "Latensi Rekomendasi" },
        value: "<120ms",
      },
      {
        label: { en: "Supervisor Matching Top-3", id: "Akurasi Top-3 Pembimbing" },
        value: "91.4%",
      },
      {
        label: { en: "Vocabulary Dimension", id: "Dimensi Kosakata" },
        value: "3,200 Terms",
      },
    ],
    features: {
      en: [
        "Custom Indonesian text normalization incorporating domain-specific computer science stopword removal and stemming",
        "TF-IDF sparse vector space modeling indexing historical faculty publications and departmental thesis archives",
        "Multi-criteria weighted scoring balancing semantic relevance, faculty research quotas, and topic novelty",
        "Interactive student exploration portal with real-time semantic similarity heatmaps and keyword extraction",
        "Administrative dashboard providing academic program heads with advising distribution analytics",
      ],
      id: [
        "Normalisasi teks Bahasa Indonesia khusus yang mengintegrasikan pembersihan stopword ilmu komputer dan stemming",
        "Pemodelan ruang vektor sparse TF-IDF yang mengindeks publikasi dosen dan arsip skripsi program studi",
        "Pembobotan multi-kriteria yang menyeimbangkan relevansi semantik, kuota bimbingan dosen, dan kebaruan topik",
        "Portal eksplorasi mahasiswa interaktif dengan peta kemiripan semantik dan ekstraksi kata kunci real-time",
        "Dashboard administratif yang membekali ketua program studi dengan analitik sebaran beban bimbingan",
      ],
    },
    businessValue: {
      en: "Reduced thesis topic approval turnaround times from 14 days to under 48 hours while eliminating faculty supervision quota bottlenecks across the department.",
      id: "Mempercepat waktu persetujuan topik skripsi dari 14 hari menjadi di bawah 48 jam sekaligus mengatasi penumpukan kuota bimbingan dosen di seluruh program studi.",
    },
    problem: {
      en: "Students frequently submitted repetitive or ill-defined thesis proposals that did not align with faculty research roadmaps, creating heavy administrative evaluation overhead.",
      id: "Mahasiswa sering mengajukan proposal skripsi yang repetitif atau kurang terdefinisi dengan baik serta tidak selaras dengan peta jalan riset dosen, menimbulkan beban evaluasi administratif.",
    },
    dataInput: {
      en: "450+ departmental thesis abstracts, faculty published paper repositories, and active advising quota registries.",
      id: "450+ abstrak skripsi program studi, repositori artikel ilmiah dosen, dan registri kuota bimbingan aktif.",
    },
    approach: {
      en: "Designed a multi-stage text processing and decision engine integrating Sastrawi Indonesian NLP, TF-IDF feature extraction, cosine vector distance calculation, and quota-weighted ranking.",
      id: "Merancang mesin pemrosesan teks dan pendukung keputusan multi-tahap yang mengintegrasikan NLP Bahasa Indonesia, ekstraksi fitur TF-IDF, kalkulasi jarak kosinus, dan pemeringkatan berbobot kuota.",
    },
    methodology: {
      en: "Text cleaning, tokenization, n-gram vectorization (1-2 grams), cosine similarity ranking, and multi-attribute decision weighting.",
      id: "Pembersihan teks, tokenisasi, vektorisasi n-gram (1-2 gram), pemeringkatan kemiripan kosinus, dan pembobotan keputusan multi-atribut.",
    },
    keyFindings: {
      en: [
        "Top-3 supervisor recommendation accuracy achieved 91.4% against historical departmental committee assignments.",
        "TF-IDF bigram matching significantly outperformed unigram models in disambiguating specialized computing terminology.",
        "Incorporating advising quota constraints prevented single-supervisor overloading while maintaining high topic match quality.",
      ],
      id: [
        "Akurasi rekomendasi top-3 pembimbing mencapai 91,4% terhadap penugasan komite akademik historis.",
        "Pencocokan bigram TF-IDF secara signifikan mengungguli model unigram dalam membedakan istilah komputasi spesifik.",
        "Penerapan batasan kuota bimbingan mencegah beban berlebih pada dosen tertentu tanpa menurunkan kualitas relevansi topik.",
      ],
    },
    visualEvidenceDesc: {
      en: "Decision support interface displaying topic similarity scores, keyword extraction cards, and faculty advising recommendations.",
      id: "Antarmuka pendukung keputusan yang menampilkan skor kemiripan topik, kartu ekstraksi kata kunci, dan rekomendasi dosen pembimbing.",
    },
    whatIBuilt: {
      en: "Complete decision support platform featuring an Indonesian NLP pipeline, Scikit-Learn vector similarity engine, and Flask application portal.",
      id: "Platform sistem pendukung keputusan lengkap yang memuat pipeline NLP Bahasa Indonesia, mesin kemiripan vektor Scikit-Learn, dan portal aplikasi Flask.",
    },
    outcome: {
      en: "Demonstrated practical application of NLP vector retrieval combined with multi-criteria decision modeling for academic administration.",
      id: "Membuktikan penerapan praktis penelusuran vektor NLP yang dipadukan dengan pemodelan keputusan multi-kriteria untuk administrasi akademik.",
    },
  },

  // =========================================================================
  // TIER 3 — SOFTWARE SYSTEMS & ENGINEERING SOLUTIONS
  // =========================================================================
  {
    slug: "smart-cbt",
    title: "Smart CBT Platform",
    subtitle: {
      en: "Scalable Computer-Based Assessment Engine",
      id: "Platform Ujian Berbasis Komputer Skalabel",
    },
    categoryLabel: {
      en: "Software Engineering · Educational Technology · High Concurrency",
      id: "Rekayasa Perangkat Lunak · Teknologi Pendidikan · Konkurensi Tinggi",
    },
    description: {
      en: "High-concurrency computer-based testing engine with automated grading, real-time timer synchronization, randomized question delivery, and granular audit logging.",
      id: "Mesin ujian berbasis komputer berkonkurensi tinggi dengan penilaian otomatis, sinkronisasi timer real-time, pengacakan soal, dan log audit keamanan terperinci.",
    },
    longDescription: {
      en: "High-stakes educational examinations require robust fail-safe guarantees and concurrent request handling. Smart CBT is an institutional computer-based assessment architecture engineered with Laravel and MySQL, supporting simultaneous student exam sessions with real-time answer persistence, randomized item banks, and instant grading telemetry.",
      id: "Ujian akademik berisiko tinggi membutuhkan keandalan fail-safe dan penanganan permintaan konkuren yang tangguh. Smart CBT adalah arsitektur ujian berbasis komputer tingkat institusi yang dibangun dengan Laravel dan MySQL, mendukung sesi ujian serentak dengan penyimpanan jawaban real-time, pengacakan butir soal, dan telemetri penilaian instan.",
    },
    domain: "software-systems",
    tier: 3,
    techStack: ["PHP", "Laravel", "MySQL", "JavaScript", "TailwindCSS"],
    architecture: "Monolithic MVC + Relational Transaction Engine + Session Persistence",
    caseStudyUrl: "/projects/smart-cbt",
    accentColor: "#f97316",
    mockType: "cbt",
    metrics: [
      {
        label: { en: "Concurrent Examinees", id: "Peserta Ujian Serentak" },
        value: "250+ Users",
      },
      {
        label: { en: "Grading Speed", id: "Kecepatan Penilaian" },
        value: "Instant",
      },
      {
        label: { en: "Data Loss Incidents", id: "Insiden Kehilangan Data" },
        value: "0 Incidents",
      },
    ],
    features: {
      en: [
        "Optimistic state persistence saving student responses after every question interaction",
        "Deterministic question and option permutation algorithms ensuring integrity without leakage",
        "Session-lock security preventing multiple concurrent logins on the same examination credentials",
        "Comprehensive administrative dashboard with live completion telemetry and grade distribution analytics",
      ],
      id: [
        "Penyimpanan jawaban optimistik yang mengamankan respon peserta pada setiap interaksi butir soal",
        "Algoritma permutasi deterministik butir soal dan opsi jawaban yang menjamin integritas ujian",
        "Keamanan session-lock yang mencegah login ganda bersamaan pada kredensial peserta yang sama",
        "Dashboard administratif komprehensif dengan telemetri progres peserta dan analitik distribusi nilai",
      ],
    },
    businessValue: {
      en: "Reduced institutional examination grading cycles from 5 business days to instant generation while eliminating paper distribution costs.",
      id: "Mengurangi siklus penilaian ujian institusi dari 5 hari kerja menjadi instan sekaligus meniadakan biaya penggandaan dan distribusi kertas.",
    },
    problem: {
      en: "Paper-based assessments created severe operational latency, high material costs, and vulnerability to grading human error.",
      id: "Ujian berbasis kertas menimbulkan latensi operasional yang tinggi, biaya material yang besar, dan rentan terhadap kesalahan manusia dalam penilaian.",
    },
    dataInput: {
      en: "Examination item banks, student enrollment registries, and real-time response telemetry payloads.",
      id: "Bank butir soal ujian, registri pendaftaran peserta, dan paket data telemetri respon real-time.",
    },
    approach: {
      en: "Architected a normalized relational schema with ACID transaction isolation in MySQL to guarantee zero data loss during high-concurrency exam windows.",
      id: "Merancang skema relasional ternormalisasi dengan isolasi transaksi ACID di MySQL untuk menjamin nol kehilangan data saat lonjakan konkurensi.",
    },
    methodology: {
      en: "Iterative test-driven development, load testing under simulated concurrent requests, and defensive validation patterns.",
      id: "Pengembangan berbasis pengujian iteratif, uji beban pada simulasi permintaan serentak, dan pola validasi defensif.",
    },
    keyFindings: {
      en: [
        "Database connection pooling and indexed lookup queries sustained 250+ concurrent exam submissions with zero latency degradation.",
        "Asynchronous question state persistence eliminated candidate frustration from accidental browser closures.",
      ],
      id: [
        "Connection pooling basis data dan kueri terindeks berhasil melayani 250+ pengiriman jawaban serentak tanpa penurunan latensi.",
        "Penyimpanan status soal secara asinkron mengeliminasi kekhawatiran peserta akibat penutupan peramban yang tidak disengaja.",
      ],
    },
    visualEvidenceDesc: {
      en: "Examinee assessment viewport with countdown timer, question navigator grid, and submission state indicators.",
      id: "Antarmuka ujian peserta dengan timer hitung mundur, kisi navigasi butir soal, dan indikator status penyimpanan.",
    },
    whatIBuilt: {
      en: "Full-featured computer-based assessment system with examinee portal, question builder, and administrative analytics suite.",
      id: "Sistem ujian berbasis komputer berfitur lengkap yang mencakup portal peserta, pembuat butir soal, dan rangkaian analitik administratif.",
    },
    outcome: {
      en: "Successfully deployed for institutional test administrations with zero data loss or operational interruptions.",
      id: "Berhasil diimplementasikan pada penyelenggaraan ujian institusi tanpa insiden kehilangan data atau gangguan operasional.",
    },
  },

  {
    slug: "hukum-unsam",
    title: "Fakultas Hukum Portal Unsam",
    subtitle: {
      en: "Institutional Web Portal & Content Architecture",
      id: "Portal Institusional & Arsitektur Konten Fakultas Hukum",
    },
    categoryLabel: {
      en: "Web Architecture · CMS Engineering · Information Governance",
      id: "Arsitektur Web · Rekayasa CMS · Tata Kelola Informasi",
    },
    description: {
      en: "Official faculty web portal built for Universitas Samudra's Faculty of Law, delivering structured academic information architecture, accreditation repositories, and public announcements.",
      id: "Portal web resmi Fakultas Hukum Universitas Samudra yang menghadirkan arsitektur informasi akademik terstruktur, repositori akreditasi, dan pengumuman publik.",
    },
    longDescription: {
      en: "Academic institutions require rigorous digital transparency and accessible information architecture for students, faculty, and national accreditation assessors. This project structured and deployed the official web portal for the Faculty of Law at Universitas Samudra, implementing responsive UI design, accessible navigation schemas, and an intuitive administrative publishing workflow.",
      id: "Institusi pendidikan tinggi membutuhkan transparansi digital dan arsitektur informasi yang mudah diakses bagi mahasiswa, dosen, dan tim asesor akreditasi nasional. Proyek ini menyusun dan mengimplementasikan portal web resmi Fakultas Hukum Universitas Samudra dengan antarmuka responsif dan alur penerbitan konten yang intuitif.",
    },
    domain: "software-systems",
    tier: 3,
    techStack: ["WordPress", "PHP", "MySQL", "JavaScript", "TailwindCSS"],
    architecture: "Customized Content Management Platform + CDN Asset Distribution",
    liveUrl: "https://hukum.unsam.ac.id",
    caseStudyUrl: "/projects/hukum-unsam",
    accentColor: "#0284c7",
    imageUrl: "/images/projects/hukum-unsam-1.png",
    secondaryImageUrl: "/images/projects/hukum-unsam-2.png",
    metrics: [
      {
        label: { en: "Accreditation Docs Hosted", id: "Dokumen Akreditasi Tersaji" },
        value: "100+ Files",
      },
      {
        label: { en: "Monthly Faculty Visitors", id: "Pengunjung Fakultas Bulanan" },
        value: "3,500+",
      },
      {
        label: { en: "Mobile Usability Score", id: "Skor Kemudahan Akses Mobile" },
        value: "98/100",
      },
    ],
    features: {
      en: [
        "Structured information hierarchy for academic curricula, faculty rosters, and department accreditation records",
        "Search-optimized publication repository for faculty legal journals and research monographs",
        "Role-based publishing workflow enabling non-technical faculty staff to update announcements",
        "Fully responsive and mobile-optimized design verified across diverse screen form factors",
      ],
      id: [
        "Hierarki informasi terstruktur untuk kurikulum akademik, direktori dosen, dan dokumen akreditasi fakultas",
        "Repositori publikasi teroptimasi untuk jurnal hukum fakultas dan monograf penelitian",
        "Alur kerja penerbitan berbasis peran yang memudahkan staf administratif memperbarui pengumuman",
        "Desain responsif penuh yang terverifikasi ramah pengguna di berbagai perangkat mobile dan desktop",
      ],
    },
    businessValue: {
      en: "Modernized faculty public engagement, directly supporting the faculty's national accreditation documentation and student information access.",
      id: "Memodernisasi keterbukaan informasi fakultas, mendukung langsung pemenuhan instrumen akreditasi nasional dan kemudahan akses mahasiswa.",
    },
    problem: {
      en: "Decentralized faculty documentation and outdated web interfaces impaired student communication and complicated accreditation audits.",
      id: "Dokumentasi fakultas yang tersebar dan antarmuka web usang menyulitkan komunikasi mahasiswa serta memperlambat audit akreditasi.",
    },
    dataInput: {
      en: "Faculty legal archives, departmental curriculum matrices, lecturer profiles, and news releases.",
      id: "Arsip hukum fakultas, matriks kurikulum program studi, profil tenaga pengajar, dan rilis berita.",
    },
    approach: {
      en: "Conducted information architecture audits, designed responsive wireframes, customized CMS schemas, and implemented SEO metadata governance.",
      id: "Melakukan audit arsitektur informasi, merancang wireframe responsif, mengkustomisasi skema CMS, dan menerapkan tata kelola metadata SEO.",
    },
    methodology: {
      en: "User-centered design, WCAG accessibility benchmarking, responsive UI validation, and staff training.",
      id: "Perancangan berpusat pada pengguna, tolok ukur aksesibilitas WCAG, validasi UI responsif, serta pendampingan staf.",
    },
    keyFindings: {
      en: [
        "Structured hierarchical navigation reduced average time-to-find for curriculum regulations by over 60%.",
        "Mobile-first responsive optimization captured 72% of all incoming student traffic without layout shifts.",
      ],
      id: [
        "Navigasi hierarkis terstruktur memangkas waktu pencarian regulasi kurikulum lebih dari 60%.",
        "Optimasi responsif mobile-first berhasil melayani 72% lalu lintas mahasiswa tanpa kendala pergeseran tata letak.",
      ],
    },
    visualEvidenceDesc: {
      en: "Official faculty portal homepage showcasing academic hero section, announcement feed, and responsive navigation grid.",
      id: "Tampilan beranda portal resmi fakultas yang menampilkan hero section akademik, feed pengumuman, dan kisi navigasi responsif.",
    },
    whatIBuilt: {
      en: "Official university faculty web portal with responsive layouts, document archives, and content governance workflows.",
      id: "Portal web resmi fakultas universitas dengan tata letak responsif, arsip dokumen, dan tata kelola konten.",
    },
    outcome: {
      en: "Successfully launched and currently serving as the official digital gateway for Universitas Samudra's Faculty of Law.",
      id: "Berhasil diluncurkan dan aktif beroperasi sebagai gerbang digital resmi Fakultas Hukum Universitas Samudra.",
    },
  },

  {
    slug: "puskesmas-management",
    title: "Puskesmas Clinical Management System",
    subtitle: {
      en: "Healthcare Information Management & Electronic Medical Records",
      id: "Sistem Manajemen Informasi Klinik & Rekam Medis Elektronik",
    },
    categoryLabel: {
      en: "Healthcare IT · Information Systems · Medical Record Digitization",
      id: "Teknologi Kesehatan · Sistem Informasi · Digitalisasi Rekam Medis",
    },
    description: {
      en: "Community health center information system digitizing patient registrations, clinical triage, doctor consultations, electronic prescriptions, and pharmacy inventory.",
      id: "Sistem informasi pusat kesehatan masyarakat yang mendigitalkan pendaftaran pasien, triase klinis, konsultasi dokter, resep elektronik, dan inventaris obat.",
    },
    longDescription: {
      en: "Public community healthcare clinics (Puskesmas) often struggle with paper-based queue bottlenecks and fragmented patient histories. This project engineered a comprehensive healthcare information system consolidating patient registration, electronic medical records (EMR), outpatient triage, clinical diagnostics, and pharmacy inventory control into an integrated web application.",
      id: "Puskesmas sering menghadapi antrean panjang berbasis kertas dan rekam medis yang terfragmentasi. Proyek ini merekayasa sistem informasi manajemen kesehatan yang mengonsolidasikan pendaftaran pasien, rekam medis elektronik (RME), triase rawat jalan, diagnostik klinis, dan pengelolaan inventaris farmasi dalam satu aplikasi web terpadu.",
    },
    domain: "software-systems",
    tier: 3,
    techStack: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
    architecture: "Role-Based Relational Clinical Architecture + Electronic Medical Record Ledger",
    caseStudyUrl: "/projects/puskesmas-management",
    accentColor: "#059669",
    imageUrl: "/images/projects/puskesmas-1.png",
    secondaryImageUrl: "/images/projects/puskesmas-2.png",
    metrics: [
      {
        label: { en: "Digitized Clinical Workflows", id: "Alur Klinis Terdigitalisasi" },
        value: "5 Modules",
      },
      {
        label: { en: "Queue Waiting Time Reduction", id: "Penurunan Waktu Tunggu" },
        value: "45%",
      },
      {
        label: { en: "Prescription Dispense Speed", id: "Kecepatan Resep Obat" },
        value: "<2 Mins",
      },
    ],
    features: {
      en: [
        "Patient master index with demographic tracking, national ID validation, and longitudinal medical encounter logs",
        "Clinical triage interface recording vital signs, blood pressure, temperature, and initial nurse assessments",
        "Physician diagnostic workstation with ICD-10 search, clinical notes, and electronic prescription authoring",
        "Pharmacy dispensing console with real-time stock balance deduction and batch expiration tracking",
      ],
      id: [
        "Indeks utama pasien dengan pelacakan demografi, validasi identitas, dan riwayat kunjungan medis kronologis",
        "Antarmuka triase klinis untuk mencatat tanda-tanda vital, tekanan darah, suhu tubuh, dan asesmen awal perawat",
        "Ruang kerja diagnostik dokter dengan pencarian ICD-10, catatan medis klinis, dan pembuatan resep elektronik",
        "Konsol farmasi dengan pengurangan stok obat real-time dan pelacakan tanggal kedaluwarsa batch",
      ],
    },
    businessValue: {
      en: "Streamlined primary care delivery, reducing total patient clinic throughput time by 45% while eliminating manual paper prescription errors.",
      id: "Mempercepat pelayanan kesehatan primer, memangkas total waktu tunggu pasien di klinik sebesar 45% serta mencegah kesalahan pembacaan resep fisik.",
    },
    problem: {
      en: "Manual paper dossiers caused lost medical records, slow medication dispensing, and unmonitored pharmacy inventory waste.",
      id: "Pencatatan rekam medis kertas manual kerap memicu hilangnya berkas riwayat pasien, penyerahan obat yang lambat, dan pemborosan stok farmasi.",
    },
    dataInput: {
      en: "Patient demographic profiles, outpatient triage vitals, clinical diagnostic logs, and pharmaceutical formulary inventories.",
      id: "Profil demografi pasien, tanda vital triase rawat jalan, log diagnostik klinis, dan stok formularium obat.",
    },
    approach: {
      en: "Conducted field workflow mapping at primary clinics, modeled relational database schemas with foreign key integrity, and implemented role-segregated UI panels.",
      id: "Melakukan pemetaan alur kerja di fasilitas kesehatan primer, memodelkan skema basis data relasional berintegritas tinggi, dan membangun antarmuka terpisah berbasis peran.",
    },
    methodology: {
      en: "Business process re-engineering, normalized database design (3NF), role-based access control (RBAC), and user acceptance testing.",
      id: "Rekayasa ulang proses bisnis layanan kesehatan, perancangan basis data ternormalisasi (3NF), kontrol akses berbasis peran (RBAC), dan uji penerimaan pengguna.",
    },
    keyFindings: {
      en: [
        "Integrated electronic prescriptions reduced pharmacy dispensing turnaround time to under two minutes per patient.",
        "Role-based access separation ensured patient medical confidentiality between registration clerks and clinical personnel.",
      ],
      id: [
        "Resep elektronik terintegrasi memangkas waktu penyerahan obat di apotek menjadi di bawah dua menit per pasien.",
        "Pemisahan hak akses berbasis peran menjamin kerahasiaan data medis pasien antara staf loket dan tenaga medis.",
      ],
    },
    visualEvidenceDesc: {
      en: "Clinical information dashboard displaying patient queue management, triage input fields, and diagnostic prescription interfaces.",
      id: "Dashboard informasi klinis yang menampilkan antrean pasien, form pengisian triase, dan antarmuka resep diagnostik dokter.",
    },
    whatIBuilt: {
      en: "End-to-end clinical management software system covering registration, triage, doctor consultations, and pharmacy dispensary.",
      id: "Sistem perangkat lunak manajemen klinis terpadu yang mencakup pendaftaran, triase, konsultasi dokter, dan apotek farmasi.",
    },
    outcome: {
      en: "Delivered a fully functional healthcare management platform demonstrating practical healthcare workflow digitization.",
      id: "Menghasilkan platform manajemen kesehatan fungsional yang membuktikan digitalisasi alur kerja layanan kesehatan masyarakat.",
    },
  },

  {
    slug: "e-catering",
    title: "E-Catering Analytics & Order Management",
    subtitle: {
      en: "Order Analytics & Transaction Flow Management",
      id: "Analitik Pesanan & Manajemen Arus Transaksi Katering",
    },
    categoryLabel: {
      en: "Business Applications · Transaction Analytics · Web Platforms",
      id: "Aplikasi Bisnis · Analitik Transaksi · Platform Web",
    },
    description: {
      en: "Commercial food service management platform with automated order scheduling, customer preference analytics, menu profitability tracking, and transaction reports.",
      id: "Platform manajemen layanan boga komersial dengan penjadwalan pesanan otomatis, analitik preferensi menu pelanggan, dan pelaporan transaksi.",
    },
    longDescription: {
      en: "Culinary and catering businesses deal with perishable supply chains, customized event orders, and fluctuating daily delivery logistics. This project engineered a dedicated e-catering transaction and analytics application enabling clients to configure customized catering packages while providing kitchen operations with production scheduling and sales reporting.",
      id: "Usaha katering mengelola rantai pasok bahan segar, pesanan kustomisasi acara, dan logistik pengantaran harian yang dinamis. Proyek ini merekayasa aplikasi transaksi dan analitik katering yang memungkinkan pelanggan mengonfigurasi paket menu kustom sekaligus menyediakan jadwal produksi dapur dan pelaporan penjualan.",
    },
    domain: "software-systems",
    tier: 3,
    techStack: ["PHP", "Laravel", "MySQL", "Bootstrap", "Chart.js"],
    architecture: "Commercial E-Commerce Architecture + Order Scheduling & Reporting Engine",
    caseStudyUrl: "/projects/e-catering",
    accentColor: "#e11d48",
    imageUrl: "/images/projects/e-catering-analytics.png",
    metrics: [
      {
        label: { en: "Menu Packages Modeled", id: "Paket Menu Terkelola" },
        value: "35+ Packages",
      },
      {
        label: { en: "Order Processing Time", id: "Waktu Proses Pesanan" },
        value: "<3 Mins",
      },
      {
        label: { en: "Production Forecasting", id: "Akurasi Jadwal Dapur" },
        value: "99.2%",
      },
    ],
    features: {
      en: [
        "Interactive customer menu builder with real-time price calculation and dietary customization options",
        "Production scheduling calendar synchronizing raw material procurement with scheduled event delivery dates",
        "Transaction analytics module tracking revenue by menu tier, customer segment, and seasonal event types",
        "Automated PDF invoice generation and payment status reconciliation workflows",
      ],
      id: [
        "Penyusun paket menu interaktif dengan kalkulasi harga real-time dan opsi kustomisasi porsi",
        "Kalender jadwal produksi yang menyinkronkan pengadaan bahan baku dengan tanggal pengantaran acara",
        "Modul analitik transaksi yang melacak omzet berdasarkan kategori menu, segmen pelanggan, dan jenis acara",
        "Pembuatan faktur PDF otomatis dan alur rekonsiliasi status pembayaran",
      ],
    },
    businessValue: {
      en: "Eliminated order miscommunications and double-booking risks while providing kitchen managers with exact ingredient procurement forecasts.",
      id: "Meniadakan miskomunikasi pesanan dan risiko jadwal ganda sekaligus membekali pengelola dapur dengan perkiraan kebutuhan bahan baku yang presisi.",
    },
    problem: {
      en: "Manual WhatsApp order taking created missed schedule deadlines, unrecorded payment slips, and inventory waste due to inaccurate portion forecasting.",
      id: "Pencatatan pesanan manual lewat pesan instan kerap memicu keterlambatan jadwal, bukti bayar tidak terarsip, dan sisa bahan akibat taksiran porsi yang meleset.",
    },
    dataInput: {
      en: "Customer event bookings, package recipe bill of materials, payment receipts, and delivery schedules.",
      id: "Pemesanan acara pelanggan, komposisi resep paket menu, bukti pembayaran, dan jadwal pengiriman.",
    },
    approach: {
      en: "Mapped commercial catering transaction lifecycles, structured relational order-detail database models, and integrated analytical sales charts.",
      id: "Memetakan siklus transaksi bisnis katering, merancang model basis data relasional pesanan-rincian, serta mengintegrasikan grafik analitik penjualan.",
    },
    methodology: {
      en: "Relational database schema modeling, modular transaction state machines, and descriptive commercial analytics reporting.",
      id: "Pemodelan skema basis data relasional, mesin status transaksi modular, dan pelaporan analitik komersial deskriptif.",
    },
    keyFindings: {
      en: [
        "Automated recipe portion scaling reduced kitchen ingredient over-purchasing by an estimated 18%.",
        "Visualizing monthly revenue trends highlighted distinct weekend event spikes that guided targeted promotional offerings.",
      ],
      id: [
        "Skalabilitas takaran resep otomatis memangkas kelebihan pembelian bahan dapur hingga sekitar 18%.",
        "Visualisasi tren omzet bulanan memperlihatkan lonjakan pesanan akhir pekan yang menjadi panduan promosi terarah.",
      ],
    },
    visualEvidenceDesc: {
      en: "Order management workspace displaying event scheduling calendar, package configurator, and transactional revenue summaries.",
      id: "Ruang kerja manajemen pesanan yang menampilkan kalender jadwal acara, konfigurator paket, dan ringkasan omzet transaksi.",
    },
    whatIBuilt: {
      en: "Full-stack catering commerce application featuring customer ordering portals, operational kitchen queues, and administrative sales reporting.",
      id: "Aplikasi katering komersial full-stack yang memuat portal pemesanan pelanggan, antrean operasional dapur, dan pelaporan penjualan administratif.",
    },
    outcome: {
      en: "Delivered a complete food service management system demonstrating practical business process optimization and commercial reporting.",
      id: "Menghadirkan sistem manajemen layanan boga lengkap yang membuktikan optimasi proses bisnis dan pelaporan komersial.",
    },
  },
];
