import { Award, ShieldCheck, Flame, Cpu } from "lucide-react";

export function Certifications() {
  const credentials = [
    {
      title: "Data Science, ML, Deep Learning & NLP",
      issuer: "Udemy | Instruction by Krish Naik",
      desc: "In-depth expertise across statistical ML, EDA, supervised/unsupervised algorithms, deep neural architectures, and natural language text processing pipelines.",
      icon: Award,
      color: "text-accent-blue"
    },
    {
      title: "3 Production-Grade AI Systems Shipped",
      issuer: "Autonomous BI, RAG Orch, VoiceOps",
      desc: "Engineered and deployed complex multi-agent setups featuring active LLMOps tracing (LangSmith), semantic vector mapping, and real-time WebSocket messaging.",
      icon: Cpu,
      color: "text-accent-purple"
    },
    {
      title: "93.6% Diagnostic Accuracy",
      issuer: "Clinical Report RAG & CNN Classifier",
      desc: "Demonstrated reliability on real-world medical image sets, combining deep learning CNN diagnostics with generative report retrieval.",
      icon: ShieldCheck,
      color: "text-accent-green"
    },
    {
      title: "Quantifiable Latency & Manual Reductions",
      issuer: "60% Latency & 40% Effort Optimizations",
      desc: "Optimized retrieval mechanics, cache layering, and feature scaling, driving direct reductions in stakeholder reporting time and system response times.",
      icon: Flame,
      color: "text-amber-400"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0a0a0f] to-[#0a0a0f]">
      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight flex items-center justify-center gap-3">
            <Award className="w-8 h-8 md:w-10 md:h-10 text-accent-blue" />
            <span>Certifications & Milestones</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mt-4" />
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto text-left">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <div 
                key={idx} 
                className="glass-panel p-6 rounded-2xl flex gap-5 hover:border-white/10 transition-colors bg-card-bg/20 backdrop-blur-md"
              >
                <div className={`p-3 h-fit rounded-xl bg-white/5 ${cred.color} shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-white">
                    {cred.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-accent-blue uppercase tracking-wider">
                    {cred.issuer}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed pt-1">
                    {cred.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
