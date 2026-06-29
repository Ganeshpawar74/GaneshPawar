import React, { useState, useEffect, useRef } from "react";
import { X, Send, Bot, User } from "lucide-react";

interface Message {
  role: "ai" | "user";
  text: string;
}

const STARTER_PROMPTS = [
  "What LangGraph projects has Ganesh built?",
  "Is Ganesh a strong GenAI Engineer candidate?",
  "Tell me about HealthVerse AI",
  "What's Ganesh's experience with RAG pipelines?",
  "Can Ganesh join immediately?"
];

// Offline semantic simulation rules
const getLocalResponse = (query: string): string => {
  const q = query.toLowerCase();

  if (q.includes("langgraph") || q.includes("voiceops") || q.includes("voice")) {
    return `Ganesh built **VoiceOps**, an AI-powered voice software installation agent using **LangGraph** & **Mistral AI**.\n\n` +
      `**Key features include:**\n` +
      `• An **8-agent planner pipeline** (Speech, Intent, Planner, Browser, Download, Install, Monitor, Notify).\n` +
      `• Auto-handling of downloads with **SHA-256 integrity verification**.\n` +
      `• Real-time SSE/WebSocket status notifications.\n` +
      `• Deployed using **FastAPI + Docker** with full CI/CD.\n\n` +
      `It converts natural language voice requests into verified host-machine installations with zero human intervention.`;
  }

  if (q.includes("data analyst") || q.includes("bi") || q.includes("analyst") || q.includes("business intelligence")) {
    return `Ganesh designed an **Agentic Data Analyst** system, which is an autonomous BI pipeline powered by **LangChain**, **LangGraph**, and **LangSmith**.\n\n` +
      `**Architecture Details:**\n` +
      `• Orchestrates **8 coordinated LLM agents** (Planner, Analyst, SQL Query Engine, Visualization, Forecasting, Reporting, Evaluator, Feedback loop).\n` +
      `• Automates **NL-to-SQL conversions**, anomalies detection on 50,000+ records, and forecasting (using Prophet/ARIMA).\n` +
      `• Generates stakeholder-ready PDF/HTML executive reports automatically.\n` +
      `• Uses **LangSmith** for LLM tracing & hallucination scoring.`;
  }

  if (q.includes("healthverse") || q.includes("medical") || q.includes("report") || q.includes("healthcare")) {
    return `Ganesh built **HealthVerse AI**, an intelligent medical report analyzer.\n\n` +
      `**System Highlights:**\n` +
      `• Achieved a **93.6% diagnostic classification accuracy** over 5,000+ medical records.\n` +
      `• Blends deep learning image classification (**PyTorch CNN**) with generative retrieval (**ChromaDB RAG + BGE Embeddings**).\n` +
      `• Delivers a **60% reduction in document retrieval latency**.\n` +
      `• Deployed end-to-end via **FastAPI + Streamlit + Docker**, monitored with **LangSmith**.`;
  }

  if (q.includes("rag") || q.includes("vector") || q.includes("embedding") || q.includes("chromadb") || q.includes("qdrant")) {
    return `Ganesh has advanced experience implementing **Retrieval Augmented Generation (RAG)** systems:\n\n` +
      `• **Vector Databases:** Proficient in **ChromaDB**, **Qdrant**, and **FAISS**.\n` +
      `• **Embedding models:** Integrated models like OpenAI \`text-embedding-3-small\` and **BGE-small-en**.\n` +
      `• **Optimizations:** Implemented semantic search, metadata filters, hybrid retrieval, and chunking strategies (RecursiveCharacterTextSplitter) which reduced retrieval latency by 60% in production setups.`;
  }

  if (q.includes("join") || q.includes("immediate") || q.includes("available") || q.includes("hired") || q.includes("hire")) {
    return `Yes! Ganesh Pawar is a **Computer Science Graduate** (class of 2026) available for **Immediate Joining**.\n\n` +
      `He is open to **Full-time AI/ML Engineer** or **GenAI Developer** positions. He is comfortable working **Remote, Hybrid, or relocating** as needed. You can contact him at **ganeshppawar864@gmail.com** or **+91 8767880796**.`;
  }

  if (q.includes("skills") || q.includes("stack") || q.includes("tech") || q.includes("framework")) {
    return `Ganesh's technical skill stack is categorized as follows:\n\n` +
      `• **GenAI & LLMs:** LangChain, LangGraph, RAG Pipelines, Vector DBs (ChromaDB, FAISS, Qdrant), Prompt Engineering, LLMOps (LangSmith), OpenAI/Anthropic APIs.\n` +
      `• **ML & Deep Learning:** PyTorch, TensorFlow, CNNs, Feature Engineering, Regression/Classification, Time-Series (Prophet, ARIMA), Python (Sklearn, Pandas, NumPy).\n` +
      `• **Backend & MLOps:** FastAPI, Docker, GitHub CI/CD, PostgreSQL, Redis, Celery.\n` +
      `• **Data & Analytics:** SQL, Power BI (DAX), ETL Pipeline Development.`;
  }

  if (q.includes("experience") || q.includes("intern") || q.includes("sunitiq") || q.includes("internhack") || q.includes("sama")) {
    return `Ganesh has the following professional experience:\n\n` +
      `1. **Backend Developer Intern (Python) - GenAI & LLM Applications at Sama Digital Foundation** (Jun 2026 – Present):\n` +
      `• Building scalable Python & FastAPI backend applications, integrating third-party APIs and AI/LLM providers.\n` +
      `• Designing databases, writing efficient SQL queries, and constructing backend systems for AI features (chatbots, agents, document workflows).\n\n` +
      `2. **Machine Learning Intern at Sunitiq** (Apr 2026 – Jun 2026):\n` +
      `• Automated feature engineering pipelines and hyperparameter tuning in PyTorch/Scikit-learn, yielding a **40% reduction in manual analysis**.\n` +
      `• Set up experiment tracking, speeding up iteration cycles by **30%**.\n\n` +
      `3. **Data Analytics Intern at InternHack** (Jan 2026 – May 2026):\n` +
      `• Built Python/SQL ETL data pipelines & Power BI dashboards.\n` +
      `• Conducted EDA on 50,000+ transaction records to isolate operational anomalies.`;
  }

  if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("linkedin")) {
    return `Here are Ganesh's direct contact details:\n\n` +
      `• 📧 **Email:** ganeshppawar864@gmail.com\n` +
      `• 📱 **Phone:** +91 8767880796\n` +
      `• 🔗 **LinkedIn:** [Ganesh Pawar](https://www.linkedin.com/in/ganesh-pawar-073950216/)\n` +
      `• 💻 **GitHub:** [Ganeshpawar74](https://github.com/Ganeshpawar74)\n\n` +
      `Feel free to reach out to schedule an interview!`;
  }

  // Default response
  return `I am Ganesh's portfolio AI assistant. I have full knowledge of his projects, skills, work timeline, and achievements.\n\n` +
    `Ask me specific questions like:\n` +
    `• *"Tell me about VoiceOps"* \n` +
    `• *"What is Ganesh's experience with RAG pipelines?"* \n` +
    `• *"Is Ganesh available to join immediately?"* \n\n` +
    `*“I don't bridge the gap between research and deployment — I close it.”*`;
};

export function PortfolioChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", text: "👋 Hi! I'm Ganesh's AI Assistant. Ask me anything about his projects, skills, or professional experience!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    setMessages((m) => [...m, { role: "user", text }]);
    setLoading(true);

    try {
      // 1. Try backend RAG chat endpoint
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: text })
      });

      if (!res.ok) throw new Error("Backend server down");
      const data = await res.json();
      setMessages((m) => [...m, { role: "ai", text: data.response }]);
    } catch (err) {
      // 2. Offline fallback semantic analyzer
      console.log("Chat server not available, executing offline matching pipeline:", err);
      const simulatedResponse = getLocalResponse(text);
      
      // Add simulated thinking latency for realistic flow
      setTimeout(() => {
        setMessages((m) => [...m, { role: "ai", text: simulatedResponse }]);
        setLoading(false);
      }, 700);
      return;
    }
    setLoading(false);
  };

  return (
    <>
      {/* Floating Toggle Button Container */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group">
        {/* Slide-out Tooltip */}
        <div className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out flex items-center">
          <span className="bg-card-bg/95 border border-white/10 text-accent-blue text-xs font-semibold px-4 py-2 rounded-xl shadow-xl whitespace-nowrap uppercase tracking-wider font-mono">
            Ask Ganesh AI 🤖
          </span>
        </div>
        
        <button
          id="chatbot-toggle-btn"
          onClick={() => setOpen(!open)}
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-accent-blue via-accent-purple to-accent-purple text-dark-bg shadow-xl hover:shadow-[0_0_25px_rgba(0,212,255,0.4)] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-115 border border-accent-blue/30 relative"
        >
          {/* Pulsing glow ring around the button */}
          <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-accent-blue to-accent-purple opacity-30 blur-sm group-hover:opacity-60 transition-opacity animate-pulse" />
          <Bot className="w-6 h-6 text-dark-bg relative z-10" />
        </button>
      </div>

      {/* Chat Window Drawer */}
      {open && (
        <div className="fixed bottom-24 right-6 w-[380px] h-[520px] rounded-2xl glass-panel bg-card-bg/95 shadow-2xl flex flex-col overflow-hidden z-50 border-white/10">
          
          {/* Panel Header */}
          <div className="p-4 border-b border-white/5 bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-accent-blue" />
              <div className="text-left">
                <h4 className="text-white text-sm font-semibold">Ganesh's AI Assistant</h4>
                <p className="text-[10px] text-text-secondary font-mono">Hybrid RAG Agent v1.0</p>
              </div>
            </div>
            <button 
              onClick={() => setOpen(false)}
              className="p-1 rounded-full hover:bg-white/5 text-text-secondary hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-left">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex gap-2.5 items-start ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <div className={`p-1.5 rounded-lg shrink-0 ${m.role === "user" ? "bg-accent-purple/10 text-accent-purple" : "bg-accent-blue/10 text-accent-blue"}`}>
                  {m.role === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                </div>

                <div 
                  className={`px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed max-w-[80%] whitespace-pre-line ${
                    m.role === "user" 
                      ? "bg-accent-purple text-white rounded-tr-none" 
                      : "bg-white/5 text-text-primary rounded-tl-none border border-white/5"
                  }`}
                >
                  {parseMarkdown(m.text)}
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex gap-2.5 items-start">
                <div className="p-1.5 rounded-lg shrink-0 bg-accent-blue/10 text-accent-blue">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="px-3.5 py-2.5 rounded-2xl text-xs bg-white/5 text-text-secondary rounded-tl-none border border-white/5 animate-pulse">
                  Querying vector database... 🔮
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Starter prompt chips */}
          {messages.length === 1 && (
            <div className="px-4 pb-3 flex flex-wrap gap-1.5">
              {STARTER_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => sendMessage(prompt)}
                  className="text-[10px] bg-white/5 hover:bg-white/10 text-text-secondary hover:text-white border border-white/5 rounded-full px-2.5 py-1 text-left transition-colors cursor-pointer"
                >
                  💬 {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Form Input */}
          <div className="p-4 border-t border-white/5 bg-[#0a0a0f]/40 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && input.trim()) {
                  sendMessage(input);
                  setInput("");
                }
              }}
              placeholder="Ask about skills, VoiceOps, contact..."
              className="flex-1 bg-white/5 text-white rounded-lg px-3 py-2.5 text-xs outline-none border border-white/5 focus:border-accent-blue transition-colors"
            />
            <button
              onClick={() => {
                if (input.trim()) {
                  sendMessage(input);
                  setInput("");
                }
              }}
              className="p-2.5 rounded-lg bg-accent-blue hover:opacity-90 text-dark-bg transition-opacity cursor-pointer flex items-center justify-center"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      )}
    </>
  );
}

// Lightweight JSX-safe markdown parser for clean UI rendering without external dependencies
const parseLinks = (text: string): (string | React.ReactNode)[] => {
  const parts = text.split(/(\[.*?\]\(.*?\))/g);
  return parts.map((part, index) => {
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      return (
        <a 
          key={index} 
          href={linkMatch[2]} 
          target="_blank" 
          rel="noreferrer" 
          className="text-accent-blue underline hover:text-white transition-colors"
        >
          {linkMatch[1]}
        </a>
      );
    }
    return part;
  });
};

const parseInlineMarkdown = (text: string): (string | React.ReactNode)[] => {
  const boldParts = text.split("**");
  return boldParts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={index} className="font-semibold text-white">{parseLinks(part)}</strong>;
    }
    return parseLinks(part);
  });
};

const parseMarkdown = (text: string): React.ReactNode[] => {
  const lines = text.split("\n");
  return lines.map((line, lineIdx) => {
    const headerMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headerMatch) {
      const level = headerMatch[1].length;
      const textVal = headerMatch[2];
      const parsedText = parseInlineMarkdown(textVal);
      if (level === 1) return <h1 key={lineIdx} className="text-base font-bold text-white mt-3 mb-1">{parsedText}</h1>;
      if (level === 2) return <h2 key={lineIdx} className="text-sm font-bold text-white mt-2.5 mb-1">{parsedText}</h2>;
      return <h3 key={lineIdx} className="text-xs font-bold text-white mt-2 mb-1">{parsedText}</h3>;
    }
    
    const bulletMatch = line.match(/^[\-\*]\s+(.*)$/);
    if (bulletMatch) {
      return (
        <div key={lineIdx} className="pl-4 flex items-start gap-1.5 my-1" style={{ textIndent: 0 }}>
          <span className="text-accent-blue select-none mt-0.5">•</span>
          <span className="flex-1 text-text-primary">{parseInlineMarkdown(bulletMatch[1])}</span>
        </div>
      );
    }
    
    return (
      <p key={lineIdx} className="my-1 min-h-[1em] text-text-primary">
        {parseInlineMarkdown(line)}
      </p>
    );
  });
};
