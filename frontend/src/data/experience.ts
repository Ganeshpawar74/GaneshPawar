export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  points: string[];
  impactTags: string[];
  isCurrent: boolean;
  type: "work" | "education";
}

export const experiences: ExperienceItem[] = [
  {
    id: "sama",
    role: "Backend Developer (Python) - GenAI & LLM Applications",
    company: "Sama Digital Foundation",
    location: "Remote",
    duration: "Jun 2026 – Present",
    points: [
      "Design, develop, and maintain scalable backend applications using Python and FastAPI.",
      "Build and optimize RESTful APIs with seamless integrations for third-party services and AI/LLM providers.",
      "Design and manage databases, write efficient SQL queries, and optimize application performance.",
      "Build backend systems supporting AI-powered features such as chatbots, agents, and document processing workflows.",
      "Collaborate across frontend, product, and AI engineering teams to deploy, monitor, and maintain production systems."
    ],
    impactTags: ["Python / FastAPI", "GenAI & LLM", "SQL & Databases", "API Integrations"],
    isCurrent: true,
    type: "work"
  },
  {
    id: "sunitiq",
    role: "Machine Learning Intern",
    company: "Sunitiq",
    location: "Remote",
    duration: "Apr 2026 – Jun 2026",
    points: [
      "End-to-end predictive analytics modeling using PyTorch and Scikit-learn for regression and classification tasks.",
      "Engineered robust feature engineering pipelines focusing on scaling, encoding, imputing, and custom feature selection.",
      "Applied cross-validation and hyperparameter tuning to achieve a 40% reduction in manual data analysis effort.",
      "Automated experiment tracking and logging to accelerate model iteration cycles by 30%.",
      "Delivered production-grade features in agile sprint cycles using GitHub Copilot acceleration."
    ],
    impactTags: ["40% Efficiency Gain", "30% Faster Iterations", "Agile/Scrum"],
    isCurrent: false,
    type: "work"
  },
  {
    id: "internhack",
    role: "Data Analytics Intern",
    company: "InternHack",
    location: "Remote",
    duration: "Jan 2026 – May 2026",
    points: [
      "Developed end-to-end ETL pipelines integrating external REST APIs into localized PostgreSQL databases.",
      "Designed dynamic Power BI dashboards utilizing advanced DAX measures for executive KPI tracking.",
      "Conducted exploratory data analysis (EDA) to surface anomalies and operational insights across 50,000+ transactional records.",
      "Translated complex AI/model outputs into actionable insights and summary briefings for stakeholders."
    ],
    impactTags: ["40% Manual Effort Saved", "50K+ Records", "Power BI / SQL"],
    isCurrent: false,
    type: "work"
  },
  {
    id: "university",
    role: "BE Computer Science (AI & ML)",
    company: "Vishwaniketan's iMEET, Mumbai University",
    location: "Mumbai, India",
    duration: "2022 – 2026",
    points: [
      "Specialization in Artificial Intelligence & Machine Learning.",
      "Core coursework in Neural Networks, Natural Language Processing, Operations Research, and Advanced Databases.",
      "Active researcher in Agentic LLM frameworks and Retrieval Augmented Generation (RAG) paradigms."
    ],
    impactTags: ["CGPA/First Class", "AI Specialization"],
    isCurrent: false,
    type: "education"
  }
];
