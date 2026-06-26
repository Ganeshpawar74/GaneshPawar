import { X, ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Check if it is HealthVerse to display the accuracy gauge
  const isHealthVerse = project.id === "healthverse";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0a0f]/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl border border-white/10 bg-card-bg/95 shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full border border-white/5 hover:border-white/20 bg-white/5 text-text-secondary hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs font-semibold text-accent-blue uppercase tracking-wider mb-3">
            {project.badge}
          </span>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white leading-tight">
            {project.title}
          </h3>
        </div>

        {/* Tech Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-text-secondary font-mono font-medium">
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Problem, Architecture, Impact */}
          <div className="lg:col-span-8 space-y-6 text-left">
            {/* Problem Statement */}
            <div className="p-5 rounded-xl border border-white/5 bg-white/2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-accent-purple mb-2">🎯 Problem Statement</h4>
              <p className="text-sm font-medium text-white italic leading-relaxed">
                "{project.problem}"
              </p>
            </div>

            {/* Architecture Node Visualizer */}
            {project.architecture && project.architecture.length > 0 && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-4">⚙️ Solution Architecture Flow</h4>
                
                {/* Responsive Node pipeline */}
                <div className="flex flex-wrap items-center gap-3 p-4 rounded-xl border border-white/5 bg-[#0a0a0f]/50">
                  {project.architecture.map((node, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="px-3 py-1.5 rounded-lg border border-accent-purple/30 bg-accent-purple/5 text-xs font-mono font-semibold text-accent-purple">
                        {node}
                      </div>
                      {index < (project.architecture?.length ?? 0) - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-text-secondary animate-pulse" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Impact */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-accent-green mb-2">📈 Real-world Impact</h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {project.impact}
              </p>
            </div>
          </div>

          {/* Right Column: Gauges & Metrics */}
          <div className="lg:col-span-4 space-y-6 text-left">
            {/* Accuracy gauge */}
            {isHealthVerse && (
              <div className="p-5 rounded-xl border border-white/5 bg-white/2 text-center">
                <h4 className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-4">Diagnostic Accuracy</h4>
                
                {/* Custom circular progress gauge */}
                <div className="relative w-36 h-36 mx-auto flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="72" cy="72" r="60" className="stroke-white/5 fill-transparent" strokeWidth="8" />
                    <circle 
                      cx="72" 
                      cy="72" 
                      r="60" 
                      className="stroke-accent-green fill-transparent transition-all duration-1000" 
                      strokeWidth="8" 
                      strokeDasharray={376.8}
                      strokeDashoffset={376.8 * (1 - 93.6 / 100)}
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="font-display font-bold text-2xl text-white">93.6%</span>
                    <span className="text-[10px] text-text-secondary font-mono uppercase tracking-widest">Accuracy</span>
                  </div>
                </div>
              </div>
            )}

            {/* General Metrics Progress bars */}
            <div className="p-5 rounded-xl border border-white/5 bg-white/2 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-text-secondary border-b border-white/5 pb-2">📊 Performance Metrics</h4>
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-text-secondary">{metric.label}</span>
                    <span className="text-white">{metric.value}</span>
                  </div>
                  {metric.progress !== undefined && (
                    <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-purple" 
                        style={{ width: `${metric.progress}%` }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Links Block */}
            <div className="flex flex-col gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all"
              >
                <FaGithub className="w-4 h-4" /> View GitHub Repository
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-dark-bg font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90"
                >
                  <ExternalLink className="w-4 h-4" /> Launch Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
