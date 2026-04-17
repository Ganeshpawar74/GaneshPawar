import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { personalInfo, projects, skills, certifications } from "@/data/portfolio";
import { Github, Linkedin, Mail, Download, ChevronRight, Code2, Database, TerminalSquare, BrainCircuit, MapPin, Send, CheckCircle2, Instagram, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const categories = ["All", "Data Analytics", "Machine Learning", "AI Automation"];
const isUsableLink = (link?: string) => Boolean(link && link !== "#" && !link.includes("placeholder"));

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

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

  const groupedSkills = useMemo(() => {
    return skills.reduce<Record<string, { name: string; group: string }[]>>((grouped, skill) => {
      if (!grouped[skill.group]) grouped[skill.group] = [];
      grouped[skill.group].push(skill);
      return grouped;
    }, {});
  }, [skills]);

  const sendContact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({
        title: "Please complete the form",
        description: "Add your name, email, and message before sending.",
        variant: "destructive",
      });
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a recruiter"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    toast({
      title: "Opening email draft",
      description: "Your message is ready to send from your email app.",
    });
    window.setTimeout(() => {
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
      setForm({ name: "", email: "", message: "" });
    }, 250);
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
          <button
            type="button"
            className="md:hidden p-2 rounded-full border border-border/50 bg-background/70 hover:bg-background transition"
            onClick={() => setMobileNavOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
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
          {mobileNavOpen ? (
            <div className="absolute left-0 right-0 top-full z-40 border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
              <div className="flex flex-col gap-3 px-4 py-4">
                <a href="#about" className="text-sm font-medium text-foreground py-3 rounded-xl hover:bg-primary/10 transition" onClick={() => setMobileNavOpen(false)}>
                  About
                </a>
                <a href="#skills" className="text-sm font-medium text-foreground py-3 rounded-xl hover:bg-primary/10 transition" onClick={() => setMobileNavOpen(false)}>
                  Skills
                </a>
                <a href="#projects" className="text-sm font-medium text-foreground py-3 rounded-xl hover:bg-primary/10 transition" onClick={() => setMobileNavOpen(false)}>
                  Projects
                </a>
                <a href="#contact" className="text-sm font-medium text-foreground py-3 rounded-xl hover:bg-primary/10 transition" onClick={() => setMobileNavOpen(false)}>
                  Contact
                </a>
                <Button asChild size="sm" className="rounded-full px-6 w-full">
                  <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" onClick={() => setMobileNavOpen(false)}>
                    Resume <Download className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 pt-14 pb-16">
        
        {/* Hero Section */}
        <section className="py-6 md:py-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="max-w-3xl sm:max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-5 px-3 py-1 text-xs sm:text-sm border-primary/30 text-primary bg-primary/5 rounded-full">
                <BrainCircuit className="w-4 h-4 mr-2" />
                {personalInfo.role}
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-6xl font-bold font-heading leading-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hi, I'm {personalInfo.name}.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 block">
                Turning Data into<br/>
                Decisions & AI<br/>
                into Impact
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-sm sm:text-base md:text-xl text-muted-foreground mb-6 max-w-full sm:max-w-2xl font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              &gt; Current role: <span className="text-primary">{typedRole}</span><span className="animate-pulse">_</span><br/>
              &gt; Building AI solutions grounded in business outcomes.<br/>
              &gt; Turning data into decision-ready systems.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" className="w-full sm:w-auto rounded-full px-6 gap-2 glow-effect" asChild>
                <a href="#projects">View Projects <ChevronRight className="w-4 h-4" /></a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-6 gap-2" asChild>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-6 gap-2" asChild>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </Button>
              <Button size="lg" className="w-full sm:w-auto rounded-full px-6 gap-2 glow-effect" asChild>
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail className="w-4 h-4" /> Hire Me
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
              {personalInfo.about.split(/\n\s*\n/).map((paragraph, idx) => (
                <p key={idx} className="text-muted-foreground leading-relaxed text-lg mb-6">
                  {paragraph}
                </p>
              ))}

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
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {Object.entries(groupedSkills).map(([group, groupSkills]) => (
                    <div key={group} className="rounded-2xl border border-border/50 bg-background/60 p-4">
                      <h4 className="text-base font-semibold mb-3">{group}</h4>
                      <div className="grid gap-3">
                        {groupSkills.map((skill) => (
                          <div key={skill.name} className="w-full rounded-xl border border-border/60 bg-card/10 px-4 py-3 text-sm font-medium text-foreground">
                            {skill.name}
                          </div>
                        ))}
                      </div>
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
                    <CardHeader className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="text-[11px] uppercase tracking-[0.2em] text-primary bg-primary/10 rounded-full px-3 py-1">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                        {isUsableLink(project.github) ? (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label={`${project.title} GitHub repository`}>
                            <Github className="w-5 h-5" />
                          </a>
                        ) : (
                          <span className="text-muted-foreground/40" title="GitHub link can be added later">
                            <Github className="w-5 h-5" />
                          </span>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardContent>
                    <CardFooter className="mt-auto pt-5 border-t border-border/30">
                      {project.impact ? (
                        <div className="rounded-2xl border border-border/60 bg-primary/10 px-4 py-3 text-sm text-primary w-full">
                          {project.impact}
                        </div>
                      ) : null}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {filteredProjects.length === 0 && (
            <div className="rounded-2xl border border-border/50 bg-card/30 p-8 text-center text-muted-foreground">
              No matching projects found. Try a different search or category.
            </div>
          )}
        </section>

        <section id="why" className="py-24 border-t border-border/40">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                Why Hire Me?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                I build more than models; I deliver solutions that connect data, AI, and automation to real business goals. My focus is on measurable value, reliable systems, and continuous improvement.
              </p>
              <div className="grid gap-4">
                <div className="rounded-2xl border border-border/50 bg-card/30 p-5">
                  <h3 className="text-lg font-semibold mb-2">Outcome-first mindset</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I prioritize business impact and build models that are interpretable, scalable, and useful for stakeholders.
                  </p>
                </div>
                <div className="rounded-2xl border border-border/50 bg-card/30 p-5">
                  <h3 className="text-lg font-semibold mb-2">Data-to-decision workflow</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    From data collection and analysis to predictive modeling and automation, I deliver end-to-end solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                "Strong problem-solving mindset with data-first thinking",
                "Data → Insight → Decision → Automation approach",
                "Focus on real-world business impact, not just academic metrics",
                "AI + Automation integration mindset",
                "End-to-end project delivery experience",
              ].map((item, index) => (
                <div key={index} className="rounded-2xl border border-border/50 bg-card/30 p-5 flex items-center gap-4">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 border-t border-border/40">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-stretch">
            <Card className="border-border/50 bg-card/30 p-6 overflow-hidden relative">
              <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-primary/15 blur-3xl" />
              <div className="relative">
                <Badge variant="outline" className="mb-5 border-primary/30 text-primary bg-primary/5">
                  Available for opportunities
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Let's Build Something Useful</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Open to data analytics, AI/ML, automation, and internship or entry-level roles where I can solve real business problems with data and AI.
                </p>

                <div className="grid gap-3">
                  <a href={`mailto:${personalInfo.email}`} className="rounded-xl border border-border/50 bg-background/40 p-4 flex items-center gap-3 hover:border-primary/50 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>{personalInfo.email}</span>
                  </a>
                  <div className="rounded-xl border border-border/50 bg-background/40 p-4 flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="rounded-xl justify-start" asChild>
                      <a href={isUsableLink(personalInfo.github) ? personalInfo.github : "#projects"} target={isUsableLink(personalInfo.github) ? "_blank" : undefined} rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" /> GitHub
                      </a>
                    </Button>
                    <Button variant="outline" className="rounded-xl justify-start" asChild>
                      <a href={isUsableLink(personalInfo.linkedin) ? personalInfo.linkedin : "#contact"} target={isUsableLink(personalInfo.linkedin) ? "_blank" : undefined} rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/10 p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      I use AI to speed up research and iteration, but I verify outputs with data, logic, and business context.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

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
                    required
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
                    required
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
                  required
                />
              </div>
              <Button type="submit" className="w-full gap-2">
                <Send className="w-4 h-4" /> Send Message
              </Button>
            </form>
          </Card>
          </div>
        </section>

      </main>

      <footer className="border-t border-border/40 py-4">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center gap-3">
          <div className="flex items-center justify-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              title="Email"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/50 bg-background/80 text-muted-foreground hover:text-foreground transition"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/50 bg-background/80 text-muted-foreground hover:text-foreground transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/50 bg-background/80 text-muted-foreground hover:text-foreground transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/50 bg-background/80 text-muted-foreground hover:text-foreground transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground/70">© {new Date().getFullYear()} {personalInfo.name}</p>
        </div>
      </footer>
    </div>
  );
}
