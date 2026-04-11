import { motion } from "framer-motion";
import socialLinks from "./SocialIcons";
import { ChevronDown } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
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
          Hi, I'm <span className="text-primary">Sai Teja Karanam</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Final-year CSE student at SCSVMV University with expertise in full-stack development,
          Angular, Next.js, React, Node.js, and AWS. Building robust web applications
          and designing intuitive user experiences.
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
