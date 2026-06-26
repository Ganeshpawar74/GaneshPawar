export interface Project {
  id: string;
  title: string;
  badge: string;
  tags: string[];
  problem: string;
  architecture?: string[];
  metrics: { label: string; value: string; progress?: number }[];
  impact: string;
  github: string;
  demo?: string;
  isFeatured: boolean;
}

export const projects: Project[] = [
  {
    id: "voiceops",
    title: "VoiceOps — Voice Software Installer Agent",
    badge: "🏆 Featured | Multi-Agent | LangGraph",
    tags: ["LangGraph", "Mistral AI", "Qdrant", "Playwright", "FastAPI", "Docker", "Redis", "Celery", "WebSockets"],
    problem: "Can an AI autonomously handle software installations — from voice commands to downloading, validating, and verifying target host execution?",
    architecture: ["🎤 Voice", "🧠 Intent", "📋 Planner", "🌐 Browser", "⬇️ Download", "🔧 Install", "📡 Verify"],
    metrics: [
      { label: "Autonomous Agents", value: "8 Agents", progress: 100 },
      { label: "Installation Verification", value: "SHA-256", progress: 100 },
      { label: "Notification Delay", value: "<100ms", progress: 95 }
    ],
    impact: "Built a fully autonomous, voice-driven host installer system using LangGraph and Mistral AI, eliminating manual packaging workflows.",
    github: "https://github.com/Ganeshpawar74/VoiceOps-AI-Powered-Voice-Software-Installation-Agent",
    isFeatured: true
  },
  {
    id: "agentic-analyst",
    title: "Agentic Data Analyst — Autonomous BI System",
    badge: "🏆 Featured | LLMOps | LangGraph",
    tags: ["LangChain", "LangGraph", "LangSmith", "ChromaDB", "NL-to-SQL", "DuckDB", "Prophet", "Docker", "Power BI"],
    problem: "Traditional business intelligence requires manual execution of SQL scripts, visualization preparation, and report compiles. Can agents automate it?",
    architecture: ["📋 Planner", "🗃️ SQL Engine", "📊 Plotly Engine", "📈 Forecasting", "📝 Reporter", "✅ Evaluator"],
    metrics: [
      { label: "Query Translation Acc.", value: "94.5%", progress: 94.5 },
      { label: "Telemetry & Logs", value: "LangSmith Traced", progress: 100 },
      { label: "Report Compile Time", value: "under 1 min", progress: 90 }
    ],
    impact: "Orchestrated an 8-agent analytics collective that processes raw natural language questions into structured PDF summaries and forecasts, saving 40% analyst compile time.",
    github: "https://github.com/Ganeshpawar74/Agentic-Data-Analyst-Autonomous-Business-Intelligence-System",
    isFeatured: true
  },
  {
    id: "ava-video-assistant",
    title: "AVA — AI Video Intelligence Assistant",
    badge: "🏆 Featured | RAG | Whisper",
    tags: ["Sarvam AI", "Whisper", "Mistral AI", "LangChain", "ChromaDB", "Streamlit", "Python", "RAG"],
    problem: "Extracting insights from lengthy webinars or video recordings is time-consuming. How do we automate structured intelligence extraction?",
    architecture: ["🎥 Video Input", "🎙️ Transcription", "🧠 Summarization", "📚 Vector DB", "💬 Chatbot"],
    metrics: [
      { label: "Transcription Acc.", value: "95% (Sarvam)", progress: 95 },
      { label: "Retrieval Latency", value: "<150ms", progress: 90 }
    ],
    impact: "Developed an assistant that transcribes audio, isolates decision milestones/action items, and exposes an interactive RAG chat interface over the video content.",
    github: "https://github.com/Ganeshpawar74/AVA-AI-Video-Assistant",
    isFeatured: true
  },
  {
    id: "multi-agent-research",
    title: "Multi-Agent AI Research System",
    badge: "🏆 Featured | LCEL | Streamlit",
    tags: ["LangChain", "Mistral AI", "Tavily API", "BeautifulSoup", "LCEL", "Streamlit", "Python"],
    problem: "Compiling research papers from raw search engine hits requires massive manual scraping, writing, and self-review cycles.",
    architecture: ["🔍 Searcher", "📖 Reader", "✍️ Writer", "⚖️ Critic Feedback"],
    metrics: [
      { label: "Research Agent Count", value: "4 Specialized", progress: 100 },
      { label: "Feedback Iterations", value: "Auto-Scored", progress: 95 }
    ],
    impact: "Built a four-agent pipeline (Search, Reader, Writer, Critic) that scrapers web logs, compiles structured summaries, and auto-refines drafts based on Critic evaluations.",
    github: "https://github.com/Ganeshpawar74/Multi-Agent-Research-System",
    isFeatured: true
  },
  {
    id: "healthverse",
    title: "HealthVerse AI — Medical Report Analyzer",
    badge: "🏆 Featured | RAG + CNN | Healthcare",
    tags: ["ChromaDB", "BGE Embeddings", "CNN", "PyTorch", "FastAPI", "Streamlit", "Docker", "LangSmith"],
    problem: "Speeding up radiological diagnoses requires combining visual scans with historical files and matching clinical literature.",
    architecture: ["📁 Records Ingestion", "🧠 PyTorch CNN", "📚 Chroma RAG", "📝 Report Gen", "🔍 Telemetry"],
    metrics: [
      { label: "CNN Diagnostic Acc.", value: "93.6%", progress: 93.6 },
      { label: "Retrieval Acceleration", value: "60% Latency Red.", progress: 60 }
    ],
    impact: "Blended PyTorch image classification with Chroma RAG to draft clinical summaries, verified with LangSmith hallucination tracing.",
    github: "https://github.com/Ganeshpawar74/Intelligent-Medical-Report-Analysis-System-with-AI-Diagnosis-RAG-Based-Insights-",
    isFeatured: true
  },
  {
    id: "legalx-knowledge",
    title: "LegalX — AI Legal Knowledge Centre",
    badge: "🏆 Featured | RAG | Audio TTS",
    tags: ["Mistral AI", "Python", "RAG Pipeline", "ChromaDB", "Text-to-Speech", "Streamlit"],
    problem: "Comprehending complex legal source texts is challenging. How can we make legal knowledge cards and Q&A more digestible?",
    architecture: ["📄 PDF Loaders", "📚 Chroma DB Vector", "🧠 Mistral RAG", "🎙️ TTS Exporter"],
    metrics: [
      { label: "Accuracy Score", value: "92% Legal Fit", progress: 92 },
      { label: "Audio Output", value: "Synthesized TTS", progress: 100 }
    ],
    impact: "Created an legal information dashboard that parses legal briefs, creates summary blocks, and features audio playback cards alongside a RAG search assistant.",
    github: "https://github.com/Ganeshpawar74/LegalX-AI-Knowledge-Centre",
    isFeatured: true
  },
  {
    id: "samasocial-learning",
    title: "SamaSocial — Multi-Source Learning Assistant",
    badge: "Study Planner & RAG",
    tags: ["Python", "LangChain", "VectorDB", "RAG", "Streamlit", "OpenAI"],
    problem: "Students study across fragmented files (PDFs, URLs, videos). Organizing them into a unified study guide is challenging.",
    metrics: [
      { label: "Data Integration", value: "Multi-Format", progress: 95 },
      { label: "Planner Output", value: "Automated schedules", progress: 100 }
    ],
    impact: "Assembled a unified RAG chatbot that pulls context across loaded study decks, creating lesson calendars and interactive review notes.",
    github: "https://github.com/Ganeshpawar74/Samasocial-Multi-Source-AI-Learning-Assistant",
    isFeatured: false
  },
  {
    id: "ai-inventory",
    title: "AI Inventory Forecasting & Decision Support",
    badge: "Demand Forecasting & ML",
    tags: ["Scikit-learn", "Prophet", "ARIMA", "Streamlit", "Plotly", "Python", "SQL"],
    problem: "Supply chains struggle with inventory shortages. Accurate forecasting requires analyzing transaction histories.",
    metrics: [
      { label: "Processed Logs", value: "50,000+ Records", progress: 95 },
      { label: "Demand Acc. Boost", value: "+20% Accuracy", progress: 20 }
    ],
    impact: "Delivered time-series projections (Prophet/ARIMA) over transaction logs, reducing supply chain overstock targets.",
    github: "https://github.com/Ganeshpawar74/AI-Inventory-Forecasting",
    isFeatured: false
  },
  {
    id: "hospital-dashboard",
    title: "Hospital Operations Performance Dashboard",
    badge: "BI Dashboard & PostgreSQL",
    tags: ["SQL", "PostgreSQL", "Power BI", "DAX", "Python", "EDA"],
    problem: "Operational delays in clinics stem from isolated record logs. Automated BI refresh structures are missing.",
    metrics: [
      { label: "Data Size", value: "50k+ clinical logs", progress: 90 },
      { label: "Reporting Overhead", value: "-60% delay", progress: 60 }
    ],
    impact: "Created PostgreSQL warehouse scripts and built dynamic Power BI dashboards with DAX to decrease operations reporting cycles by 60%.",
    github: "https://github.com/Ganeshpawar74/Hospital-Dashboard",
    isFeatured: false
  },
  {
    id: "epialert-sunitiq",
    title: "EpiAlert — Disease Spikes Classification",
    badge: "Epidemiology ML Model",
    tags: ["PyTorch", "Scikit-learn", "FastAPI", "Python", "Pandas", "Docker"],
    problem: "Early detection of epidemiological anomalies requires processing clinical reports in real time.",
    metrics: [
      { label: "Classification Speed", value: "Real-time", progress: 95 },
      { label: "Effort Reduction", value: "40% saved", progress: 40 }
    ],
    impact: "Created ML models in PyTorch to classify spikes and integrated them into a FastAPI notification app.",
    github: "https://github.com/Ganeshpawar74/EpiAlert_Sunitiq",
    isFeatured: false
  },
  {
    id: "course-planner",
    title: "SamaSocial — Course Planning Assistant",
    badge: "Course Architect & Schema Gen",
    tags: ["OpenAI API", "Python", "JSON Schema", "Streamlit", "ReportLab"],
    problem: "Academic curriculum structures require manual schedules, prerequisite tracking, and styling calendars.",
    metrics: [
      { label: "Scheduling Speed", value: "Instant", progress: 100 },
      { label: "Output Format", value: "Valid PDF Export", progress: 100 }
    ],
    impact: "Built a dynamic course scheduler using structured JSON schemas to schedule classes and generate formatted PDFs.",
    github: "https://github.com/Ganeshpawar74/Samasocial-AI-Course-Planning-Assistant",
    isFeatured: false
  }
];
