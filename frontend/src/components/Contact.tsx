import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import confetti from "canvas-confetti";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormData({ name: "", email: "", company: "", message: "" });
      
      // Trigger canvas-confetti for a visual wow factor!
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#00d4ff", "#7c3aed", "#10b981"]
      });

      // Clear success notification
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-card-bg/10 border-t border-white/5">
      {/* Decorative top grid */}
      <div className="absolute inset-0 grid-bg-overlay opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight flex items-center justify-center gap-3">
            <Mail className="w-8 h-8 md:w-10 md:h-10 text-accent-blue" />
            <span>Get In Touch</span>
          </h2>
          <p className="font-sans text-text-secondary text-sm mt-3 font-mono uppercase tracking-wider">
            Open to immediate full-time roles & advanced collaborations
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Coordinates / Mumbai Glow Info */}
          <div className="lg:col-span-5 text-left space-y-8">
            <h3 className="font-display font-bold text-2xl text-white">
              Let's build something significant.
            </h3>
            
            <p className="text-text-secondary text-sm leading-relaxed">
              Have a role that requires actual AI pipelines rather than just wrappers? Or looking to implement complex LLM agents? Let's talk.
            </p>

            <div className="space-y-4">
              <a href="mailto:ganeshppawar864@gmail.com" className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-card-bg/20 hover:border-accent-blue/30 transition-all text-text-secondary hover:text-white">
                <div className="p-2.5 rounded-lg bg-white/5 text-accent-blue">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider">Direct Email</p>
                  <p className="text-sm font-semibold mt-0.5">ganeshppawar864@gmail.com</p>
                </div>
              </a>

              <a href="tel:+918767880796" className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-card-bg/20 hover:border-accent-blue/30 transition-all text-text-secondary hover:text-white">
                <div className="p-2.5 rounded-lg bg-white/5 text-accent-purple">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider">Contact Number</p>
                  <p className="text-sm font-semibold mt-0.5">+91 8767880796</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-card-bg/20 text-text-secondary">
                <div className="p-2.5 rounded-lg bg-white/5 text-accent-green relative">
                  <MapPin className="w-5 h-5 animate-bounce" />
                  {/* Ping animation indicator */}
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-accent-green rounded-full animate-ping" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider">Location / Coordinate</p>
                  <p className="text-sm font-semibold mt-0.5">Mumbai, India</p>
                </div>
              </div>
            </div>

            {/* Social channels shortcut */}
            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com/Ganeshpawar74" target="_blank" rel="noreferrer" className="p-3 rounded-lg border border-white/5 bg-card-bg/20 text-text-secondary hover:text-white hover:border-white/10 transition-all">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/ganesh-pawar-073950216/" target="_blank" rel="noreferrer" className="p-3 rounded-lg border border-white/5 bg-card-bg/20 text-text-secondary hover:text-white hover:border-white/10 transition-all">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Query Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 bg-card-bg/30 text-left space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-text-secondary">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 text-white rounded-lg px-4 py-3 text-sm outline-none border border-white/5 focus:border-accent-blue transition-colors"
                    placeholder="Enter name"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-text-secondary">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 text-white rounded-lg px-4 py-3 text-sm outline-none border border-white/5 focus:border-accent-blue transition-colors"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-text-secondary">Company / Role</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-white/5 text-white rounded-lg px-4 py-3 text-sm outline-none border border-white/5 focus:border-accent-blue transition-colors"
                  placeholder="e.g. Acme Corp / Technical Lead"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-text-secondary">Your Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 text-white rounded-lg px-4 py-3 text-sm outline-none border border-white/5 focus:border-accent-blue transition-colors resize-none"
                  placeholder="Write your proposal or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-dark-bg font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Securing Connections... 📡</span>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {success && (
                <div className="p-4 rounded-lg bg-accent-green/10 border border-accent-green/20 text-accent-green text-xs font-semibold text-center animate-pulse mt-4">
                  🚀 Message dispatched successfully! Sparking connection details...
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
