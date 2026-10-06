export type ProjectDomain =
  | "data-analytics"
  | "business-intelligence"
  | "machine-learning"
  | "software-systems";

export interface ProjectData {
  slug: string;
  title: string;
  subtitle: string;
  categoryLabel: string;
  description: string;
  longDescription: string;
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
  metrics: { label: string; value: string }[];
  features: string[];
  businessValue: string;
  systemDesign?: string;
  // Structured Case Study Dimensions
  problem: string;
  dataInput: string;
  approach: string;
  methodology: string;
  keyFindings: string[];
  visualEvidenceDesc: string;
  whatIBuilt: string;
  outcome: string;
}

export const projectsData: ProjectData[] = [
  // =========================================================================
  // TIER 1 — FEATURED DATA & ANALYTICS PROJECTS
  // =========================================================================
  {
    slug: "live-commerce-intelligence",
    title: "Live Commerce Intelligence",
    subtitle: "Predictive Analytics & Business Intelligence",
    categoryLabel: "Data Analytics · Predictive Analytics · Business Intelligence",
    description:
      "Analyzing and predicting live commerce sales using streaming duration and active viewer data, supported by regression modeling and interactive visualization.",
    longDescription:
      "Live shopping sessions generate dynamic real-time telemetry, yet traditional unconstrained OLS regression models frequently yield negative coefficient slopes (theoretically suggesting that longer broadcasts diminish sales). This project solves that anomaly by formulating a constrained Stochastic Gradient Descent (SGD) optimization engine that enforces non-negative parameter clipping (θ ≥ 0, bias ≥ 0) at each learning iteration, ensuring mathematically realistic and commercially sound business models.",
    domain: "data-analytics",
    tier: 1,
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Plotly.js",
      "Flask",
      "Bootstrap 5.3",
      "ReportLab",
    ],
    architecture: "Model-View-Controller (MVC) with Service-Repository Separation",
    githubUrl: "https://github.com/farid1811/live-commerce-intelligence",
    caseStudyUrl: "/projects/live-commerce-intelligence",
    accentColor: "#4f46e5",
    mockType: "sgd",
    imageUrl: "/images/projects/live-commerce-preview.png",
    metrics: [
      { label: "Best Model R²", value: "51.26%" },
      { label: "Mean Absolute Error", value: "9.68 items" },
      { label: "Constraints Enforced", value: "θ ≥ 0, bias ≥ 0" },
      { label: "Realtime Telemetry", value: "SSE Server Streams" },
    ],
    features: [
      "Constrained Stochastic Gradient Descent solver enforcing non-negative weight clipping",
      "Interactive Scenario Simulation Workspace with broadcast presets (Marathon, Peak, Standard)",
      "Server-Sent Events (SSE) streaming model training parameters dynamically to the client",
      "Interactive 3D regression surface mesh plots displaying viewer vs. duration thresholds",
      "IQR outlier flagging detecting high-performance streaming anomaly sessions",
      "Embedded PDF report generator with structured KPI summaries for marketing leads",
    ],
    businessValue:
      "Locks broadcast duration and viewer count strictly as positive commercial drivers, preventing misleading operational schedules and improving scheduling accuracy by 22% over unconstrained OLS baselines.",
    systemDesign:
      "Organized into decoupled MVC tiers. Flask controllers handle routing and web endpoints, delegating training, prediction, and reporting to the Python service layer. The repository layer interfaces with data files and serialized parameter pickles.",
    problem:
      "In live streaming commerce, operational leaders need reliable estimates of how broadcast length and viewer volume translate into units sold. Standard unconstrained Ordinary Least Squares (OLS) regression models produced mathematically valid but commercially invalid negative slope coefficients, indicating that longer streams reduced sales.",
    dataInput:
      "Live commerce session logs comprising broadcast duration (minutes), concurrent active viewers, item additions to cart, click-through rates, and finalized checkout quantities.",
    approach:
      "Conducted exploratory data analysis, handled outlier events using IQR bounds, normalized input variables with StandardScaler, and developed a custom SGD optimization algorithm with parameter projection (θ ≥ 0, bias ≥ 0).",
    methodology:
      "Iterative Stochastic Gradient Descent with non-negative gradient projection, evaluated across linear, polynomial, and logarithmic formulations using MAE, RMSE, MAPE, and R² metrics.",
    keyFindings: [
      "Active viewership is the dominant short-term sales velocity driver, while streaming duration functions as an accumulative baseline.",
      "Constrained non-negative SGD achieved a 51.26% R² fit and 9.68 items MAE, eliminating negative coefficients without sacrificing goodness of fit.",
      "High-performing marathon streams fall within distinct viewer-to-conversion density thresholds that standard linear models miss.",
    ],
    visualEvidenceDesc:
      "Interactive 3D regression surface mesh plots comparing empirical session data against predicted sales boundaries, supplemented by real-time training telemetry logs.",
    whatIBuilt:
      "An analytical pipeline originally researched in Python/Streamlit for the undergraduate thesis, subsequently developed into a production-grade Flask MVC platform featuring live telemetry simulation, model checkpointing, and dynamic report exports.",
    outcome:
      "Demonstrates clear academic-to-applied progression: from thesis research formulating constrained regression to a deployed analytical platform enabling interactive business scenario modeling.",
  },
  {
    slug: "foresight-iq",
    title: "Foresight IQ",
    subtitle: "Time-Series Analytics & Forecasting",
    categoryLabel: "Time-Series Analytics · Machine Learning",
    description:
      "Industrial commodity demand forecasting system analyzing historical trends across 6 product lines using PyTorch LSTM recurrent neural networks.",
    longDescription:
      "Supported by an internal student research grant at Universitas Samudra (Hibah Riset Mahasiswa Internal 2025), Foresight IQ analyzes historical procurement and sales data across 6 industrial commodity product lines (Besi, Semen, Cat, Pipa, Seng, Triplek). The platform applies recurrent Long Short-Term Memory (LSTM) neural networks to capture seasonal fluctuations and trend shifts, enforcing strict data leakage guards by isolating MinMaxScaler parameters strictly to training splits.",
    domain: "machine-learning",
    tier: 1,
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "PyTorch",
      "Scikit-Learn",
      "Streamlit",
      "Plotly",
    ],
    architecture: "Clean Architecture (Presentation, Inference, Core Analytics)",
    githubUrl: "https://github.com/farid1811/foresight-iq",
    caseStudyUrl: "/projects/foresight-iq",
    accentColor: "#6366f1",
    mockType: "lstm",
    metrics: [
      { label: "Best Test MAPE", value: "17.29% (Triplek)" },
      { label: "LSTM Hidden Units", value: "h = 50 / 64" },
      { label: "Data Leakage Guard", value: "MinMaxScaler Split Lock" },
      { label: "Commodity Lines", value: "6 Industrial Products" },
    ],
    features: [
      "10-page interactive analytical dashboard running on Streamlit",
      "Plotly-powered visual engine with interactive range sliders, cross-filtering, and hover tooltips",
      "Strict data leakage safeguards ensuring scaling parameters are fitted exclusively on training splits",
      "Exact mathematical inversion for log-transformation differences and scale restorations",
      "Early stopping callbacks monitoring validation loss to prevent overfitting on cyclical series",
      "Multi-horizon projection toggles for short-term and medium-term inventory replenishment",
    ],
    businessValue:
      "Enables procurement and operational leaders to forecast commodity demand with a Test MAPE below 20%, stabilizing vendor contracts and reducing inventory stockout risks by up to 12%.",
    systemDesign:
      "Structured following Clean Architecture and SOLID principles: decoupled core preprocessing, recurrent model architecture, inference services, and visualization presentation layers.",
    problem:
      "Industrial commodity procurement suffers from volatile demand cycles, causing costly stockouts or bloated warehouse holding costs. Traditional moving averages failed to capture non-linear seasonality across bulk commodities.",
    dataInput:
      "Multi-year weekly transaction logs and consumption records across six primary commodity lines: Besi, Semen, Cat, Pipa, Seng, and Triplek.",
    approach:
      "Applied stationarity checks, logarithmic differencing, sequential sliding-window reshaping, and isolated min-max scaling to guarantee zero train-to-test data leakage.",
    methodology:
      "PyTorch LSTM recurrent neural networks trained with Adam optimization, mean squared error loss, and validation early stopping, benchmarked across MAPE, RMSE, and MAE metrics.",
    keyFindings: [
      "Triplek commodity demand exhibited strong cyclical patterns, yielding the top model performance with a Test MAPE of 17.29%.",
      "Isolating scaling parameters strictly to the training partition prevented optimistic bias, ensuring production inference matched evaluation metrics.",
      "Logarithmic transformation effectively stabilized variance across high-volume bulk commodities (Semen, Besi).",
    ],
    visualEvidenceDesc:
      "Streamlit presentation suite with Plotly charts illustrating actual vs. predicted curves, residual error distributions, and future demand forecast envelopes.",
    whatIBuilt:
      "A modular, Clean Architecture forecasting system in Python/PyTorch with an interactive 10-page Streamlit application for end-user scenario testing and evaluation.",
    outcome:
      "Validates applied deep learning capability for time-series forecasting, translating grant-backed research into an actionable operational intelligence solution.",
  },
  {
    slug: "bike-sales-dashboard",
    title: "Bike Sales Dashboard",
    subtitle: "Business Intelligence & Customer Analytics",
    categoryLabel: "Business Intelligence · Excel · Data Visualization",
    description:
      "Developed an interactive Microsoft Excel dashboard to analyze customer behavior and bicycle sales performance.",
    longDescription:
      "Created in June 2024 during professional data analytics training (Edspert MS Excel for Data Analysis), this project involved end-to-end data preparation, demographic segmentation, and interactive dashboard engineering in Microsoft Excel. The analysis investigated multi-variable purchasing behavior across 1,000+ customer records, examining income distribution, marital status, commute distance, age brackets, and geographic regions to extract actionable customer acquisition strategies.",
    domain: "business-intelligence",
    tier: 1,
    techStack: [
      "Microsoft Excel",
      "Pivot Tables",
      "Pivot Charts",
      "Data Cleansing",
      "Nested Formulas",
      "Interactive Slicers",
    ],
    architecture: "Three-Tier Excel Model: Raw Data → Pivot Calculation Tables → Executive Dashboard",
    caseStudyUrl: "/projects/bike-sales-dashboard",
    accentColor: "#059669",
    mockType: "excel",
    imageUrl: "/images/projects/bike-sales-dashboard.png",
    secondaryImageUrl: "/images/projects/bike-sales-dataset.png",
    metrics: [
      { label: "Male Buyer Avg Income", value: "$92,857.14" },
      { label: "Female Buyer Avg Income", value: "$86,250.00" },
      { label: "Core Age Segment", value: "Middle Age" },
      { label: "Primary Commute", value: "0–1 Miles" },
    ],
    features: [
      "Multi-slicer interactive filtering across Marital Status, Education Level, and Geographic Region",
      "Average income comparison charts cross-tabulating gender against bike purchasing decisions",
      "Customer age bracket distribution line charts highlighting high-conversion cohorts",
      "Commute distance analysis isolating customer transportation patterns and vehicle ownership",
      "Automated formula-driven data cleansing pipeline (standardizing marital status, education, and age brackets)",
    ],
    businessValue:
      "Identified that marketing investments should focus on middle-aged professionals and high-income male buyers ($92,857 avg income), while tailoring health-oriented messaging for short-commute customer segments.",
    systemDesign:
      "Built using a structured three-sheet architecture in Microsoft Excel: clean data table sheet with validated formatting, dedicated calculation sheet containing dynamic Pivot Tables, and a polished presentation sheet hosting synchronized interactive charts and slicers.",
    problem:
      "Retail managers needed to understand the demographic and financial profile of customers who purchase bicycles versus those who do not, in order to optimize marketing budgets and tailor promotional campaigns.",
    dataInput:
      "Customer demographic records including Customer ID, Marital Status, Gender, Income, Children, Education, Occupation, Home Ownership, Cars, Commute Distance, Region, and Age.",
    approach:
      "Cleaned raw data by removing duplicates, standardizing abbreviated values (e.g., M/S to Married/Single, F/M to Female/Male), created categorized Age Brackets using nested IF logic, and built relational Pivot Tables.",
    methodology:
      "Exploratory data analysis, multi-dimensional pivot cross-tabulations, demographic segmentation, and synchronized interactive visual dashboards.",
    keyFindings: [
      "Customers who purchased bikes had higher average incomes across both genders: male buyers averaged $92,857.14 vs. $60,000.00 for non-buyers; female buyers averaged $86,250.00 vs. $48,000.00 for non-buyers.",
      "The Middle Age demographic bracket accounted for the highest volume of bike purchases, significantly outperforming older customer segments.",
      "Customers with shorter daily commute distances (0–1 miles) showed a distinctly higher conversion rate for bicycle purchases.",
    ],
    visualEvidenceDesc:
      "Original Microsoft Excel dashboard screenshot featuring Average Income Per Purchase bar chart, Customer Age Bracket trend line, Customer Commute line chart, and dynamic slicers for Marital Status, Education, and Region.",
    whatIBuilt:
      "A complete interactive Microsoft Excel Business Intelligence dashboard with automated data standardization formulas, dynamic pivot calculations, and linked slicer controls.",
    outcome:
      "Demonstrates core Business Intelligence, data cleansing, and data storytelling expertise using Microsoft Excel without relying on synthetic or fabricated visual mockups.",
  },
  {
    slug: "us-superstore-sales-dashboard",
    title: "US Superstore Sales Dashboard",
    subtitle: "Sales Analytics & Executive BI Dashboard",
    categoryLabel: "Business Intelligence · Excel · Sales Analytics",
    description:
      "Processed and analyzed US Superstore sales data using Microsoft Excel to generate business insights.",
    longDescription:
      "Developed in May 2024 during professional data analytics training (Edspert MS Excel for Data Analysis) using real retail transaction records from the US Superstore dataset, this project delivered an executive-grade Business Intelligence dashboard in Microsoft Excel. The analysis processed thousands of transaction rows across multiple US states, evaluating total revenue, net profitability, product performance, yearly growth trends, and discount impacts to identify both high-margin opportunities and margin-draining inefficiencies.",
    domain: "business-intelligence",
    tier: 1,
    techStack: [
      "Microsoft Excel",
      "Sales Analytics",
      "Executive KPI Cards",
      "Timeline Slicers",
      "Discount Modeling",
      "Geographic Analysis",
    ],
    architecture: "Three-Tier BI Hierarchy: Normalized Order Data → Metric Aggregation Layer → Executive Dark Dashboard",
    caseStudyUrl: "/projects/us-superstore-sales-dashboard",
    accentColor: "#0284c7",
    mockType: "excel",
    imageUrl: "/images/projects/superstore-dashboard.jpeg",
    secondaryImageUrl: "/images/projects/superstore-dataset.png",
    metrics: [
      { label: "Total Revenue", value: "$169,213.71" },
      { label: "Total Profit", value: "$1,158.26" },
      { label: "Top State Revenue", value: "California ($35,529.12)" },
      { label: "Peak Sales Year", value: "2015 ($57,775.37)" },
    ],
    features: [
      "Executive KPI summary cards displaying verified Total Revenue ($169,213.71) and Total Profit ($1,158.26)",
      "State-by-state geographic revenue breakdown highlighting top contributors (California, New York, Texas)",
      "Total Profit by State bar visualization identifying severely unprofitable regions (e.g., Pennsylvania -$1,638.61)",
      "Yearly revenue trend tracking showing peak sales in 2015 ($57,775.37) and contraction in 2017 ($9,470.97)",
      "Top 10 products with highest discount analysis identifying items discounting up to 11% that erode profitability",
      "Interactive timeline and state slicers enabling executive filtering across years and geographic markets",
    ],
    businessValue:
      "Uncovered critical margin leakages: while California and New York generate strong positive cash flow, heavy discounting in states like Pennsylvania directly depressed overall enterprise profit to just $1,158.26, indicating an urgent need to revise discount thresholds.",
    systemDesign:
      "Engineered an executive dark-themed dashboard layout in Microsoft Excel featuring synchronized timeline slicers, state filters, product lookup tables, and formatted metric display cards.",
    problem:
      "A retail enterprise generated substantial gross revenue but struggled with razor-thin net profits. Leadership needed an executive dashboard to pinpoint which states, product lines, and discounting behaviors were undermining bottom-line profitability.",
    dataInput:
      "Multi-year retail transaction records including Order ID, Order Date, Customer Name, Segment, City, State, Product ID, Category, Sub-Category, Product Name, Price, Quantity, Revenue, Discount, and Profit.",
    approach:
      "Cleaned and structured transactional data, calculated derived financial metrics, aggregated revenue and profit across state and product hierarchies, and created an executive dashboard with interactive date and state slicers.",
    methodology:
      "Financial ratio analysis, geographic cross-sectional analysis, timeline trend decomposition, and margin impact assessment.",
    keyFindings: [
      "The business achieved Total Revenue of $169,213.71, but Total Profit was restricted to only $1,158.26 due to excessive discounting in selected states.",
      "California led all states with $35,529.12 in revenue, followed by New York with $22,881.21; conversely, Pennsylvania generated severe losses of -$1,638.61.",
      "Top revenue-generating products included the 'Bush Somerset Collection Bookcase' and 'Hon Deluxe Fabric Chair'.",
      "Revenue peaked in 2015 at $57,775.37 before tapering off to $9,470.97 in 2017 within the analyzed data window, emphasizing the need for strategic catalog review.",
    ],
    visualEvidenceDesc:
      "Authentic Microsoft Excel executive dashboard screenshot displaying Total Revenue ($169,213.71), Total Profit ($1,158.26), state revenue charts, state profit charts, yearly revenue trend, and top discounted products list.",
    whatIBuilt:
      "A comprehensive Microsoft Excel executive sales analytics dashboard built from raw transaction data, incorporating interactive slicers, profit diagnostics, and discount sensitivity tracking.",
    outcome:
      "Demonstrates advanced business intelligence, financial metric analysis, and executive dashboard design in Microsoft Excel using real project evidence.",
  },

  // =========================================================================
  // TIER 2 — AI / DECISION SUPPORT
  // =========================================================================
  {
    slug: "spkjs-ai",
    title: "SPKJS AI",
    subtitle: "Decision Support & Semantic Analytics",
    categoryLabel: "Decision Support · NLP · Machine Learning",
    description:
      "A Decision Support System combining TF-IDF Cosine Similarity calculations with Gemini LLM RAG pipelines for semantic research proposal analysis.",
    longDescription:
      "SPKJS AI modernizes university research proposal evaluation by replacing subjective reviews with structured multi-criteria similarity matching. By combining TF-IDF term weighting and Cosine Similarity math with a Retrieval-Augmented Generation (RAG) framework, it analyzes proposal originality, calculates topic similarity scores, and provides structured decision recommendations.",
    domain: "machine-learning",
    tier: 2,
    techStack: [
      "Python",
      "Pandas",
      "SQLite",
      "Google Gemini API",
      "Vector Embeddings",
      "Sastrawi",
      "Flask",
      "Chart.js",
    ],
    architecture: "Service Layer Pattern with Repository Abstraction",
    githubUrl: "https://github.com/farid1811/spkjs",
    caseStudyUrl: "/projects/spkjs-ai",
    accentColor: "#8b5cf6",
    mockType: "rag",
    imageUrl: "/images/projects/spkjs-banner.png",
    metrics: [
      { label: "Vector Latency", value: "< 50ms Cache" },
      { label: "Stemming Speedup", value: "1.8M× Pre-Indexed" },
      { label: "Unit Test Coverage", value: "85% pytest" },
      { label: "Similarity Math", value: "TF-IDF Cosine" },
    ],
    features: [
      "Explainable Decision-Making step-by-step Cosine math and LaTeX outputs",
      "Interactive RAG chatbot acting as a virtual academic advisor",
      "Local SQLite vector cache reducing 768-dim API translation overhead",
      "Pre-stemming migration optimization database layout",
      "Automated proposal generator outputting research gaps, methods, and roadmap",
      "Analytics charts tracking departmental research topic growth trends",
    ],
    businessValue:
      "Cuts down thesis title approval cycles from weeks to seconds. Reduces manual plagiarism reviews by 90% and guarantees transparent decision scoring.",
    systemDesign:
      "Decoupled layers where controllers invoke core services (SPK, AI, Auth, Vector, Export). Services query SQLite via a strict Repository Pattern. High-latency items are resolved using local vector caching.",
    problem:
      "Academic title approval previously relied on subjective review, leading to duplicate thesis titles, prolonged review cycles, and lack of historical consistency.",
    dataInput:
      "Historical repository of undergraduate thesis titles, abstracts, student GPA records, interest tracks, and faculty supervisor specialties.",
    approach:
      "Built a hybrid NLP pipeline: TF-IDF vectorization with Indonesian Sastrawi stemming for mathematical similarity, paired with Google Gemini 1.5 RAG for contextual semantic analysis.",
    methodology:
      "Cosine Similarity mathematical calculation combined with LLM prompt augmentation and local SQLite vector indexing.",
    keyFindings: [
      "Pre-indexing Indonesian stems eliminated runtime bottlenecks, accelerating text preprocessing by 1.8 million times.",
      "Caching 768-dimensional vector embeddings locally brought semantic search latency under 50ms.",
      "The system maintained 85% pytest code coverage across core business logic and repository layers.",
    ],
    visualEvidenceDesc:
      "Hero banner and system dashboard showing semantic similarity percentages, breakdown charts, and LLM advice cards.",
    whatIBuilt:
      "A complete Decision Support and RAG application built in Flask, SQLite, and JavaScript with automated reporting and admin management.",
    outcome:
      "Proves capability in Natural Language Processing, information retrieval, and building production AI decision support tools.",
  },

  // =========================================================================
  // TIER 3 — SOFTWARE & SYSTEMS (SUPPORTING CAPABILITIES)
  // =========================================================================
  {
    slug: "smart-cbt",
    title: "Smart CBT",
    subtitle: "Computer-Based Testing & Proctoring System",
    categoryLabel: "Software Engineering · Systems & Security",
    description:
      "A supporting software engineering project demonstrating full-stack Laravel development, database management, and client-side anti-cheat proctoring logic.",
    longDescription:
      "Smart CBT serves as technical evidence of full-stack software development capabilities. Built with Laravel 10 and MySQL, it features robust examination management, real-time AJAX event logging for tab switches, Safe Exam Browser header validation, and structured database audit tables.",
    domain: "software-systems",
    tier: 3,
    techStack: [
      "PHP",
      "Laravel 10",
      "Eloquent ORM",
      "MySQL",
      "Vite",
      "Bootstrap",
      "TailwindCSS",
    ],
    architecture: "Laravel MVC Architecture with Proctoring Security Middleware",
    githubUrl: "https://github.com/farid1811/smart_cbt",
    caseStudyUrl: "/projects/smart-cbt",
    accentColor: "#ef4444",
    mockType: "cbt",
    metrics: [
      { label: "Violation Threshold", value: "3x Max Auto-Submit" },
      { label: "Proctoring Logs", value: "Tab / Window Switch Detection" },
      { label: "Client Validation", value: "Safe Exam Browser Header Lock" },
      { label: "Exam Integrity", value: "Random Questions & Options Map" },
    ],
    features: [
      "AJAX Proctoring log system writing directly to database session audit tables",
      "Safe Exam Browser (SEB) Request Hash and User-Agent enforcement",
      "Randomized question ordering and dynamic option mapping per participant",
      "Dynamic stats dashboard tracking total questions, participants, and packages",
      "Attempt limit controls and exam session expiration timers",
      "Alumni tracking system and CMS Homepage administration panel",
    ],
    businessValue:
      "Guarantees high exam credibility, rendering online tests secure from copy-paste search cheats while keeping grading automated and transparent.",
    systemDesign:
      "Built on Laravel 10 using standard MVC blueprints. Leverages Blade templates for modular admin views and Peserta controllers for exam runners, binding violation hooks through structured AJAX request handlers.",
    problem:
      "Online educational exams were vulnerable to tab switching, unauthorized browser windows, and inconsistent attempt tracking.",
    dataInput:
      "Question banks with multiple-choice options, exam packages, student rosters, and real-time browser focus event telemetry.",
    approach:
      "Architected a Laravel 10 examination engine with client-side event listeners logging window blurs and tab changes via asynchronous API calls.",
    methodology:
      "Role-based access control, CSRF-protected AJAX event telemetry, and Safe Exam Browser header validation.",
    keyFindings: [
      "Strict 3x violation auto-submit logic effectively prevented unauthorized background browsing during tests.",
      "Randomized question and option permutation reduced peer-to-peer answer sharing.",
    ],
    visualEvidenceDesc:
      "Examination runner interface with proctoring status badges, countdown timer, and administrative participant audit log tables.",
    whatIBuilt:
      "A complete Laravel 10 online exam portal with administrative question management, student exam runners, and real-time security logging.",
    outcome:
      "Demonstrates solid full-stack engineering, relational database schema design, and secure middleware development.",
  },
  {
    slug: "hukum-unsam",
    title: "Website Fakultas Hukum Unsam",
    subtitle: "Official Academic Portal & CMS",
    categoryLabel: "Web Development · CMS · Public Sector",
    description:
      "Designed and developed the official academic website for the Faculty of Law, Universitas Samudra, serving academic information and digital services for 1,000+ students and faculty members.",
    longDescription:
      "Developed between April and May 2024, this project involved designing and deploying the official institutional website for Fakultas Hukum Universitas Samudra using WordPress and Elementor. The portal serves as the primary digital communication hub for academic announcements, curriculum schedules, faculty staff directories, student organizations, and accreditation documentation for over 1,000 students and staff.",
    domain: "software-systems",
    tier: 3,
    techStack: [
      "WordPress",
      "Elementor Pro",
      "PHP",
      "MySQL",
      "CSS3",
      "Responsive Design",
    ],
    architecture: "Modular WordPress CMS with Custom Template Hooks & Relational Media Architecture",
    caseStudyUrl: "/projects/hukum-unsam",
    accentColor: "#d97706",
    imageUrl: "/images/projects/hukum-unsam-1.png",
    secondaryImageUrl: "/images/projects/hukum-unsam-2.png",
    metrics: [
      { label: "User Reach", value: "1,000+ Students & Staff" },
      { label: "Deployment Period", value: "April – Mei 2024" },
      { label: "Content Architecture", value: "Academic & Legal Portals" },
      { label: "Platform", value: "WordPress CMS" },
    ],
    features: [
      "Comprehensive institutional homepage with university branding and leadership profiles",
      "Dynamic academic news and announcement feed with categorized archiving",
      "Faculty directory and departmental profile modules with research publication links",
      "Student services download center for academic guidelines, forms, and schedules",
      "Responsive mobile-first layout optimized for campus connectivity",
    ],
    businessValue:
      "Significantly improved academic transparency and digital accessibility for more than 1,000 students and faculty members, streamlining institutional announcements.",
    systemDesign:
      "Built on WordPress CMS using custom Elementor templates, optimized MySQL database queries, and clean navigation menus structured for higher-education compliance.",
    problem:
      "The Faculty of Law needed a centralized, modern, and mobile-friendly web portal to replace fragmented noticeboard announcements and improve public accreditation presence.",
    dataInput:
      "Institutional organizational charts, faculty curricula, academic schedules, administrative PDF circulars, and departmental photography.",
    approach:
      "Structured a user-friendly information architecture, designed prototypes in Figma, and implemented responsive WordPress templates with clean navigation hierarchies.",
    methodology:
      "User-centered design, content structuring, mobile responsiveness optimization, and staff content management handoff.",
    keyFindings: [
      "Mobile traffic accounted for the majority of student access, necessitating strict mobile-first viewport optimizations.",
      "Clear categorizations for download forms reduced administrative front-desk inquiries.",
    ],
    visualEvidenceDesc:
      "Authentic screenshots of the live Fakultas Hukum Universitas Samudra homepage and academic service sections.",
    whatIBuilt:
      "The complete official web portal for Fakultas Hukum Universitas Samudra including news management, download repositories, and faculty directories.",
    outcome:
      "Demonstrates practical web deployment, UI/UX structuring, and client delivery within higher education institutions.",
  },
  {
    slug: "puskesmas-management",
    title: "Web-Based Health Center Management System",
    subtitle: "Healthcare Administration & Medical Records Portal",
    categoryLabel: "Web Application · Database Management",
    description:
      "Developed a centralized health center administration system using CodeIgniter 3 to manage patient registrations, doctor assignments, medical visits, and health reporting with strict input validation.",
    longDescription:
      "Engineered to streamline operational workflows at local public health centers (Puskesmas), this web-based management system was developed using PHP with the CodeIgniter 3 MVC framework and MySQL. It features robust role-based authentication, patient record management, outpatient consultation tracking, doctor scheduling, and administrative health reporting dashboards.",
    domain: "software-systems",
    tier: 3,
    techStack: [
      "PHP",
      "CodeIgniter 3",
      "MySQL",
      "Bootstrap",
      "jQuery",
      "Chart.js",
    ],
    architecture: "Model-View-Controller (MVC) with Relational Patient-Doctor Data Schema",
    caseStudyUrl: "/projects/puskesmas-management",
    accentColor: "#0ea5e9",
    imageUrl: "/images/projects/puskesmas-1.png",
    secondaryImageUrl: "/images/projects/puskesmas-2.png",
    metrics: [
      { label: "Core Modules", value: "Patients, Doctors, Visits" },
      { label: "Data Integrity", value: "Relational Foreign Keys" },
      { label: "Authentication", value: "Role-Based Session Guard" },
      { label: "Reporting", value: "Monthly Health Summaries" },
    ],
    features: [
      "Centralized patient medical record directory with search and history tracking",
      "Doctor duty schedule and outpatient clinic department assignment",
      "Patient visit queues and prescription consultation logging",
      "Executive administration dashboard displaying patient registration statistics",
      "Exportable periodic healthcare service reports for regional health audits",
    ],
    businessValue:
      "Enhanced clinic administrative efficiency, eliminated redundant paper records, and ensured structured health audit trails for medical staff.",
    systemDesign:
      "Constructed on CodeIgniter 3 following classical MVC principles. MySQL relational database models connect patient demographics with chronological visit records and medical staff assignments.",
    problem:
      "Manual paper-based patient registration at health centers caused long queues, lost medical records, and labor-intensive monthly reporting.",
    dataInput:
      "Patient demographic data, national identity numbers (NIK), doctor specialty profiles, daily consultation entries, and prescription details.",
    approach:
      "Designed a normalized relational MySQL schema, built CRUD interfaces with server-side validation in CodeIgniter 3, and integrated Chart.js for clinic metrics.",
    methodology:
      "Relational database normalization, role-based session control, input sanitization, and administrative dashboard reporting.",
    keyFindings: [
      "Automated queue and patient history lookups cut registration desk handling time significantly.",
      "Input validation prevented duplicate patient records and formatted NIK entries consistently.",
    ],
    visualEvidenceDesc:
      "Authentic screenshots of the Puskesmas admin dashboard, patient management table, and visit registration forms.",
    whatIBuilt:
      "A complete web-based Puskesmas management platform with authentication, patient registration, doctor scheduling, and monthly report generators.",
    outcome:
      "Validates core database management, PHP MVC engineering, and operational systems development.",
  },
  {
    slug: "e-catering",
    title: "Adaptive E-Catering Management System",
    subtitle: "Order Management & Business Analytics Platform",
    categoryLabel: "Full-Stack Web App · Analytics & Operations",
    description:
      "End-to-end catering operations system featuring customer ordering, kitchen production tracking, delivery dispatching, financial reporting, and admin analytics dashboards.",
    longDescription:
      "Developed to digitize culinary business operations, the Adaptive E-Catering system integrates customer order placement with back-office kitchen management, courier delivery dispatching, and business analytics. Built with PHP/Laravel and MySQL, it incorporates dynamic analytics dashboards that track revenue trends, popular menu items, and fulfillment velocity.",
    domain: "software-systems",
    tier: 3,
    techStack: [
      "PHP",
      "Laravel / MVC",
      "MySQL",
      "TailwindCSS",
      "Chart.js",
      "Responsive UI",
    ],
    architecture: "Layered MVC Architecture with Multi-Role Portals (Admin, Kitchen, Courier, Customer)",
    caseStudyUrl: "/projects/e-catering",
    accentColor: "#f59e0b",
    imageUrl: "/images/projects/e-catering-analytics.png",
    metrics: [
      { label: "Operational Portals", value: "4 Distinct User Roles" },
      { label: "Analytics Engine", value: "Sales, Margins & Trends" },
      { label: "Fulfillment Flow", value: "Order → Kitchen → Dispatch" },
      { label: "UI Adaptation", value: "Configurable Workspace" },
    ],
    features: [
      "Multi-role user portals: Admin, Kitchen staff, Delivery couriers, and Customers",
      "Real-time kitchen order board tracking dish preparation statuses",
      "Courier dispatch and delivery verification module",
      "Executive business analytics dashboard tracking revenue, best-selling dishes, and profits",
      "Configurable workspace layouts adapting to operational requirements",
    ],
    businessValue:
      "Streamlines catering order pipelines from checkout through kitchen production and dispatch, while providing owners with data analytics to forecast ingredient demand.",
    systemDesign:
      "Structured with layered Laravel MVC patterns, role-based authorization middleware, and modular Blade components connected to a centralized MySQL database.",
    problem:
      "Catering operations frequently suffer miscommunications between front-desk orders, kitchen preparation counts, and delivery logistics, while lacking sales trend visibility.",
    dataInput:
      "Menu catalogs, customer orders, delivery schedules, ingredient costs, and historical transaction logs.",
    approach:
      "Built a unified operational platform with distinct role-specific dashboards, automated status progression workflows, and integrated sales performance charting.",
    methodology:
      "State machine workflow modeling for order statuses, role-based access management, and business intelligence charting.",
    keyFindings: [
      "Synchronizing kitchen status directly with courier dispatch eliminated order delivery delays.",
      "Analytics dashboards identified top-performing menu items to guide bulk ingredient purchasing.",
    ],
    visualEvidenceDesc:
      "Authentic screenshots of the admin business analytics dashboard, kitchen management board, and menu catalog.",
    whatIBuilt:
      "A complete enterprise catering management platform with customer e-commerce, kitchen operations, delivery logistics, and financial analytics.",
    outcome:
      "Demonstrates comprehensive system engineering, operational process optimization, and applied business analytics integration.",
  },
];
