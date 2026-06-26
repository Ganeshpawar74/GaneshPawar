export interface Skill {
  name: string;
  level: string;
  details: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "genai",
    title: "GenAI & LLMs",
    skills: [
      {
        name: "LangChain & LangGraph",
        level: "Production Grade",
        details: ["Multi-agent orchestration", "Stateful cyclic graphs", "Custom tool calling & routing", "Memory management"]
      },
      {
        name: "RAG Pipelines",
        level: "Advanced Architecture",
        details: ["Semantic similarity search", "Metadata pre-filtering", "Hybrid search (BM25 + Dense)", "Recursive character chunking"]
      },
      {
        name: "API Orchestration",
        level: "Expert Integration",
        details: ["OpenAI / Anthropic / Gemini", "Structured JSON Schema outputs", "Function calling integrations", "Token budget optimization"]
      },
      {
        name: "Vector Databases",
        level: "Advanced Setup",
        details: ["ChromaDB & Qdrant deployments", "Index optimization", "FAISS similarity searching", "Metadata payload storage"]
      },
      {
        name: "LLM Evaluation & MLOps",
        level: "Monitoring & Tracing",
        details: ["LangSmith trace analytics", "Hallucination auto-scoring", "System prompt version control", "Telemetry logs"]
      }
    ]
  },
  {
    id: "ml-dl",
    title: "ML & Deep Learning",
    skills: [
      {
        name: "Python (DS Core)",
        level: "Expert Level",
        details: ["NumPy & Pandas operations", "Scikit-learn model fitting", "Exploratory Data Analysis (EDA)", "Feature scaling pipelines"]
      },
      {
        name: "PyTorch",
        level: "Advanced Deep Learning",
        details: ["Custom CNN architectures", "Custom Loss functions", "Tensor transformations", "Model weights tuning"]
      },
      {
        name: "ML Classification",
        level: "Production Models",
        details: ["Supervised classification", "Ensemble estimators (XGBoost)", "Hyperparameter tuning", "A/B evaluation metrics"]
      },
      {
        name: "Time-Series Forecasting",
        level: "Practical Analytics",
        details: ["Prophet modeling", "ARIMA statistical methods", "Anomaly detection on records", "Trend analysis reports"]
      }
    ]
  },
  {
    id: "backend-devops",
    title: "Backend & DevOps",
    skills: [
      {
        name: "FastAPI",
        level: "Production APIs",
        details: ["Asynchronous endpoints", "CORS & middleware rules", "Pydantic request validators", "WebSocket connections"]
      },
      {
        name: "Docker & Containerization",
        level: "Deployment Systems",
        details: ["Multi-stage Dockerfiles", "Container configurations", "Port forwarding mapping", "Docker Compose stacks"]
      },
      {
        name: "Databases & Caching",
        level: "Advanced Schema",
        details: ["PostgreSQL & MySQL schemas", "Redis caching layers", "Celery async task queues", "SQL query optimization"]
      },
      {
        name: "GitHub Automation",
        level: "CI/CD Workflows",
        details: ["GitHub Actions files", "Build verification pipelines", "Automated code quality checks", "Git flow release tags"]
      }
    ]
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    skills: [
      {
        name: "SQL & Warehousing",
        level: "Advanced Queries",
        details: ["PostgreSQL script writing", "Complex JOIN aggregations", "Subqueries & CTEs", "Stored procedures"]
      },
      {
        name: "Power BI & DAX",
        level: "Professional BI",
        details: ["Interactive dashboard layouts", "DAX metric calculations", "ETL data extraction", "Stakeholder BI visuals"]
      },
      {
        name: "Data Pipelines",
        level: "ETL Engineering",
        details: ["DuckDB local analysis", "Python data loading files", "Streamlit dashboards", "Plotly visualization scripts"]
      }
    ]
  }
];

export const techLogoCloud = [
  "Python", "LangChain", "FastAPI", "Docker", "PyTorch", "TensorFlow", 
  "ChromaDB", "Qdrant", "Redis", "PostgreSQL", "SQL", "Power BI", 
  "GitHub Actions", "Google Cloud", "Git", "Streamlit", "Plotly", "Tailwind"
];
