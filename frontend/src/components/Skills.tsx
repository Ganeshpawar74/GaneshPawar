import { useState } from "react";
import { skillCategories, techLogoCloud } from "../data/skills";
import { Cpu, Brain, Layers, BarChart } from "lucide-react";

export function Skills() {
  const [activeTab, setActiveTab] = useState("genai");

  const tabIcons: Record<string, any> = {
    "genai": Cpu,
    "ml-dl": Brain,
    "backend-devops": Layers,
    "data-analytics": BarChart
  };

  const activeCategory = skillCategories.find((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative Blur Glows */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[250px] h-[250px] bg-accent-purple/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight flex items-center justify-center gap-3">
            <Cpu className="w-8 h-8 md:w-10 md:h-10 text-accent-blue" />
            <span>Tech Stack & Skills</span>
          </h2>
          <p className="font-sans text-text-secondary text-sm mt-3 font-mono uppercase tracking-wider">
            Comprehensive depth across the AI lifecycle
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mt-4" />
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {skillCategories.map((cat) => {
            const Icon = tabIcons[cat.id] || Cpu;
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl border font-semibold text-sm transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-accent-blue to-accent-purple border-transparent text-dark-bg shadow-lg shadow-accent-blue/15"
                    : "bg-card-bg/50 border-white/5 text-text-secondary hover:text-white hover:border-white/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid (No slider bars) */}
        <div className="max-w-7xl mx-auto mb-16">
          <h3 className="font-display text-white font-semibold text-xl mb-8 border-b border-white/5 pb-4 flex justify-between items-center text-left">
            <span>{activeCategory?.title} Expertise</span>
            <span className="text-xs text-text-secondary font-mono">Core Competence Matrix</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {activeCategory?.skills.map((skill, idx) => (
              <div 
                key={idx} 
                className="glass-panel p-6 rounded-2xl border border-white/5 bg-card-bg/30 hover:border-accent-blue/20 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-display font-bold text-lg text-white">
                      {skill.name}
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-[10px] font-semibold text-accent-blue uppercase font-mono tracking-wider whitespace-nowrap">
                      {skill.level}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {skill.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-xs text-text-secondary leading-relaxed flex items-start gap-2">
                        <span className="text-accent-purple select-none">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Static Cloud (No drifting) */}
        <div className="text-center pt-8 border-t border-white/5">
          <p className="text-xs text-text-secondary font-mono uppercase tracking-wider mb-6">
            Technologies & Tools Stack
          </p>
          <div className="flex flex-wrap justify-center gap-3.5 max-w-5xl mx-auto">
            {techLogoCloud.map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl border border-white/5 bg-card-bg/20 backdrop-blur-sm text-text-secondary hover:border-accent-blue/30 hover:text-white hover:shadow-[0_0_15px_rgba(0,212,255,0.1)] transition-all cursor-default select-none text-xs font-mono font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
