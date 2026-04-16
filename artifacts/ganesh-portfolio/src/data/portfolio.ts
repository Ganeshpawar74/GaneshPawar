export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Data Analytics" | "Machine Learning" | "AI Automation";
  techStack: string[];
  link?: string;
  github?: string;
}

export const personalInfo = {
  name: "Ganesh Pawar",
  role: "AI & ML Engineering Student",
  roles: ["Data Analyst", "ML Engineer", "AI Automation Builder"],
  tagline: "Turning Data into Decisions & AI into Impact",
  about: "Final-year AI & ML engineering student in Mumbai specializing in Data Analytics, Machine Learning, forecasting, Power BI, SQL/Python/Excel, FastAPI, NLP, and n8n AI automation. I work by understanding the business problem first, breaking it into clear steps, using AI as a smart assistant for faster research and iteration, and then validating the solution with data, logic, and real-world impact.",
  location: "Mumbai, India",
  email: "ganesh.pawar@example.com",
  linkedin: "https://linkedin.com/in/placeholder",
  github: "https://github.com/placeholder",
  resume: "/resume.pdf",
};

export const skills = [
  { name: "SQL", group: "Data" },
  { name: "Python", group: "Core" },
  { name: "Excel", group: "Data" },
  { name: "Power BI", group: "Analytics" },
  { name: "Machine Learning", group: "AI" },
  { name: "NLP", group: "AI" },
  { name: "FastAPI", group: "Backend" },
  { name: "n8n", group: "Automation" },
  { name: "APIs", group: "Backend" },
  { name: "GitHub", group: "Tools" },
];

export const certifications = [
  { title: "IBM Data Science Professional Certificate", issuer: "IBM", date: "2023" },
  { title: "Zensar Core Python & SQL", issuer: "Zensar Technologies", date: "2023" },
  { title: "Machine Learning Specialization", issuer: "Stanford Online", date: "2024" },
];

export const projects: Project[] = [
  {
    id: "road-accident",
    title: "Road Accident Dashboard",
    description: "Comprehensive Power BI dashboard analyzing road accident data to identify high-risk zones, demographic patterns, and time-based trends to aid local authorities in proactive safety measures.",
    category: "Data Analytics",
    techStack: ["Power BI", "Excel", "SQL"],
    github: "#",
  },
  {
    id: "healthcare-dash",
    title: "Healthcare Analytics Dashboard",
    description: "Data visualization tool for hospital administrators tracking patient wait times, resource allocation, and readmission rates to optimize operational efficiency.",
    category: "Data Analytics",
    techStack: ["Python", "Pandas", "Power BI"],
    github: "#",
  },
  {
    id: "starbucks-sales",
    title: "Starbucks Sales Dashboard",
    description: "Interactive sales tracker that visualizes store performance, product popularity, and seasonal trends across various regions.",
    category: "Data Analytics",
    techStack: ["SQL", "Excel", "Power BI"],
    github: "#",
  },
  {
    id: "ai-assistant",
    title: "AI Personal Assistant",
    description: "Automated conversational agent using n8n workflows integrated with LLM APIs to handle email summaries, meeting scheduling, and web research.",
    category: "AI Automation",
    techStack: ["n8n", "OpenAI API", "Python", "APIs"],
    github: "#",
  },
  {
    id: "inventory-forecast",
    title: "Inventory Forecasting System",
    description: "Time-series forecasting model predicting stock requirements for retail stores based on historical sales data and seasonal fluctuations.",
    category: "Machine Learning",
    techStack: ["Python", "scikit-learn", "Prophet"],
    github: "#",
  },
  {
    id: "job-recommender",
    title: "Job Recommender System",
    description: "Content-based recommendation engine matching user resumes to job descriptions using NLP and vector embeddings.",
    category: "Machine Learning",
    techStack: ["Python", "NLP", "FastAPI"],
    github: "#",
  },
  {
    id: "movie-recommendation",
    title: "Movie Recommendation System",
    description: "Collaborative filtering system suggesting movies to users based on viewing history and rating patterns.",
    category: "Machine Learning",
    techStack: ["Python", "Pandas", "scikit-learn"],
    github: "#",
  }
];
