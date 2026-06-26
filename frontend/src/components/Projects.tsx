import { useState } from "react";
import { projects, type Project } from "../data/projects";
import { ProjectModal } from "./ProjectModal";
import { useGitHubStats } from "../hooks/useGitHubStats";
import { Star, GitFork, ArrowUpRight, FolderGit2 } from "lucide-react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Collect repo slugs for live API updates
  const repoNames = projects.map(p => {
    const parts = p.github.split("/");
    return parts[parts.length - 1] || "";
  });

  const { stats: gitStats } = useGitHubStats(repoNames);

  // Divide into featured and normal grid
  const featuredProjects = projects.filter(p => p.isFeatured);
  const otherProjects = projects.filter(p => !p.isFeatured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Decorative glow overlays */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight flex items-center justify-center gap-3">
            <FolderGit2 className="w-8 h-8 md:w-10 md:h-10 text-accent-blue" />
            <span>Production AI Case Studies</span>
          </h2>
          <p className="font-sans text-text-secondary text-sm mt-3 font-mono uppercase tracking-wider">
            Deep architecture and quantifiable business impact
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mt-4" />
        </div>

        {/* Featured Projects Grid (2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 text-left">
          {featuredProjects.map((project) => {
            const repoSlug = project.github.split("/").pop()?.toLowerCase() || "";
            const liveStats = gitStats[repoSlug];

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="glass-panel glass-panel-hover p-6 rounded-2xl cursor-pointer pulse-border flex flex-col justify-between hover:border-accent-blue/30 transition-all duration-300 h-full min-h-[380px]"
              >
                {/* Visual Info Block */}
                <div className="space-y-4 w-full">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-[10px] font-semibold text-accent-blue font-mono tracking-wider">
                      🏆 FEATURED CASE STUDY
                    </span>
                    
                    {/* Live GitHub Stats badge */}
                    {liveStats && (
                      <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-[10px] text-text-secondary font-mono">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> {liveStats.stars}
                        <span className="text-white/20">|</span>
                        <GitFork className="w-3 h-3" /> {liveStats.forks}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-xl text-white tracking-tight group-hover:text-accent-blue transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-sans text-text-secondary text-xs leading-relaxed">
                    <strong className="text-white">Problem:</strong> "{project.problem.length > 130 ? project.problem.slice(0, 130) + "..." : project.problem}"
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 5).map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] text-text-secondary font-mono">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 5 && (
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] text-text-secondary font-mono">
                        +{project.tags.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Performance Metric summary box at the bottom */}
                <div className="w-full mt-4 p-4 rounded-xl bg-white/2 border border-white/5 flex flex-col justify-between min-h-[100px] shrink-0">
                  <div className="space-y-1">
                    <p className="text-[9px] text-text-secondary font-mono uppercase tracking-wider border-b border-white/5 pb-1">Impact Highlight</p>
                    <p className="text-xs font-semibold text-white leading-normal">
                      "{project.impact.length > 90 ? project.impact.slice(0, 90) + "..." : project.impact}"
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-accent-blue hover:text-white transition-colors mt-3">
                    Explore Architecture & Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small/Other Projects Grid Header */}
        {otherProjects.length > 0 && (
          <div className="text-left mb-8">
            <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
              <FolderGit2 className="w-5 h-5 text-accent-blue" />
              Additional Systems & Analysis
            </h3>
          </div>
        )}

        {/* Small Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-panel glass-panel-hover p-6 rounded-xl cursor-pointer hover:border-accent-purple/30 transition-all flex flex-col justify-between min-h-[220px]"
            >
              <div className="space-y-4">
                <span className="inline-block px-2.5 py-1 rounded-md bg-white/5 text-xs text-text-secondary font-mono font-medium">
                  {project.badge}
                </span>

                <h4 className="font-display font-bold text-lg text-white">
                  {project.title}
                </h4>

                <p className="text-xs text-text-secondary leading-relaxed">
                  {project.problem}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] text-text-secondary font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs font-semibold text-accent-purple hover:text-white transition-colors mt-6">
                View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Project Expanded Modal Overlay */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
