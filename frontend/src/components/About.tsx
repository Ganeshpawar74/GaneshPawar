import { MapPin, GraduationCap, Briefcase, Zap, Globe, Brain } from "lucide-react";

export function About() {
  const orbits = [
    { name: "🐍 Python", class: "top-0 left-1/2 -ml-8 animate-orbit-1", delay: "0s" },
    { name: "🤖 LangChain", class: "top-1/4 right-0 animate-orbit-2", delay: "-2s" },
    { name: "🧠 LLMs", class: "bottom-1/4 right-0 animate-orbit-1", delay: "-4s" },
    { name: "⚡ FastAPI", class: "bottom-0 left-1/2 -ml-8 animate-orbit-2", delay: "-6s" },
    { name: "🐳 Docker", class: "bottom-1/4 left-0 animate-orbit-1", delay: "-8s" },
    { name: "📊 RAG", class: "top-1/4 left-0 animate-orbit-2", delay: "-10s" }
  ];

  const facts = [
    { icon: MapPin, label: "Location", value: "Mumbai, India", color: "text-accent-blue" },
    { icon: GraduationCap, label: "Education", value: "BE CS (AI & ML) — 2026 Graduate", color: "text-accent-purple" },
    { icon: Briefcase, label: "Current Role", value: "ML Intern @ Sunitiq", color: "text-accent-green" },
    { icon: Zap, label: "Availability", value: "Immediate Joiner", color: "text-amber-400" },
    { icon: Globe, label: "Open to", value: "Remote / Hybrid / Relocation", color: "text-blue-400" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg-overlay opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight flex items-center justify-center gap-3">
            <Brain className="w-8 h-8 md:w-10 md:h-10 text-accent-blue" />
            <span>About Ganesh</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Orbit Photo */}
          <div className="lg:col-span-5 flex justify-center relative py-12">
            {/* Pulsing Back Glow */}
            <div className="absolute w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none animate-glow" />

            <div className="relative w-72 h-72 rounded-full border border-white/5 flex items-center justify-center">
              {/* Profile Avatar */}
              <div className="w-56 h-56 rounded-full overflow-hidden border-2 border-accent-blue/30 shadow-2xl relative z-10 bg-card-bg">
                <img 
                  src="/avatar.png" 
                  alt="Ganesh Pawar Avatar" 
                  className="w-full h-full object-cover scale-105"
                  onError={(e) => {
                    // Fallback to text initials if image fails to load
                    e.currentTarget.style.display = "none";
                    const fallbackEl = e.currentTarget.parentElement?.querySelector(".avatar-fallback");
                    if (fallbackEl) (fallbackEl as HTMLElement).style.display = "flex";
                  }}
                />
                {/* Initials fallback */}
                <div className="avatar-fallback hidden w-full h-full items-center justify-center bg-gradient-to-tr from-accent-blue/20 to-accent-purple/20 text-white font-display text-4xl font-bold">
                  GP
                </div>
              </div>

              {/* Orbit Rings */}
              <div className="absolute inset-4 rounded-full border border-dashed border-accent-purple/20 pointer-events-none animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-10 rounded-full border border-dashed border-accent-blue/15 pointer-events-none animate-[spin_25s_linear_infinite_reverse]" />

              {/* Badges */}
              {orbits.map((badge, i) => (
                <div
                  key={i}
                  className={`absolute px-3 py-1.5 rounded-full border border-white/10 bg-card-bg/90 backdrop-blur-md text-white font-mono text-xs font-semibold shadow-lg hover:scale-110 transition-transform cursor-default pointer-events-auto`}
                  style={{
                    animation: `spin ${15 + i * 5}s linear infinite`,
                    transformOrigin: "center center",
                    // We can position items radially using custom style coordinates
                    top: `${50 + 40 * Math.sin((i * 2 * Math.PI) / 6)}%`,
                    left: `${50 + 40 * Math.cos((i * 2 * Math.PI) / 6)}%`,
                    transform: "translate(-50%, -50%)"
                  }}
                >
                  {badge.name}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Bio & Facts */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-6 flex items-center gap-2">
              Building AI That Ships <Zap className="w-6 h-6 text-accent-blue" />
            </h3>

            <p className="font-sans text-text-secondary text-base leading-relaxed mb-6">
              I'm a Computer Science Graduate (specializing in AI & ML) from Mumbai University, focused on designing, building, and <strong className="text-white">shipping real AI systems.</strong>
            </p>

            <p className="font-sans text-text-secondary text-base leading-relaxed mb-8">
              Not tutorials. Not demos. Production-grade, LLMOps-monitored, deployment-ready AI — from voice-controlled 8-agent pipelines to RAG-powered medical diagnostic systems. My philosophy: <em className="text-accent-blue not-italic font-medium">AI that can't be deployed is just research. I build for impact.</em>
            </p>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {facts.map((fact, idx) => {
                const Icon = fact.icon;
                return (
                  <div 
                    key={idx} 
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-card-bg/40 backdrop-blur-sm"
                  >
                    <div className={`p-2.5 rounded-lg bg-white/5 ${fact.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary font-mono uppercase tracking-wider">{fact.label}</p>
                      <p className="text-sm font-semibold text-white mt-0.5">{fact.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
