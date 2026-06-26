import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useCounterAnimation } from "../hooks/useCounterAnimation";

const ROLES = [
  "AI/ML Systems Engineer",
  "Generative AI Specialist",
  "LLMOps Architect",
  "Machine Learning Developer"
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    let timer: number;
    const currentFullText = ROLES[roleIndex];

    const typeSpeed = isDeleting ? 30 : 80;

    const handleType = () => {
      if (!isDeleting) {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        if (displayedText === currentFullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
        } else {
          timer = setTimeout(handleType, typeSpeed);
        }
      } else {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        } else {
          timer = setTimeout(handleType, typeSpeed);
        }
      }
    };

    timer = setTimeout(handleType, typeSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  // Hook counter animations
  const systemsCount = useCounterAnimation(3, 1500);
  const agentsCount = useCounterAnimation(24, 1500);
  const accuracyCount = useCounterAnimation(93, 1500); // 93.6% Accuracy
  const latencyCount = useCounterAnimation(60, 1500);

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center pt-20 overflow-hidden select-none"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-accent-purple/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Floating social sidebar - Fixed to the viewport edge */}
      <div className="hidden lg:flex flex-col items-center gap-6 fixed left-6 bottom-0 z-30">
        <a href="https://github.com/Ganeshpawar74" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-blue transition-colors">
          <FaGithub className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/ganesh-pawar-073950216/" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-blue transition-colors">
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a href="mailto:ganeshppawar864@gmail.com" className="text-text-secondary hover:text-accent-blue transition-colors">
          <Mail className="w-5 h-5" />
        </a>
        <div className="w-[1px] h-20 bg-white/10" />
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-20">
        {/* Left Side: Info */}
        <div className="lg:col-span-8 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-blue/20 bg-accent-blue/5 text-xs text-accent-blue font-semibold uppercase tracking-wider mb-6">
            <span>✨ Available for Immediate Joining</span>
          </div>

          <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight leading-tight mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-pink-500 bg-clip-text text-transparent">Ganesh Pawar</span>
          </h1>

          <div className="h-12 flex items-center mb-6">
            <span className="font-mono text-xl md:text-3xl text-accent-purple font-semibold">
              {displayedText}
            </span>
            <span className="inline-block w-1.5 h-6 bg-accent-blue ml-2 animate-pulse" />
          </div>

          <p className="font-sans text-lg text-text-secondary max-w-2xl mb-10 leading-relaxed">
            I design, build, and deploy production-ready AI systems, agentic workflows, and high-throughput RAG pipelines that bridge research and active deployment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-dark-bg font-semibold text-sm hover:scale-[1.02] transition-transform duration-200 flex items-center gap-2 shadow-lg shadow-accent-blue/20"
            >
              View My Work <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/Ganesh%20Pawar%20Ai.pdf"
              download="Ganesh Pawar Ai.pdf"
              className="px-6 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2"
            >
              Download Resume <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => {
                const chatbotBtn = document.getElementById("chatbot-toggle-btn");
                if (chatbotBtn) chatbotBtn.click();
              }}
              className="px-6 py-3.5 rounded-xl border border-accent-blue/30 text-accent-blue bg-accent-blue/5 font-semibold text-sm hover:bg-accent-blue/10 transition-all flex items-center gap-2"
            >
              Chat with AI Bot 🤖
            </button>
          </div>

          {/* Mobile/Tablet Inline Social Row (only shown below lg breakpoint) */}
          <div className="flex lg:hidden items-center gap-6 mb-12">
            <a href="https://github.com/Ganeshpawar74" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-blue transition-colors flex items-center gap-2 font-mono text-xs">
              <FaGithub className="w-5 h-5" /> <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/ganesh-pawar-073950216/" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-blue transition-colors flex items-center gap-2 font-mono text-xs">
              <FaLinkedin className="w-5 h-5" /> <span>LinkedIn</span>
            </a>
            <a href="mailto:ganeshppawar864@gmail.com" className="text-text-secondary hover:text-accent-blue transition-colors flex items-center gap-2 font-mono text-xs">
              <Mail className="w-5 h-5" /> <span>Email</span>
            </a>
          </div>

          {/* Counter Stats Bar */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/5">
            <div ref={systemsCount.elementRef as any} className="flex flex-col">
              <span className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
                {systemsCount.count}
              </span>
              <span className="text-xs text-text-secondary mt-1 font-mono uppercase tracking-wider">Prod AI Systems</span>
            </div>

            <div ref={agentsCount.elementRef as any} className="flex flex-col">
              <span className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
                {agentsCount.count}+
              </span>
              <span className="text-xs text-text-secondary mt-1 font-mono uppercase tracking-wider">Agents Shipped</span>
            </div>

            <div ref={accuracyCount.elementRef as any} className="flex flex-col">
              <span className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
                {accuracyCount.count}.6%
              </span>
              <span className="text-xs text-text-secondary mt-1 font-mono uppercase tracking-wider">Diagnostic Acc.</span>
            </div>

            <div ref={latencyCount.elementRef as any} className="flex flex-col">
              <span className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
                {latencyCount.count}%
              </span>
              <span className="text-xs text-text-secondary mt-1 font-mono uppercase tracking-wider">Latency Red.</span>
            </div>
          </div>
        </div>

        {/* Right Side - Empty for Three.js Neural BG or additional 3D graphics overlay */}
        <div className="hidden lg:block lg:col-span-4" />
      </div>
    </section>
  );
}
