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
    slug: "live-commerce-intelligence",
    title: "Live Commerce Intelligence",
    subtitle: "Predictive Analytics & BI Platform",
    description: "A Business Intelligence and predictive sales analytics platform implementing a custom constrained Stochastic Gradient Descent (SGD) solver to model live stream commerce drivers.",
    longDescription: "Based on undergraduate thesis research at Universitas Samudra analyzing live shopping session data, Live Commerce Intelligence addresses a critical analytical challenge: standard unconstrained OLS regression can yield negative coefficient slopes (e.g. suggesting longer streaming reduces sales). The platform resolves this by enforcing a non-negative constraint solver (θ ≥ 0, bias ≥ 0) within a custom Stochastic Gradient Descent (SGD) optimization engine, locking duration and viewership as positive drivers to generate physically valid business insights.",
    domain: "bi-web",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Plotly.js", "Flask", "Bootstrap 5.3", "ReportLab"],
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
    slug: "foresight-iq",
    title: "Foresight IQ",
    subtitle: "Time-Series Analytics & Forecasting",
    description: "An industrial time-series analytics and forecasting platform utilizing PyTorch LSTM recurrent neural networks to project commodity demand and prevent supply chain stockouts.",
    longDescription: "Supported by an internal student research grant at Universitas Samudra, Foresight IQ is a time-series analytics platform designed for industrial supply chain tracking. Analyzing historical data for 6 commodity product lines (Besi, Semen, Cat, Pipa, Seng, Triplek), the system applies deep recurrent LSTM networks to detect seasonal demand patterns. Built following strict data leakage guards and Clean Architecture, it isolates data scaling parameters strictly to training splits.",
    domain: "ai-ml",
    techStack: ["Python", "Pandas", "NumPy", "PyTorch", "Scikit-Learn", "Streamlit", "Plotly"],
    architecture: "Clean Architecture (Presentation, Inference, Core Analytics)",
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
    slug: "spkjs-ai",
    title: "SPKJS AI",
    subtitle: "Decision Support & Semantic Analytics",
    description: "A Decision Support System combining TF-IDF Cosine Similarity calculations with Gemini LLM RAG pipelines for semantic research proposal analysis.",
    longDescription: "SPKJS AI modernizes university research proposal evaluation by replacing subjective reviews with structured multi-criteria similarity matching. By combining TF-IDF term weighting and Cosine Similarity math with a Retrieval-Augmented Generation (RAG) framework, it analyzes proposal originality, calculates topic similarity scores, and provides structured decision recommendations.",
    domain: "ai-ml",
    techStack: ["Python", "Pandas", "SQLite", "Google Gemini API", "Vector Embeddings", "Sastrawi", "Flask", "Chart.js"],
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
    subtitle: "Supporting Full-Stack Engineering System",
    description: "A supporting software engineering project demonstrating full-stack Laravel development, database management, and client-side anti-cheat proctoring logic.",
    longDescription: "Smart CBT serves as technical evidence of full-stack software development capabilities. Built with Laravel 10 and MySQL, it features robust examination management, real-time AJAX event logging for tab switches, Safe Exam Browser header validation, and structured database audit tables.",
    domain: "systems",
    techStack: ["PHP", "Laravel 10", "Eloquent ORM", "MySQL", "Vite", "Bootstrap", "TailwindCSS"],
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
