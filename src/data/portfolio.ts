export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Data Analytics" | "Machine Learning" | "AI Automation";
  techStack: string[];
  impact?: string;
  link?: string;
  github?: string;
}

export const personalInfo = {
  name: "Ganesh Pawar",
  role: "AI/ML Engineer",
  roles: ["Data Analyst", "ML Engineer", "AI Automation Builder"],
  tagline: "Turning Data into Decisions & AI into Impact",
  about: `AI & ML engineering student based in Mumbai, focused on using data to solve real-world problems. I enjoy turning complex, messy challenges into clear, structured solutions that actually work in practice.

My approach is simple: understand the problem deeply, break it into manageable steps, and build solutions that are both practical and scalable. I use AI as a smart assistant to speed up research and iteration, but I rely on data, logic, and real-world validation to ensure the results are meaningful.

I’m particularly interested in building systems that go beyond dashboards—solutions that can analyze, predict, and automate decisions to create real impact.`,
  location: "Mumbai, India",
  email: "ganeshppawar864@gmail.com",
  linkedin: "https://www.linkedin.com/in/ganesh-pawar-073950216/",
  github: "https://github.com/Ganeshpawar74",
  resume: "/Ganesh_Pawar_DA.pdf",
};

export const skills = [
  { name: "SQL", group: "Data & Analytics" },
  { name: "Python", group: "Data & Analytics" },
  { name: "Excel", group: "Data & Analytics" },
  { name: "Power BI", group: "Data & Analytics" },
  { name: "Predictive Modeling", group: "Machine Learning" },
  { name: "NLP", group: "Machine Learning" },
  { name: "Time Series Forecasting", group: "Machine Learning" },
  { name: "FastAPI", group: "Tools & Development" },
  { name: "n8n", group: "Tools & Development" },
  { name: "API Development", group: "Tools & Development" },
  { name: "Automation", group: "Tools & Development" },
];

export const certifications = [
  { title: "Data Visualization With Python", issuer: "IBM", date: "2023" },
  { title: "Zensar Core Python & SQL", issuer: "Zensar Technologies", date: "2023" },
  { title: "Machine Learning", issuer: "Krish Naik Academy", date: "2024" },
];

export const projects: Project[] = [
  {
    id: "road-accident",
    title: "Road Accident Dashboard",
    description: "Power BI dashboard built to identify high-risk zones, compare accident patterns by location and time, and support data-driven road safety decisions.",
    category: "Data Analytics",
    techStack: ["Analytics", "Power BI", "SQL"],
    impact: "Impact: 15+ actionable insights from 1M+ records",
    github: "https://github.com/Ganeshpawar74",
  },
  {
    id: "healthcare-dash",
    title: "Healthcare MIS Dashboard",
    description: "A management dashboard for hospital administrators that tracks KPIs, resource utilization, and patient flow to improve operational efficiency.",
    category: "Data Analytics",
    techStack: ["Analytics", "Power BI", "Excel"],
    impact: "Impact: Reduced reporting time by 60%",
    github: "https://github.com/Ganeshpawar74",
  },
  {
    id: "starbucks-sales",
    title: "Starbucks Sales Dashboard",
    description: "Interactive sales analytics platform showing product performance, regional trends, and seasonal demand to support retail decision-making.",
    category: "Data Analytics",
    techStack: ["Analytics", "Power BI", "Python"],
    impact: "Impact: Identified 3 key revenue growth opportunities",
    github: "https://github.com/Ganeshpawar74",
  },
  {
    id: "ai-assistant",
    title: "AI Personal Assistant",
    description: "Conversational automation built with n8n and LLM APIs for email summaries, schedule planning, and quick research workflows.",
    category: "AI Automation",
    techStack: ["AI", "Automation", "n8n"],
    impact: "Impact: Streamlined repetitive tasks with automated workflows",
    github: "https://github.com/Ganeshpawar74",
  },
  {
    id: "inventory-forecast",
    title: "Inventory Forecasting System",
    description: "Seasonal forecast model using historical demand data to recommend stock levels and prevent overstock in retail operations.",
    category: "Machine Learning",
    techStack: ["ML", "Python", "Scikit-learn"],
    impact: "Impact: R² score 0.94, reduced overstock by 30%",
    github: "https://github.com/Ganeshpawar74",
  },
  {
    id: "job-recommender",
    title: "GenAI Job Recommender",
    description: "Intelligent job matching system using NLP and retrieval-augmented generation to align candidates with relevant roles.",
    category: "Machine Learning",
    techStack: ["GenAI", "Python", "LLM"],
    impact: "Impact: 85% user satisfaction rate",
    github: "https://github.com/Ganeshpawar74",
  },
  {
    id: "movie-recommendation",
    title: "Movie Recommendation System",
    description: "Hybrid recommendation engine combining collaborative filtering and NLP features to suggest content based on viewing history.",
    category: "Machine Learning",
    techStack: ["ML", "Python", "NLP"],
    impact: "Impact: 92% precision@10",
    github: "https://github.com/Ganeshpawar74",
  }
];
