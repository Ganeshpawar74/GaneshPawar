import { experiences } from "../data/experience";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background radial overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight flex items-center justify-center gap-3">
            <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-accent-blue" />
            <span>Work History & Timeline</span>
          </h2>
          <p className="font-sans text-text-secondary text-sm mt-3 font-mono uppercase tracking-wider">
            Hands-on machine learning implementation and metrics deliverables
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mt-4" />
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12 text-left">
          {experiences.map((exp) => {
            const Icon = exp.type === "work" ? Briefcase : GraduationCap;
            
            return (
              <div key={exp.id} className="relative pl-8 md:pl-10 group">
                
                {/* Timeline Bullet Node */}
                <div className={`absolute -left-[17px] md:-left-[21px] top-1.5 w-8 h-8 rounded-full flex items-center justify-center border z-10 transition-colors duration-300 ${
                  exp.isCurrent 
                    ? "bg-dark-bg border-accent-green text-accent-green" 
                    : "bg-card-bg border-white/10 text-text-secondary group-hover:border-accent-purple group-hover:text-accent-purple"
                }`}>
                  <Icon className="w-4 h-4" />
                </div>

                {/* Body Card */}
                <div className="glass-panel p-6 rounded-2xl relative transition-all duration-300 hover:border-white/10 bg-card-bg/30 hover:bg-card-bg/50">
                  
                  {/* Header info */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display font-bold text-xl text-white">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent-green/10 border border-accent-green/20 text-[10px] font-bold text-accent-green uppercase font-mono tracking-widest animate-pulse">
                            🟢 CURRENT
                          </span>
                        )}
                      </div>
                      
                      <p className="text-sm font-semibold text-accent-blue mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col md:items-end text-xs font-mono text-text-secondary gap-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 mb-6">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-sm text-text-secondary leading-relaxed flex items-start gap-2">
                        <span className="text-accent-purple mt-1.5 select-none">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Impact Tags list */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {exp.impactTags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] text-white font-mono font-semibold"
                      >
                        ⚡ {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
