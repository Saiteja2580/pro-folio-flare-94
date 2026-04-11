import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
    {/* Background glow */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

    <div className="container mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-4">
          Full Stack Developer
        </p>
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 glow-text leading-tight">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          4th year CSE Engineer crafting scalable systems with modern web technologies,
          distributed systems expertise, and a passion for performance engineering.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex items-center justify-center gap-4"
      >
        <a href="#projects" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity">
          View Projects
        </a>
        <a href="#contact" className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-heading font-semibold text-sm hover:border-primary/50 transition-colors">
          Get in Touch
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center justify-center gap-5 mt-10"
      >
        {[
          { icon: Github, href: "https://github.com" },
          { icon: Linkedin, href: "https://linkedin.com" },
          { icon: Mail, href: "mailto:you@email.com" },
        ].map(({ icon: Icon, href }) => (
          <a key={href} href={href} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Icon size={20} />
          </a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float"
      >
        <a href="#about">
          <ChevronDown className="text-muted-foreground" size={28} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
