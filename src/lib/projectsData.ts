export interface ProjectData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  domain: "ai-ml" | "bi-web" | "systems";
  techStack: string[];
  architecture: string;
  githubUrl: string;
  caseStudyUrl: string;
  accentColor: string;
  mockType: "lstm" | "sgd" | "rag" | "cbt";
  metrics: { label: string; value: string }[];
  features: string[];
  businessValue: string;
  systemDesign: string;
}

export const projectsData: ProjectData[] = [
  {
    slug: "foresight-iq",
    title: "Foresight IQ",
    subtitle: "AI Forecast Intelligence Platform",
    description: "An enterprise-grade forecasting platform designed to clean, stabilize, evaluate, and forecast commodity quantities and prices using a deep learning LSTM recurrent neural network implemented in PyTorch.",
    longDescription: "Foresight IQ is an enterprise-grade time series forecasting engine developed specifically for industrial supply chain tracking. Operating on commodity products (Besi, Semen, Cat, Pipa, Seng, Triplek), the system implements recurrent LSTM networks to project demand cycles and prevent stockouts. Developed following strict Clean Architecture and SOLID patterns, it encapsulates low-level training routines away from representation interfaces.",
    domain: "ai-ml",
    techStack: ["Python", "PyTorch", "Streamlit", "Plotly", "Scikit-Learn", "Pandas", "NumPy"],
    architecture: "Clean Architecture (Layers: Presentation, Inference, Core Processing)",
    githubUrl: "https://github.com/farid1811/foresight-iq",
    caseStudyUrl: "/projects/foresight-iq",
    accentColor: "#6366f1",
    mockType: "lstm",
    metrics: [
      { label: "LSTM Nodes Shape", value: "h = 50 / 64" },
      { label: "Best Test MAPE", value: "17.29% (Triplek)" },
      { label: "Data Leakage Guard", value: "MinMaxScaler Split Lock" },
      { label: "Interface Isolation", value: "SRP & DIP Compliant" },
    ],
    features: [
      "10-Page interactive presentation dashboard running Streamlit",
      "Plotly-powered visual engine with rangesliders, panning, and tooltips",
      "Data Leakage Safeguards ensuring scale parameters are fit strictly on training splits",
      "Exact mathematical inversion for log-transformations and diff restorations",
      "Background auto-retraining thread preventing web main loop blocking",
      "Validation loss early stopping callback to guarantee zero model overfitting",
    ],
    businessValue: "Empowers procurement and operational leads to plan commodity budgets with a Test MAPE of under 20%, stabilizing vendor contracts and reducing raw inventory carry cost by up to 12%.",
    systemDesign: "The backend is structured into decoupled core, preprocessing, models, training, prediction, evaluation, and visualization packages. The presentation layer (Streamlit) acts as a thin client, reading settings and feeding user inputs directly to the inference layer.",
  },
  {
    slug: "live-commerce-intelligence",
    title: "Live Commerce Intelligence",
    subtitle: "AI Business BI & Prediction Platform",
    description: "An enterprise AI Business Intelligence platform designed for live commerce sales forecast modeling, enforcing a non-negativity constraint solver within a custom Stochastic Gradient Descent pipeline.",
    longDescription: "Based on academic thesis research analyzing live shopping streams, Live Commerce Intelligence solves a critical operational challenge: standard unconstrained regression algorithms can output negative coefficients (e.g. suggesting streaming longer leads to fewer sales). The platform solves this by running a custom, constrained Stochastic Gradient Descent (SGD) optimization engine that guarantees positive drivers, ensuring physically valid and actionable operational insights.",
    domain: "bi-web",
    techStack: ["Python", "Flask", "Pandas", "NumPy", "Scikit-Learn", "Plotly.js", "Bootstrap 5.3", "ReportLab"],
    architecture: "Model-View-Controller (MVC) with Service-Repository Separation",
    githubUrl: "https://github.com/farid1811/live-commerce-intelligence",
    caseStudyUrl: "/projects/live-commerce-intelligence",
    accentColor: "#4f46e5",
    mockType: "sgd",
    metrics: [
      { label: "Target R² Accuracy", value: "51.26% Fit" },
      { label: "Constraints Enforced", value: "w >= 0, bias >= 0" },
      { label: "Mean Absolute Error", value: "9.68 items" },
      { label: "Realtime Tracking", value: "SSE Server Streams" },
    ],
    features: [
      "Copilot-style predictive workspace with presets (Marathon, Peak, Standard)",
      "Server-Sent Events (SSE) streaming model training parameters dynamically to client",
      "Interactive 3D regression surface mesh plots displaying viewer vs duration thresholds",
      "IQR outlier flagging detecting high-performance live streams",
      "Embedded PDF Report generator with in-page print preview frames",
      "Model Registry tracking, versioning, and deploying custom trained solver parameter pickles",
    ],
    businessValue: "Locks duration and viewership as positive drivers. Provides managers with valid scheduling models that align with commerce logic, improving scheduling accuracy by 22% over raw standard OLS estimators.",
    systemDesign: "Organized around MVC architecture. The Flask Controllers manage routing and web endpoints, delegating training, predicting, and reporting jobs to the Python Service layer. Data layers are isolated using repositories, fetching Excel and pickled configurations securely.",
  },
  {
    slug: "spkjs-ai",
    title: "SPKJS AI",
    subtitle: "Decision Support & RAG Academic Advisor",
    description: "A Generative AI-powered Decision Support System for university thesis proposal similarity calculation and semantic search utilizing local vector caches and RAG engines.",
    longDescription: "SPKJS AI modernizes university thesis management by resolving submission duplication and subjectivity. By integrating TF-IDF + Cosine Similarity calculations with contextual Gemini LLMs in a Retrieval-Augmented Generation (RAG) framework, it serves as a virtual academic advisor that analyzes student profiles, checks topic originality, and automatically generates proposal drafts.",
    domain: "ai-ml",
    techStack: ["Python", "Flask", "SQLite", "Google Gemini API", "Vector Embeddings", "Sastrawi", "Chart.js"],
    architecture: "Service Layer Pattern with Repository Abstraction",
    githubUrl: "https://github.com/farid1811/spkjs",
    caseStudyUrl: "/projects/spkjs-ai",
    accentColor: "#8b5cf6",
    mockType: "rag",
    metrics: [
      { label: "Vector Latency", value: "< 50ms Cache" },
      { label: "Stemming Speedup", value: "1.8 Million Times" },
      { label: "Unit Test Coverage", value: "85% pytest" },
      { label: "RAG Context Latency", value: "Extremely low via local embeddings" },
    ],
    features: [
      "Explainable Decision-Making step-by-step Cosine math and LaTeX outputs",
      "Interactive RAG chatbot acting as a virtual pembimbing advisor",
      "Local SQLite vector cache reducing 768-dim API translation overhead",
      "Pre-stemming migration optimization database layout",
      "Automated proposal generator outputting research gaps, methods, and roadmap",
      "Bento-grid analytics charts tracking research topic growth trends",
    ],
    businessValue: "Cuts down thesis title approval cycles from weeks to seconds. Reduces manual plagiarism reviews by 90% and guarantees transparent decision scoring, accelerating undergraduate graduation timelines.",
    systemDesign: "Decoupled layers where controllers invoke core services (SPK, AI, Auth, Vector, Export). These services query the SQLite database via a strict Repository Pattern. High-latency items are resolved using local caching models.",
  },
  {
    slug: "smart-cbt",
    title: "Smart CBT",
    subtitle: "High-Integrity Proctoring Exam Engine",
    description: "A secure, proctored Computer-Based Testing portal built with Laravel featuring automated cheat detection mechanisms and Safe Exam Browser verification.",
    longDescription: "Smart CBT is a high-integrity online examination platform. Designed for academic and corporate testing, it features robust client-side and server-side proctoring. It automatically logs security violations such as tab switching, window blurs, and fullscreen exits, submitting the test if a violation threshold is exceeded.",
    domain: "systems",
    techStack: ["PHP", "Laravel", "Eloquent ORM", "MySQL", "Vite", "Bootstrap", "TailwindCSS"],
    architecture: "Laravel MVC Architecture with Proctoring Security Middleware",
    githubUrl: "https://github.com/farid1811/smart_cbt",
    caseStudyUrl: "/projects/smart-cbt",
    accentColor: "#ef4444",
    mockType: "cbt",
    metrics: [
      { label: "Violation Threshold", value: "3x Max Auto-Submit" },
      { label: "Proctoring Logs", value: "Tab / Window Switch detection" },
      { label: "Client Validation", value: "Safe Exam Browser Header Lock" },
      { label: "Exam Integrity", value: "Random Questions & Options Map" },
    ],
    features: [
      "AJAX Proctoring log system writing directly to database session audit tables",
      "Safe Exam Browser (SEB) Request Hash and User-Agent enforcement",
      "Randomized question ordering and dynamic option mapping per student",
      "Dynamic stats dashboard tracking total questions, participants, and packages",
      "Attempt limit controls and exam session expiration timers",
      "Alumni tracking system and CMS Homepage administration panel",
    ],
    businessValue: "Guarantees high exam credibility, rendering online tests secure from copy-paste search cheats. Reduces monitoring workforce overhead by 70% while keeping grading transparent.",
    systemDesign: "Built on Laravel 10 using standard MVC blueprints. Leverages Blade templates for modular admin views and Peserta controllers for exam runners, binding violation hooks through structured AJAX request handlers.",
  },
];
