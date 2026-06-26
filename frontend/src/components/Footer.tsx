import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-[#0a0a0f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 text-left">
        
        {/* Left Side Info */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-white">
            Ganesh Pawar <span className="text-text-secondary">•</span> AI/ML Engineer <span className="text-text-secondary">•</span> {currentYear}
          </p>
          <p className="text-xs text-text-secondary font-mono">
            Built with React + Vite + TS + Tailwind v4 + Framer Motion + RAG Simulation
          </p>
          <p className="text-xs text-accent-purple/70 font-mono italic">
            * No hallucinations were produced in the making of this portfolio.
          </p>
        </div>

        {/* Right Side Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Ganeshpawar74"
            target="_blank"
            rel="noreferrer"
            className="text-text-secondary hover:text-accent-blue transition-colors flex items-center gap-1 text-xs font-mono font-medium"
          >
            <FaGithub className="w-4 h-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ganesh-pawar-073950216/"
            target="_blank"
            rel="noreferrer"
            className="text-text-secondary hover:text-accent-blue transition-colors flex items-center gap-1 text-xs font-mono font-medium"
          >
            <FaLinkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href="mailto:ganeshppawar864@gmail.com"
            className="text-text-secondary hover:text-accent-blue transition-colors flex items-center gap-1 text-xs font-mono font-medium"
          >
            <Mail className="w-4 h-4" /> Email
          </a>
          <a
            href="/Ganesh%20Pawar%20Ai.pdf"
            download="Ganesh Pawar Ai.pdf"
            className="text-text-secondary hover:text-accent-blue transition-colors flex items-center gap-1 text-xs font-mono font-medium"
          >
            <FileText className="w-4 h-4" /> Resume
          </a>
        </div>

      </div>
    </footer>
  );
}
