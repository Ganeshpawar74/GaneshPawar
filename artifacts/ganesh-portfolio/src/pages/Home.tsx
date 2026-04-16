import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { personalInfo, projects, skills, certifications } from "@/data/portfolio";
import { Github, Linkedin, Mail, Download, ChevronRight, Code2, Database, TerminalSquare, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const categories = ["All", "Data Analytics", "Machine Learning", "AI Automation"];
export default function Home() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const activeRole = personalInfo.roles[roleIndex % personalInfo.roles.length];
    if (typedRole.length < activeRole.length) {
      const timeout = window.setTimeout(() => {
        setTypedRole(activeRole.slice(0, typedRole.length + 1));
      }, 70);
      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      setTypedRole("");
      setRoleIndex((current) => (current + 1) % personalInfo.roles.length);
    }, 1400);
    return () => window.clearTimeout(timeout);
  }, [roleIndex, typedRole]);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory = filter === "All" || project.category === filter;
      const searchable = [
        project.title,
        project.description,
        project.category,
        ...project.techStack,
      ].join(" ").toLowerCase();
      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [filter, query]);

  const sendContact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a recruiter"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-background">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 glass-panel border-b-0 border-x-0 border-t-0 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="font-heading font-bold text-xl tracking-tighter">
            GP<span className="text-primary">.</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild size="sm" className="hidden md:flex rounded-full px-6">
              <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer">
                Resume <Download className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        
        {/* Hero Section */}
        <section className="py-20 md:py-28 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-6 px-3 py-1 text-sm border-primary/30 text-primary bg-primary/5 rounded-full">
                <BrainCircuit className="w-4 h-4 mr-2" />
                {personalInfo.role}
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hi, I'm {personalInfo.name}.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                {personalInfo.tagline.split('&')[0]} &<br/>
                {personalInfo.tagline.split('&')[1]}
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl font-mono text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              &gt; Current role: <span className="text-primary">{typedRole}</span><span className="animate-pulse">_</span><br/>
              &gt; Initializing datastore...<br/>
              &gt; Loading ML models...<br/>
              &gt; Status: Ready for impact.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" className="rounded-full px-8 gap-2 glow-effect" asChild>
                <a href="#projects">View Projects <ChevronRight className="w-4 h-4" /></a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 gap-2" asChild>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 gap-2" asChild>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="relative hidden lg:block min-h-[460px]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div className="absolute inset-0 rounded-[2rem] border border-primary/20 bg-card/30 backdrop-blur-xl shadow-2xl shadow-primary/10 overflow-hidden">
              <motion.div
                className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl"
                animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.8, 0.45] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-8 rounded-[1.5rem] border border-border/50 bg-background/50 p-6">
                <div className="flex items-center justify-between text-sm font-mono text-muted-foreground">
                  <span>ai-workflow.ts</span>
                  <span className="text-primary">online</span>
                </div>
                <div className="mt-8 space-y-4 font-mono text-sm">
                  <div className="rounded-xl border border-border/60 bg-card/60 p-4">
                    <span className="text-primary">01</span> Understand the business problem
                  </div>
                  <div className="rounded-xl border border-border/60 bg-card/60 p-4">
                    <span className="text-primary">02</span> Analyze data and find patterns
                  </div>
                  <div className="rounded-xl border border-border/60 bg-card/60 p-4">
                    <span className="text-primary">03</span> Use AI to research, automate and improve
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About & Skills Section */}
        <section id="about" className="py-20 border-t border-border/40">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6 flex items-center gap-3">
                <TerminalSquare className="text-primary w-8 h-8" />
                About Me
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                {personalInfo.about}
              </p>
              
              <h3 className="text-xl font-bold font-heading mb-4 flex items-center gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">Certifications</Badge>
              </h3>
              <ul className="space-y-4">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex flex-col p-4 rounded-xl border border-border/50 bg-card/50">
                    <span className="font-semibold text-foreground">{cert.title}</span>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <span>{cert.issuer}</span>
                      <span>•</span>
                      <span>{cert.date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div id="skills">
              <h2 className="text-3xl font-bold font-heading mb-6 flex items-center gap-3">
                <Code2 className="text-primary w-8 h-8" />
                Technical Stack
              </h2>
              <div className="rounded-2xl border border-border/50 bg-card/30 p-5">
                <p className="text-sm text-muted-foreground mb-5">
                  Tools I use to turn raw data, ideas, and AI workflows into practical solutions.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="group rounded-xl border border-border/50 bg-background/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/10"
                  >
                    <span className="block text-base font-semibold text-foreground">{skill.name}</span>
                    <span className="mt-1 block text-xs font-mono text-primary/80">{skill.group}</span>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-border/40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-4 flex items-center gap-3">
                <Database className="text-primary w-8 h-8" />
                Featured Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                A selection of my recent work in data analytics, machine learning models, and automated AI systems.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 md:items-end">
              <Input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search projects, tools, impact..."
                className="w-full md:w-80 bg-background/50"
              />
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <Button 
                    key={cat} 
                    variant={filter === cat ? "default" : "outline"}
                    size="sm"
                    className="rounded-full"
                    onClick={() => setFilter(cat)}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full flex flex-col bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors group">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                          {project.category}
                        </Badge>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                      <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardContent>
                    <CardFooter className="pt-4 border-t border-border/30">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map(tech => (
                          <span key={tech} className="font-mono text-xs px-2 py-1 bg-secondary rounded text-secondary-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 border-t border-border/40 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-heading mb-4">Let's Build Something</h2>
          <p className="text-muted-foreground mb-10">
            Currently open for new opportunities in AI & Data Engineering. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <Card className="p-6 text-left border-border/50 bg-card/30">
            <form className="space-y-4" onSubmit={sendContact}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                    placeholder="John Doe"
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                    placeholder="john@example.com"
                    className="bg-background/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                  placeholder="Hello Ganesh, I'd like to discuss..."
                  className="min-h-[120px] bg-background/50"
                />
              </div>
              <Button type="submit" className="w-full">
                <Mail className="w-4 h-4 mr-2" /> Send Message
              </Button>
            </form>
          </Card>
        </section>

      </main>

      <footer className="border-t border-border/40 py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} {personalInfo.name}. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}
