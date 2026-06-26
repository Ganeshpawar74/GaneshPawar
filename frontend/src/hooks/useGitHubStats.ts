import { useState, useEffect } from "react";

export interface GitHubRepo {
  name: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
}

export function useGitHubStats(repoNames: string[]) {
  const [stats, setStats] = useState<Record<string, GitHubRepo>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        // Attempt to fetch from github API directly
        const res = await fetch("https://api.github.com/users/Ganeshpawar74/repos");
        if (!res.ok) throw new Error("GitHub API limit exceeded or network error");
        
        const data = await res.json();
        if (Array.isArray(data)) {
          const repoMap: Record<string, GitHubRepo> = {};
          data.forEach((repo: any) => {
            repoMap[repo.name.toLowerCase()] = {
              name: repo.name,
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              language: repo.language || "TypeScript",
              url: repo.html_url
            };
          });
          setStats(repoMap);
        }
      } catch (err) {
        console.warn("Falling back to static stats:", err);
        // Provide mock fallback data in case of rate limiting or offline
        const fallbackMap: Record<string, GitHubRepo> = {
          "voiceops-ai-powered-voice-software-installation-agent": {
            name: "VoiceOps-AI-Powered-Voice-Software-Installation-Agent",
            stars: 12,
            forks: 4,
            language: "Python",
            url: "https://github.com/Ganeshpawar74/VoiceOps-AI-Powered-Voice-Software-Installation-Agent"
          },
          "agentic-data-analyst-autonomous-business-intelligence-system": {
            name: "Agentic-Data-Analyst-Autonomous-Business-Intelligence-System",
            stars: 8,
            forks: 2,
            language: "Python",
            url: "https://github.com/Ganeshpawar74/Agentic-Data-Analyst-Autonomous-Business-Intelligence-System"
          },
          "intelligent-medical-report-analysis-system-with-ai-diagnosis-rag-based-insights-": {
            name: "Intelligent-Medical-Report-Analysis-System-with-AI-Diagnosis-RAG-Based-Insights-",
            stars: 15,
            forks: 3,
            language: "Python",
            url: "https://github.com/Ganeshpawar74/Intelligent-Medical-Report-Analysis-System-with-AI-Diagnosis-RAG-Based-Insights-"
          }
        };
        setStats(fallbackMap);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, [repoNames.join(",")]);

  return { stats, loading };
}
