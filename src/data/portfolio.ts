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
  about: `AI & ML engineering student based in Mumbai, focused on using data to solve real-world problems. I enjoy turning complex, messy challenges into clear, structured solutions that actually work in practice.

My approach is simple: understand the problem deeply, break it into manageable steps, and build solutions that are both practical and scalable. I use AI as a smart assistant to speed up research and iteration, but I rely on data, logic, and real-world validation to ensure the results are meaningful.

I’m particularly interested in building systems that go beyond dashboards—solutions that can analyze, predict, and automate decisions to create real impact.`,
  location: "Mumbai, India",
  email: "ganesh.pawar@example.com",
  linkedin: "https://www.linkedin.com/in/ganesh-pawar-073950216/",
  github: "https://github.com/Ganeshpawar74",
  resume: "/Ganesh_Pawar_DA.pdf",
};

export const skills = [
  { name: "SQL", group: "Data & Analytics" },
  { name: "Python", group: "Data & Analytics" },
  { name: "Excel", group: "Data & Analytics" },
  { name: "Power BI", group: "Data & Analytics" },
  { name: "Supervised Learning", group: "Machine Learning" },
  { name: "NLP", group: "Machine Learning" },
  { name: "Forecasting", group: "Machine Learning" },
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
