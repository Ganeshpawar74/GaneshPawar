import { useCounterAnimation } from "../hooks/useCounterAnimation";
import { Cpu, Target, Zap, ShieldAlert, BarChart3, Rocket } from "lucide-react";

export function Metrics() {
  const agents = useCounterAnimation(24, 2000);
  const accuracy = useCounterAnimation(93, 2000);
  const latency = useCounterAnimation(60, 2000);
  const effort = useCounterAnimation(40, 2000);
  const records = useCounterAnimation(50, 2000); // represents 50,000
  const systems = useCounterAnimation(3, 2000);

  const stats = [
    { hook: agents, suffix: "+", label: "LLM Agents Shipped", desc: "LangGraph autonomous networks", icon: Cpu, color: "text-accent-blue" },
    { hook: accuracy, suffix: ".6%", label: "Diagnostic Accuracy", desc: "RAG + CNN medical models", icon: Target, color: "text-accent-green" },
    { hook: latency, suffix: "%", label: "Latency Reduction", desc: "ChromaDB vector optimizations", icon: Zap, color: "text-amber-400" },
    { hook: effort, suffix: "%", label: "Manual Effort Saved", desc: "Automated regression pipelines", icon: ShieldAlert, color: "text-accent-purple" },
    { hook: records, suffix: "k+", label: "Records Consolidated", desc: "Validated BI anomaly sets", icon: BarChart3, color: "text-rose-400" },
    { hook: systems, suffix: "", label: "Prod AI Systems", desc: "Coordinated systems shipped", icon: Rocket, color: "text-emerald-400" }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-card-bg/25 border-y border-white/5">
      <div className="absolute inset-0 grid-bg-overlay opacity-15 pointer-events-none" />
      
      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
            📊 Quantified ML/AI Impact
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mt-4" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                ref={stat.hook.elementRef as any}
                className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center hover:border-white/10 transition-colors"
              >
                <div className={`p-3 rounded-xl bg-white/5 ${stat.color} mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>

                <span className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
                  {stat.hook.count}{stat.suffix}
                </span>

                <span className="text-sm font-semibold text-white mt-2 block font-display">
                  {stat.label}
                </span>
                
                <span className="text-xs text-text-secondary mt-1 block">
                  {stat.desc}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
